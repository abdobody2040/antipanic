# Overview

This project is a mental health support application designed to help individuals manage anxiety and panic attacks. It's built as a mobile-first web application with a calm, soothing design featuring a bilingual interface (English and Arabic). The app provides immediate crisis support through an SOS feature, guided breathing exercises, journaling capabilities for tracking episodes, and personalized settings. The application uses a modern React-based frontend with Express.js backend infrastructure, though the current implementation focuses heavily on the client-side experience with local data storage.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application is built using React 18 with TypeScript, following a modern component-based architecture. The UI leverages shadcn/ui components built on Radix UI primitives for accessibility and consistent design patterns. The application uses Wouter for lightweight client-side routing and TanStack Query for data management. The design system implements a calm color palette with CSS custom properties for theming, featuring soft blues (#A7C7E7), purples (#CDB4DB), and greens for a soothing user experience.

## State Management & Data Flow
The application uses a combination of React Context for global state (language preferences) and custom hooks for feature-specific state management. Local data persistence is handled through a custom LocalStorage utility class that provides type-safe storage operations. The journal functionality uses optimistic updates with local storage as the primary data source, eliminating the need for complex server synchronization in the current implementation.

## Internationalization & Accessibility
The app implements a comprehensive bilingual system supporting English and Arabic with full RTL (right-to-left) text direction support. Language switching is handled through a React Context provider that automatically updates document direction and language attributes. The translations are managed through a centralized system with type-safe key access, ensuring consistency across the application.

## Mobile-First Design Approach
The application is designed with a mobile-first philosophy, featuring a constrained max-width layout (max-w-md) that simulates a mobile app experience. The responsive design uses Tailwind CSS with custom utility classes for common patterns like fade-in animations and calm-themed components. Touch-friendly interactions and appropriate spacing ensure optimal usability on mobile devices.

## Component Architecture
The application follows a clear separation of concerns with reusable UI components, feature-specific components, and page-level components. Custom components like BreathingCircle implement complex animations and state management for therapeutic features. The component structure promotes reusability while maintaining feature isolation.

## Backend Infrastructure
The backend uses Express.js with TypeScript, implementing a modular route registration system and middleware for logging and error handling. The current implementation includes placeholder storage interfaces that can be extended for database integration. The server setup includes development-time Vite integration for hot module replacement and production-ready static file serving.

# External Dependencies

## UI Framework & Styling
- **React 18**: Core frontend framework with modern hooks and concurrent features
- **Radix UI**: Comprehensive primitive components for accessibility-first UI development
- **Tailwind CSS**: Utility-first CSS framework with custom theming for calm design aesthetics
- **Lucide React**: Consistent icon library for UI elements

## Development & Build Tools
- **Vite**: Modern build tool providing fast development server and optimized production builds
- **TypeScript**: Type safety across the entire application stack
- **ESBuild**: Fast JavaScript bundling for server-side code

## Data Management
- **TanStack Query**: Powerful data fetching and caching library (currently used minimally)
- **Wouter**: Lightweight routing solution for single-page application navigation

## Database & Storage
- **Drizzle ORM**: Type-safe SQL ORM configured for PostgreSQL integration
- **Neon Database**: PostgreSQL-compatible serverless database (configured but not actively used)
- **Local Storage**: Primary data persistence for journal entries and user preferences

## Form Handling & Validation
- **React Hook Form**: Efficient form state management with minimal re-renders
- **Zod**: Schema validation for type-safe data parsing and validation

## Production & Deployment
- **Express.js**: Node.js web application framework for API endpoints
- **CORS & Security Middleware**: Standard security practices for web applications
- **Static File Serving**: Production-ready asset serving capabilities

The application is architected to support future scaling with database integration while maintaining optimal performance through local-first data strategies for immediate user interactions.