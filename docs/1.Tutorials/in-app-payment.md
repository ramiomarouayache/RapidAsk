---
slug: /tutorials/in-app-payment
title: 💳 In-app-payment
sidebar_position: 6.2
---

### **How Stripe Subscription Works**

1. **Customer Creation:**
   - When a checkout session is triggered, the API sends a request to create a new customer in Stripe, even if the user is already registered as a Stripe customer. This ensures that the same email address used for registration in your app is linked to their Stripe account.
   - The `stripe_cust_id` field of the logged-in user in the Firestore `users` collection is updated with the Stripe customer ID.

2. **Stripe Checkout via FlutterFlow:**
   - A checkout session API request is made with the appropriate parameters based on the options selected by the end-user on the purchase page.
   - The user is redirected to Stripe's hosted checkout page to complete the payment. This page handles the payment process securely.

3. **Webhook Handling in Firebase Cloud Functions:**
   - After the payment is processed, Stripe sends a webhook to the Firebase Cloud Function, which we’ve already deployed. This function listens for payment events and updates the user’s subscription status in the Firestore `users` collection.

---

### **Set Up Your Stripe Subscription**

#### 1. **Create new Product in Stripe**

in your Stripe dashboard:

- Go to **Products** in the sidebar and click **Add product**.
- Fill out the necessary details, such as the name of the product and description.
- Under **Pricing**, create the subscription pricing plans. For example, RapidAsk uses two pricing models:
  - $8.99 per month
  - $19.99 per 3 months
- Click **Save** to create the product and get the product ID and price ID for your plans.(you will be able to add more pricings after saving)

    ![product](/img/product-subscription.png)

#### 2. **Connect Product ID in FlutterFlow actions**

In FlutterFlow, you will connect the pricing plans to the subscription page. Here’s how:

1. Navigate to the **SubscriptionPage** in FlutterFlow.
2. For each subscription option (e.g., monthly, 3 months), go to the **onTap** action and set the appropriate **Price ID** (e.g., `price_1QXk3w*******`). You can find these IDs in your Stripe Dashboard under the product’s pricing section.
3. ensure it's the same **Price ID** to control UI elements, like toggling the **container_border** or showing a **checkmark_icon** to indicate the selected option.

Make sure each pricing option is properly linked to the corresponding price ID, as this determines which plan the user selects during checkout.

#### 3. **Set Up the Checkout Session API Request**

- In your FlutterFlow app, set up the **Checkout Session API request**. This request will initiate the Stripe checkout session when a user selects a subscription option.
- The API request should pass the appropriate price ID, as well as other necessary parameters such as the user's email and the **success** and **cancel** URLs. 

Make sure to set up these URLs correctly:
- **Success URL**: This URL is where users are redirected after completing the payment successfully. You should create a "Thank You" or confirmation page in your app and use its URL here.
- **Cancel URL**: This URL is where users are sent if they cancel the payment. Make sure to create a cancellation page in your app and use its URL here.

#### 4. **Handle Webhooks in Firebase Cloud Functions**

- After the user makes a payment, Stripe will send a webhook to your Firebase Cloud Function to notify you of the payment status.
- All the necessary functions to handle webhooks are already included in the **FCF section** of the FlutterFlow template you received. These functions will update the `subscriptionStatus` field in Firestore based on the payment events (such as `active`, `canceled`, `failed`, etc.).

---

### **What Happens After the Payment?**

- **Successful Payment**: After a successful payment, the Firebase Cloud Function listens for the `checkout.session.completed` event and updates the `subscriptionStatus` field in Firestore to reflect the new subscription status (e.g., `active`).
  
- **Failed Payment**: If a payment fails, the Cloud Function listens for the `invoice.payment_failed` event and updates the `subscriptionStatus` to `failed`. You can handle failed payments however you prefer, such as alerting the user or suspending their subscription.

- **Subscription Cancellation**: If a user cancels their subscription, the relevant webhook event (`customer.subscription.deleted`) will be triggered, and the Cloud Function will update the `subscriptionStatus` to `canceled`.

---

### **Testing Your Integration**

Before going live, it’s crucial to test the Stripe integration:

1. **Use Stripe's Test Mode**: In the Stripe Dashboard, make sure you’re in **Test Mode** when testing your payments and webhooks.
2. **Stripe Test Cards**: Use Stripe’s test card numbers to simulate successful and failed payments. For example:
   - **Successful payment**: `4242 4242 4242 4242` (Visa)
   - **Failed payment**: `4000 0000 0000 9995` (Card declined)

3. **Webhook Testing**: Use the Stripe CLI or Dashboard to trigger webhook events (e.g., payment success, payment failure) and make sure the Firebase Cloud Function handles them correctly.
