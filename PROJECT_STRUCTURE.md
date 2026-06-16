# Project Structure - Voltrac Energy Corporate Website

This document maps out the full-stack architecture of Voltrac Energy, detailing the folder structures for both frontend and backend modules to maintain a clean separation of concerns.

---

```
voltrac energy/
├── backend/
│   ├── data/
│   │   ├── blogs.json             # Mock EV Blog database
│   │   └── products.json          # Mock motive battery database
│   ├── controllers/
│   │   ├── blogController.js      # Handles blog post API logic
│   │   ├── formController.js      # Handles contact, complaint, partner registrations
│   │   └── productController.js   # Handles product listing & lookup logic
│   ├── routes/
│   │   └── api.js                 # Unified API routing table
│   ├── package.json               # Backend dependencies and startup scripts
│   └── server.js                  # Main Express application entrypoint
│
├── frontend/
│   ├── public/
│   │   ├── favicon.svg            # Site favicon logo
│   │   ├── icons.svg              # Navigation icon pack
│   │   └── voltrac_battery_pack.png # Generated premium product battery image
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/            # Header, Navbar, Footer, Buttons
│   │   │   ├── home/              # HeroSlider, StatsCounter
│   │   │   ├── products/          # Search, Filter, ProductGrid
│   │   │   └── support/           # Accordions, Form elements
│   │   ├── pages/
│   │   │   ├── Home.jsx           # Landing view (Videos, Reviews, Specs Finder)
│   │   │   ├── About.jsx          # Corporate timeline & history
│   │   │   ├── Products.jsx       # Grid list view
│   │   │   ├── ProductDetails.jsx # Tech details & specs
│   │   │   ├── Solutions/         # Solution-specific pages (Two-Wheeler, Three-Wheeler, Golf-Cart, MHE, Custom)
│   │   │   ├── Blog.jsx           # News Listing
│   │   │   ├── BlogDetails.jsx    # Single post view
│   │   │   ├── Contact.jsx        # Company locations & quick contact
│   │   │   ├── Complaint.jsx      # Ticket lodging form
│   │   │   └── Partner.jsx        # Business registration portal
│   │   ├── services/
│   │   │   └── api.js             # Axios client instances & API routes
│   │   ├── App.jsx                # Layout frame & Route configuration
│   │   ├── index.css              # Custom Tailwind CSS rules
│   │   └── main.jsx               # React entry point
│   ├── index.html                 # Index HTML template with SEO configurations
│   ├── postcss.config.js          # PostCSS configurations
│   ├── tailwind.config.js         # Custom Tailwind system details
│   ├── vite.config.js             # Vite building pipeline configurations
│   └── package.json               # Frontend package manager config
│
├── README.md                      # Overview of the project
├── PROJECT_ANALYSIS.md            # Reference website comparison
├── PROJECT_STRUCTURE.md           # This structure document
├── COMPONENT_GUIDE.md             # Guide on reusable frontend components
├── API_DOCUMENTATION.md           # API request/response samples
├── RESPONSIVE_GUIDE.md            # Fluid typography and spacing grids
└── DEVELOPMENT_PROGRESS.md        # Checklists and implementation history
```

---

## Key Design Rules
1. **Separation of Concerns**: The frontend and backend run in distinct workspaces. The backend outputs strict JSON payloads. The frontend manages all rendering and user actions.
2. **Component Reuse**: Button styles, input layout structures, status highlights, and section grids inherit from centralized base layouts in `components/common/` to maximize style consistency.
3. **Data Flows**: React forms capture user details, call methods defined in `services/api.js`, and transition to appropriate success alerts once the Express server acknowledges requests.
