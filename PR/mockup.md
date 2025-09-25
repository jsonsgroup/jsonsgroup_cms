# Jsons Group CMS - Interface Mockup & Design Specifications

---

## Document Overview

- **Project:** Jsons Group Custom CMS Interface Design
- **Type:** UI/UX Mockup Documentation
- **Version:** 1.0
- **Date:** September 25, 2025
- **Status:** Draft Mockup

---

## 1. Design System & Brand Guidelines

### 1.1 Color Palette

```css
Primary Colors:
- Industrial Blue: #1E3A8A (Corporate primary)
- Steel Gray: #64748B (Secondary)
- Metal Silver: #F1F5F9 (Background)
- White: #FFFFFF (Content background)

Accent Colors:
- Success Green: #10B981 (Published status)
- Warning Orange: #F59E0B (Draft status)
- Error Red: #EF4444 (Danger actions)
- Info Blue: #3B82F6 (Information)
```

### 1.2 Typography

```css
Headings: 'Inter', sans-serif
Body Text: 'Inter', sans-serif
Code/Technical: 'Fira Code', monospace

Font Weights:
- Light: 300
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
```

### 1.3 Spacing System

```css
Spacing Scale:
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px
```

---

## 2. Admin Dashboard Layout

### 2.1 Main Dashboard Structure

```
┌─────────────────────────────────────────────────────────────────────┐
│                        TOP NAVIGATION BAR                           │
│  [Logo] Jsons Group CMS        [Search]    [Notifications] [User]   │
└─────────────────────────────────────────────────────────────────────┘
┌─────────────┬───────────────────────────────────────────────────────┐
│             │                                                       │
│   SIDEBAR   │                 MAIN CONTENT AREA                     │
│   MENU      │                                                       │
│             │  ┌─────────────────────────────────────────────────┐  │
│ Dashboard   │  │                                                 │  │
│ Pages       │  │              DASHBOARD CARDS                    │  │
│ Products    │  │                                                 │  │
│ Media       │  │  [Total Pages] [Products] [Media Files]        │  │
│ Careers     │  │                                                 │  │
│ Users       │  │  ┌─────────────────────────────────────────┐     │  │
│ Settings    │  │  │          RECENT ACTIVITY               │     │  │
│             │  │  │                                         │     │  │
│             │  │  │ • Page "About Us" updated               │     │  │
│             │  │  │ • New product added to catalog         │     │  │
│             │  │  │ • Media uploaded: factory-image.jpg    │     │  │
│             │  │  └─────────────────────────────────────────┘     │  │
│             │  └─────────────────────────────────────────────────┘  │
│             │                                                       │
└─────────────┴───────────────────────────────────────────────────────┘
```

### 2.2 Sidebar Navigation Structure

```
📊 Dashboard
   └─ Overview
   └─ Analytics

📄 Pages
   ├─ All Pages
   ├─ Add New Page
   └─ Page Categories

🏢 Group Companies
   ├─ Jsons Foundry
   ├─ Western Precicast I
   ├─ Western Precicast II
   ├─ Mai Industry
   ├─ Maindflow Engineering
   └─ ASSJ Flow Engineering

🛠️ Products
   ├─ All Products
   ├─ Add New Product
   ├─ Categories
   └─ Product Gallery

📰 Media Coverage
   ├─ All Articles
   ├─ Add News Item
   └─ Press Releases

💼 Careers
   ├─ Job Listings
   ├─ Post New Job
   ├─ Applications
   └─ Candidate Database

📁 Media Library
   ├─ All Media
   ├─ Upload Files
   └─ File Manager

👥 Users
   ├─ All Users
   ├─ Add New User
   └─ Roles & Permissions

⚙️ Settings
   ├─ General Settings
   ├─ SEO Settings
   ├─ Contact Information
   └─ System Configuration
```

---

## 3. Page Management Interface

