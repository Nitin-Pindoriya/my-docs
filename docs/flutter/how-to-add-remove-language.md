---
title: How to Add/Remove language
---

How to Add/Remove language

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
