# SixPlates — AASTU Student Cafeteria Food Ordering System (Central, Kibinash, KK)

## Project Title
SixPlates: AASTU Student Cafeteria Food Ordering Website (Central, Kibinash & KK)

## Team / Organization
Organization: SixPlates
Course: Internet Programming I (Mini Project)
Institution: Addis Ababa Science and Technology University (AASTU)

## Background and Problem Statement
At AASTU, students rely on three main cafeterias (Central, Kibinash and KK) for daily meals. Currently, cafeterias accept orders primarily by phone which creates high manual workload, queueing, and inefficiencies for cafeteria staff and students. The goal of this project is to modernize that workflow by providing a simple, front-end food-ordering website tailored to the AASTU context. This mini project focuses on front-end implementation; server-side integration will be reserved for later coursework.

## Objectives
- Design a clear, responsive, and user-friendly website for browsing cafeteria menus and placing orders.
- Implement dynamic client-side features (menu browsing, cart management, order form with validation) using HTML, CSS, and JavaScript.
- Demonstrate a working prototype that can be extended with server-side and database functionality in subsequent courses.
- Provide a project deliverable suitable for evaluation in Internet Programming I and a clear roadmap for Internet Programming II.

## Scope
- Target cafeterias: `Central`, `Kibinash`, and `KK` at AASTU.
- Target users: AASTU students and cafeteria staff.
- The mini project scope (Internet Programming I): purely front-end (HTML/CSS/JavaScript) prototype without persistent storage.
- Future scope (Internet Programming II and beyond): PHP backend, database for orders and menu management, authentication, and admin dashboard.

## Key Features (Functional Requirements)
1. Home Page — Project and organization name (SixPlates), quick links to cafeterias, featured menu items.
2. Cafeteria Menu Pages — Separate menu view for each cafeteria (Central, Kibinash, KK) showing item image, description, price, and availability.
3. Cart System — Add/remove items, update quantities, and view dynamic totals on the client side.
4. Order Form — Collects student details (name, student ID, contact/phone, pickup location/cafeteria) and validates inputs with JavaScript.
5. Order Summary — Display final order details before confirmation (no persistent submission in this phase).
6. Responsive Design — Works on mobile and desktop, accessible layout for quick on-the-go ordering.

## Non-Functional Requirements
- Usability: Simple, minimal-click ordering flow for students.
- Performance: Lightweight pages that load quickly on campus networks.
- Maintainability: Clean, modular HTML/CSS/JS to allow future backend integration.

## Proposed Technology Stack (Phase 1)
- Front-end: HTML5, CSS3 (responsive layout, optionally a lightweight framework like Bootstrap), and vanilla JavaScript.
- Build: Static website files served locally or via simple static hosting.
- Future (Phase 2): PHP for server-side processing, MySQL or SQLite for order persistence, and simple admin pages for cafeterias.

## Implementation Plan & Timeline (Suggested)
- Phase 0 — Proposal & Design (1 week): Finalize synopsis, wireframes for Home/Menu/Cart/Order pages.
- Phase 1 — Front-end Implementation (2–3 weeks): Develop responsive pages, implement cart logic and client-side validation.
- Phase 2 — Testing & Demonstration (1 week): Usability testing with peers, fix layout/interaction issues, prepare demonstration materials.
- Phase 3 — Future Server Work (Internet Programming II): Add PHP endpoints, database schema, order persistence, and admin features.

## Deliverables
- `docs/Synopsis.md` — Project synopsis and plan (this document).
- Static front-end files — `index.html`, `menu.html`, `cart.html`, `styles.css`, `app.js` (or similar structure) as the Phase 1 prototype.
- Short demo presentation and usage notes for the teacher.

## Future Enhancements (Beyond This Mini Project)
- Persistent order storage with server-side scripting (PHP) and a database.
- Student authentication and order history.
- Cafeteria admin dashboard to manage menu items, availability, and view orders.
- Notifications (SMS or in-app) when orders are ready.
- Scaling to support more cafeterias across campus and potential commercial rollout.

## Evaluation Criteria (Suggested for the Teacher)
- Correctness: Front-end features implemented as specified (menu, cart, order form).
- Responsiveness: Layout works on mobile and desktop.
- Code quality: Clean, modular, and commented HTML/CSS/JS.
- Presentation: Clarity of the demo and ability to explain design decisions and future roadmap.

## Conclusion
SixPlates aims to reduce manual workload and waiting time by offering a simple, easy-to-use web ordering prototype for AASTU's cafeterias (Central, Kibinash, KK). This mini project concentrates on front-end deliverables that demonstrate core interactive features and create a solid foundation for server-side extension in future coursework.

---
Prepared for Internet Programming I — AASTU
