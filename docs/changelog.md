---
title: Changelog
---

# Changelog
Welcome to the eShop Single Vendor ChangeLog! This section documents all the important changes, updates, and improvements made to the eShop Single Vendor platform.


## Version Compatibility Table

| Product Version | Flutter Version | Kotlin Version | AGP Version | distributionUrl (Gradle) | JDK Version |
|---|---|---|---|---|---|
| 4.4.4 | 3.32.7 | 2.2.0 | 8.11.0 | 8.14.3 | 24 |
| 4.4.3 | 3.27.2 | 2.0.10 | 8.5.0 | 8.7 | 21 |

## Version 4.4.4
( updated on 17 Jul 2025 )

+ [Added] Support for digital product checkout and download
+ [Added] MANAGE_EXTERNAL_STORAGE permission for Android
+ [Added] New NoInternetWidget in Customer Support
+ [Improved] Wallet system and backend transaction order handling
+ [Improved] UI improvements
+ [Improved] Code cleanup for deprecated APIs, inputFormatters, and null-safety
+ [Improved] Optimized button layout, spacing, and screen responsiveness
+ [Improved] order item cancel and return flow
+ [Improved] System User Permissions
+ [Fixed] Bugs fixes and code improvements
+ [Updated] compileSdkVersion from 34 to 35
+ [Updated] pubspec.yaml to include new Lottie asset
+ [Updated] Localization files with new keys across supported languages
+ [Updated] Compatibility with Java 24 and Flutter 3.32.7

## Version 4.4.3
( updated on 11 Apr 2025 )

+ [Added] Reason for return items  
+ [Added] Image For return items  
+ [Improved] order attachment flow  
+ [Improved] Cash Collection from Delivery boy  
+ [Improved] order tracking from admin side  
+ [Fixed] Bugs fixes and code improvements 

## Version 4.4.2
( updated on 13 Feb 2025 )

[Added] Add order attachment flow
[Improved] Forgot password for admin via email
[Fixed] fixed category issue
[Fixed] Bugs fixes and code improvements

## Version 4.4.1
( updated on 25 Oct 2024 )

+ [Added] - City-Wise Delivery Charges
+ [Added] - Global Delivery Charges
+ [Added] - Purchase Code Registration & De-Registration
+ [Added] - System Health Enhancements
+ [Improved] - XSS Clean Feature
+ [Improved] - Updated Stripe Library
+ [Improved] - Bug Fixes & Performance Enhancements
+ [Improved] -Updated UI
+ [Updated] - Compatible with Flutter 3.24.3

## Version 4.4.0
( updated on 10 Sept 2024 )

+ [Added] - Users now receive push notifications for items left in their cart
+ [Added] - Added support for applying multiple tax rates to products.
+ [Added] - A new "Buy Now" button is available for quick checkout
+ [Added] - Admins can now download product data in bulk.
+ [Added] - Zip code data can now be downloaded in bulk by admins.
+ [Added] - Enabled the option to delete multiple media files at once.
+ [Added] - Admins can now delete multiple zip codes simultaneously.
+ [Added] - Added Native link for share item
+ [Added] - Introduced web push notifications for desktop users.
+ [Improved] - Various bug fixes and performance improvements

## Version 4.3.0
( updated on 12 June 2024 )

+ [Added ] - Admin/Manager App
+ [Updated] - Updated Firebase cloud notifications
+ [Updated] - Updated theme 
+ [Updated] - Code optimization and improvement in loading speed
+ [Updated] - Compatible with Flutter 3.22
+ [Improved] - Minor bugs have been resolved. 

## Version 4.2.0
( updated on 17 Apr 2024 )

+ [Added] Dynamic option to choose the deliverability checking either via city or zipcode
+ [Added] Delivery boy registration
+ [Added] Dynamic SMS gateway setting to configure any third-party SMS gateway API and added an option to send custom SMSs with preference to set.
+ [Improved] Custom notifications.
+ [improvement] Made whole Compatible with PHP version 8.3
+ [improvement] Added an option to set the price decimal dynamically
+ [improvement] Improvement in price total issues
+ [improvement] improvement in authentication
+ [improvement] improvement in Google authentication
+ [Fixed] Bugs fixes and code improvements

## Version 4.1.0
( updated on 09 Feb 2024 )

