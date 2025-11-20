# NexTrip ✈️

An intelligent, AI-powered travel planning application designed to help users create personalized trip itineraries with ease. Built with modern web technologies and a focus on user experience, this application leverages artificial intelligence to generate custom travel plans tailored to individual preferences, budgets, and interests.

🌍 **NexTrip** - A Full Stack AI Trip Planner built with Next.js, React, TypeScript, Arcjet, Convex, Clerk, Mapbox, and Google Places API.

## Getting Started

These instructions will give you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on deploying the project on a live system.

### Prerequisites

Requirements for the software and other tools to build, test and push:

- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) - Package manager
- [Next.js 16](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Convex](https://www.convex.dev/) - Backend and database service
- [Clerk](https://clerk.com/) - Authentication service
- [Mapbox](https://www.mapbox.com/) - Mapping service
- [Google Places API](https://developers.google.com/maps/documentation/places) - Location data service
- [Arcjet](https://arcjet.com/) - Performance and security optimization

### Installing

A step by step series of examples that tell you how to get a development environment running.

Clone the repository:

    git clone https://github.com/SAADMAN-N/NexTrip.git

Navigate to the project directory:

    cd nexTrip

Install dependencies:

    npm install

Set up environment variables:

    cp .env.example .env.local

Configure your API keys and service credentials in `.env.local`.

Run the development server:

    npm run dev

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Features

### 🎯 Intelligent Trip Planning

- **AI-Powered Itinerary Generation**: Get personalized trip plans based on your preferences, budget, and travel dates
- **Destination Recommendations**: Discover new places tailored to your interests and travel style
- **Activity Suggestions**: Receive curated activity recommendations for each destination
- **Interactive Maps**: Explore destinations with real-time, interactive maps powered by Mapbox
- **Location Intelligence**: Access rich location data and place information via Google Places API

### 🎨 Modern User Interface

- **Responsive Design**: Seamlessly works across desktop, tablet, and mobile devices
- **Dark Mode Support**: Comfortable viewing experience with light and dark theme options
- **Intuitive Navigation**: Clean, user-friendly interface with easy-to-use navigation
- **Beautiful UI Components**: Built with shadcn/ui components for a polished, professional look
- **Interactive Map Integration**: Visualize trip locations and routes with Mapbox's powerful mapping capabilities

### 🚀 Technical Excellence

#### Frontend

- **Next.js 16 App Router**: Built on the latest Next.js framework for optimal performance and SEO
- **React 19**: Leveraging the newest React features for a smooth user experience
- **TypeScript**: Type-safe codebase for better development experience and reliability
- **Tailwind CSS**: Modern, utility-first CSS framework for rapid UI development

#### Backend & Services

- **Convex**: Real-time backend and database for seamless data management and synchronization
- **Clerk**: Secure user authentication and user management system
- **Arcjet**: Performance optimization and security features for enhanced app reliability
- **Mapbox**: Interactive maps and location services for visualizing trip destinations
- **Google Places API**: Comprehensive location data, place details, and search capabilities

#### Architecture

- **Component-Based Architecture**: Modular, reusable components for maintainable code
- **Full Stack Integration**: Seamless connection between frontend and backend services

### 📱 User Experience

- **User Authentication**: Secure sign-up and login powered by Clerk
- **Real-Time Data**: Live updates and synchronization with Convex backend
- **Navigation Menu**: Easy access to Home, Pricing, and Contact pages
- **Call-to-Action Buttons**: Clear pathways for users to get started with trip planning
- **Hero Section**: Engaging landing experience to introduce the service
- **Performance Optimized**: Fast, responsive experience with Arcjet optimization

## What It's Used For

NexTrip is designed for:

- **Travel Enthusiasts**: Individuals who love to travel and want personalized trip recommendations
- **Busy Professionals**: People who want to plan trips efficiently without spending hours researching
- **Adventure Seekers**: Travelers looking to discover new destinations and experiences
- **Budget-Conscious Travelers**: Users who need trip plans that fit within their financial constraints
- **First-Time Travelers**: Those who need guidance and structure when planning their first trips
- **Travel Agencies**: Businesses that want to offer AI-powered trip planning services to their clients

The application simplifies the complex process of trip planning by automating research, itinerary creation, and activity scheduling, allowing users to focus on the excitement of their upcoming journey rather than the logistics of planning it.

## Deployment

Add additional notes to deploy this on a live system.

Build the production version:

    npm run build

Start the production server:

    npm start

For deployment on platforms like Vercel, Netlify, or other hosting services, follow their respective deployment guides and ensure all environment variables are properly configured.

## Built With

- [Next.js](https://nextjs.org/) - React framework for production
- [React](https://react.dev/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Convex](https://www.convex.dev/) - Backend and database
- [Clerk](https://clerk.com/) - Authentication and user management
- [Arcjet](https://arcjet.com/) - Performance and security optimization
- [Mapbox](https://www.mapbox.com/) - Mapping and location services
- [Google Places API](https://developers.google.com/maps/documentation/places) - Location data and place information
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI components

## Acknowledgments

- Hat tip to the tutorial creators and community for inspiration
- Thanks to all the open-source libraries and tools that made this project possible
- Inspiration from modern travel planning applications
