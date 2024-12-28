---
slug: /deployment/web-deployment
title: 🔗 web-deployment
sidebar_position: 9.4
---

# Web deployment

Deploying your FlutterFlow app to the web is an essential step to ensure that your app is accessible through browsers on various devices. Follow these steps to deploy your FlutterFlow app to the web.

### 1. **Prepare Your FlutterFlow Project for Web Deployment**

Before you begin, ensure that your FlutterFlow project is set up correctly for web deployment:

- **Test on Web**: Make sure your app functions well on the web. You can test it directly within FlutterFlow by using the "Run" feature to preview the web version of your app.
- **Responsive Design**: Ensure that your app’s UI is responsive and optimized for web screens. You can check the responsiveness in the FlutterFlow editor by adjusting the screen size or using the web preview mode.

### 2. **Enable Web Deployment in FlutterFlow**

FlutterFlow allows for easy deployment to the web by following these simple steps:

1. **Navigate to the Deployment Tab**: In FlutterFlow, go to the **Deploy** section found in the app settings.
2. **Choose Web Platform**: Select the option to deploy to the **Web**.
3. **Configure Domain (Optional)**: If you wish to use your own domain, you can configure it under the **Custom Domain** settings. You’ll need to update your DNS records as per FlutterFlow’s instructions.
4. **Build Your Web App**: FlutterFlow will package your app for web deployment. This step may take a few minutes, depending on the size and complexity of your app.

### 3. **Deploy to Hosting**

After building your app for the web, you can choose one of the following methods to deploy:

#### 3.1 **Using FlutterFlow's Built-in Hosting**

FlutterFlow provides built-in hosting for web apps. Once your app is built:

- Click on **Deploy** and then **Publish**.
- FlutterFlow will automatically generate a web version of your app and host it on its servers.

#### 3.2 **Deploy to External Hosting (e.g., Firebase Hosting, Netlify, Vercel)**

If you want to host the app yourself, you can download the code from FlutterFlow and use your own hosting service. Here's how:

1. **Download the Web App Code**:  
   Go to the **Deploy** section of FlutterFlow, click on **Download Source Code**, and download the web-specific code for your app.

2. **Host the App on Firebase Hosting**:  
   If you use Firebase, follow these steps:
   
   - Install Firebase CLI if you haven’t already.
     ```bash
     npm install -g firebase-tools
     ```
   - Initialize Firebase Hosting in your project directory:
     ```bash
     firebase init hosting
     ```
   - Deploy your app:
     ```bash
     firebase deploy
     ```
     
3. **Host on Netlify or Vercel**:  
   Both Netlify and Vercel support easy deployment for static websites:
   
   - Simply connect your GitHub repository to either platform.
   - Push the code to your GitHub repo and follow the platform's prompts to deploy the app.

### 4. **Troubleshooting Common Web Deployment Issues**

Here are some common issues you may encounter and how to address them:

- **API Calls Fail on Web**: Make sure your API endpoints allow CORS (Cross-Origin Resource Sharing) for the web. You might need to configure your server to accept requests from your web domain.
  
- **Missing Resources**: Ensure that all assets like images and fonts are included in the build. Sometimes, resources that work locally may not be correctly linked in the web version.
  
- **UI Layout Issues**: Double-check for any layout issues that may arise when running your app in different screen sizes. FlutterFlow offers responsive design tools to help adjust your UI for various devices.

### 5. **Final Steps and Publishing**

Once your web app is deployed, you can:

- Share the generated URL with your users.
- Set up custom domains (if you haven’t done so already).
- Ensure that your app is functioning correctly on different browsers (Chrome, Firefox, Edge, etc.).
