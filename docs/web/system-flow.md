---
sidebar_position: 25
title: System Flow
---

# System Flow

This document outlines the complete system flow of the eShop platform, covering both web admin panel and mobile application workflows.

## Overview

The eShop system consists of multiple interconnected components:
- **Admin Web Panel** - For system administration and management
- **Customer Mobile App** - For end-user shopping experience
- **Delivery Boy App** - For order delivery management
- **Backend APIs** - For data processing and business logic

## 1. User Registration & Authentication Flow

### Customer Registration
1. User downloads the mobile app
2. User enters mobile number and basic details
3. OTP verification sent to mobile number
4. User enters OTP for verification
5. Account created and welcome wallet balance added (if configured)
6. User can optionally set up profile with additional details

### Social Login Flow
1. User selects Google/Apple login option
2. Social authentication via respective providers
3. User account created/linked automatically
4. Profile information populated from social provider

## 2. Product Management Flow

### Admin Product Management
1. Admin logs into web panel
2. Navigate to Products → Manage Products
3. Add new product with details:
   - Product name, description, images
   - Category, tax information
   - Pricing, variants, attributes
   - Stock quantity, SKU
   - Shipping details
4. Product published and available for customers

### Product Discovery (Customer)
1. Customer opens mobile app
2. Browse categories or use search functionality
3. Filter products by price, brand, attributes
4. View product details, images, reviews
5. Check product availability and delivery options

## 3. Order Management Flow

### Customer Order Process
1. **Product Selection**
   - Add products to cart
   - Select product variants (size, color, etc.)
   - Apply promo codes if available

2. **Checkout Process**
   - Review cart items and quantities
   - Select delivery address or add new address
   - Choose delivery time slot
   - Select payment method (COD, Online, Wallet)
   - Add special notes/prescriptions if needed

3. **Order Placement**
   - Order confirmation with order ID
   - Payment processing (if online payment)
   - Order notification sent to admin

### Admin Order Management
1. **Order Reception**
   - New order notification received
   - Order appears in admin panel
   - Order details reviewed and validated

2. **Order Processing**
   - Update order status (Processing, Packed, Shipped)
   - Assign delivery boy (for local shipping)
   - Generate shipping labels (for courier shipping)
   - Send order tracking information to customer

3. **Shipping Methods**
   - **Local Shipping**: Assign delivery boy from system
   - **Standard Shipping**: Use Shiprocket integration
     - Create shiprocket order
     - Generate AWB (Air Way Bill)
     - Schedule pickup request
     - Generate and download labels/invoices

## 4. Delivery Management Flow

### Local Delivery (Delivery Boy)
1. Delivery boy receives order notification
2. Navigate to pickup location
3. Collect order from admin/seller
4. Update order status to "Out for Delivery"
5. Navigate to customer address
6. Deliver order and collect payment (if COD)
7. Update order status to "Delivered"
8. Upload delivery proof if required

### Standard Shipping (Courier)
1. Courier partner picks up from registered address
2. Order tracking updates automatically
3. Customer receives tracking information
4. Order delivered by courier partner
5. Delivery confirmation updated in system

## 5. Payment Processing Flow

### Payment Gateway Integration
1. **Online Payments**
   - Razorpay, PayU, Paystack, Flutterwave
   - Secure payment processing
   - Success/failure handling
   - Automatic order status update

2. **Wallet Payments**
   - Deduct amount from customer wallet
   - Transaction record created
   - Wallet balance updated

3. **Cash on Delivery**
   - Order placed without payment
   - Payment collected by delivery boy
   - Cash reconciliation in admin panel

## 6. Inventory Management Flow

### Stock Management
1. Admin sets initial stock quantities
2. Stock reduced automatically on order placement
3. Out-of-stock notifications when quantity reaches zero
4. Bulk stock updates available
5. Stock reports and analytics

### Product Variants
1. Create product with multiple variants (size, color)
2. Each variant has individual stock count
3. Variant-specific pricing and images
4. Stock management per variant

## 7. Customer Support Flow

### Support Ticket System
1. Customer creates support ticket
2. Ticket categorized by type
3. Admin responds to ticket
4. Ticket status tracking (Open, Pending, Resolved, Closed)

### Return & Refund Process
1. Customer initiates return request
2. Return reason and images provided
3. Admin reviews return request
4. Approval/rejection decision
5. Pickup scheduled (if approved)
6. Refund processed to wallet/original payment method

## 8. Notification System Flow

### Push Notifications
1. Firebase Cloud Messaging integration
2. Automatic notifications for:
   - Order status updates
   - Promotional offers
   - New product arrivals

### Email Notifications
1. SMTP configuration in admin panel
2. Automated emails for:
   - Order confirmations
   - Shipping updates
   - Account registration
   - Password reset

## 9. Analytics & Reporting Flow

### Sales Reports
1. Daily, weekly, monthly sales data
2. Product-wise sales analytics
3. Category performance reports
4. Payment method analysis

### Inventory Reports
1. Stock level monitoring
2. Low stock alerts
3. Best/worst performing products

## 10. System Administration Flow

### Settings Management
1. **Store Settings** - App name, logo, currency, timezone
2. **Payment Methods** - Configure payment gateways
3. **Shipping Methods** - Local delivery and courier setup
4. **Email Settings** - SMTP configuration
5. **Notification Settings** - Firebase configuration
6. **Time Slots** - Delivery time preferences

### User Management
1. Customer account management
2. Delivery boy registration and management
3. Admin user roles and permissions
4. Bulk operations for user management

## Security Measures

1. **Authentication**: JWT token-based authentication
2. **Data Encryption**: Secure API communication
3. **Payment Security**: PCI DSS compliant payment processing
4. **Access Control**: Role-based permissions

## Integration Points

### Third-Party Services
- **Firebase** - Authentication, notifications, analytics
- **Payment Gateways** - Multiple payment processors
- **Shiprocket** - Shipping and logistics
- **Google Maps** - Address and location services
- **SMS Gateway** - OTP and notifications

### API Structure
- RESTful API architecture
- JSON data format
- Rate limiting and throttling
- API versioning support
- Comprehensive error handling

This system flow ensures a seamless experience across all user types while maintaining data integrity and system security throughout the entire e-commerce process.
