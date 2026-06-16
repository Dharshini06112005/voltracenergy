# API Documentation - Voltrac Energy Corporate Website

This document specifies the backend routing table, detailing response formats and input validations for the mock Node.js Express server.

---

## 1. Product Catalog Endpoints

### 1.1 `GET /api/products`
*   **Description**: Retrieves the full list of motive battery and charger products.
*   **Response Payload (`200 OK`)**:
    ```json
    [
      {
        "id": "volt-moto-2w-lite",
        "name": "Voltrac Moto 2W Lite",
        "category": "two-wheeler",
        "tagline": "Compact LFP Traction Pack for Commuter E-Scooters",
        "image": "/assets/products/moto-lite.jpg",
        "briefSpecs": [
          {"label": "Voltage & Capacity", "value": "60V / 30Ah (1.8 kWh)"},
          {"label": "Life Cycle", "value": "2500+ Cycles @ 80% DOD"},
          {"label": "Compliance", "value": "AIS 156 Phase 2 Certified"}
        ]
      }
    ]
    ```

### 1.2 `GET /api/products/:id`
*   **Description**: Returns comprehensive specifications and features for a single EV battery pack.
*   **Response Payload (`200 OK`)**:
    ```json
    {
      "id": "volt-moto-2w-lite",
      "name": "Voltrac Moto 2W Lite",
      "category": "two-wheeler",
      "image": "/assets/products/moto-lite.jpg",
      "tagline": "Compact LFP Traction Pack for Commuter E-Scooters",
      "description": "Voltrac Moto 2W Lite is a high-density Lithium Iron Phosphate (LiFePO4) battery pack designed for commuter electric scooters and delivery e-bikes.",
      "features": [
        "Full compliance with latest AIS 156 Phase 2 thermal safety directives",
        "IP67 dust and water-tight pressure-cast aluminum containment case",
        "Integrated smart BMS with cell-level balancing"
      ],
      "specifications": [
        {"label": "Nominal Voltage", "value": "60 V"},
        {"label": "Nominal Capacity", "value": "30 Ah (1.8 kWh)"},
        {"label": "Battery Chemistry", "value": "Lithium Iron Phosphate (LiFePO4)"},
        {"label": "Weight", "value": "12.8 Kg"}
      ],
      "applications": [
        "Commuter Electric Scooters",
        "Last-mile courier and delivery e-bikes"
      ],
      "related": ["volt-moto-2w-pro", "volt-charger-2w"]
    }
    ```

---

## 2. Blog and Corporate Events Endpoints

### 2.1 `GET /api/blogs`
*   **Description**: Retrieves all blog posts and company news releases.
*   **Response Payload (`200 OK`)**:
    ```json
    [
      {
        "id": "ais-156-standard-safety",
        "title": "Demystifying AIS 156 Phase II Safety Regulations",
        "excerpt": "A deep dive into the technical requirements, thermal propagation rules, and test cycles mandated for modern Indian EV batteries.",
        "date": "June 12, 2026",
        "image": "/assets/blogs/safety-standards.jpg"
      }
    ]
    ```

---

## 3. Support Form Submission Endpoints

### 3.1 `POST /api/contact`
*   **Description**: Processes standard sales and customer support inquiries.
*   **Request Payload**:
    ```json
    {
      "name": "Jane Doe",
      "email": "jane@example.com",
      "phone": "+919876543210",
      "subject": "Bulk fleet pricing",
      "message": "Interested in purchasing 100 modules for a last-mile delivery fleet."
    }
    ```
*   **Response Payload (`200 OK`)**:
    ```json
    {
      "success": true,
      "message": "Thank you for contacting Voltrac Energy. Our sales engineers will get back to you within 24 hours.",
      "referenceId": "VOL-CON-87239"
    }
    ```

### 3.2 `POST /api/complaint`
*   **Description**: Registers battery/charger complaints and warranty tickets.
*   **Request Payload**:
    ```json
    {
      "customerName": "Alice Smith",
      "phone": "+918765432109",
      "email": "alice@example.com",
      "productSerial": "VT-LFP-2026-9908",
      "invoiceNumber": "INV-2026-0887",
      "purchaseDate": "2026-01-15",
      "issueDescription": "BMS warning code E03 displayed on speed controller."
    }
    ```
*   **Response Payload (`200 OK`)**:
    ```json
    {
      "success": true,
      "message": "Complaint successfully registered. A technician will contact you shortly.",
      "ticketId": "TKT-VOL-8273"
    }
    ```

### 3.3 `POST /api/partner`
*   **Description**: Registers B2B dealer/partner applications.
*   **Request Payload**:
    ```json
    {
      "businessName": "Apex EV Aggregators",
      "contactPerson": "Robert Lee",
      "email": "robert@apexev.com",
      "phone": "+917654321098",
      "businessType": "Fleet Operator",
      "experienceYears": "8",
      "address": "Electronic City Phase 1",
      "city": "Bengaluru",
      "state": "Karnataka",
      "message": "We operate a cargo rickshaw pool and want to deploy Voltrac LFP modules."
    }
    ```
*   **Response Payload (`200 OK`)**:
    ```json
    {
      "success": true,
      "message": "Your dealership application has been received. Our Partnership Operations team will contact you for verification.",
      "applicationId": "VOL-PTN-0034"
    }
    ```
