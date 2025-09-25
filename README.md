# Jsons Group CMS

A comprehensive Content Management System built for Jsons Group - a metal casting & manufacturing conglomerate managing 6 specialized companies.

## Features

- **Multi-company Content Management** - Manage content across 6 different companies
- **Role-based Access Control** - Super Admin, Admin, Editor, Contributor, and Viewer roles
- **Rich Text Editor** - WYSIWYG editor with component blocks
- **Product Catalog** - Manage products with categories and image galleries
- **Media Library** - Centralized file management with AWS S3 integration
- **SEO Optimization** - Built-in SEO tools for better search visibility
- **Responsive Design** - Mobile-first admin interface

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, NextAuth.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: NextAuth.js with credentials provider
- **File Storage**: AWS S3 (configured)
- **Rich Text**: React Quill

## Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB (local or cloud)
- AWS Account (for file storage)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jsonsgroup
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Update `.env.local` with your configuration:
```env
MONGODB_URI=mongodb://localhost:27017/jsonsgroup-cms
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
AWS_REGION=us-east-1
AWS_S3_BUCKET=jsonsgroup-media
```

4. Seed the database with default admin user:
```bash
npm run seed
```

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) and sign in with:
   - **Email**: admin@jsonsgroup.com
   - **Password**: admin123

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── admin/             # Admin dashboard pages
│   ├── api/               # API routes
│   └── auth/              # Authentication pages
├── components/            # Reusable UI components
├── lib/                   # Utility functions
├── models/                # Database models
└── types/                 # TypeScript definitions
```

## Companies Managed

1. **Jsons Foundry** - Metal casting and foundry services
2. **Western Precicast I** - Precision casting solutions
3. **Western Precicast II** - Advanced casting technologies
4. **Jsons Engineering** - Engineering and design services
5. **Jsons Precision** - Precision manufacturing
6. **Jsons Industries** - Industrial solutions

## User Roles

- **Super Admin**: Full system access across all companies
- **Admin**: Company-level administration
- **Editor**: Content creation and editing
- **Contributor**: Limited content creation
- **Viewer**: Read-only access

## Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Seed database
npm run seed
```

## Deployment

The application is configured for deployment on AWS Amplify with:
- MongoDB Atlas for database
- AWS S3 for media storage
- Environment variables for configuration

## License

Private - Jsons Group Internal Use Only
