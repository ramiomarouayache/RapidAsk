---
slug: /tutorials/visual-characters
title: 🤖 Visual characters
sidebar_position: 7
---

# Visual Characters

We use **Lottie animation** characters to mimic AI voice replies. These animations are lightweight and offer great performance on both web and mobile apps. You will get access to 5 unique, high-quality speaking characters with transparent backgrounds for various use cases.

![ai_characters](/img/characterss.webp)

### Build Your Own:

You can create your own speaking character using an image or a video (video is recommended). There are free tools available online to help you with this.

#### 1. **Using an Image**:
   - Ensure your image is a high-quality, front-facing portrait of a character (with eyes visible). 
   - Remove the background from the image and convert it into a PNG format. You can use free tools like:
     - [Adobe Background Remover](https://www.adobe.com/express/feature/image/remove-background)
     - [Remove.bg](https://www.remove.bg/)
   - Alternatively, you can remove the background programmatically using open-source tools like:
     - [rembg](https://github.com/danielgatis/rembg)
     - [backgroundremover](https://github.com/danielgatis/rembg)
   
   Once you have the image prepared, you can use AI platforms like **Heygen** to animate it and create a speaking character. Heygen offers a wide variety of avatar examples to choose from, making it easier to find one that fits your needs. You can create both **images** and **videos** for character animation. 

   - Sign up at [Heygen](https://heygen.com/?sid=rewardful&via=rami-omar) and follow their process to upload your image and animate it.
   - **Important**: Be sure to check Heygen’s policies regarding commercial use to ensure compliance with their terms.

#### 2. **Using a Video** (Recommended):
   - Create or find a video of a character speaking, ideally with a front-facing camera.
   - Use Heygen to animate the video and sync it with your AI voice, creating a dynamic speaking character.
   - Heygen allows you to create high-quality avatars and speaking animations that can be used for a variety of applications, making it an excellent choice for both image and video-based character creation.

Once you get access, you will get more details on how to convert your character’s video into a transparent Lottie animation file. This ensures the highest resolution with the smallest file size, making it perfect for diffrent use cases.

<details>
  <summary>Animation Tips & Lottie Sync</summary>
    
    - 1-Generate Speech Audio: First, you'll use OpenAI's TTS to generate speech audio from text.

    - 2-Phoneme Timing (Manual Approach): OpenAI TTS doesn't natively provide detailed phoneme timing data like Google Cloud does, but you can still extract this data by analyzing the audio. You'll likely need to use external libraries to extract the phoneme timing data or use some assumptions based on phonetic analysis.

    - 3-Create Lottie Animations with Visemes: Create a Lottie animation where each frame represents a different mouth shape or viseme corresponding to a phoneme. You may need a set of images or Lottie frames for each phoneme (e.g., "AH", "EE", "M", etc.).

    - 4-Synchronize Audio and Animation: Once you have the phoneme timing and the Lottie animation, you'll synchronize them. You can use audio analysis techniques to estimate phoneme boundaries and trigger the corresponding frames in the Lottie animation.

</details>