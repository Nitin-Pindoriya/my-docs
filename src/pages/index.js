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
            <Link className="button button--primary button--lg" to="/docs/intro">
              View Documentation
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
                <Link to="/docs/intro">View Setup Guide →</Link>
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
                <Link to="/docs/flutter/flutter-intro">View Customization Guide →</Link>
              </div>
            </div>
            <div className="feature">
              <h2 className="feature__title">Admin panel Setup</h2>
              <p className="feature__description">
                Easy To Configure, Setup And installation. Use Our System With Admin Panel.
              </p>
              <div className="feature__links">
                <Link to="/docs/web/overview">View Admin panel Setup →</Link>
              </div>
            </div>
            {/*  <div className="feature">
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
            </div> */}
            <div className="feature">
              <h2 className="feature__title">Change log</h2>
              <p className="feature__description">
                This section documents all the important changes, updates, and improvements made to the eShop Single Vendor platform.
              </p>
              <div className="feature__links">
                <Link to="/docs/changelog">View Change log →</Link>
              </div>
            </div>
            <div className="feature">
              <h2 className="feature__title">Need Help?</h2>
              <p className="feature__description">
                If you need any help, please contact our support team.
              </p>
              <div className="feature__links">
                <Link to="/docs/support">View Support →</Link>
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
