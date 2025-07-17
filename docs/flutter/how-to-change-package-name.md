---
title: How to change package name
---

How to change package name

You can easily change your Flutter app's package name using the `change_app_package_name` tool. This tool automatically updates your app's package name (applicationId for Android and bundle identifier for iOS) throughout your project, saving you from manual refactoring.

**Steps:**

- Run this command to change the package name for both platforms:
  ```sh
  dart run change_app_package_name:main com.new.package.name
  ```
- To rename only Android:
  ```sh
  dart run change_app_package_name:main com.new.package.name --android
  ```
- To rename only iOS:
  ```sh
  dart run change_app_package_name:main com.new.package.name --ios
  ```

1. Open a terminal in your project directory.
   
   ![eShop](/img/packagename.png)
2. Run the appropriate command above, replacing `com.new.package.name` with your desired package name.
3. The tool will update all necessary files for the selected platform(s).
4. After the process completes, open the `lib/settings.dart` file and manually update the package name there, as this file is not automatically updated by the tool. All other necessary changes are handled by the package.
   
   ![eShop](/img/packagename1.png)
5. Review your project to ensure all changes are correct. Then, run `flutter clean` and `flutter pub get` to refresh your project.

**Important Note:** Replace `com.new.package.name` with your desired package name (e.g., `com.yourcompany.appname`). The package name should follow the reverse domain name notation.

That's it! Your app's package name has been changed successfully. 