### 3.1 Page Editor Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│                          PAGE EDITOR                                │
├─────────────────────────────────────────────────────────────────────┤
│ Page Title: [About Jsons Group                                   ] │
│ URL Slug:   [/about-us                                          ] │
│                                                                     │
│ ┌─────────────────────────────────────────┐ ┌─────────────────────┐ │
│ │              CONTENT EDITOR             │ │     PAGE SETTINGS   │ │
│ │                                         │ │                     │ │
│ │  [B] [I] [U] [Link] [Image] [Video]     │ │ Status: [Published▼]│ │
│ │  ─────────────────────────────────────  │ │                     │ │
│ │                                         │ │ Publish Date:       │ │
│ │  Jsons Group has been a leading         │ │ [2025-09-25      ] │ │
│ │  manufacturer in metal casting and      │ │                     │ │
│ │  precision engineering since...         │ │ Author: Admin       │ │
│ │                                         │ │                     │ │
│ │  [+ Add Component Block]               │ │ SEO Settings:       │ │
│ │                                         │ │ Meta Title:         │ │
│ │                                         │ │ [About Us - Jsons] │ │
│ │                                         │ │                     │ │
│ │                                         │ │ Meta Description:   │ │
│ │                                         │ │ [Leading manufact-] │ │
│ │                                         │ │ [uring company...] │ │
│ └─────────────────────────────────────────┘ └─────────────────────┘ │
│                                                                     │
│ [Save Draft] [Preview] [Publish] [Cancel]                           │
└─────────────────────────────────────────────────────────────────────┘
```

### 3.2 Component Blocks System

```
Available Component Blocks:

┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│   Text Block    │ │  Image Gallery  │ │  Video Embed    │
│                 │ │                 │ │                 │
│ ████████████    │ │ [img] [img]     │ │ ▶ [Video Title] │
│ ████████        │ │ [img] [img]     │ │ [Description]   │
│ ████████████    │ │                 │ │                 │
└─────────────────┘ └─────────────────┘ └─────────────────┘

┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│  Product Grid   │ │  Contact Form   │ │  Testimonials   │
│                 │ │                 │ │                 │
│ [Product A]     │ │ Name: [______]  │ │ "Great service" │
│ [Product B]     │ │ Email: [_____]  │ │ - John Doe      │
│ [Product C]     │ │ Message: [___]  │ │ ⭐⭐⭐⭐⭐         │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

---

## 4. Product Management Interface

### 4.1 Product Catalog View

```
┌─────────────────────────────────────────────────────────────────────┐
│                        PRODUCT MANAGEMENT                           │
├─────────────────────────────────────────────────────────────────────┤
│ [+ Add New Product] [Bulk Actions ▼] [Export CSV]     🔍[Search...] │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│ Filters: [All Categories ▼] [Status ▼] [Sort: Name A-Z ▼]          │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ ☑ Steel Casting Components              Category: Heavy Industry │ │
│ │   📷 [Thumbnail] Status: Published      Modified: 2 days ago    │ │
│ │   📝 Precision steel castings for...    [Edit] [Delete]         │ │
│ ├─────────────────────────────────────────────────────────────────┤ │
│ │ ☑ Aluminum Precision Parts              Category: Aerospace     │ │
│ │   📷 [Thumbnail] Status: Draft           Modified: 1 week ago   │ │
│ │   📝 High-precision aluminum parts...    [Edit] [Delete]        │ │
│ ├─────────────────────────────────────────────────────────────────┤ │
│ │ ☑ Heat Treatment Services               Category: Services      │ │
│ │   📷 [Thumbnail] Status: Published      Modified: 3 days ago   │ │
│ │   📝 Complete heat treatment facility... [Edit] [Delete]        │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ Showing 1-10 of 45 products    [← Previous] [1] [2] [3] [Next →]   │
└─────────────────────────────────────────────────────────────────────┘
```

### 4.2 Add/Edit Product Form

