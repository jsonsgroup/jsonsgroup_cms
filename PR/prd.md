# Project Requirements Document (PRD)

## Custom Content Management System for Jsons Group

---

### Document Information

- **Project Name:** Jsons Group Custom CMS
- **Client:** Jsons Group (Metal Casting & Manufacturing Industry)
- **Project Manager:** [To be assigned]
- **Document Version:** 1.0
- **Date:** September 25, 2025
- **Document Status:** Draft

---

## 1. Executive Summary

### 1.1 Project Overview

Jsons Group requires a custom-built Content Management System (CMS) using NextJS and MongoDB to manage their multi-company manufacturing portfolio. The system will serve as a centralized platform for managing content across all group companies, products, media coverage, careers, and contact information while providing role-based access control for different user types.

### 1.2 Business Objectives

- Centralize content management across all Jsons Group companies
- Provide dynamic content updates without technical dependency
- Enhance user experience with responsive, fast-loading pages
- Implement secure role-based access control
- Support scalable content structure for future growth
- Improve SEO performance and search visibility

### 1.3 Project Scope

**In Scope:**

- Custom CMS development using NextJS and MongoDB
- Multi-company content management
- User authentication and authorization system
- Responsive web design
- Content categorization and media management
- Career portal functionality
- Contact management system
- Search functionality
- SEO optimization features

**Out of Scope:**

- E-commerce functionality
- Third-party integrations (CRM, ERP)
- Advanced analytics and reporting
- Mobile application development

---

## 2. Project Background & Context

### 2.1 Company Profile

Jsons Group is a leading metal casting and manufacturing conglomerate comprising multiple specialized companies:

- **Jsons Foundry Pvt. Ltd.** - Gas analysis, heat treatment, hydro testing
- **Western Precicast Pvt. Ltd.** - Sand mixture, molding, core making
- **Western Precicast Pvt. Ltd. Unit II** - Heat treatment facilities
- **Maindflow Controls Pvt. Ltd** - VTL and CNC machining
- **ASSJ Flow Engineering Pvt Ltd** - Sub-assembly parts manufacturing

### 2.2 Current Challenges

- Fragmented content management across multiple platforms
- Limited ability to update content dynamically
- Lack of centralized user management
- Poor content organization and searchability
- Inconsistent brand presentation across digital channels

### 2.3 Success Metrics

- 100% content update capability by non-technical users
- < 3 second page load times
- 95% mobile responsiveness score
- Zero unauthorized access incidents
- 50% reduction in content update time

---

## 3. Technical Requirements

### 3.1 Technology Stack

**Frontend:**

- NextJS 14+ (App Router)
- React 18+
- TypeScript
- Tailwind CSS
- Responsive design framework

**Backend:**

- NextJS API Routes
- Node.js runtime environment
- RESTful API architecture

**Database:**

- MongoDB Atlas (Cloud-hosted)
- Mongoose ODM
- Document-based data structure

**Authentication:**

- NextAuth.js
- JWT tokens
- Role-based access control (RBAC)
- Session management

**Infrastructure:**

- AWS Amplify (recommended)
- AWS S3 for media storage
- CDN for static assets
- SSL certificate implementation

### 3.2 Performance Requirements

- Page load time: < 3 seconds
- Core Web Vitals compliance
- 95+ Lighthouse performance score
- Mobile-first responsive design
- Cross-browser compatibility (Chrome, Firefox, Safari, Edge)

### 3.3 Security Requirements

- HTTPS encryption
- Data validation and sanitization
- Secure file upload handling
- Role-based access control
- Session timeout management

---

## 4. Functional Requirements

### 4.1 Navigation Structure

The CMS must support the following main navigation:

1. **Home** - Dynamic homepage with featured content
2. **About** - Company history, mission, values
3. **Group of Companies**
   - Jsons Foundry Pvt. Ltd.
   - Western Precicast I
   - Western Precicast II
   - Mai Industry
   - Maindflow Engineering
   - ASSJ Flow Engineering
   - External website links management
4. **Products** - Category-wise grouped gallery display
5. **Media Coverage** - News, press releases, awards
6. **Careers** - Job postings, applications management
7. **Contact Us** - Multiple contact forms, location information

### 4.2 Content Management Features

#### 4.2.1 Page Content Management

- WYSIWYG editor with rich text formatting
- Image and media embedding
- SEO meta tags management
- URL slug customization
- Content scheduling and publishing
- Draft and published states

#### 4.2.2 Media Management

- File upload with drag-and-drop interface
- Image optimization and compression
- Multiple file format support (JPG, PNG, WebP, PDF, DOC)
- Media library with search and filtering
- Bulk upload functionality
- Alt text and caption management
- File size and format restrictions

#### 4.2.3 Product Management

- Product category creation and management
- Product gallery with image management
- Technical specifications editor
- Product catalog organization
- Search and filtering capabilities
- Product comparison features

#### 4.2.4 Dynamic Component Management

- Reusable content blocks
- Component library (headers, testimonials, galleries)
- Drag-and-drop page builder
- Template system for consistent layouts
- Widget management for sidebars and footers

### 4.3 User Management System

#### 4.3.1 User Roles and Permissions

**Super Administrator:**

- Full system access
- User management and role assignment
- System settings and configuration
- Database backup and restore
- Security settings management

**Administrator:**

- Content creation, editing, and deletion
- Media library management
- User management (limited)
- SEO settings management
- Analytics access

**Editor:**

- Content creation and editing
- Media upload and management
- Draft content publishing
- Comment moderation

