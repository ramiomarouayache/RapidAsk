---
slug: /tutorials/visual-characters
title: 🤖 Visual characters
sidebar_position: 7
---

# Visual Characters

We use **Lottie animation** characters to mimic AI voice replies. These animations are lightweight and offer great performance on both web and mobile apps. You will get access to 5 unique, high-quality speaking characters with transparent backgrounds for various use cases.

![ai_characters](/img/characterss.webp)

### Build Your Own:

You can create your own speaking character using an image or a video (video is recommended). There are free tools available online to help you with this, and you'll find a variety of ready-made avatars to choose from, ranging from realistic to cartoon styles.

#### 1. **Using an Image**:
   - Ensure your image is a high-quality, front-facing portrait of a character (with eyes visible).
   - Once your image is ready, you can use AI platforms like **Heygen** to animate it and bring your character to life. 
   - Sign up at [Heygen](https://heygen.com/?sid=rewardful&via=rami-omar), then navigate to **Dashboard > Avatars > Create Video Avatars** and upload your image.
   - After a few minutes, your animated video avatar will be ready to go.
   - **Important**: Be sure to review Heygen's policies regarding commercial use to ensure compliance with their terms.

#### 2. **Using a Video**:
   - Once your video is ready, the next step is to convert it into a transparent Lottie animation file. Lottie animations are perfect for use in apps and websites due to their small file size and high resolution.

   ![ai_head_examples](/img/talking-head.webp)

---

Once you get access, you will get more details on how to convert your character’s video into a transparent Lottie animation file. This ensures the highest resolution with the smallest file size, making it perfect for different use cases.

<details>
<summary>Sync character's mouth movements</summary>
1. Generate Speech Audio: Use OpenAI's TTS to convert text into speech mp3 audio.

2. Phoneme Timing: OpenAI TTS doesn’t directly provide phoneme timings, so you may need to analyze the audio using external libraries or phonetic analysis to extract this data.

3. Create Lottie Animations with Visemes: Create a Lottie animation with frames corresponding to different mouth shapes (visemes) for each phoneme (e.g., "AH", "EE", "M"). This requires either generating or obtaining animations for each phoneme or a representative subset.

4. Synchronize Audio and Animation: Match the extracted phoneme timing with the appropriate Lottie frame, using audio analysis to align the frames with the phonemes at the correct time.

ps:this technique is currently complex to implement within FlutterFlow,, but we may consider it in the future.

some refrences: [basic-lip-sync](https://www.youtube.com/watch?v=JTz5slARQpA&pp=ygUMI2xpcHNpbmd2aXJh), [dynamic-lottie](https://www.youtube.com/watch?v=XX8jwNNV0U0), [lottie-frames](https://github.com/xvrh/lottie-flutter/issues/164)

</details>