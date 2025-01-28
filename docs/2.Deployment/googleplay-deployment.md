---
slug: /deployment/playstore-deployment
title: ▶️ playstore-deployment
sidebar_position: 9.6
---


Deploy your FlutterFlow app directly to the Google Play Store with these simple steps:

### Prerequisites
- [Google Play Developer account](https://play.google.com/console/u/0/signup)
- Test app on a real device
- Confirm **app details** (package name, icon, etc.)
- Set an **App Launcher Icon** (no transparency)

### Steps to Deploy

1. **Create App on Google Play:**
   - Go to the [Google Play Console](https://play.google.com/console)
   - Click **Create App** and fill out the details (name, type, free/paid)

2. **Set Up Your App:**
   - Complete app details in the **Set up your app** section of the Google Play Console.

3. **Add Service Account Credentials:**
   - Create a [Google Cloud Project](https://developers.google.com/android-publisher/getting_started#creating)
   - Enable the **Google Play Developer API** and create a service account
   - Download the JSON key and upload it to FlutterFlow

   **In FlutterFlow:**
   - Go to **Settings & Integrations > App Settings > Mobile Deployment**
   - Upload the **JSON file** under **Google Play Store**

4. **Deploy:**
   - In FlutterFlow, set the **Google Play Track** to **Internal** and hit **Deploy to Play Store**
   - Download the **AAB file** and upload it to the **Internal Testing** track in Google Play Console
   - After testing, promote the app to **Production**.

### Video Guide
For a visual tutorial, watch this [video](https://www.youtube.com/watch?v=kLfcAzAHA6o).