```
┌─────────────────────────────────────────────────────────────────────┐
│                         ADD NEW PRODUCT                             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│ Product Name: [Steel Casting Components                          ] │
│ Category: [Heavy Industry ▼]                                       │
│ Status: [Published ▼]                                              │
│                                                                     │
│ ┌─────────────────────────────┐ ┌─────────────────────────────────┐ │
│ │         DESCRIPTION         │ │        PRODUCT IMAGES           │ │
│ │                             │ │                                 │ │
│ │ High-quality steel casting  │ │ Primary Image:                  │ │
│ │ components manufactured     │ │ ┌─────────────────────────────┐ │ │
│ │ using advanced foundry      │ │ │      [Upload Image]         │ │ │
│ │ techniques...               │ │ │     [Drag & Drop Area]      │ │ │
│ │                             │ │ └─────────────────────────────┘ │ │
│ │ SPECIFICATIONS:             │ │                                 │ │
│ │ • Material: Cast Steel      │ │ Gallery Images:                 │ │
│ │ • Weight: 5-500 kg          │ │ [img] [img] [img] [+ Add More]  │ │
│ │ • Tolerance: ±0.1mm         │ │                                 │ │
│ └─────────────────────────────┘ └─────────────────────────────────┘ │
│                                                                     │
│ SEO Settings:                                                       │
│ Meta Title: [Steel Casting Components - Jsons Group             ] │
│ Meta Description: [High-quality steel casting components...     ] │
│                                                                     │
│ [Save Draft] [Preview] [Publish] [Cancel]                           │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 5. Media Library Interface

### 5.1 Media Library Grid View

```
┌─────────────────────────────────────────────────────────────────────┐
│                         MEDIA LIBRARY                               │
├─────────────────────────────────────────────────────────────────────┤
│ [📤 Upload Files] [Create Folder] [Bulk Actions ▼]  🔍[Search...]   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│ View: [Grid 🔲] [List 📋]  |  Filter: [All Files ▼] [Date ▼]       │
│                                                                     │
│ Path: / Media Library / Images / Products                           │
│                                                                     │
│ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐                     │
│ │📁   │ │🖼️   │ │🖼️   │ │📄   │ │🎥   │ │🖼️   │                     │
│ │Prod │ │cast1│ │furn2│ │spec.│ │tour.│ │team │                     │
│ │ucts │ │.jpg │ │.jpg │ │pdf  │ │mp4  │ │.jpg │                     │
│ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘                     │
│                                                                     │
│ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐                     │
│ │🖼️   │ │📄   │ │🖼️   │ │🖼️   │ │📄   │ │     │                     │
│ │fact │ │cert.│ │logo │ │off1 │ │cat. │ │     │                     │
│ │ory1 │ │pdf  │ │.png │ │.jpg │ │pdf  │ │     │                     │
│ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘                     │
│                                                                     │
│ Storage Used: 245 MB / 5 GB     Files: 127     [View Details]      │
└─────────────────────────────────────────────────────────────────────┘
```

### 5.2 File Upload Interface

```
┌─────────────────────────────────────────────────────────────────────┐
│                          UPLOAD FILES                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │                    DRAG & DROP AREA                             │ │
│ │                                                                 │ │
│ │                    📤 Drop files here                           │ │
│ │                                                                 │ │
│ │               or [Choose Files] to upload                       │ │
│ │                                                                 │ │
│ │            Supported: JPG, PNG, WebP, PDF, DOC, MP4            │ │
│ │                     Max size: 50MB per file                     │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ Upload Progress:                                                    │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ ✅ casting-process.jpg (2.3 MB) - Uploaded                      │ │
│ │ ⏳ factory-tour-video.mp4 (45 MB) - 67% ████████████▒▒▒▒▒      │ │
│ │ ⏸️ product-catalog.pdf (12 MB) - Paused                         │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ [Pause All] [Resume All] [Cancel Upload]                            │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 6. User Management Interface

### 6.1 User List View

```
┌─────────────────────────────────────────────────────────────────────┐
│                        USER MANAGEMENT                              │
├─────────────────────────────────────────────────────────────────────┤
│ [+ Add New User] [Bulk Actions ▼] [Export Users]    🔍[Search...]   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│ Filter: [All Roles ▼] [Status ▼] [Last Login ▼]                    │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ ☑ 👤 Rajesh Kumar                       Role: Super Admin       │ │
│ │     rajesh@jsonsgroup.com               Last Login: 2 hours ago │ │
│ │     Created: 2025-01-15                 Status: ✅ Active       │ │
│ │     [Edit] [View Profile] [Disable]                            │ │
│ ├─────────────────────────────────────────────────────────────────┤ │
│ │ ☑ 👤 Priya Sharma                       Role: Editor           │ │
│ │     priya.sharma@jsonsgroup.com         Last Login: 1 day ago  │ │
│ │     Created: 2025-02-20                 Status: ✅ Active       │ │
│ │     [Edit] [View Profile] [Disable]                            │ │
│ ├─────────────────────────────────────────────────────────────────┤ │
│ │ ☑ 👤 Amit Patel                         Role: Contributor      │ │
│ │     amit.patel@jsonsgroup.com           Last Login: 3 days ago │ │
│ │     Created: 2025-03-10                 Status: 🔸 Pending     │ │
│ │     [Edit] [View Profile] [Activate]                           │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ Showing 1-10 of 25 users      [← Previous] [1] [2] [3] [Next →]    │
└─────────────────────────────────────────────────────────────────────┘
```

### 6.2 Add/Edit User Form

