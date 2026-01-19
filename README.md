# 🍴 AASTU Bite — Student Cafeteria Food Ordering System
*(Serving Central & KK cafeterias at AASTU — Phase 1 Prototype)*

---

## 🌟 Project Title
**AASTU Bite:** Student Cafeteria Food Ordering Website  

---

## 👥 Team / Organization
- **Organization:** AASTU Bite Team  
- **Course:** Internet Programming I (Mini Project)  
- **Institution:** Addis Ababa Science and Technology University (AASTU)  

---

## 📚 Introduction
AASTU Bite is a **web-based food ordering system** designed to simplify and modernize food ordering at AASTU. Students can browse menus, add items to a cart, select the cafeteria (Central or KK), and submit orders online.  

This system is a **Phase 1 prototype**, focusing on front-end features while preparing for **backend integration, GPS/map delivery, notifications, and mobile app expansion** in future phases.  

---

## 🌍 Context
At AASTU, students depend on multiple cafeterias for daily meals. Currently:  

- Ordering requires **calling the cafeteria or standing in long queues**  
- Staff face **high workloads and order management challenges**  
- Students experience **frustration and delays**, especially during peak hours  

The system will operate in the **university environment**, serving students and cafeteria staff, and will eventually expand to include all cafeterias with GPS delivery and backend support.  

---

## 🚀 Motivation
- Reduce waiting times and improve ordering convenience  
- Provide a **modern, interactive front-end solution**  
- Prepare for **future GPS/map-based delivery and mobile app integration**  
- Support cafeteria staff by reducing workload and errors in order handling  

---

## 🎯 Objectives

### General Objective
Develop a **dynamic, web-based food ordering system** for AASTU cafeterias.  

### Specific Objectives
- Design a **responsive, user-friendly website**  
- Implement **dynamic menu browsing and cart management**  
- Allow students to **choose the cafeteria** (Central or KK)  
- Collect student information via **validated order forms**  
- Display **order summary and confirmation**  
- Prepare for **future backend integration and database storage**  
- Plan for **GPS/map delivery and notifications**  
- Ensure **future scalability** for additional cafeterias  

---

## 📌 Corresponding Requirements
| Objective | Requirement |
|-----------|-------------|
| Responsive website | HTML5, CSS3, JavaScript with responsive design |
| Dynamic menu browsing | Menu pages with images, descriptions, availability |
| Cafeteria selection | Ability to select Central or KK during order |
| Cart management | Add/remove items, update quantities, dynamic total |
| Form validation | JavaScript checks for student info & order accuracy |
| Order summary | Show final order details before submission |
| Backend preparation | Modular code for future PHP/MySQL integration |
| GPS/Map delivery (future) | System design prepared for location selection & tracking |
| Notifications (future) | Alerts when order is ready |
| Scalability | Architecture supports expansion to other cafeterias |

---

## 🍔 Functional Requirements
1. Home Page – Quick navigation and featured menu items  
2. Menu Pages – Food items with images, descriptions, prices, availability  
3. Cafeteria Selection – Central or KK for each order  
4. Cart System – Add/remove items, update quantities, dynamic total  
5. Order Form – Collect student info (name, ID, contact, cafeteria)  
6. Order Validation – Ensure accurate data submission  
7. Order Summary – Display before final submission  
8. Responsive Design – Mobile and desktop friendly  
9. Future GPS/Map Delivery – Select drop location and track orders  
10. Notifications – Alerts when orders are ready  
11. Adaptive Features – Recommend popular items based on previous orders  

---

## 💡 Significance of the System
- Reduces waiting time for students  
- Minimizes staff workload and errors  
- Provides **interactive, convenient, and scalable ordering**  
- Prepares a foundation for **future backend, mobile, and GPS delivery features**  

---

## 👥 Beneficiaries of the System
- **Students:** Faster, easier food ordering  
- **Cafeteria staff:** Better order management and preparation workflow  
- **University administration:** Improved cafeteria service efficiency  

---

## 🔧 Feasibility Analysis

### Technical Feasibility
- Front-end prototype using **HTML, CSS, JavaScript**  
- System can be integrated with **PHP/MySQL backend** in Phase 2  
- Prepared for **future GPS/map delivery using APIs**

### Economic Feasibility
- Development uses **open-source technologies**  
- No high-cost servers needed for Phase 1  
- Potential savings in staff time and improved service efficiency

### Operational Feasibility
- Easy for students to use  
- Simple for cafeteria staff to implement order preparation workflow  
- Scalable for future expansion to other cafeterias  

---

