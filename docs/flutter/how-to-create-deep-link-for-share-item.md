---
title: How to create Deep Link for Share Item
---

How to create Deep Link for Share Item

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
