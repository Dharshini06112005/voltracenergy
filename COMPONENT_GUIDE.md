# Component Guide - Voltrac Energy Corporate Website

This document serves as a developer guide for the reusable frontend components, detailing their layout structures, expected props, and UI design standards.

---

## 1. Reusable Layout Components

### 1.1 `Navbar`
*   **Location**: `src/components/common/Navbar.jsx`
*   **Purpose**: Desktop header with rich dropdown sub-menus for Two-Wheeler, Three-Wheeler, Golf-Cart, and MHE solutions, scroll transparency transition effects, and a mobile hamburger sliding drawer.
*   **Props**: None.

### 1.2 `Footer`
*   **Location**: `src/components/common/Footer.jsx`
*   **Purpose**: Features visual columns for page navigation, newsletter signup form, certification tags (ISO 9001, CE, RoHS, AIS 156), and contact offices.
*   **Props**: None.

---

## 2. Shared Core UI Elements

### 2.1 `Button`
*   **Location**: `src/components/common/Button.jsx`
*   **Purpose**: Renders styled corporate buttons.
*   **Props**:
    ```typescript
    interface ButtonProps {
      children: React.ReactNode;
      variant?: 'primary' | 'secondary' | 'outline' | 'dark';
      size?: 'sm' | 'md' | 'lg';
      className?: string;
      onClick?: () => void;
      type?: 'button' | 'submit' | 'reset';
      disabled?: boolean;
    }
    ```

### 2.2 `SectionHeader`
*   **Location**: `src/components/common/SectionHeader.jsx`
*   **Purpose**: Clean layout header for pages with pre-styled subtitle tags and title blocks.
*   **Props**:
    ```typescript
    interface SectionHeaderProps {
      tag?: string;          // e.g. "SAFETY & AUTOMATION"
      title: string;         // e.g. "Voltrac Production & Labs in Motion"
      description?: string;  // Detailed subtitle paragraph text
      align?: 'left' | 'center';
      dark?: boolean;        // Renders bright text for dark background sections
    }
    ```

---

## 3. Specialized Domain Components

### 3.1 `HeroSlider`
*   **Location**: `src/components/home/HeroSlider.jsx`
*   **Purpose**: Implements the main home landing carousel. Integrates Framer Motion for slides, transitions, overlay fades, and pagination bullets.
*   **Props**: None. Reads data from internal state array or mock products.

### 3.2 `StatsCounter`
*   **Location**: `src/components/home/StatsCounter.jsx`
*   **Purpose**: Renders scroll-triggered, animated increment counters showing numeric corporate accomplishments (e.g. 2500+ Cycles, 1500+ Dealers).
*   **Props**:
    ```typescript
    interface StatProps {
      value: number;         // Target value
      suffix?: string;       // e.g. "+" or "MW+"
      label: string;         // e.g. "Global Dealers"
    }
    ```

### 3.3 `FAQAccordion`
*   **Location**: `src/components/support/FAQAccordion.jsx`
*   **Purpose**: An interactive vertical accordion showing lists of Q&As, tracking open states.
*   **Props**:
    ```typescript
    interface FAQItem {
      question: string;
      answer: string;
    }
    interface FAQAccordionProps {
      items: FAQItem[];
    }
    ```

### 3.4 `ProductCard`
*   **Location**: `src/components/products/ProductCard.jsx`
*   **Purpose**: Displays specific products with image frames, title overlays, quick specs indicators, and a hover zoom transition.
*   **Props**:
    ```typescript
    interface Product {
      id: string;
      name: string;
      category: string;
      image: string;
      briefSpecs: { label: string; value: string }[];
    }
    interface ProductCardProps {
      product: Product;
    }
    ```