```
┌─────────────────────────────────────────────────────────────────────┐
│                         ADD NEW USER                                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│ ┌─────────────────────────────┐ ┌─────────────────────────────────┐ │
│ │      BASIC INFORMATION      │ │         PERMISSIONS             │ │
│ │                             │ │                                 │ │
│ │ Full Name:                  │ │ User Role:                      │ │
│ │ [Suresh Gupta            ] │ │ ○ Super Admin                   │ │
│ │                             │ │ ○ Administrator                 │ │
│ │ Email Address:              │ │ ● Editor                        │ │
│ │ [suresh@jsonsgroup.com   ] │ │ ○ Contributor                   │ │
│ │                             │ │ ○ Viewer                        │ │
│ │ Password:                   │ │                                 │ │
│ │ [******************      ] │ │ Account Status:                 │ │
│ │                             │ │ ○ Active                        │ │
│ │ Confirm Password:           │ │ ● Pending Activation            │ │
│ │ [******************      ] │ │ ○ Suspended                     │ │
│ │                             │ │                                 │ │
│ │ Department:                 │ │ Send Welcome Email:             │ │
│ │ [Marketing              ] │ │ ☑ Send login credentials        │ │
│ │                             │ │                                 │ │
│ │ Phone:                      │ │ Two-Factor Authentication:      │ │
│ │ [+91 98765 43210        ] │ │ ☐ Require 2FA                   │ │
│ └─────────────────────────────┘ └─────────────────────────────────┘ │
│                                                                     │
│ [Create User] [Send Invitation] [Cancel]                            │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 7. Career Management Interface

### 7.1 Job Listings Dashboard

```
┌─────────────────────────────────────────────────────────────────────┐
│                       CAREER MANAGEMENT                             │
├─────────────────────────────────────────────────────────────────────┤
│ [+ Post New Job] [Bulk Actions ▼] [Export Report]   🔍[Search...]   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│ ┌─────────────────────┐ ┌─────────────────┐ ┌─────────────────────┐ │
│ │   ACTIVE JOBS       │ │   APPLICATIONS  │ │    CANDIDATES       │ │
│ │        12           │ │       47        │ │        156          │ │
│ │   📈 +2 this week   │ │  📧 +8 new     │ │   👥 in database    │ │
│ └─────────────────────┘ └─────────────────┘ └─────────────────────┘ │
│                                                                     │
│ Filter: [All Departments ▼] [Status ▼] [Location ▼]                │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ 🔵 Production Manager                     🏢 Jsons Foundry      │ │
│ │    Full-time • Mumbai • Posted: 5 days ago                     │ │
│ │    Applications: 12 📧 | Deadline: Oct 15, 2025               │ │
│ │    [View Job] [Edit] [View Applications] [Mark Filled]          │ │
│ ├─────────────────────────────────────────────────────────────────┤ │
│ │ 🔵 Quality Control Engineer               🏢 Western Precicast  │ │
│ │    Full-time • Pune • Posted: 1 week ago                       │ │
│ │    Applications: 8 📧 | Deadline: Oct 20, 2025                │ │
│ │    [View Job] [Edit] [View Applications] [Mark Filled]          │ │
│ ├─────────────────────────────────────────────────────────────────┤ │
│ │ 🟡 Sales Executive                        🏢 ASSJ Flow Eng.    │ │
│ │    Full-time • Delhi • Posted: 2 weeks ago                     │ │
│ │    Applications: 25 📧 | Deadline: Expired ⚠️                  │ │
│ │    [View Job] [Edit] [Extend Deadline] [Archive]               │ │
│ └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

### 7.2 Application Management View