## 📄 SRS Overview of Existing System (beU Delivery)

### Use Case of Existing System (Reference)
useCaseDiagram
    actor "Customer/User" as customer
    actor "Delivery Staff/Courier" as courier
    actor "Restaurant" as restaurant
    actor "Admin (System/Platform)" as admin

    rectangle beUDeliverySystem {
        %%% Customer/User Functionalities
        usecase "Register / Login" as register
        usecase "Browse Restaurants" as browseRestaurants
        usecase "Browse Menu Items" as browseMenu
        usecase "Add Items to Cart" as addToCart
        usecase "Place Order" as placeOrder
        usecase "Make Payment" as makePayment
        usecase "Track Order (Real-time GPS)" as trackOrder
        usecase "Cancel Order" as cancelOrder
        usecase "View Order History" as viewHistory
        usecase "Receive Notifications" as notifications
        usecase "Refer Friends / Rewards" as referFriends

        %%% Delivery Staff/Courier Functionalities
        usecase "Receive Delivery Requests" as receiveRequests
        usecase "View Locations (Restaurant & Customer)" as viewLocations
        usecase "Update Delivery Status" as updateStatus
        usecase "Communicate with Customer" as communicate
        usecase "View Delivery History" as viewDeliveryHistory

        %%% Restaurant Functionalities
        usecase "Receive New Orders" as receiveOrders
        usecase "Confirm Order Preparation" as confirmOrder
        usecase "Update Menu / Availability" as updateMenu

        %%% Admin/System Functionalities
        usecase "Manage Accounts" as manageAccounts
        usecase "Monitor Performance" as monitorPerformance
        usecase "Apply Promotions" as applyPromotions
        usecase "Handle Complaints" as handleComplaints
    }

    %%% Relationships
    customer --> register
    customer --> browseRestaurants
    customer --> browseMenu
    customer --> addToCart
    customer --> placeOrder
    customer --> makePayment
    customer --> trackOrder
    customer --> cancelOrder
    customer --> viewHistory
    customer --> notifications
    customer --> referFriends

    courier --> receiveRequests
    courier --> viewLocations
    courier --> updateStatus
    courier --> communicate
    courier --> viewDeliveryHistory

    restaurant --> receiveOrders
    restaurant --> confirmOrder
    restaurant --> updateMenu

    admin --> manageAccounts
    admin --> monitorPerformance
    admin --> applyPromotions
    admin --> handleComplaints

### Problems & Limitations
- Not campus-focused, only city-wide delivery  
- Requires mobile app and account creation  
- Delivery can be unreliable or slow  
- Does not handle cafeteria-specific ordering workflows  

---

## 🆕 Proposed System

### Use Case of AASTU Bite
 
    actor "Student" as student
    actor "Cafeteria Staff" as staff
    actor "System Admin" as admin

    rectangle CafeteriaOrderSystem {
        usecase "Browse Home Page\n(Featured Menu & Quick Links)" as home
        usecase "View Menu Pages\n(Images, Description, Price, Availability)" as menu
        usecase "Select Cafeteria\n(Central or KK)" as selectCafeteria
        usecase "Manage Cart\n(Add/Remove Items, Update Quantities, Dynamic Total)" as cart
        usecase "Fill Order Form\n(Name, ID, Contact, Cafeteria)" as orderForm
        usecase "Validate Form\n(JavaScript Validation)" as validate
        usecase "Confirm Order\n(Order Summary)" as confirm
        usecase "Responsive Design\n(Mobile, Tablet, Desktop)" as responsive
        usecase "(Future) Map/GPS Integration\n(Select Delivery Location, Track Orders)" as gps
        usecase "(Future) Adaptive Recommendations\n(Popular Meals, Previous Orders)" as recommendations
        usecase "(Future) Backend Integration\n(Store Orders & Student Data)" as backend
    }

    student --> home
    student --> menu
    student --> selectCafeteria
    student --> cart
    student --> orderForm
    student --> validate
    student --> confirm
    student --> responsive
    student --> gps
    student --> recommendations

    staff --> backend
    admin --> backend


## 🌟 Featured Products / Adaptive
- Dynamic menu recommendations based on student usage  
- Adaptive order suggestions (Phase 2+)  
- Modular code ready for backend integration  

---

## 📄 Demonstration (Second Page)
- Phase 1 prototype: fully functional front-end  
- Responsive web pages for home, menu, cart, and order submission  
- Cafeteria selection (Central & KK) implemented  
- Cart dynamically updates totals  
- Order summary confirms student info and selections  

---

Prepared for **Internet Programming I — AASTU**
