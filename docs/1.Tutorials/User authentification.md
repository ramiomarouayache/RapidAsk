---
slug: /tutorials/auth
title: 🔒 Auth/ trial counter
sidebar_position: 5
---


# **Auth and Trial Count Setup**

### 1. **Replace Firebase Linking in FlutterFlow**

- **Remove Existing Firebase Link**: Go to your **FlutterFlow project settings** and disconnect the existing Firebase project.
  
- **Link Your Own Firebase Project**:
  - Use the **auto setup wizard** in FlutterFlow, or manually create a Firebase project in the Firebase Console.
  - In the **Firebase Console**: Go to **Project Settings** > **Users & Permissions** and add `firebase@flutterflow.com` as an editor. This will allow FlutterFlow to easily access your Firebase project.
  - In the Firebase console, add your authentication provider (e.g., email/password, Google Auth, Apple Auth). You can find a guide for this [here].

### 2. **Set Up Firestore Collection for Users**

Once you link Firebase, ensure the `users` collection exists in Firestore and has the correct fields (remove unnecessary fields based on your needs):

- Add `trialCount` as an integer field in the `users` collection (if it doesn't already exist).

### 3. **Firestore Rules**

Ensure your Firestore rules are set correctly to manage user data and authentication. Here’s an example:

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

For better security, these rules will be updated later during deployment when Cloud Functions are used.

### 4. **Setup Trial Count**

There are two main places where you will manage the `trialCount`:

#### 1. **On User Signup**:
   When a new user signs up (via Firebase Authentication or third-party auth like Google/Apple), do the following:
   - Create a new `user` document in Firestore.
   - Set the initial `trialCount` to the desired value (e.g., 10).

#### 2. **On Main Feature Usage** (e.g., Voice Recording):
   - Each time the user interacts with the core features (like recording), decrement the `trialCount`.
   - Add an action to check if the `trialCount` is above 0 before allowing the action (e.g., voice response).

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