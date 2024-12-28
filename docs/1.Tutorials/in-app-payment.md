---
slug: /tutorials/in-app-payment
title: 💳 In-app-payment
sidebar_position: 6.2
---

# Stripe Subscription Integration


### **How Stripe Subscription Works**

1. **Stripe Checkout via FlutterFlow**: 
   - FlutterFlow handles the creation of the Stripe customer and the checkout session. When a user subscribes, they are redirected to Stripe’s hosted checkout page for payment.

2. **Webhook Handling in Firebase Cloud Functions**: 
   - After the payment, Stripe sends a webhook to a Firebase Cloud Function. This function updates the user's subscription status in the Firestore `users` collection.


### **What Happens During the Subscription Flow?**

1. **User Triggers Checkout**: 
   - The user clicks to subscribe in your app.
   - FlutterFlow makes an API call to Stripe to create a checkout session and Stripe generates a URL for the checkout page.
   - The user is redirected to Stripe’s page to complete the payment.

2. **Payment Completion**:
   - The user fills in payment details on Stripe’s checkout page and completes the payment.

3. **Stripe Webhook Notification**:
   - Once the payment is processed, Stripe sends a webhook to your Firebase Cloud Function.
   - The Firebase function receives this notification and updates the `users` collection in Firestore with the current subscription status (active, canceled, etc.).


### **What Happens After the Payment?**

- After a successful payment, your Firebase Cloud Function automatically updates the user’s subscription status in the `users` collection.
- The Cloud Function listens for the webhook and updates relevant fields like `subscriptionStatus` to reflect the user's new subscription state (active, canceled, etc.).
