---
slug: /tutorials/api-calls
title: 🌐 API calls
sidebar_position: 4
---

# API calls

## 1. **OpenAI API - Generating Reply from User's Speech**

- **Action Trigger**: When the user presses the **Start Record** button, the app records their speech and converts it into text.
- **API Call**: Once the text is generated, the app sends the speech text to OpenAI's endpoint for a reply.
  
   - **Endpoint**: `https://api.openai.com/v1/completions`
   - **Method**: POST
   - **Body**:  
     ```json
     {
       "model": "text-davinci-003",
       "prompt": "<USER_INPUT_TEXT>",
       "temperature": 0.7,
       "max_tokens": 150
     }
     ```
   - **Response**: The API will send back a generated reply based on the user’s prompt.

## 2. **OpenAI API - Text to Speech (TTS)**

- **Action Trigger**: Once the reply is generated, the app sends the text to OpenAI's TTS service to generate the voice response.
- **API Call**: The app sends the text from the previous response to OpenAI's TTS API.

   - **Endpoint**: `https://api.openai.com/v1/voices/generate`
   - **Method**: POST
   - **Body**:
     ```json
     {
       "text": "<GENERATED_TEXT>",
       "voice": "en_us_male",  
       "model": "text-to-speech-01"
     }
     ```
   - **Response**: The API will send back an audio file (speech) that the app can play to the user.

## 3. **Integration with Buttons**

Both API calls are triggered by the **Start Recording** and **Stop Recording** buttons:

- **Start Recording**: Initiates speech-to-text conversion.
- **Stop Recording**: Stops the recording and sends the generated text to OpenAI’s API.

---