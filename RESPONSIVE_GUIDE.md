# Responsive Guide - Voltrac Energy Corporate Website

This document specifies the responsive layout strategies, fluid typography settings, and breakpoint-specific styling patterns applied across the Voltrac Energy portal.

---

## 1. Breakpoint Reference Grid

We follow a mobile-first philosophy. Layouts are designed for smallest screen profiles and scaled outward using tailwind media queries.

| Class Prefix | Breakpoint | Target Devices | Layout Adjustments |
| :--- | :--- | :--- | :--- |
| Default | `320px+` | Mobile Phones | Single-column grids, hidden desktop nav, compact padding, simplified tables |
| `md:` | `768px+` | Tablets | Two-column cards, flex rows, visible sidebar controls, moderate padding |
| `lg:` | `1024px+` | Laptops / Small PCs | Three-column grids, horizontal nav links, full details widgets, large banners |
| `xl:` | `1280px+` | Large Desktop | Four-column grids, maximum page containment width (`max-w-7xl`), full gutters |

---

## 2. Layout Patterns

### 2.1 Navigation Menu
*   **Mobile (< 1024px)**: Top bar features the logo and a hamburger menu trigger. Clicking the trigger slides out a full-screen or side-drawer menu using Framer Motion containing accordion drop links for Products and Solutions.
*   **Desktop (>= 1024px)**: Standard horizontal list menu with absolute positioned custom card dropdowns that open on hover.

### 2.2 Responsive Tables & Technical Specs
*   For product details tables, horizontal scrolling is prevented by wrapping tables in `.overflow-x-auto` or converting tables to key-value card pairs at `< 768px`.
    ```jsx
    {/* Responsive specifications renderer */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {specs.map(spec => (
        <div key={spec.label} className="flex justify-between border-b pb-2">
          <span className="text-gray-500 font-medium">{spec.label}</span>
          <span className="text-gray-900 font-semibold">{spec.value}</span>
        </div>
      ))}
    </div>
    ```

### 2.3 Grid Distributions
*   Use Tailwind's dynamic grid column spans:
    *   `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`
*   This automatically adapts product showcases from single items on mobile screens to rich multi-card layouts on desktops.