+ [Added] Chat feature in customer app for direct communication with admin and system users
+ [Added] Enhanced user experience by showcasing brands on the home screen, providing brand-wise product listing
+ [Added] Introduced WhatsApp ordering, enabling convenient product purchases via the popular messaging platform
+ [Added] Streamlined re-ordering in the customer app, facilitating one-tap placement of old order items
+ [Added] Integrated PhonePe payment gateway, broadening payment options in the customer app's wallet
+ [Improved] Addressed and resolved security measures for PhonePe functionality during ordering, ensuring a more secure transaction environment
+ [Improved] App stability and compatibility by fixing issues and updating packages for the latest Flutter version in both the application codes

## Version 4.0.6.1
( updated on 10 Nov 2023 )

+ [Added] PhonePe Payment Gateway
+ [Improved] Improvements & Bug fixes

## Version 4.0.6
( updated on 16 Oct 2023 )

+ [Added] Instamojo Payment Gateway.
+ [Upgraded] Enhanced address functionality, allowing customers to add areas manually instead of predefined options.
+ [Upgraded] Improved the delivery charge calculation by considering zip codes instead of areas.
+ [Improved] Improvements & Bug fixes

## Version 4.0.5
( updated on 29 June 2023 )

+ [Added] Notification service without login
+ [Added] Driving license for delivery boy
+ [Upgraded] Project compatible with Flutter 3.10
+ [Upgraded] JWT token authentication system 
+ [Upgraded] Order Return Flow
+ [Improve ] Bug Fixed 

## Version 4.0.4
( updated on 16 Apr 2023 )

+ [Added] Social Login (Google, Apple)
+ [Updated] Admin Panel Template

## Version 4.0.3
( updated on 21 Mar 2023 )

+ [Added] Admin Panel Template
+ [Added] Flash Sale Notification
+ [Updated] Deprecated Packages

## Version 4.0.2
( updated on 1 Mar 2023 )

+ [Added] URL type in slider Home screen
+ [Added] URL type in Notification
+ [Added] Promo code for specific user
+ [Update] Updated Latest flutter version
+ [Fix] Improvements & bug fixes

## Version 4.0.1
( updated on 19 Jan 2023 )

+ Added Digital Product Feature
+ Added Manage Stock Feature
+ Added My Fatoorah Payment Gateway
+ Updated PHP code to Version 8.1
+ Improvements and bug fixes

## Version 4.0.0
( updated on 2-Dec-2022 )

+ Added Shiprocket (standard shipping method)
+ Added Brand option in offer section 
+ Added Re-arrange offer sliders order 
+ Improve UI of Flash sale view page and  offer management page
+ Added Midtrans payment gateway
+ Added Maintenance mode in Website
+ Improvements and issue fixed

## Version 3.0.6
( updated on 20-Oct-2022 )

+ Added Flash Sale
+ Added Brand Option
+ Added Offer Slider Feature
+ Improve Offer section
+ Improve Attribute Section in Admin panel
+ Improvement & bug fixed

## Version 3.0.5
( updated on 18-Aug-2022 )

+ Added web-hook for each payment gateway
+ Added Custom Notification Text (you can set notification text in any language and any format)
+ Added Sales Report in admin panel and Seller panel
+ Added Payment Method filter on Order section of admin panel
+ Added Send notification to a specific user
+ Added Multi-language option in Admin panel
+ Added 2 Sections based on User Interaction (Customer Application)
+ You Are looking for: Here the product will be shown which the user has seen (on the Product Details page)
+ You Might Also Like : Here the product will be shown based on user search history (on Homescreen)
+ Improvements and Issue Fixed

## Version 3.0.3
( updated on 16-May-2022 )

+ Added - pre filled options in made in menu in add/edit product
+ Resolved - Cashback system issue
+ Resolved - bugs
+ Search product from category
+ Added Multiple Language in delivery boy
+ Support RTL Layout in delivery boy
+ Dark/Light theme Added in delivery boy

## Version 3.0.2
( updated on 14-Apr-2022 )

+ Added maintenance mode
+ updated Codeigniter framework to v3.1.13
+ Added notification system in admin panel
+ Added cashback system
+ Added shipping policy & return policy

## Version 3.0.1
( updated on 14-Mar-2022 )

