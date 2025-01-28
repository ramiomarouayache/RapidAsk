---
slug: /tutorials/build-character
title: 🤖 Build your character
sidebar_position: 7.1
sidebar_class_name: hidden
---

You can create your own speaking character using either a photo or video. If starting with a photo, you'll need to transform it into a speaking avatar video with mouth movements using platforms like Heygen or Vidnoz. If you already have a speaking avatar video, you can skip directly to [using a video](#2-using-a-video-recommended)

   ![ai_head_examples](/img/talking-head.webp)
   

### 1. **Using a Photo**
   - Log in to Heygen/Vidnoz after creating an account. If you don’t have a character photo, no worries—both platforms offer ready-made avatar [videos](#2-using-a-video-recommended) you can use, just ensure they align with the platforms’ commercial use policies.
   
   - Once your image is ready, convert it into a speaking avatar video:
      - Navigate to **Avatars > Video Avatars > Create Avatar** and upload your image.  
      - **Important**: Always check the personal and commercial use rights to ensure compliance with your app.

   > **Note:** Make sure your photo features a clear character—otherwise, the conversion process will fail.

### 2. **Using a Video (Recommended)**

Once you've created your MP4 avatar (with mouth and face movements), the next step is to remove the background. 

Several tools can help with background removal:

- [Unscreen](https://www.unscreen.com/)
- [BackgroundRemoverAI](https://www.backgroundremoverai.com/?lang=en)
- [BackgroundRemoverAI (python)](https://github.com/nadermx/backgroundremover)

We recommend BackgroundRemoverAI as it’s free, accurate, and open-source, so you can run it locally or on hosted environments like Google Colab.

After uploading your MP4 to BackgroundRemoverAI plateform, you'll receive a transparent GIF file (since MP4 doesn't support transparent backgrounds).


### 3. **Optimize Your GIF File**

To convert the GIF into a Lottie file, ensure it’s under **10 MB**. If it’s too large, use the following tools to optimize it:

- [EZGif](https://ezgif.com/optimize)

In EZGif, you can crop and resize the GIF to reduce file size without losing too much quality.

**Important Optimization Tools**:

- 1.**Crop Tool**: Remove unnecessary empty spaces around the character.
   
   ![gif_crop](/img/crop_gif.webp)

- 2.**Resize Tool**: Reduce the width of the GIF to fit your use case (e.g., 600-720px for mobile or 720-900px for web). This will reduce the file size.

- 3.**Optimize Tool**: This tool compresses the GIF using the Gifsicle and Lossy GIF encoder. You can adjust the compression level (0-200) to reduce the file size by 30-50%.

   ![gif_crop](/img/optimize_gif.webp)


   :::tip[Convert MP4 to PNG Sequence (Optional)]

   If you prefer, you can convert your MP4 video into a sequence of PNGs and perform operations on them in bulk, such as removing backgrounds or vectorizing the images. Afterward, you can convert the results(frames) back into a GIF or APNG.

   While this method gives you more control, it requires more tools and time. For simplicity, we recommend converting your video directly into a GIF.

   ::: 


### 4. **Convert to a Lottie File**

After optimizing the GIF, head to the official LottieFiles platform to convert it to a Lottie file.

- Upload the GIF to [LottieFiles](https://lottiefiles.com/).
- Follow the steps shown in the images below to get your Lottie CDN link.

   ![upload_gif](/img/upload_anima.webp)
   ![upload_gif](/img/upload_gif.webp)
   ![cdn_link](/img/lottieCdn.webp)

---

Congratulations!🎊 You've created a Lottie talking avatar. You can now use it as a CDN link, assets, or in any format required for your app.