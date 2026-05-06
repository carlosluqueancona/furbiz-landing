# Furbiz Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a high-conversion, minimalistic landing page for "Furbiz" senior dog beds.

**Architecture:** A single-page React application using Tailwind CSS for a clean, minimal aesthetic. The page will be composed of a Hero section, a Benefits grid, and a Conversion section (Testimonials + Form).

**Tech Stack:** React, Tailwind CSS, Lucide React (for minimal icons).

---

## File Structure
- `src/App.tsx` - Main page orchestration and layout.
- `src/components/Hero.tsx` - Emotional header with primary and secondary CTAs.
- `src/components/Benefits.tsx` - 3-column grid highlighting senior dog bed benefits.
- `src/components/Conversion.tsx` - Testimonials and the lead capture form.
- `src/components/Footer.tsx` - Minimal footer with social links.
- `public/images/cama.png` - The product asset.

---

### Task 1: Project Setup & Base Styling
**Files:**
- Create: `tailwind.config.js`
- Create: `src/index.css`

- [ ] **Step 1: Configure Tailwind colors**
Define a custom color palette in `tailwind.config.js` with soft creams and warm grays to match the "clean and minimal" spec.
- [ ] **Step 2: Set up base CSS**
In `src/index.css`, set the default background to a soft cream and the primary text to a deep warm gray.
- [ ] **Step 3: Commit**
`git commit -m "chore: setup tailwind and base theme for Furbiz"`

### Task 2: Hero Section Implementation
**Files:**
- Create: `src/components/Hero.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Implement Hero Layout**
Create a flex/grid layout with `@cama.png` and the emotional copy.
- [ ] **Step 2: Add CTAs**
Implement the "Quiero más información" button (anchor link to form) and the "WhatsApp" button.
- [ ] **Step 3: Verify Responsiveness**
Ensure the image and text stack correctly on mobile.
- [ ] **Step 4: Commit**
`git commit -m "feat: implement emotional hero section"`

### Task 3: Benefits Grid Implementation
**Files:**
- Create: `src/components/Benefits.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Implement 3-column grid**
Use Tailwind's `grid-cols-1 md:grid-cols-3` for responsiveness.
- [ ] **Step 2: Add benefit content**
Insert the 3 points: Soporte Ortopédico, Confort Térmico, and Seguridad y Calidez with minimal Lucide icons.
- [ ] **Step 3: Apply minimal styling**
Ensure generous padding and white space.
- [ ] **Step 4: Commit**
`git commit -m "feat: add benefits grid for senior dog beds"`

### Task 4: Conversion Section (Testimonials & Form)
**Files:**
- Create: `src/components/Conversion.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Implement Testimonials**
Add 2-3 short, emotive quotes in a clean italic style.
- [ ] **Step 2: Build Lead Form**
Create the form with fields: Name, Email/Phone, and "Nombre del perrito".
- [ ] **Step 3: Implement Form Handling**
Add basic state management for form inputs and a "success" message upon submission.
- [ ] **Step 4: Commit**
`git commit -m "feat: implement testimonials and lead capture form"`

### Task 5: Footer & Final Polish
**Files:**
- Create: `src/components/Footer.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Implement Footer**
Add logo, social links, and the emotive closing phrase.
- [ ] **Step 2: Final CSS Review**
Audit white space and typography consistency (Inter or similar clean sans-serif).
- [ ] **Step 3: Final Test**
Verify the smooth scroll from Hero $\rightarrow$ Form and the WhatsApp link.
- [ ] **Step 4: Commit**
`git commit -m "feat: final polish and footer implementation"`
