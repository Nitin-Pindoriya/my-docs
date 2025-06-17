// File: src/pages/index.js
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import '../css/custom.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title} - Buy Everything!`}
      description="eShop platform homepage"
    >
      <header className="hero hero--primary heroBanner">
        <div className="centered-content">
          <h1 className="hero__title">eShop Single Vendor Documentation</h1>
          <p className="hero__subtitle">
            Comprehensive documentation for the eShop platform, covering both web and mobile applications.
            Learn how to set up, customize, and deploy your e-commerce solution.
          </p>
          <div className="buttons">
            <Link className="button button--primary button--lg" to="/docs/web">
              Website Setup
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/flutter">
              Flutter Application
            </Link>
          </div>
          <section className="features">
            <div className="feature">
              <h2 className="feature__title">Getting Started</h2>
              <p className="feature__description">
                Essential setup guides for your e-commerce journey:
                • Required software installation
                • Project setup and configuration
                • Basic customization options
              </p>
              <div className="feature__links">
                <Link to="/docs/flutter#required-software">View Setup Guide →</Link>
              </div>
            </div>
            <div className="feature">
              <h2 className="feature__title">App Customization</h2>
              <p className="feature__description">
                Personalize your app's appearance:
                • Change app name and version
                • Customize app logo and colors
                • Modify package name
                • Update app fonts
              </p>
              <div className="feature__links">
                <Link to="/docs/flutter#how-to-change-appname">View Customization Guide →</Link>
              </div>
            </div>
            <div className="feature">
              <h2 className="feature__title">Firebase Integration</h2>
              <p className="feature__description">
                Set up Firebase features:
                • Authentication (Phone, Google, Apple)
                • Cloud Messaging
                • Analytics
                • Billing integration
              </p>
              <div className="feature__links">
                <Link to="/docs/flutter#how-to-create-firebase-project">View Firebase Setup →</Link>
              </div>
            </div>
            <div className="feature">
              <h2 className="feature__title">Payment & Delivery</h2>
              <p className="feature__description">
                Configure payment and delivery options:
                • Payment gateway setup
                • Delivery time slots
                • Currency settings
                • Order management
              </p>
              <div className="feature__links">
                <Link to="/docs/flutter#how-to-manage-payment-gateway-and-add-credential-in-admin-panel">View Payment Guide →</Link>
              </div>
            </div>
            <div className="feature">
              <h2 className="feature__title">App Deployment</h2>
              <p className="feature__description">
                Complete deployment guides:
                • App Store deployment
                • Play Store deployment
                • App signing
                • Release management
              </p>
              <div className="feature__links">
                <Link to="/docs/flutter#how-to-generate-release-apks">View Deployment Guide →</Link>
              </div>
            </div>
            <div className="feature">
              <h2 className="feature__title">Advanced Features</h2>
              <p className="feature__description">
                Implement advanced functionality:
                • Deep linking setup``
                • Map integration
                • Multi-language support
                • Dark theme configuration
              </p>
              <div className="feature__links">
                <Link to="/docs/flutter#how-to-create-deep-link-for-share-item">View Advanced Features →</Link>
              </div>
            </div>
          </section>
        </div>
        <div className="copyright">
          Copyright © 2025 eShop.
        </div>
      </header>
    </Layout>
  );
}
