// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['intro'],
    },
    {
      type: 'category',
      label: 'Web Platform',
      items: ['web'],
    },
    {
      type: 'category',
      label: 'Flutter App Documentation',
      items: [
        'flutter/flutter-intro',
        'flutter/required-software',
        'flutter/how-to-setup-latest-java-jdk-on-windows',
        'flutter/how-to-setup-flutter',
        'flutter/flutter-doctor-output-error',
        'flutter/how-to-first-run-project',
        'flutter/how-to-change-appname',
        'flutter/how-to-change-app-version',
        'flutter/how-to-change-app-logo',
        'flutter/how-to-change-app-color',
        'flutter/how-to-change-package-name',
        'flutter/how-to-change-images-in-app',
        'flutter/how-to-fit-xy-fill-product-image-in-box',
        'flutter/how-to-change-language-string-value',
        'flutter/how-to-add-remove-language',
        'flutter/how-to-change-default-language-of-app',
        'flutter/how-to-remove-dark-theme',
        'flutter/how-to-change-app-font',
        'flutter/how-to-change-server-url',
        'flutter/how-to-create-firebase-project',
        'flutter/how-to-enable-firebase-phone-authentication-otp',
        'flutter/how-to-change-default-country-code-for-otp',
        'flutter/how-to-enable-firebase-blaze-billing',
        'flutter/steps-to-authenticate-firebase-using-google',
        'flutter/steps-to-authenticate-firebase-using-apple',
        'flutter/how-to-set-notification',
        'flutter/how-to-create-deep-link-for-share-item',
        'flutter/how-to-add-map-api-key-for-address',
        'flutter/how-to-manage-payment-gateway-and-add-credential-in-admin-panel',
        'flutter/enable-cloudkit-in-ios-for-multiple-file-upload',
        'flutter/how-to-manage-preferred-delivery-date-time',
        'flutter/how-to-set-currency-code-for-application',
        'flutter/how-to-increase-product-load-limit',
        'flutter/change-api-parameters',
        'flutter/get-privacy-policy-url-for-playstore',
        'flutter/how-to-generate-release-apks',
        'flutter/how-to-solve-data-safety-issue-in-play-store',
        'flutter/steps-to-publish-ios-app-to-app-store',
        'flutter/need-support',
        'flutter/your-feedback',
        'flutter/your-ratings',
        'flutter/contact-us',
      ],
    },
    'changelog',
  ],
};

module.exports = sidebars;
