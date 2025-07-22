---
title: How to create Deep Link for Share Item
---

## How to create Deep Link for Share Item

### 1. Open your admin panel.
- Go to System > Store Settings.
- Add android playstore link, ios appstore link, one word scheme and Host name. (Note: after release apps in appstore and playstore don't forgot to add your link in admin panel)

![eShop](/img/flutter/deeplink-panelsetting.png)

### 2. For android go to android > app > src > main > AndroidManifest.xml and change scheme and your DomainName here

![eShop](/img/flutter/deeplink-androidmanifest.png)

### 3. For ios go to ios > Runner > Info.plist and change scheme

![eShop](/img/flutter/deeplink-ios.png)

### 4. Change your DomainName in lib > helper > Constant.dart.

![eShop](/img/flutter/nativeLink1.png) 
