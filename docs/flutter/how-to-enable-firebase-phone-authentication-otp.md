---
title: How to enable Firebase Phone Authentication(OTP)
---

How to enable Firebase Phone Authentication(OTP)

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
![eShop](/img/otp_sha_4.png)

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
