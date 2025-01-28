---
slug: /deployment/appstore-deployment
title: 🍏 AppStore-deployment
sidebar_position: 9.5
---

### Prerequisites
- **Apple account** and **Apple Developer membership**.
- Set an **App Launcher Icon** (must not be transparent).
- Test your app on a real device.

### Steps to Deploy

1. **Create a Bundle ID**: Go to Apple’s [Certificates, IDs & Profiles](https://developer.apple.com/account/resources/identifiers/list), create a new **App ID**, and enter the **Package Name** from FlutterFlow.

2. **Add New App in App Store Connect**: Visit [App Store Connect](https://appstoreconnect.apple.com/) and follow the steps to add a new app.

3. **Add App ID to FlutterFlow**: Copy your **Apple ID** from **App Store Connect** and paste it in FlutterFlow under **Settings & Integrations > Mobile Deployment > App Store**.

4. **Generate API Key**: Go to **App Store Connect > Users and Access > Integrations** to create a new **API Key**, then upload it in **FlutterFlow**.

5. **Add Issuer ID to FlutterFlow**: Copy **Issuer ID** from **App Store Connect** and paste it in FlutterFlow.

6. **Add Key ID to FlutterFlow**: Copy **Key ID** from **App Store Connect** and paste it in FlutterFlow.

7. **Deploy**: Go to **Settings & Integrations > Mobile Deployment > App Store** in FlutterFlow and click **Deploy To App Store**.

### Final Step
- Submit your app for App Store review via **App Store Connect**.
