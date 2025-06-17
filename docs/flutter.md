# eShop - Flutter E-commerce Full App

[Click here to find video doc](https://www.youtube.com/playlist?list=PLUezCa9oyl-mlEvw7_kvHGxsthMlosSE6)

**Author: WRTeam**  
**Contact: [CodeCanyon Profile](https://codecanyon.net/user/wrteam)**

Thank you for purchasing the code. If you have any questions that are beyond the scope of this help file, please feel free to message me via my user page contact form [here](https://codecanyon.net/user/wrteam). Thanks so much!

## Required Software

1. Android Studio Koala | 2024.1.1
2. Flutter 3.27.3
3. Java Version 17.0

## How to Setup latest Java jdk on windows

1. If your System already have latest Java jdk installed then you can skip this step.
2. Download latest Java jdk by clicking below link: [JAVA jdk](https://www.oracle.com/java/technologies/downloads/)
3. Download latest Java JDK for your version 32 bit or JDK download 64 bit.
4. Please prefer video tutorials, we recommend this playlist for set environment variable for java in Windows 10: [https://www.youtube.com/watch?v=zzfHPGyjoWw](https://www.youtube.com/watch?v=zzfHPGyjoWw)
5. Please prefer video tutorials, we recommend this playlist for set environment variable for java in Windows 11: [https://www.youtube.com/watch?v=zAyIqbBAUxQ](https://www.youtube.com/watch?v=zAyIqbBAUxQ)

## How to Setup Flutter

1. Visit flutter official website: [https://docs.flutter.dev/get-started/install](https://docs.flutter.dev/get-started/install) for full install guide.
2. If you prefer video tutorials, we recommend this playlist for the full installation process: [https://www.youtube.com/playlist?list=PLSzsOkUDsvdtl3Pw48-R8lcK2oYkk40cm](https://www.youtube.com/playlist?list=PLSzsOkUDsvdtl3Pw48-R8lcK2oYkk40cm)

## Flutter Doctor Output Error

1. If you have run flutter doctor and in flutter doctor if you see below error like licence status unknown.

   ![eShop](/img/upgrade1.png)

2. Then go to sdk manager from upper right corner then go to android sdk inside that sdk tools and then uncheck hide obsolete package then check android sdk command line tool latest then apply and then ok. it will download latest version as shown in below fig.

   ![eShop](/img/upgrade2.png)

3. Now run flutter doctor again your error will be removed

## How to first run project

![eShop](/img/open2.png)

1. Go to file > open > then choose your downloaded project location then your project will open. And if you see upper right part 'enable dart support' then click that and go to pubspec.yaml file and in upper right part click pub get or package get and then press run button.

![eShop](/img/runapp.png)

**If your are getting error then you can perform below hack**

1. If in your system firewall is on, then you can temporary disable firewall and then try to run project
2. If your flutter channel is not stable then you need to change it to stable. You can check your flutter channel by terminal.
3. Go to android studio in bottom line click on terminal, in terminal write flutter channel, as shown below.

![eShop](/img/ch1.png)

4. If you are not in stable then write flutter channel stable
5. Go to Tools > Flutter > Flutter Clean.
6. Go to file > invalidate cache/ restart

## How to change AppName

![eShop](/img/appname1.png)

1. For Android, to change label that is shown below android app icon, open android > app > src > main > open mainfest.xml and inside that label change that string as shown in below fig.

![eShop](/img/appname2.png)

2. For iOS, to change label that is shown below ios app icon, open ios > Runner > Info.plist inside that `<key>CFBundleName</key>` change that string as shown in below fig.

![eShop](/img/appname3.png)

## How to change App Version

1. Go to pubspec.yaml
2. EX.Update version:A.B.C+X in pubspec.yaml.
   - For Android: A.B.C represents the versionName such as 1.0.0. X (the number after the +) represents the versionCode such as 1, 2, 3, etc.
3. **Do not forget** to execute flutter packages get, flutter build or flutter run after this step

![eShop](/img/version_1.png)

4. Go to android -> app -> build.gradle file and change your app version code and app version name like below image.

![eShop](/img/version_2.png)

5. For iOS:
   - A.B.C represents the CFBundleShortVersionString such as 1.0.0.
   - X (the number after the +) represents the CFBundleVersion such as 1, 2, 3, etc.
6. **Do not forget** to execute flutter packages get, flutter build or flutter run after this step

## How to Change app logo

1. For Android, open android > app > src > main > res > mipmap add here your logo according to device screen size

![eShop](/img/logo_1.png)

2. For iOS, open ios > Runner > Assets.xcassets > AppIcon.appiconset here you need to put your logo according to different size.

![eShop](/img/logo_2.png)

## How to Change app color

1. To change app color, your need to add your color code in lib > helper > color.dart
2. In flutter color code start from 0xff so your have to add your color hex after this 4 digit. You can change primary_app, dark_primary_app, primary, secondary, darkprimary, darksecondary, fontcolor as shown in below image.

![eShop](/img/appcolor.png)

## How to change package name

1. Your package directory you can see like below image.

![eShop](/img/packagename_2.png)

2. Individually select each directory you want to rename, and: Right-click it, Select Refactor Click on Rename current In the Pop-up dialog.

![eShop](/img/packagename_3.png)

3. Enter the new name and hit Refactor. Allow a minute to let Android Studio update all changes.

![eShop](/img/packagename_4.png)

4. Now press ctrl + shift + R and replace old packagename with your new packagename

![eShop](/img/packagename_5.png)

5. For ios open ios > Runner > info.plist > there is the key CFBundleIdentifier change the string value for that as shown in below

![eShop](/img/packagename_6.png)

![eShop](/img/packagename_7.png)

## How to Change Images in app

1. Go to Assets > images folder. Here you can change all image to your app image according to different folder different dimension images is used.

![eShop](/img/img.png)

2. For example, You want to change homelogo.svg image then replace your image with same image name and same image extension.

## How to Fit xy(fill) product image in box

1. There is two possibility either you can show image as you upload in panel without stretch in app, or you can fill product image in box with stretch
2. it depend on you, if you upload image with background then it is preferrable to fill image
3. and if you upload project with all same background then you can set fill image false

![eShop](/img/exp.png)

## How to Change language String value

1. Go to lib > Language > go to your language code. Here you can change any string as you want

![eShop](/img/lan2.png)

2. For example, If you want to change "Welcome to eShop" string in your app then find that string in lib -> language folder .json files and replace with your string.

![eShop](/img/lang3.png)

3. And if you want to change or convert that string in all language or some language then you have to find that string label in all .json files and replace string with your string name.

![eShop](/img/lang4.png)

## How to Add/Remove language

### To Add New Language

1. If you want to Add new language then copy one json file from language folder and add it to language folder then rename it to language code of your new language
2. Now open that json file and change value of string to your language string. Remember here you need to add all string in file if any one string is missing in any file then when you change that language then it will give you error. so add all string in all json file.

![eShop](/img/lan2.png)

3. Now search in whole project "en", by pressing ctrl shift f. Now where you see language code in list add your new language code there.

![eShop](/img/lang1.png)

4. Now go to MyProfile.dart file inside that find addLanguageList method in add your new language string name here as shown in below image. Now add this new language string to all json file here you have to use same string name as you have specified in language list in left side. In right side give language name

![eShop](/img/lang2.png)

5. Add your language name in each and every language file

![eShop](/img/lang5.png)

### To remove language

1. Now search in whole project "en", by pressing ctrl shift f. Now where you see language code in list remove language code that you don't want.

![eShop](/img/lang1.png)

## How to change default language of app

1. Go to lib > Helper > session.dart inside that go to getLocale() method. Here you have to change default language code "en" to your language code.

![eShop](/img/applang.png)

## How to Remove Dark Theme

1. Go to lib > MyProfile.dart inside that go to _getDrawerFirst() method. Here you have to comment change theme by doing double slash before change theme tile as shown in below image

![eShop](/img/theme1.png)

2. Now go to main.dart here in void main() method above runapp you have to add one line and comment above code as shown in below image

![eShop](/img/theme2.png)

## How to Change App font

1. Go to Assets > font folder. Here you have to copy your font. Now go to pubspec.yaml in font section change your font name as shown in below image.

![eShop](/img/font.png)

## How to Change server url

1. Go to your admin panel in that go to system and inside that client api key, here you have to copy API link as shown in below fig and paste it in app baseURL.

![eShop](/img/serverurladmin.png)

2. Go to lib > settings.dart. Here you have to change your API server url. **don't forget to add slash after api keyword**

![eShop](/img/base-url.png)

## How to Create firebase project

1. Go to firebase console.and then click on add project.

![eShop](/img/fcm1.png)

2. After that below given step will come. Here you have to enter your project details. Enter your project name and then press on continue. Then select email and then press continue.

![eShop](/img/fcm2.png)

3. After that your project is created

![eShop](/img/fcm3.png)

4. For android, now first click on android

![eShop](/img/fcm4.png)

5. After that below given screen will appear, in that you have to enter your packagename and appname. And then click register app.

![eShop](/img/fcm5.png)

6. After that below given screen will appear, now click on download google-services.json. After that open the file and copy content of file and replace in android > app > google-service.son.

![eShop](/img/fcm6.png)
![eShop](/img/fcm7.png)

7. Now click on next next and in last step press continue to the console button.
8. For ios, perform below step. Now click on add app.

![eShop](/img/fcm8.png)

9. And then click on ios button. In this same as android step will be come here you have to enter your appname. Then next and on next screen download google service info.plist file.

![eShop](/img/fcm9.png)

10. Now copy the content of that file and replace in ios > Runner > GoogleServie-info.plist

![eShop](/img/fcm10.png)

11. Now press next next on firebase console and that's it your project is created on ios.

## How to enable Firebase Phone Authentication(OTP)

1. Open your firebase console.
2. Go to Authentication and open Sign-in method.
3. Enable Phone Sign-in method and save.

![eShop](/img/phone1.png)

4. Now, we have to add sha1 and sha256 key in firebase, for that perform below given step for that you can do one of the below method
5. Go to the android folder. Right click gradlew file and select Open in Terminal as shown in below image.

![eShop](/img/terminal1.png)

6. Go to the terminal view and paste- gradlew signingReport as shown in below
7. For mac it should be ./gradlew signingReport

![eShop](/img/terminal2.png)

8. Now take debug sha and sha256 will print copy that and add it in firebase console. And also add sha-256 to firebase console.

![eShop](/img/sha3.png)

**Remember:**

9. When we are releasing apk then we need to add release sha in firebase panel otherwise otp will not work.
10. After release you can get sha from play console here

![eShop](/img/otp_sha_3.png)

11. Or another way you can also get release sha from below given command in cmd
12. Go to run and type cmd
13. Here first go to java jdk bin path
14. Then here edit this command and replace your keystore path and alias in this command **keytool -list -v -keystore "D:\keystore\eShop.jks" -alias eShop**
15. Then it will ask for password. Enter and then it will show your release sha

![eShop](/img/sha4.png)

16. For ios you need to set following.

**Add custom URL schemes to your Xcode project:**
- Open your project configuration: double-click the project name in the left tree view. Select your app from the TARGETS section, then select the Info tab, and expand the URL Types section.
- Click the + button, and add a URL scheme for your reversed client ID. To find this value, open the GoogleService-Info.plist configuration file, and look for the REVERSED_CLIENT_ID key. Copy the value of that key, and paste it into the URL Schemes box on the configuration page. Leave the other fields blank.
- When completed, your config should look something similar to the following (but with your application-specific values):

![eShop](/img/xcode_infotab_url_type_values.png)

## How to Change default country code for OTP

1. Go to settings.dart file, here you have to change country code to your language code.

![eShop](/img/otp.png)

## How to Enable Firebase Blaze billing

1. Firebase Phone Authentication OTP not being sent in Android because of BILLING_NOT_ENABLED, it's because Firebase has changed the criteria since 1st September. Sadly it now requires Blaze (paid) plan to make use of Phone Authentication SMS OTPs now. The daily 10 free SMS are still there, but only in Blaze plan.

<iframe width="700" height="400" src="https://www.youtube.com/embed/RuJuBCYjmhc" title="How to enable firebase blaze plan" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Steps to Authenticate firebase using Google

1. Open your firebase console.
2. Go to Sign-in method in Authentication.
3. Go to the Google and enable the google sign_in automatically.

![eShop](/img/google_fcm.png)

## Steps to Authenticate firebase using Apple

1. Open your firebase console.
2. Go to Sign-in method in Authentication.
3. Go to the Apple and enable apple sign in.

![eShop](/img/apple1.png)

4. In Xcode, select the Signing & Capabilities tab, and add "Sign In With Apple" as a new Capability then select a team on the Code Signing section.

![eShop](/img/apple2.png)

5. This will generate and configure an App ID in the "Certificates, Identifiers & Profiles" section of the Apple Developer portal.

## How to set Notification

For ios your need to perform below given step:

1. In Xcode, open the project.
2. In the Project Navigator (the left-hand menu), select the project icon that represents your app.
3. In the top-left corner of the right-hand pane in Xcode, select your app's target.
4. Navigate to the Capabilities tab.
5. Enable Push Notifications.
6. Check Remote Notifications and Background Fetch from Enabling Background Modes.

![eShop](/img/1.png)

7. APNs (Apple's Push Notification service) currently supports two types of connections: token-based (.p8) and certificate-based (.p12). You can follow either one of them

### For Token-based (.p8)

8. Log in to the Apple Developer Portal.
9. Navigate to Certificates, IDs & Profiles > Identifiers > App IDs and click the App ID associated with your app.
10. On the screen for your App ID, check Capabilities > Push Notifications.

![eShop](/img/2.png)
![eShop](/img/3.png)

11. Select App ID in next page & click continue.
12. And then create Development SSL Certificate & Production SSL Certificate by adding CSR certificate. Follow Apple's [Create a certificate signing request instructions](https://help.apple.com/developer-account/).
13. Navigate to Certificates, IDs & Profiles > Keys Section and add a Universal key for Notifications, which you can use for more than one apps as well.

![eShop](/img/4.png)

14. Just save and Download & keep it safe, as it will be downloaded only once.

![eShop](/img/5.png)

15. Then go to Firebase and add this .p8 file along with Your Key ID and Team ID.

![eShop](/img/6.png)

### FOR certificate-based (.p12)

16. Log in to the Apple Developer Portal.
17. Navigate to Certificates, IDs & Profiles > Identifiers > App IDs and click the App ID associated with your app.
18. On the screen for your App ID, check Capabilities > Push Notifications.
19. Click Save and respond to the Modify App Capabilities dialog box that appears.
20. To create the certificate, we will use to communicate with Apple when sending push notifications:
    - In a new browser tab, follow Apple's [Create a certificate signing request instructions](https://help.apple.com/developer-account/#/devbfa00fef7).
    - In the Apple Developer Portal, navigate back to your App ID.
    - Click Capabilities > Push Notifications > Configure.
    - Click one of the following buttons:
      - Development SSL Certificate > Create Certificate (for testing push notifications while developing an iOS app)
      - Production SSL Certificate > Create Certificate (for sending push notifications in production)
    - Click Choose File and select the certificate signing request you created above.
    - Click Continue.
    - Click Download to download the certificate.
    - Use this file to export a .p12 file in the next step.

21. Navigate in the Apple Developer Portal to Certificates, IDs & Profiles > Provisioning Profiles.
22. Click the provisioning profile you'd like to edit.
23. Edit the provisioning profile as necessary, and click Save.
24. Click Download, and double-click the downloaded provisioning profile to install it.
25. Make sure your Xcode project is configured to use the provisioning profile as necessary. Next, export the downloaded certificate (.cer file) as a .p12 file that can be uploaded to firebase:
    - On your Mac, double-click the .cer file to open it in Keychain Access.
    - In Keychain Access, in the lower-left corner, select Category > Certificates.
    - Select the certificate to export.
    - Choose File > Export Items.
    - Enter a name in the Save As field.
    - Accept the default .p12 file format and click Save. Respond to the prompts, and enter a password for the file if necessary.
    - Keep track of this file, since you'll upload it to firebase in a later step.

![eShop](/img/7.png)
![eShop](/img/8.png)

## How to create Deep Link for Share Item

1. Open your admin panel.
2. Go to System > Store Settings.
3. Add android playstore link, ios appstore link, one word scheme and Host name. (Note: after release apps in appstore and playstore don't forgot to add your link in admin panel)

![eShop](/img/deeplink-panelsetting.png)

4. For android go to android > app > src > main > AndroidManifest.xml and change scheme and your DomainName here

![eShop](/img/deeplink-androidmanifest.png)

5. For ios go to ios > Runner > Info.plist and change scheme

![eShop](/img/deeplink-ios.png)

6. Change your DomainName in lib > helper > Constant.dart.

![eShop](/img/nativeLink1.png)

## How to Add Map API key for Address

1. Go to Google Cloud Platform. [Click here](https://cloud.google.com/)
2. Click on console.

![eShop](/img/mapAPI1.png)

3. Select your Firebase Project

![eShop](/img/mapAPI2.png)

4. Search for APIs, which are shown in below image.

![eShop](/img/mapAPI3.png)

5. Click on Enable to, enable that APIs

![eShop](/img/mapAPI4.png)

6. Do above steps for below listed API. (enable all below APIs one by one by searching)

![eShop](/img/mapAPI5.png)

7. Go to Credential Tab. You will find your Android and iOS API keys.

![eShop](/img/mapAPI6.png)

8. You have to setup those above API keys for both Platform:

**Android Setup:**
- Next, open android ‣ app ‣ src ‣ main ‣ AndroidManifest.xml and paste the Google Maps meta data tag into your application tag before the activity tag, placing the API key you copied before to replace YOUR_API_KEY_HERE.
```xml
<meta-data 
    android:name="com.google.android.geo.API_KEY" 
    android:value="YOUR_API_KEY_HERE" />
```
- Note: For the value field, please paste in your API Key from the Google Maps API registration process.

![eShop](/img/mapAPI7.png)

**iOS Setup:**
- Next, open the ios ‣ Runner ‣ AppDelegate.swift file and paste the following code as shown in image.
```swift
GMSServices.provideAPIKey("YOUR_API_KEY_HERE")
```
- Note: Again, for the value field please paste in your API Key from the registration process.

![eShop](/img/mapAPI8.png)

## How to manage payment gateway and add Credential in admin panel

1. Go to the panel, in that system > payment method. For any payment method you have to add just key id and secret key. And if you don't want to use then disable from here.

![eShop](/img/pay1.png)

## Enable CloudKit in iOS for multiple file upload

1. This step is only needed in iOS for multiple file select because in iOS Any iOS version below 11.0, will require an Apple Developer Program account to enable CloudKit
2. This feature we are using for image upload in my orders for review product image upload
3. Step to perform [here](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/CloudKitQuickStart/EnablingiCloudandConfiguringCloudKit/EnablingiCloudandConfiguringCloudKit.html).

![eShop](/img/cloud1.png)
![eShop](/img/cloud2.png)

## How to manage preferred delivery date/time

1. First login to admin panel.
2. Go to System > TimeSlot

![eShop](/img/timeslot.png)

## How to set Currency code for Application

1. Select your Country currency code and currency symbol.
2. Go to System > Store setting

![eShop](/img/localecurrency.png)

## How to Increase Product Load Limit

1. You can change at a time when request send to server how many item will fetch. go to lib > settings.dart
2. Please check below given image.

![eShop](/img/limit.png)

## Get Privacy-Policy URL for PlayStore

1. First login to admin panel.
2. System > Privacy Policy

![eShop](/img/privacy.png)

## Change Api Parameter

1. You can change or add api parameter from lib > Helper > String.dart. Here all list of api and api parameter is listed that is used in app.

![eShop](/img/api.png)

## How to generate release apks

1. Create an upload keystore  
   Running the following at the command line:
   - On Mac/Linux, use the following command: 
     ```
     keytool -genkey -v -keystore ~/upload-keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload
     ```
   - On Windows, use the following command:
     ```
     keytool -genkey -v -keystore c:\Users\USER_NAME\upload-keystore.jks -storetype JKS -keyalg RSA -keysize 2048 -validity 10000 -alias upload
     ```

![eShop](/img/modifyPath.png)
![eShop](/img/remeberPassword.png)
![eShop](/img/success.png)

2. Reference the keystore from the app  
   Create a file named [project]/android/key.properties that contains a reference to your keystore:

![eShop](/img/createfile.png)

3. Copy below code, Paste in to key.propertirs file and change as per shown in image.
   ```
   storePassword=<password from previous step>
   keyPassword=<password from previous step>
   keyAlias=upload 
   storeFile=location of the key store file, such as /Users/user name/upload-keystore.jks
   ```

![eShop](/img/setPath.png)

4. Configure signing in gradle  
   Configure gradle to use your upload key when building your app in release mode by editing the [project]/android/app/build.gradle file.
   - Add the below keystore information from your properties file before the android block:
     ```
     def keystoreProperties = new Properties()
     def keystorePropertiesFile = rootProject.file('key.properties')
     if (keystorePropertiesFile.exists()) {
     keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
     }
     ```

![eShop](/img/codeBlock1.png)

   - Find the buildTypes block, and replace it with the following signing configuration info:
     ```
     signingConfigs {
     release {
     keyAlias keystoreProperties['keyAlias']
     keyPassword keystoreProperties['keyPassword']
     storeFile keystoreProperties['storeFile'] ? file(keystoreProperties['storeFile']) : null
     storePassword keystoreProperties['storePassword']
     }
     }
     buildTypes {
     release {
     signingConfig signingConfigs.release
     }
     }
     ```

![eShop](/img/codeBlock2.png)

5. Run following commands in Terminal as per your need:
   - To generate an APK: `flutter build apk`
   - To generate an App Bundle: `flutter build appbundle`

![eShop](/img/generateAPK.png)

## How to solve Data Safety issue in Play Store?

                                Please refer this video link for solve this issue.

<iframe width="560" height="315" src="https://www.youtube.com/embed/f8rjX7_QL44" title="SOLUTION: Data safety section in Google Play User Data policy: Invalid Data safety form" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>

## Steps to Publish iOS App to App Store

1. Open your Project's Runner.xcworkspace file in Xcode, and Add your Team [Your Apple Developer ID] and also Insert GoogleService-Info.plist file [Downloaded From Firebase Project] inside folder named Runner.

![eShop](/img/ios1.png)

2. And then Select **Any iOS Device (armv7,arm64)** as shown in image below.

![eShop](/img/ios2.png)

3. After that Select **Archive** From Product Menu of Xcode as shown below.

![eShop](/img/ios3.png)

4. Once Build / Archive Generated, pop up window will be shown. Validate app First, and After Successful Validation of App, You Can Distribute App to AppStore.

![eShop](/img/ios4.png)

5. After Successful Submission of Build File, it will be Reflected to your Apple Developer Account in which we have created app with same Bundle ID.
[Click here for Detailed Help](https://codewithchris.com/submit-your-app-to-the-app-store/)

## Need Support?

Its our pleasure to serve our service and support. Please contact our support team.

Head of Customer Support: Nitin Pindoriya  
Microsoft Teams: [Nitin Pindoriya](https://teams.live.com/l/invite/FEAwjDjvmxCsgSWYgM)

To help our customers, we constantly be in touch with every customer if they need any assistance regarding our product. We offer our customers a support from **Mon – Fri 9.00am to 6.00pm IST (GMT +5.30) – We are a Team located in India – Asia.**

Typically we reply our customers for all the questions and queries within 24 hours of time via comments, support forum or emails.

## Your Feedback

Dear valuable customer,
                                    Thank you very much for choosing our product.
                                    It's our pleasure to serve top-notch service to you.
Please give us your honest feedback that will help us to make a more strong and reliable product by click here [Rate Us](https://codecanyon.net/downloads).
Thank you very much.

## Contact Us

WRTeam has creative and dedicated group of developers who are mastered in Apps Developments and Web Application Development with a niche in delivering quality solutions to customers across the globe. Contact us today to find out how we can help you or for freelance work.

Visit Us: [https://wrteam.in](https://wrteam.in)

Microsoft Teams: [Nitin Pindoriya](https://teams.live.com/l/invite/FEAwjDjvmxCsgSWYgM)

Mail Us: support@wrteam.in

Call Us: +91 9797945459

Thank you very much.

## Rating

If you like our app, we will highly appreciate if you can provide us a rating of 5. You can rate us from your CodeCanyon Menu > Download page.
