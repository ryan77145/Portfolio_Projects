# freeCodeCamp — Responsive Web Design Certification Projects

These are the five required projects completed to earn the [freeCodeCamp Responsive Web Design Certification](https://www.freecodecamp.org/learn/2022/responsive-web-design/). Each project was built from scratch using only HTML and CSS, with no frameworks or libraries, to demonstrate mastery of core web layout and design concepts.

Live versions are hosted at [ryanshill.com/projects](https://www.ryanshill.com).

---

## Projects

### 1. Survey Form
**Path:** `/projects/survey-form`

A feedback form built to satisfy the freeCodeCamp Survey Form certification requirements. The form collects a user's name, email, and phone number, then asks for app feedback across several input types.

**Features:**
- Text, email, and number inputs with validation and placeholder text
- Dropdown selection for recommendation rating
- Radio button groups for design quality and usefulness ratings
- Checkboxes for favorite features (Set Tracker, Investment Management, Piece Tracker)
- Textarea with character min/max constraints for open-ended comments
- Fully semantic HTML form structure with associated labels

**Concepts demonstrated:** Form semantics, input validation attributes, label association, `required`, `min`/`max`, `minlength`/`maxlength`

---

### 2. Book Inventory
**Path:** `/projects/book-inventory`

A styled HTML table displaying a personal book inventory with reading status and a visual star-rating system built entirely in CSS.

**Features:**
- Table with columns for Title, Author, Category, Status, and Rating
- Color-coded rows by reading status: Read (blue gradient), To Read (coral/red gradient), In Progress (earth-tone gradient)
- Visual three-box rating system using CSS class modifiers (`one`, `two`, `three`) with gradient-filled indicators
- Status badges with distinct styling per row type

**Concepts demonstrated:** HTML tables, CSS attribute selectors, CSS class combinators, `linear-gradient`, visual data representation without JavaScript

---

### 3. Playing Cards
**Path:** `/projects/playing-cards`

A CSS layout exercise rendering four playing card aces (one per suit) using Flexbox.

**Features:**
- Four card components displayed in a centered, wrapping flex row
- Each card uses nested Flexbox to position rank indicators at top-left and bottom-right, with the suit symbol centered
- Card styling includes border-radius, box-shadow, and a red border for a classic card aesthetic
- Responsive wrapping with `flex-wrap`

**Concepts demonstrated:** Flexbox layout, nested flex containers, `align-self`, `justify-content`, `flex-wrap`, CSS box model

---

### 4. City Skyline
**Path:** `/projects/skyline`

A purely CSS art project rendering a detailed city skyline with background and foreground building layers, windows, and a sky with a sun.

**Features:**
- Two absolute-positioned layers: background buildings and foreground buildings
- Distinct building shapes using CSS border tricks for triangular rooftops
- Window patterns built with `repeating-linear-gradient`
- Sky rendered with `radial-gradient` to simulate sunlight
- CSS custom properties (`--building-color1–4`, `--window-color1–4`) for a consistent color system
- Full responsive media query: at ≤1000px, the scene converts to a nighttime silhouette with dark buildings and gray windows

**Concepts demonstrated:** CSS custom properties, `repeating-linear-gradient`, `radial-gradient`, `position: absolute`, CSS border shape trick, `@media` queries

---

### 5. Technical Documentation Page
**Path:** `/projects/technical-document`

A multi-section technical documentation page covering CSS Flexbox, built to the freeCodeCamp Technical Documentation certification spec.

**Features:**
- Fixed left-side `<nav>` with anchor links to each section
- Five documentation sections: What is Flexbox, The Flex Container, The Flex Items, Alignment and Spacing, and Practical Examples
- Code examples displayed in styled `<code>` boxes
- Semantic HTML using `<main>`, `<section>`, `<nav>`, and `<header>` elements
- Responsive layout using `margin-left` offset to account for the fixed sidebar

**Concepts demonstrated:** Fixed positioning, semantic HTML5 structure, CSS layout with `display: flex`, anchor navigation, code formatting

---

## Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Structure and semantics for all projects |
| CSS3 | All styling, layout, and visual effects |
| Flexbox | Layout system used across multiple projects |
| CSS Custom Properties | Color theming in the Skyline project |
| CSS Gradients | Visual design in Book Inventory and Skyline |

No JavaScript. No frameworks. No libraries.

---

## About

Built by **Ryan Shill** as part of the freeCodeCamp Responsive Web Design curriculum.  
Portfolio: [ryanshill.com](https://www.ryanshill.com)
