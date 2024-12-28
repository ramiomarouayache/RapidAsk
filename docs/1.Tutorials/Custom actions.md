---
slug: /tutorials/custom-actions
title: 🕹️ Custom actions
sidebar_position: 6
---

# Custom actions

This template includes three custom actions that allow us to use packages that FlutterFlow doesn’t natively support. These actions are fully commented to help beginners understand how they work and modify them if needed.

## 1. **startTextRecording**

This action starts the process of recording the user's speech and converting it into text. It uses a custom speech-to-text package to listen to the user’s input.

- **How it works**:
  - When triggered, the app begins recording audio from the user.
  - The speech is then converted into text using the speech-to-text package.
  

## 2. **stopTextRecording**

This action stops the speech-to-text recording and processes the text from the user’s speech.

- **How it works**:
  - When triggered, the app stops recording audio.
  - It then processes the recorded audio and converts it into text.


## 3. **fetchSpeechAndPlay**

This action sends the text response (from OpenAI’s API) to a text-to-speech service and plays the generated voice back to the user.

- **How it works**:
  - It sends the generated text to a text-to-speech API.
  - The app then plays the audio response generated from the text.

---

:::tip[Customization]
- **Modifying Actions**: All actions are commented line by line. You can easily change them based on your specific needs (e.g., changing the API key, altering the recording duration, etc.).
- **Adding New Features**: If you need to add more functionality, simply update the code in these actions. FlutterFlow allows you to directly modify these actions and expand them as needed.
:::