---
slug: /get-started
title: 👉 Get-started
sidebar_position: 0
---

# Get Started

Welcome to the `RapidAsk template`! Here’s a quick overview of how to get your app up and running in just a few steps ⚡️.

![FlutterFlow App Banner](/img/homePage.webp)

## Test & Run

Once you get access to the template, click the `Clone` button to move it to your workspace. Then, navigate to `Settings > Development Environments` and fill `openaiApiKey` variable:

![FlutterFlow App Banner](/img/dev_vars.webp)

:::info
**Required:**  
RapidAsk requires an `OpenAI API Key` to generate AI replies. Follow this [tutorial](/docs/prerequisites#1-openai) to get your key in 2 minutes.
:::

:::tip
**Optional:**  
You can ignore `stripeTestSecretKey` for now, as we’ll cover how to set up your [Stripe integration](/docs/payments/stripeSetup) and keys later.
:::

### Setup Your Preferences

1. **Switch Between Characters:**
   You can switch between characters by changing the URL source, which can either be from the Lottie CDN or app assets. For more details about the characters,. More details about characters [here](/docs/tutorials/visual-characters).


2. **Change AI Reply Tone:** 
   Change the tone of the AI's responses by selecting a different voiceId in the `AppState > voiceId` OpenAI options (Alloy, Echo, Fable, Onyx, Nova, Shimmer). Find the perfect tone for your audience. more [here](https://platform.openai.com/docs/guides/text-to-speech#quickstart)

   ![FlutterFlow App Banner](/img/voiceId.webp)

3. **Display Options:**  
   To enhance the user experience, we display the end-user’s recorded question (prompt) text at the bottom of the character. You can also choose to display the answer reply as text or hide any text entirely. Learn more about this [here].


### Hit the Run-Mode Button

   Click on the `Run-mode Button`, then select `View full screen`—and **Voilà!**

   Your AI bot app is now running.

Now, go ahead and follow the rest of docs to setup more features, run on mobile devices, learn about deployment...happy building! 🚀
