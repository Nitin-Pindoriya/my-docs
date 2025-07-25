---
title: How to set Notification
---

## How to set Notification

### For ios your need to perform below given step:

1. In Xcode, open the project.
2. In the Project Navigator (the left-hand menu), select the project icon that represents your app.
3. In the top-left corner of the right-hand pane in Xcode, select your app's target.
4. Navigate to the Capabilities tab.
5. Enable Push Notifications.
6. Check Remote Notifications and Background Fetch from Enabling Background Modes.

![eShop](/img/flutter/1.png)

7. APNs (Apple's Push Notification service) currently supports two types of connections: token-based (.p8) and certificate-based (.p12). You can follow either one of them

### For Token-based (.p8)

1. Log in to the Apple Developer Portal.
2. Navigate to Certificates, IDs & Profiles > Identifiers > App IDs and click the App ID associated with your app.
3. On the screen for your App ID, check Capabilities > Push Notifications.

![eShop](/img/flutter/2.png)
![eShop](/img/flutter/3.png)

4. Select App ID in next page & click continue.
5. And then create Development SSL Certificate & Production SSL Certificate by adding CSR certificate. Follow Apple's [Create a certificate signing request instructions](https://help.apple.com/developer-account/).
6. Navigate to Certificates, IDs & Profiles > Keys Section and add a Universal key for Notifications, which you can use for more than one apps as well.

![eShop](/img/flutter/4.png)

7. Just save and Download & keep it safe, as it will be downloaded only once.

![eShop](/img/flutter/5.png)

8. Then go to Firebase and add this .p8 file along with Your Key ID and Team ID.

![eShop](/img/flutter/6.png)

### FOR certificate-based (.p12)

1. Log in to the Apple Developer Portal.
2. Navigate to Certificates, IDs & Profiles > Provisioning Profiles.
3. Click the provisioning profile you'd like to edit.
4. Edit the provisioning profile as necessary, and click Save.
5. Click Download, and double-click the downloaded provisioning profile to install it.
6. Make sure your Xcode project is configured to use the provisioning profile as necessary. Next, export the downloaded certificate (.cer file) as a .p12 file that can be uploaded to firebase:
    - On your Mac, double-click the .cer file to open it in Keychain Access.
    - In Keychain Access, in the lower-left corner, select Category > Certificates.
    - Select the certificate to export.
    - Choose File > Export Items.
    - Enter a name in the Save As field.
    - Accept the default .p12 file format and click Save. Respond to the prompts, and enter a password for the file if necessary.
    - Keep track of this file, since you'll upload it to firebase in a later step.

![eShop](/img/flutter/7.png)
![eShop](/img/flutter/8.png) 
