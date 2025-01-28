---
slug: /tutorials/custom-actions
title: 🕹️ Custom actions
sidebar_position: 6
---



This template includes many custom actions that gives you more control in your app. These actions are fully commented to help understand how they work and modify them if needed, here are the most important ones:

### 1. **startTextRecording**

This action starts the process of recording the user's speech and converting it into text. It uses a custom speech-to-text package to listen to the user’s input.

- **How it works**:
  - When triggered, the app begins recording audio from the user.
  - The speech is then converted into text using the speech-to-text package.
  

### 2. **stopTextRecording**

This action stops the speech-to-text recording and processes the text from the user’s speech.

- **How it works**:
  - When triggered, the app stops recording audio.
  - It then processes the recorded audio and converts it into text.


### 3. **fetchSpeechAndPlayWeb**

This action sends the text response (from OpenAI’s API) to a text-to-speech service and plays the generated voice back to the user.

- **How it works**:
  - It sends the generated text to a text-to-speech API.
  - The app then plays the audio response generated from the text.

### 4. **DisplayWordsOneByOne**

This action displays the answer text word by word, similar to ChatGPT’s response style.

### 5. **CreateStripeCustomer**

This action creates a Stripe customer based on the logged-in user’s email.

---

:::tip[Customization]
- **Modifying Actions**: All actions are commented line by line. You can easily change them based on your specific needs (e.g., changing the API key, altering the recording duration, etc.).
- **Adding New Features**: If you need to add more functionality, simply update the code in these actions. FlutterFlow allows you to directly modify these actions and expand them as needed.
- You also can adjust the audio tone to make it more cartoonish by applying pitch-shifting filters to the MP3 voice. For references, check out [just_audio](https://pub.dev/documentation/just_audio/latest/just_audio/AudioPlayer/setPitch.html) and [FFmpeg](https://stackoverflow.com/questions/68752347/flutter-adding-voice-effects-to-locally-saved-audio-file-m4a-change-pitch).

:::