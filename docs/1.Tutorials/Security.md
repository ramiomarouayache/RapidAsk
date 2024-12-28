---
slug: /tutorials/security
title: 🛡️ Security
sidebar_position: 9
---

# Security

This guide outlines essential security practices for securing your Flutter app, especially when using **FirebaseAuth**, **Firestore**, **Stripe**, and other services for **Web**, **IOS** and **Android** platform.


<details>
  <summary><strong>Securing Firebase Authentication</strong></summary>

### 1. **Use Strong Authentication Methods**
   - **Enable Multi-Factor Authentication (MFA)**: Add an extra layer of security by requiring users to authenticate with both their password and a second factor (like an SMS code or authenticator app).
   - **Enforce Strong Passwords**: In Firebase Authentication settings, enforce strong password requirements to prevent easy-to-guess credentials.

### 2. **Use Role-Based Access Control (RBAC) with Firestore Rules**
   - Limit data access based on user roles, ensuring users only access the data they're authorized to view or modify.
   - Example Firestore security rules:
   ```js
   rules_version = '2'; 
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{userId} {
         // Allow authenticated users to read their own document
         allow read: if request.auth != null && request.auth.uid == userId;

         // Allow Cloud Functions to create documents, but only with necessary fields (e.g., 'trialCount')
         allow create: if request.auth != null && request.resource.data.keys().hasOnly(['trialCount']);

         // Allow authenticated users to update their 'trialCount', but only if it's being decremented
         allow update: if request.auth != null
                        && request.auth.uid == userId
                        && request.resource.data.keys().hasOnly(['trialCount'])
                        && request.resource.data.trialCount <= resource.data.trialCount;

         // Prevent arbitrary writes or document deletions
         allow write: if false;
         allow delete: if false;
       }
     }
   }
   ```

</details>

<details>
  <summary><strong>Securing Stripe Integration</strong></summary>

### 1. **API Key Security**
   - **Store Keys Securely**: Use secure storage options like **Flutter Secure Storage** to store your Stripe API keys and tokens.
   - **Avoid Hardcoding Keys**: Never expose your API keys or private tokens in your frontend codebase or client-side application. Always keep them on the server side.

### 2. **Verify Purchases Server-Side**
   - **Server-Side Verification**: Always use Stripe's server-side endpoint to validate payments and ensure the legitimacy of transactions, preventing fraud.

### 3. **Move Sensitive API Calls to Firebase Cloud Functions**
   - **Why Move API Calls to Backend**: It's crucial to move sensitive API calls like payment processing to the server backend (e.g., Firebase Cloud Functions) rather than handling them directly on the client. This prevents attackers from intercepting keys or tokens in the client-side code using browser tools.
   - **Example Firebase Cloud Function for Webhook**: Handle Stripe webhooks in Firebase Cloud Functions to securely update the user's subscription status in Firestore based on the payment outcome.

</details>

<details>
  <summary><strong>Best Practices for Mobile Security (Android and iOS)</strong></summary>

### 1. **Obfuscate Code**
   - **Android**: Enable ProGuard in `build.gradle` to obfuscate and minify your code, making it harder for attackers to reverse-engineer.
   - **iOS**: Enable Swift code obfuscation through Xcode settings to protect your app's source code from unauthorized access.

### 2. **Secure API Calls**
   - **Use HTTPS**: Always ensure that your network calls are made over HTTPS to encrypt data in transit.
   - **Validate SSL Certificates**: Protect your app from man-in-the-middle attacks by validating SSL certificates on both Android and iOS devices.

### 3. **Store Sensitive Data Securely**
   - **iOS**: Use the **Keychain** to securely store sensitive data such as authentication tokens.
   - **Android**: Store sensitive data in **EncryptedSharedPreferences** or use **Android Keystore** for better protection of private data.

</details>

<details>
  <summary><strong>Handling User Data Securely</strong></summary>

### 1. **Minimize Data Collection**
   - Only collect the necessary user data and be transparent about what data you are collecting. Follow data protection principles and comply with regulations like GDPR, if applicable.

### 2. **Use Secure Communication for Data Transfer**
   - Ensure that all user data is transferred securely over HTTPS to prevent unauthorized access and protect data integrity during transit.

</details>

<details>
  <summary><strong>Testing Security</strong></summary>

### 1. **Use Firebase Emulator Suite for Local Testing**
   - Test Firebase Authentication and Firestore locally using the Firebase Emulator Suite to ensure everything works correctly before going live.

### 2. **Perform Vulnerability Scans**
   - Use security tools like **OWASP ZAP** or **Burp Suite** to perform security audits and vulnerability scanning on your app.

### 3. **Test Permissions on Real Devices**
   - Always test your app on real Android and iOS devices to ensure that the permissions and data security settings are enforced correctly.

</details>