+ Added the currency new separation operators for Decimal numbers and currency number separation to support multiple currency systems.
+ Added Picture upload feature in Order feature while placing an order to allow customers to upload prescriptions/notes / any other important information.
+ Added already shared Review by a customer in the order details page and customer can update it from the order page or from the product details page.
+ Added Available Promo codes section in the Customer App and web to display promo codes/offers.
+ User can check their added note on Order details page
+ Notification navigation from Notification list (Customer app).
+ Offline Favorite
+ Resolved Refund wallet amount and order amount calculation issues.
+ Resolved deliverable zip code issue in checkout.
+ Quantity issue resolved while placing an order
+ Featured section issue resolved
+ Resolved not redirecting issue after login.
+ Code compatible with Flutter 2.10 and Android v12
+ Converted App code from JAVA to Kotlin

## Version 3.0.0
( updated on 11-Jan-2022 )

+ Added support for PHP 8.0 version
+ Added welcome wallet balance feature for the customers while registration
+ Improved APIs for NULL safety
+ Added offline cart feature
+ Improved feature section issues
+ Improved product tax field display in add/edit product like GST(10%)

## Version 2.1.1
( updated on 21-Nov-2021 )

+ Added order note on admin panel and delivery boy panel
+ Admin can cancel the order if bank transfer payment is not done
+ Added Cash collection option in Delivery Boy
+ Icons added on Profile Screen
+ Fixed: Order invoice format issue  
+ Bank transfer attachment issue solved

## Version 2.1.0.1
( updated on 28-Oct-2021 )

+ Added order note on admin panel and delivery boy panel
+ Admin can cancle the order if bank transfer payment is not done
+ Fixed : Order invoice format issue  + Dark mode font color issue + Bank Transfer attachment issue solved

## Version 2.1.0
( updated on 14-Oct-2021 )

+ Upgradewith new UI with Flutter 2.5
+ Implemented order tracking module
+ Added Special note on Place order
+ Fixed featured section search product issue
+ Implemented zipcodes in bulk uplaod
+ Fixed category page issue for unicode languages

## Version 2.0.5.2
( updated on 25-Sep-2021 )

+ Added Location Bulk Upload options.
+ Implemented direct bank transfer receipt status. so admin can accept or reject the receipt.
+ Added unique identification field for admin to add HSN tax Number while adding/editing the products.
+ Fixed edit address issue.
+ Fixed change password module issue.
+ Fixed product review updating issue.
+ Fixed out of stock message issue.
+ Fixed manager app privacy & policy display issue.

## Version 2.0.5.1
( updated on 10-Aug-2021 )

+ Home page add to favorite issue resolved.
+ Permission warning issue resolved.
+ Added some more permissions.
+ Direct Bank Transfer order status update issue resolved.
+ Direct Bank Transfer order transaction issue resolved.
+ Improved Bank receipt security in Direct Bank Transfer. 
+ Address update issue resolved.
+ Boost area wise city filter

## Version 2.0.5
( updated on 04-Aug-2021 )

+ Added zip code based delivery charges system
+ Resolved system user email not modifying issue
+ Direct Bank transfer Payment method implemented
+ Resolved deactivated product edit issue in backend
+ Resolved cart total count issue
+ Resolved incorrect wallet amount calculation issue.
+ Resolved product price display issue
+ Implemented order outlines on the dashboard
+ Resolved add swatches page error issue
+ Improved ticket chat system attachment UI
+ Other bugs fixes and improvements

## Version 2.0.4
( updated on 29-June-2021 )

+ Added Attribute Swatches of Colors and Images
+ Added Support Ticketing System.
+ Product Details view page improvments
+ Store Search history locally and show it when user wants to search again.
+ Added Dialouge Animation
+ Bugs fixes and improvements

## Version 2.0.3.2
( updated on 3-June-2021 )

+ Add order filter option in my order list
+ Add voice search
+ My transaction load more issue solved
+ Fixed categories not showing while add/edit products
+ Fixed other images issue in bulk upload
+ Fixed prices inclusive tax remains "No" always in edit products admin panel
+ Fixed bulk update not working for some columns
+ Fixed single item cancel refund from delivery boy panel and APP, admin APP, user panel and APP
+ Fixed bulk upload product attribute issue
+ Fixed copy relative path for the image
+ Fixed Deleted product_attributes on product delete
+ Output escaping in the address column
+ Added variants in order table items column

## Version 2.0.3.1
( updated on 25- May-2021 )