**Contributor:**

- Content creation (draft only)
- Limited media upload
- Profile management

**Viewer:**

- Read-only access to content
- Dashboard viewing privileges

#### 4.3.2 Authentication Features

- Secure login with email/password
- Password reset functionality
- Account lockout after failed attempts
- Remember me functionality
- Session timeout management

### 4.4 Career Management Module

#### 4.4.1 Job Posting Management

- Job position creation and editing
- Application deadline management
- Job category and location filtering
- Application tracking system
- Candidate resume management
- Interview scheduling interface

#### 4.4.2 Application Processing

- Online application forms
- Application status tracking
- Email notifications to candidates
- Applicant database management

### 4.5 Contact Management System

#### 4.5.1 Contact Forms

- Multiple contact form types
- Custom field creation
- Spam protection (CAPTCHA)
- Email notification system
- Inquiry categorization

#### 4.5.2 Contact Information Management

- Multiple office locations
- Contact person management
- Social media links
- Interactive maps integration
- Business hours display

---

## 5. User Interface Requirements

### 5.1 Design Principles

- Clean, professional manufacturing industry aesthetic
- Intuitive navigation and user experience
- Mobile-first responsive design
- Accessibility compliance (WCAG 2.1 AA)
- Fast loading animations and transitions
- Consistent branding across all pages

### 5.2 Admin Dashboard Requirements

- Modern, intuitive administrative interface
- Quick access to frequently used functions
- Dashboard with key metrics and recent activity
- Bulk operations for content management
- Advanced search and filtering options
- Export capabilities for data and reports

### 5.3 Frontend User Experience

- Fast, responsive page loading
- Search functionality with auto-suggestions
- Breadcrumb navigation
- Social media sharing buttons
- Print-friendly page layouts
- Contact form with real-time validation

---

## 6. Database Schema Design

### 6.1 Collections Structure

#### Users Collection

```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  role: String (enum: ['super_admin', 'admin', 'editor', 'contributor', 'viewer']),
  avatar: String,
  isActive: Boolean,
  lastLogin: Date,
  createdAt: Date,
  updatedAt: Date
}
```

#### Pages Collection

```javascript
{
  _id: ObjectId,
  title: String,
  slug: String (unique),
  content: Object,
  metaTitle: String,
  metaDescription: String,
  status: String (enum: ['draft', 'published']),
  author: ObjectId (ref: User),
  publishedAt: Date,
  components: Array,
  seoSettings: Object,
  createdAt: Date,
  updatedAt: Date
}
```

#### Products Collection

```javascript
{
  _id: ObjectId,
  name: String,
  category: ObjectId (ref: Category),
  description: String,
  specifications: Object,
  images: Array,
  gallery: Array,
  status: String,
  featured: Boolean,
  order: Number,
  createdAt: Date,
  updatedAt: Date
}
```

#### Media Collection

```javascript
{
  _id: ObjectId,
  filename: String,
  originalName: String,
  mimeType: String,
  size: Number,
  url: String,
  altText: String,
  caption: String,
  uploadedBy: ObjectId (ref: User),
  createdAt: Date
}
```

#### Jobs Collection

```javascript
{
  _id: ObjectId,
  title: String,
  department: String,
  location: String,
  type: String (enum: ['full-time', 'part-time', 'contract']),
  description: String,
  requirements: String,
  applicationDeadline: Date,
  status: String (enum: ['active', 'closed']),
  applications: Array,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 7. API Specifications

### 7.1 Authentication APIs

- `POST /api/auth/login` - User authentication
- `POST /api/auth/logout` - User session termination
- `POST /api/auth/register` - New user registration
- `POST /api/auth/forgot-password` - Password reset request
- `PUT /api/auth/reset-password` - Password reset confirmation

### 7.2 Content Management APIs

- `GET /api/pages` - Retrieve page list
- `POST /api/pages` - Create new page
- `PUT /api/pages/:id` - Update existing page
- `DELETE /api/pages/:id` - Delete page
- `POST /api/pages/:id/publish` - Publish page

### 7.3 Media Management APIs

- `GET /api/media` - Retrieve media library
- `POST /api/media/upload` - File upload
- `DELETE /api/media/:id` - Delete media file
- `PUT /api/media/:id` - Update media metadata

### 7.4 User Management APIs

- `GET /api/users` - Retrieve user list
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user information
- `DELETE /api/users/:id` - Delete user account
- `PUT /api/users/:id/role` - Update user role

---

## 9. Quality Assurance Requirements

### 9.1 Testing Strategy

- Unit testing for all API endpoints
- Integration testing for database operations
- User interface testing across devices
- Performance testing under load conditions
- Security penetration testing
- Accessibility compliance testing

### 9.2 Code Quality Standards

- Code review process for all commits
- Automated testing pipeline
- Documentation for all functions and components

---

## 11. Risk Assessment & Mitigation

### 11.1 Technical Risks

**Risk:** Database performance issues with large content volumes
**Mitigation:** Implement proper indexing, caching strategies, and pagination

**Risk:** Security vulnerabilities in user authentication
**Mitigation:** Use established libraries (NextAuth.js), regular security audits

**Risk:** Poor performance on mobile devices
**Mitigation:** Mobile-first development approach, performance testing

### 11.2 Business Risks

**Risk:** User adoption and training challenges
**Mitigation:** Comprehensive training program, intuitive UI design

**Risk:** Data loss during migration
**Mitigation:** Multiple backup strategies, staged migration approach
