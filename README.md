# Inventory Management System Using MERN Stack

## Project Overview

The Inventory Management System is a full-stack web application developed using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). The primary objective of this project is to help businesses efficiently manage inventory by tracking products, monitoring stock levels, visualizing inventory data, and generating useful insights for decision-making.

The system provides a centralized platform where users can add, update, delete, search, and monitor products in real time. It also includes graphical dashboards that improve inventory analysis and stock management.

---

# Problem Statement

Many small businesses still manage inventory manually using notebooks or spreadsheets. This often leads to:

* Data inconsistency
* Inventory mismanagement
* Stock shortages
* Difficulty tracking inventory value
* Lack of analytical insights

The Inventory Management System solves these issues by providing an automated and user-friendly inventory solution.

---

# Objectives

The major objectives of the project are:

* Maintain product information digitally
* Track stock availability
* Identify low-stock products
* Calculate total inventory value
* Visualize inventory data using charts
* Improve inventory management efficiency

---

# System Architecture

The application follows a three-tier architecture:

## Presentation Layer

Frontend developed using React.js.

Responsibilities:

* User interaction
* Product forms
* Search functionality
* Dashboard visualization

## Application Layer

Backend developed using Node.js and Express.js.

Responsibilities:

* API handling
* Business logic
* Data processing
* Communication with database

## Database Layer

MongoDB Atlas cloud database.

Responsibilities:

* Product storage
* Data retrieval
* Data updates
* Data deletion

---

# Technology Stack

## Frontend

* React.js
* Vite
* Axios
* Chart.js
* React-ChartJS-2

## Backend

* Node.js
* Express.js

## Database

* MongoDB Atlas
* Mongoose

## Version Control

* Git
* GitHub

---

# Module 1: Product Management

## Purpose

Allows users to manage inventory products.

## Features

* Add Product
* Edit Product
* Delete Product
* View Product Information

## Product Attributes

Each product contains:

* Product Name
* Category
* Price
* Quantity
* Minimum Stock Level

### Example

Mouse

Category: Electronics

Price: ₹500

Quantity: 4

Minimum Stock: 2

## Benefits

* Centralized inventory management
* Accurate product tracking
* Easy product maintenance

---

# Module 2: Search System

## Purpose

Provides quick product lookup.

## Working

Users can enter a product name in the search bar.

The application dynamically filters products using React state management.

## Benefits

* Faster product access
* Improved user experience
* Efficient inventory navigation

---

# Module 3: Low Stock Alert System

## Purpose

Identifies products that require restocking.

## Logic

If:

Quantity ≤ Minimum Stock

The product is considered low stock.

### Example

Keyboard

Quantity = 1

Minimum Stock = 2

Result: Low Stock Alert

## Benefits

* Prevents inventory shortages
* Supports timely restocking
* Reduces business interruptions

---

# Module 4: Inventory Value Calculation

## Purpose

Calculates the total monetary value of inventory.

## Formula

Inventory Value = Price × Quantity

Total Inventory Value = Sum of all product values

### Example

Mouse = ₹500 × 4 = ₹2,000

Phone = ₹20,000 × 11 = ₹220,000

Total Inventory Value = ₹222,000

## Benefits

* Financial monitoring
* Asset evaluation
* Inventory investment tracking

---

# Module 5: Dashboard Analytics

## Purpose

Provides graphical representation of inventory data.

## Technology

Chart.js

React-ChartJS-2

## Bar Chart

Displays product quantities.

### Example

Mouse → 4

Keyboard → 1

Phone → 11

## Benefits

* Easy inventory analysis
* Quick stock monitoring
* Better decision making

---

# Module 6: Category Distribution Analysis

## Purpose

Shows category-wise inventory distribution.

## Technology

Pie Chart

Chart.js

## Example

Electronics = 75%

Clothing = 25%

## Benefits

* Category performance analysis
* Inventory planning
* Business insights

---

# Database Design

## Product Schema

name : String

category : String

price : Number

quantity : Number

minStock : Number

The schema is managed using Mongoose and stored in MongoDB Atlas.

---

# API Endpoints

## GET

/api/products

Fetch all products.

## POST

/api/products

Add a new product.

## PUT

/api/products/:id

Update existing product.

## DELETE

/api/products/:id

Delete a product.

---

# Project Workflow

User

↓

React Frontend

↓

Axios API Request

↓

Express Server

↓

MongoDB Database

↓

Response Returned

↓

Dashboard Updated

---

# Advantages of the System

* Easy inventory management
* Real-time stock monitoring
* Low stock detection
* Data visualization
* Improved operational efficiency
* Reduced manual work
* Better inventory control

---

# Future Enhancements

The project can be extended with:

* User Authentication
* Role-Based Access Control
* Supplier Management
* Sales Management
* Purchase Orders
* Export Reports to PDF
* Email Notifications
* AI-Based Demand Prediction
* Barcode Scanning
* Mobile Application Support

---

# Conclusion

The Inventory Management System successfully automates inventory operations by providing efficient product management, stock monitoring, low-stock alerts, inventory valuation, and analytical dashboards. The use of the MERN stack ensures scalability, responsiveness, and modern web application performance, making the system suitable for small and medium-sized businesses.


DEMO VIDEO:<video controls src="inventory management system.mp4" title="DEMO VIDEO-INVENTORY MANAGEMENT SYSTEM"></video>