+ Added Bulk products update feature
+ Resolved bugs and some PHP higher version compatibility issues
+ Fixed return request not submitting on item or order return from APP and web
+ Fixed Not updating order and item status delivered to return on approval of return request
+ Fixed copy to clipboard relative path

## Version 2.0.3
( updated on 21- May-2021 )

+ Item-wise payment method selection.
+ Product-wise COD option Enable/Disable.
+ Product comparing feature before buy 
+ See all customer images section of Reviews with images 
+ Added product variant in the cart section and all other screens as well
+ Display Prices including taxes in App
+ Added an option for products with including Taxes or Not
+ OTP validation in delivery boy panel
+ Version update popup dialogue
+ Bulk upload of products
+ Fixed Area wise delivery charges
+ Added Minimum amount for free delivery
+ Fixed getting delivery charge as a refund on cancel item or order even if not paid
+ Improved Media section, Given the upload image feature in the Media model itself
+ Fixed Commission to the delivery boy on the successful order issue
+ Fixed showing other users' records when try to search address table
+ Added promo code and promo discount in orders table admin and delivery boy panel
+ Improved promo apply and validation
+ Dynamic currency symbol orders table header
+ Fixed Register loading only issue when email settings wrong
+ Displayed OTP to the admin and user on the order detail page and added OTP validation in the delivery boy panel

## Version 2.0.2
( updated on 31- Mar-2021 )

+ Upgraded to flutter 2.x
+ Bug fixed and improvements
+ Minimum order quantity and quantity multiplier for individual product2
+ Partially Added COD option product-wise.
+ Add Delivery boy API & Admin App APIs URL in the Client API Keys page
+ Fixed Order or item status change issue after canceled or returned
+ Resolved Stock to minus issue
+ Return of individual item issue resolved. 

## Version 2.0.1
( updated on 18- Mar-2021 )

+ Paypal payment flow changed
+ Max_items in cart issue resolved. 
+ Refund of amount to the customer wallet on cancellation and return of order issue resolved.
+ Deep linking in background issue solved
+ Promo code issue resolved.
+ Added Email notification on order received and resolved SMTP email issue.

## Version 2.0.0
( updated on 27-Feb-2021 )

+ Added Paytm payment gateway [ new ]
+ Added Flutterwave payment gateway [ new ]
+ Added Wallet & Wallet Recharge options
+ Added Refer & Earn Feature
+ Added Click / Tap event for Offer banners
+ Added Video feature for Product Details / Quick view
+ Added an option to show/hide Add to Cart button outside the product lists
+ Added fill image option for the product item
+ Added Tax Name and Tax Number in Store settings and Invoice
+ Added Warranty Period & Guarantee Period fields for products
+ Added Product Tags and Improved Product Search algorithm
+ Added Pincode in the Order address field
+ Improved page load speed time in backend admin and delivery boy pane
+ Replaced PNG images to SVG icons
+ Implemented order and individual item status update feature in Delivery Boy panel and App
+ Improved invoice with tax information included
+ Bug fixed: Time slots & added edit option
+ Bug fixed: Stock management issue
+ Bug fixed: Order & Item Status update issue in overall system

## Version 1.1.2
( updated on 31-Jan-2021 )

+Fixed timezone settings issue
+Fixed orders counter and orders issue
+Added product variant active / deactivate and trash / restore functionality
+Fixed delivery boy order status 
+Fixed edit product variant
+Improvements and bugs fixes

## Version 1.1.1
( updated on 29-Jan-2021 )

+ Add Stripe Payment Gateway 
+ RTL Support
+ New Theme options (Light / Dark)
+ Add Language options (App level)
+ Firebase Dynamic link for sharing product         
+ Add Contact us page
+ Add List/Grid layout options      
+ Add Downloaded Invoice view options
+ Sub-category product load issue solved
+ Delivery boy app currency symbol added
+ Cart Scrolling issue solved
+ Choose variant issue solved
+ IOS Pod issue solved
+ IOS permission issue solved
+ IOS  review image upload issue solved
+ Notification for a particular product
+ Product variant edit issue resolved.
+ Double value price issue resolved.
+ Bugs fixes and UI improvements.

## Version 1.0.1
( updated on 15-Jan-2021 )

+ Delivery boy app added and improved delivery boy backend.
+ Customer app API bugs fixed
+ Logo issue in-store settings fixed
+ Remember me issue while login in backend resolved
+ Bearer Token added in Client API keys page
+ Bugs fixed and improvements
