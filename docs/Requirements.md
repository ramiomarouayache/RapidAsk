---
slug: /prerequisites
title: 🛠️ Requirements
sidebar_position: 0.5
---

# Befor you begin

Before you consider using the **RapidAsk Template**, first make sure this requirements are met, also be aware to every


## 1. OpenAI (required)

RapidAsk relies on OpenAI's **GPT-4** API to generate conversational ai responses. To use this feature, you’ll need to sign up for an API key from OpenAI.

- **API KEY**: After login/signing up in [OpenAI's Platform](https://platform.openai.com), navigate to [api-keys](https://platform.openai.com/api-keys) section of your OpenAI **dashboard**, you will be able to `create new secret-key` (api key)

    ![FlutterFlow App Banner](/img/openai-key1.png)

- **OpenaiApiKey variable**: in your FlutterFlow project copy-paste at `Settings > Development Environments`

- **ApiKey accesibility**:Make sure you add model-usage as below

    ![model-usage](/img/model-usage.png)
    
 
as openAI no longer offers a Free Tier. API usage requires `minimum $5` balance. Please fund your account by navigating to **Billing Settings**, and `Add a Payment Method`.

![FlutterFlow App Banner](/img/billing.png)

## 2. Plateform support

RapidAsk relies on [Speech-to-text](https://pub.dev/packages/speech_to_text) package, which is primarily focused on mobile (iOS/Android) and macOS platforms, with ongoing support and updates for additional platforms.

| Support   | Android | iOS | MacOS | Web* | Linux | Windows |
|-----------|---------|-----|-------|------|-------|---------|
| **Build** | ✅      | ✅  | ✅    | ✅   | ✘     | ✘       |
| **Speech**| ✅      | ✅  | ✅    | ✅   | ✘     | ✘       |


RapidAsk automatically detects compatibility issues and notifies the end-user to take quick action to fix. However, it's important to note that some browsers may have issues, see [here]



<details>
  <summary>OpenAI Alternatives...</summary>

  You can use alternative AI services instead of OpenAI API, but there are a few considerations:

  1. **Features & API Calls**:  
     Ensure the chosen alternative supports both text and voice generation. Update the necessary API calls/ Custom actions based on the documentation provided by your selected service.

  2. **Web Compatibility**:  
     If you’re focusing only on mobile apps, you shouldn’t face any issues. However, if you plan to support a web version as well, there are a few things to keep in mind:

        - Unlike OpenAI, other services (e.g., PlayHT, Google Cloud AI, Replica Studios, Eleven Labs) are not natively supported by the FlutterFlow server. You may encounter CORS issues when testing your app in FlutterFlow's browser environment. To resolve this, you’ll need to either:
            - Use a **proxy URL** in the API call settings, or
            - Run your Flutter project locally (local server).


</details>