```
┌─────────────────────────────────────────────────────────────────────┐
│                     JOB APPLICATIONS                                │
│                   Production Manager - Jsons Foundry               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│ Filter: [All Status ▼] [Experience ▼] [Date Applied ▼]             │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ 👤 Rohit Mehta                           Status: 🔍 Under Review │ │
│ │    📧 rohit.mehta@email.com             Applied: 3 days ago     │ │
│ │    📱 +91 98765 43210                    Experience: 8 years    │ │
│ │    📄 Resume: production-manager-resume.pdf                     │ │
│ │    💬 Cover Letter: "I am excited to apply..."                  │ │
│ │    [View Details] [Schedule Interview] [Shortlist] [Reject]     │ │
│ ├─────────────────────────────────────────────────────────────────┤ │
│ │ 👤 Neha Singh                            Status: ✅ Shortlisted │ │
│ │    📧 neha.singh@email.com              Applied: 5 days ago     │ │
│ │    📱 +91 87654 32109                    Experience: 12 years   │ │
│ │    📄 Resume: neha-singh-cv.pdf                                 │ │
│ │    💬 Cover Letter: "With over 12 years..."                    │ │
│ │    [View Details] [Schedule Interview] [Send Email] [Remove]    │ │
│ ├─────────────────────────────────────────────────────────────────┤ │
│ │ 👤 Arjun Kumar                           Status: ❌ Rejected    │ │
│ │    📧 arjun.kumar@email.com             Applied: 1 week ago    │ │
│ │    📱 +91 76543 21098                    Experience: 3 years    │ │
│ │    📄 Resume: arjun-resume.pdf                                  │ │
│ │    💬 Rejection Reason: Insufficient experience                 │ │
│ │    [View Details] [Reconsider] [Archive]                       │ │
│ └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 8. Frontend Public Website Mockup

### 8.1 Homepage Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│                    JSONS GROUP - HOMEPAGE                           │
├─────────────────────────────────────────────────────────────────────┤
│ [Logo] Jsons Group    Home About Groups Products Media Careers Contact│
│                                           🔍[Search] 🌐[EN] [Login]  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│ ██████████████████████████████████████████████████████████████████  │
│ █                     HERO SECTION                              █   │
│ █                                                               █   │
│ █    Leading Metal Casting & Manufacturing Solutions           █   │
│ █                                                               █   │
│ █    [Explore Our Companies] [View Products] [Contact Us]      █   │
│ ██████████████████████████████████████████████████████████████████  │
│                                                                     │
│ ┌───────────────────┐ ┌───────────────────┐ ┌───────────────────┐   │
│ │   OUR COMPANIES   │ │     PRODUCTS      │ │    CAPABILITIES   │   │
│ │                   │ │                   │ │                   │   │
│ │ 🏢 6 Specialized   │ │ 🛠️ 500+ Products  │ │ ⚙️ Advanced Tech  │   │
│ │    Companies      │ │    In Catalog     │ │    & Equipment    │   │
│ │                   │ │                   │ │                   │   │
│ │ [Learn More]      │ │ [View Catalog]    │ │ [Our Facilities]  │   │
│ └───────────────────┘ └───────────────────┘ └───────────────────┘   │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │                      LATEST NEWS & UPDATES                      │ │
│ │                                                                 │ │
│ │ 📰 New Heat Treatment Facility Commissioned                     │ │
│ │ 📰 Jsons Group Wins Excellence Award 2025                      │ │
│ │ 📰 Expansion of Western Precicast Unit II                       │ │
│ │                                          [View All News]       │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ Footer: About | Privacy | Terms | Contact | Social Media Links     │
└─────────────────────────────────────────────────────────────────────┘
```

### 8.2 Product Catalog Page

```
┌─────────────────────────────────────────────────────────────────────┐
│                       PRODUCT CATALOG                               │
├─────────────────────────────────────────────────────────────────────┤
│ Home > Products                                                     │
│                                                                     │
│ ┌─────────────────────┐ ┌───────────────────────────────────────────┐ │
│ │      FILTERS        │ │            PRODUCT GRID                   │ │
│ │                     │ │                                           │ │
│ │ Categories:         │ │ Sort by: [Featured ▼]      🔍[Search...]  │ │
│ │ ☑ Steel Casting     │ │                                           │ │
│ │ ☐ Aluminum Parts    │ │ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐          │ │
│ │ ☐ Heat Treatment    │ │ │[img]│ │[img]│ │[img]│ │[img]│          │ │
│ │ ☐ Machining         │ │ │Prod1│ │Prod2│ │Prod3│ │Prod4│          │ │
│ │                     │ │ └─────┘ └─────┘ └─────┘ └─────┘          │ │
│ │ Company:            │ │                                           │ │
│ │ ☑ Jsons Foundry     │ │ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐          │ │
│ │ ☐ Western Precicast │ │ │[img]│ │[img]│ │[img]│ │[img]│          │ │
│ │ ☐ ASSJ Flow         │ │ │Prod5│ │Prod6│ │Prod7│ │Prod8│          │ │
│ │                     │ │ └─────┘ └─────┘ └─────┘ └─────┘          │ │
│ │ [Reset Filters]     │ │                                           │ │
│ └─────────────────────┘ │ [View More Products]                      │ │
│                         └───────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 9. Mobile Responsive Design

### 9.1 Mobile Dashboard (375px)

```
┌─────────────────────────┐
│    JSONS GROUP CMS      │
├─────────────────────────┤
│ ☰ Menu         👤 User │
├─────────────────────────┤
│                         │
│    📊 DASHBOARD         │
│                         │
│ ┌─────────┐ ┌─────────┐ │
│ │  Pages  │ │Products │ │
│ │   24    │ │   156   │ │
│ └─────────┘ └─────────┘ │
│                         │
│ ┌─────────┐ ┌─────────┐ │
│ │  Users  │ │ Media   │ │
│ │   12    │ │  247MB  │ │
│ └─────────┘ └─────────┘ │
│                         │
│ Recent Activity:        │
│ • Page updated          │
│ • New user added        │
│ • Product published     │
│                         │
│ [+ Quick Add]           │
└─────────────────────────┘
```

### 9.2 Mobile Navigation Menu

```
┌─────────────────────────┐
│      NAVIGATION         │
├─────────────────────────┤
│ 👤 Admin User           │
│    admin@jsons.com      │
├─────────────────────────┤
│                         │
│ 📊 Dashboard            │
│ 📄 Pages                │
│ 🏢 Companies            │
│ 🛠️ Products             │
│ 📰 Media Coverage       │
│ 💼 Careers              │
│ 📁 Media Library        │
│ 👥 Users                │
│ ⚙️ Settings             │
│                         │
├─────────────────────────┤
│ 🔓 Logout               │
└─────────────────────────┘
```

---

## 10. Interactive Elements & States

### 10.1 Button States

```css
Primary Button States:
┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│   Normal    │ │    Hover    │ │   Active    │ │  Disabled   │
│ [Save Page] │ │ [Save Page] │ │ [Save Page] │ │ [Save Page] │
│   #1E3A8A   │ │   #1E40AF   │ │   #1E40AF   │ │   #9CA3AF   │
└─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘

