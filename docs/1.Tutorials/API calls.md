---
slug: /tutorials/api-calls
title: 🌐 API calls
sidebar_position: 4
---

# API calls

## 1. **OpenAI API - Generating Reply from User's Speech**

- **Action Trigger**: When the user presses the **Start Record** button, the app records their speech and converts it into text.
- **API Call**: Once the text is generated, the app sends the speech text to OpenAI's endpoint for a reply.
  
   ![prompt](/img/openai-api.webp)


## 3. **Stripe API - Checkout Session**

- **Action Trigger**: When the user clicks the "Subscribe" button, two actions occur:

    - 1.A Stripe customer is created using the logged-in user’s email.(custom action)
    - 2.A Stripe Checkout session is generated using the created customer ID.

- **API Call**: The app sends the text from the previous response to OpenAI's TTS API.

   - **Endpoint**: `https://api.stripe.com/v1/checkout/sessions`
   - **Method**: POST
   - **Body**:
   ```json
    {
      "customer": "<CUSTOMER_ID>",
      "payment_method_types": ["card"],
      "line_items": [
        {
          "price_data": {
            "currency": "usd",
            "product_data": {
              "name": "Subscription Plan"
            },
            "unit_amount": 1000
          },
          "quantity": 1
        }
      ],
      "mode": "subscription",
      "success_url": "<YOUR_SUCCESS_URL>",
      "cancel_url": "<YOUR_CANCEL_URL>"
    }
    ```
  - **Response**:  The API returns a session informations, which is used to redirect the user to the Stripe-hosted checkout page.
  
---

<details>
  <summary>Response customization...</summary>
    
    You can customize bot responses in two different ways, depending on your needs:
    
    - **Basic Customization**: you can customize the entry prompt by adding any additional information you need, like in the example below:
      ![prompt](/img/prompt.webp)
      
    This way, your bot will always:
    - generate a response that could be read in about 13 seconds.
    - end its response with a small question to keep the conversation going.
    - introduce himself as "RapidAsk bot".
    
    ---
    
    - **Advanced Customization**: OpenAI lets you fine-tune models with your own data to tailor responses to your specific needs. For example, if you’re building a medical bot, you can train the model using your medical FAQs or answers to improve its accuracy. After uploading your dataset (ex: text, pdf, media, links...) and training the model, you can access it via an API endpoint.

    more about fine-tuning [docs](https://platform.openai.com/docs/guides/fine-tuning).

</details>
