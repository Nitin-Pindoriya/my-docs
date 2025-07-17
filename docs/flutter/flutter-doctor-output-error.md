---
title: Flutter Doctor Output Error
---

Flutter Doctor Output Error

1. If you have run flutter doctor and in flutter doctor if you see below error like licence status unknown.

   ![eShop](/img/upgrade1.png)

2. Open **Visual Studio Code**.
   - Open a new terminal in VS Code (`Terminal > New Terminal`).
   - Run the following command to accept Android licenses:
     ```sh
     flutter doctor --android-licenses
     ```
   - When prompted, type `y` to accept each license.
   - After accepting all licenses, run:
     ```sh
     flutter doctor
     ```
   - The "license status unknown" error should now be resolved.

3. Now run flutter doctor again your error will be removed 