Secondary Button States:
┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│   Normal    │ │    Hover    │ │   Active    │ │  Disabled   │
│  [Cancel]   │ │  [Cancel]   │ │  [Cancel]   │ │  [Cancel]   │
│   #64748B   │ │   #475569   │ │   #334155   │ │   #D1D5DB   │
└─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘
```

### 10.2 Form Input States

```css
Input Field States:
┌─────────────────────────┐ ┌─────────────────────────┐
│      Normal State       │ │      Focus State        │
│ [Enter page title...  ] │ │ [Enter page title...  ] │
│ Border: #D1D5DB         │ │ Border: #3B82F6         │
└─────────────────────────┘ └─────────────────────────┘

┌─────────────────────────┐ ┌─────────────────────────┐
│      Error State        │ │      Success State      │
│ [                     ] │ │ [Page saved successfully] │
│ Border: #EF4444         │ │ Border: #10B981         │
│ ❌ Field is required    │ │ ✅ Changes saved        │
└─────────────────────────┘ └─────────────────────────┘
```

### 10.3 Loading States

```css
Content Loading:
┌─────────────────────────────────────────┐
│  Loading Page Content...                │
│  ████████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒      │
│  Please wait while we load your data    │
└─────────────────────────────────────────┘

Button Loading:
┌─────────────┐
│ ⏳ Saving... │
└─────────────┘
```

---

## 11. Implementation Notes

### 11.1 Responsive Breakpoints

```css
Mobile:     320px - 768px
Tablet:     768px - 1024px
Desktop:    1024px - 1440px
Large:      1440px+
```

### 11.2 Animation Specifications

```css
Page Transitions:    300ms ease-in-out
Button Hover:        150ms ease-in-out
Modal Fade:          250ms ease-in-out
Loading Spinner:     1000ms linear infinite
Toast Notifications: 300ms slide-up
```

### 11.3 Accessibility Requirements

- ARIA labels for all interactive elements
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Focus indicators for all focusable elements
- Alt text for all images
- Semantic HTML structure

---

## 12. Development Guidelines

### 12.1 Component Structure

```
/components
  /admin
    /Dashboard
    /PageEditor
    /ProductManager
    /UserManager
    /MediaLibrary
  /common
    /Button
    /Input
    /Modal
    /Navigation
  /frontend
    /Header
    /Footer
    /ProductGrid
    /ContactForm
```

### 12.2 Styling Architecture

```css
Tailwind CSS Configuration:
- Custom color palette
- Component utility classes
- Responsive design utilities
- Animation classes
- Print-specific styles
```

---

This mockup document serves as a comprehensive visual guide for implementing the Jsons Group CMS interface. All designs should maintain consistency with the established brand guidelines and ensure optimal user experience across all device types.

---

_Document created for Jsons Group CMS Project_
_Version 1.0 - September 25, 2025_
