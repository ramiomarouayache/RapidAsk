---
slug: /tutorials/testing
title: 🚧 Testing & Troubleshoot
sidebar_position: 8
---

# Testing & Troubleshooting

## Testing Your App

1. **Running the App Locally (FlutterFlow Built-In Run Mode)**  
   - Go to the **Run** tab in FlutterFlow.
   - Click **Run Locally** to test your app in a web browser.

2. **Viewing the App in Full-Screen Mode**  
   - After launching the app in the browser, switch to **Full-Screen Mode**.  
   - This will allow the browser to request and enable microphone access for voice features (like speech-to-text).
   
  
3. **Swiping Between Web and Mobile Platforms**
   - Use `fetchSpeechAndPlayWeb` for web and `fetchSpeechAndPlayMobile` for mobile in the onTap action of the `stopRecordingButton`, depending on the platform.


## Debugging & Troubleshooting

1. **Verifying Permissions**
   - **Android**: Ensure microphone permissions are set in `AndroidManifest.xml`.
   - **iOS**: Check the `Info.plist` for microphone permissions.

2. **Common Errors**
   - **FlutterFlow**: Check **Error Logs** in the **Run Log** for issues like invalid API keys or incorrect Firebase setup.
   - **browser console**: For web-specific errors or warnings, open the browser's developer tools   (press F12 or Ctrl + Shift + I in most browsers) and go to the Console tab. Look for any relevant error messages or warnings related to the app's execution, which can help diagnose issues with API calls or script execution.
   - **IDE Debugging**: Use breakpoints and `flutter run --debug` for detailed logs.

3. **Voice Recording Testing**
   - **Simulator vs Real Device**: Simulators may not simulate microphone access well. Always test voice features on real devices.
   - **Test on Real Devices**:
     - **Android**: Ensure microphone access and permissions.
     - **iOS**: Ensure `NSMicrophoneUsageDescription` is set in `Info.plist`.