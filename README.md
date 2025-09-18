# ProFix Contractors Website

A professional, mobile-first contractor website built with Next.js 15, React 19, and TailwindCSS 4.

## Features

- **Hero Section**: Business branding, service tagline, phone number, and prominent CTA
- **Services Section**: Three main service cards (Plumbing, Electrical, Roofing) with detailed features
- **Testimonials Carousel**: Interactive customer reviews with auto-rotation and manual navigation
- **Before/After Gallery**: Filterable project showcase with category filtering
- **Contact Form**: Comprehensive contact form with service selection and validation
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Professional Styling**: Blue/white color palette with trustworthy, clean design

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19 with TypeScript
- **Styling**: TailwindCSS 4
- **Icons**: Heroicons (SVG)
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd contractor-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and TailwindCSS imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
└── components/
    ├── Hero.tsx             # Hero section with navigation
    ├── Services.tsx         # Services showcase
    ├── Testimonials.tsx     # Customer reviews carousel
    ├── Gallery.tsx          # Before/after project gallery
    ├── Contact.tsx          # Contact form and information
    └── Footer.tsx           # Footer with links and company info
```

## Key Components

### Hero Section
- Responsive navigation with mobile menu
- Business branding and trust indicators
- Prominent call-to-action buttons
- Statistics showcase (years experience, customers, etc.)

### Services Section
- Three main service categories with detailed features
- Interactive service cards with hover effects
- Bundle pricing call-to-action

### Testimonials
- Auto-rotating carousel with manual navigation
- Star ratings and customer details
- Trust badges and certifications

### Gallery
- Filterable project showcase
- Before/after image comparisons
- Category-based filtering system

### Contact Form
- Comprehensive form with validation
- Service selection dropdown
- Business hours and emergency contact info
- Form submission handling with success/error states

## Customization

### Colors
The website uses a professional blue/white color palette defined in TailwindCSS:
- Primary: Blue-600 (#2563eb)
- Secondary: Blue-900 (#1e3a8a)
- Accent: Blue-200 (#dbeafe)
- Background: Gray-50 (#f9fafb)

### Content
Update the following files to customize content:
- `src/components/Hero.tsx` - Business name, tagline, phone number
- `src/components/Services.tsx` - Service descriptions and features
- `src/components/Testimonials.tsx` - Customer reviews
- `src/components/Gallery.tsx` - Project showcase
- `src/components/Contact.tsx` - Contact information and form

### Styling
All styling is handled through TailwindCSS classes. The design is fully responsive and follows mobile-first principles.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for optimal loading
- **SEO Optimized**: Proper meta tags and structured data
- **Mobile Performance**: Optimized for mobile devices
- **Accessibility**: WCAG compliant components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is licensed under the MIT License.

## Support

For support or questions about this website template, please contact the development team.