---
slug: /tutorials/auth
title: 🔒 Auth/ trial counter
sidebar_position: 5
---


### 1. **Firebase auth**

- **Remove Existing Firebase Link**:  
  In your FlutterFlow project settings, disconnect any existing Firebase project (default project)

- **Link Your Own Firebase Project**:  
  - Use the `auto setup wizard` in FlutterFlow, or create a Firebase project manually in the Firebase Console.  
  - In Firebase Console, go to `Project Settings` > `Users & Permissions` and add `firebase@flutterflow.com` as an editor.  
  - Add your authentication provider (e.g., email/password, Google, Apple). You can follow the setup guide [here].

### 2. **Trial Counter**

- Ensure you have a `users` collection in Firestore with the necessary fields.  
- Add a `trialCount` field (integer) to the `users` collection.

- **Configure Firestore Rules**

  Here’s an example of Firestore rules to manage user data:

  ```plaintext
  rules_version = '2';
  service cloud.firestore {
    match /databases/{database}/documents {
      match /users/{document} {
        allow create: if request.auth != null;
        allow read: if request.auth != null;
        allow write: if request.auth != null;
        allow delete: if false;
      }
    }
  }
  ```

  > **Note:** These rules will be updated later during deployment when Cloud Functions are used for better security.

### 3. **Manage Trial Counter**

There are two key points to manage the `trialCount`:

- **On User Signup**:  
  When a user signs up (via Firebase Auth or third-party like Google/Apple), create a new `user` document in Firestore and set the initial `trialCount` (e.g., 10).

- **On Feature Usage**:  
  Each time the user interacts with the core features (e.g., voice recording), decrement the `trialCount`.  
  - Add an action to check if `trialCount` is above 0 before allowing further actions (e.g., voice response).
  
> **Note:** We always recommend moving the management of sensitive fields, like trialCounter, to a backend or BaaS to reduce vulnerabilities.


---

<details>
  <summary>Recommendations</summary>
  
For enhanced security, initialize the `trialCount` field using Firebase Cloud Functions or your own backend.

**Example Firebase Cloud Function**:

  ```javascript
  const functions = require('firebase-functions');
  const admin = require('firebase-admin');
  admin.initializeApp();

  // Listen for new signups & initialize
  exports.initializeTrialCount = functions.auth.user().onCreate(async (user) => {
    const userRef = admin.firestore().collection('users').doc(user.uid);
    await userRef.set({ trialCount: 10 }, { merge: true });
  });
  ```

After this, prevent client-side updates to `trialCount` by setting a decrement-only rule, like this:

  ```javascript
  rules_version = '2'; 
  service cloud.firestore {
    match /databases/{database}/documents {
      match /users/{userId} {
        // Allow authenticated users to read the user document
        allow read: if request.auth != null;

        // Allow Cloud Functions to create the document, but only with the trialCount field
        allow create: if request.auth != null && request.resource.data.keys().hasOnly(['trialCount']);

        // Allow authenticated users to update trialCount, but ensure it's only decremented
        allow update: if request.auth != null
                      && request.auth.uid == userId
                      && request.resource.data.keys().hasOnly(['trialCount'])
                      && request.resource.data.trialCount <= resource.data.trialCount;

        // Prevent anyone from writing arbitrary data to the document
        allow write: if false;

        // Prevent document deletion
        allow delete: if false;
      }
    }
  }
  ```
</details>