
import React from 'react';
import { NavLinkItem, Project, Service, ThemeColors, SiteContent } from './types';

export const NAV_LINKS: NavLinkItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'New Project', path: '/new-project' }, // Added New Project link
  { name: 'Contact', path: '/contact' },
  { name: 'Admin', path: '/admin' },
];

export const PlaceholderIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

export const WebDevIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
);

export const MobileDevIcon: React.FC<{className?: string}> = ({ className }) => (
 <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75A2.25 2.25 0 0015.75 1.5h-2.25m-3.75 0V5.625m3.75-3.75V5.625m0-3.75h.008v.008h-.008V1.5zm-3.75 0h.008v.008h-.008V1.5zm0 0h.008v.008h-.008V1.5zm0 0h.008v.008h-.008V1.5zm0 0h.008v.008h-.008V1.5zM12 12.75h.008v.008H12v-.008z" />
  </svg>
);

export const CloudIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
  </svg>
);

export const UiUxDesignIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.73-.664 1.193-.816M11.42 15.17L5.877 21m5.543-5.83l-2.496 3.03c-.317.384-.73.664-1.193.816m0 0l2.496 3.03m-2.496-3.03L3 17.25A2.652 2.652 0 005.877 21m0 0L11.42 15.17M17.25 21L21 17.25M8.25 3l2.25 2.25M12 3v2.25M15.75 3l-2.25 2.25M3.75 12H6m12 0h2.25m-12 .75L6 12.75m6-9.75L12 6m3.75-2.25L12 6.75M12 6l2.25-2.25M12 6L9.75 3.75M12 6L9.75 8.25m2.25-2.25L12 6m2.25 2.25l2.25-2.25M12 12v9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12H.75m19.5 0h-3M12 3.75V.75m0 19.5v-3" />
    <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


export const INITIAL_SERVICES: Service[] = [
  { 
    id: 'web-dev', 
    title: 'Web Development', 
    description: 'Crafting responsive and high-performance websites tailored to your business needs, focusing on modern architectures and seamless user experiences.', 
    icon: <WebDevIcon />,
    imageUrl: 'https://picsum.photos/seed/serv_webdev/600/450' 
  },
  { 
    id: 'mobile-dev', 
    title: 'Mobile App Development', 
    description: 'Building intuitive and engaging mobile applications for iOS and Android platforms, ensuring optimal performance and cross-device compatibility.', 
    icon: <MobileDevIcon />,
    imageUrl: 'https://picsum.photos/seed/serv_mobile/600/450'
  },
  { 
    id: 'cloud-solutions', 
    title: 'Cloud Solutions', 
    description: 'Leveraging cloud platforms like AWS, Azure, or GCP for scalable, secure, and efficient infrastructure, data storage, and application deployment.', 
    icon: <CloudIcon />,
    imageUrl: 'https://picsum.photos/seed/serv_cloud/600/450'
  },
  { 
    id: 'ui-ux', 
    title: 'UI/UX Design', 
    description: 'Designing user-centric interfaces that offer seamless and delightful experiences, focusing on usability, accessibility, and visual appeal.', 
    icon: <UiUxDesignIcon />,
    imageUrl: 'https://picsum.photos/seed/new_uiux_design/600/450' 
  },
];

export const INITIAL_PROJECTS: Project[] = [
  { id: 'proj1', title: 'E-commerce Platform', description: 'A full-featured online store with payment gateway integration and admin panel.', imageUrl: 'https://picsum.photos/seed/ecomm/600/400', technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'], client: 'Global Retail Inc.', year: 2023 },
  { id: 'proj2', title: 'Project Management Tool', description: 'A collaborative tool for teams to manage tasks, deadlines, and resources efficiently.', imageUrl: 'https://picsum.photos/seed/pmtool/600/400', technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'], client: 'Startup Innovators', year: 2022 },
  { id: 'proj3', title: 'Healthcare Patient Portal', description: 'Secure portal for patients to access medical records and communicate with doctors.', imageUrl: 'https://picsum.photos/seed/health/600/400', technologies: ['Angular', 'Spring Boot', 'PostgreSQL'], client: 'City General Hospital', year: 2023 },
  { id: 'proj4', title: 'AI Powered Chatbot', description: 'An intelligent chatbot for customer support, integrated with various messaging platforms.', imageUrl: 'https://picsum.photos/seed/chatbot/600/400', technologies: ['Python', 'Dialogflow', 'Flask'], client: 'Tech Solutions Ltd.', year: 2024 },
];

export const INITIAL_THEME: ThemeColors = {
  primary: '#DC2626', // red-600
  secondary: '#1F2937', // gray-800
  accent: '#F97316', // orange-500
  backgroundLight: '#F9FAFB', // gray-50
  backgroundDark: '#111827', // gray-900
  textLight: '#F9FAFB', // gray-50 (on dark backgrounds)
  textDark: '#1F2937', // gray-800 (on light backgrounds)
  textOnPrimary: '#FFFFFF', // white
};

export const INITIAL_SITE_CONTENT: SiteContent = {
  companyName: "Vendhan Info Tech",
  homeHeroTitle: "Vendhan Info Technology",
  homeHeroSubtitle: "Empowering Women in IT | Leading Innovation in Technology",
  homeHeroButtonText: "Explore Services",
  homeLocationText: "📍 Located in Oddanchatram",
  homeCareersText: "Explore Career Opportunities with Us",
  homeFeatureSectionTitle: "Why Vendhan Info Technology?",
  homeFeature1Title: "Women-Centric",
  homeFeature1Desc: "Creating opportunities specifically for women in IT.",
  homeFeature2Title: "Professional Growth",
  homeFeature2Desc: "Comprehensive training and career development programs.",
  homeFeature3Title: "Innovation",
  homeFeature3Desc: "Cutting-edge technology solutions and services.",
  homeServicesTitle: "Our Core Services",
  homeProjectApproachTitle: "Let's Build Something Amazing Together",
  homeProjectApproachSubtitle: "Have a vision for a groundbreaking product or a complex challenge to solve? We're passionate about turning innovative ideas into reality. Share your project details with us, and let's explore how our expertise can bring it to life.",
  homeProjectApproachButtonText: "Start the Conversation",
  aboutPageTitle: "About Vendhan Info Tech",
  aboutPageParagraph1: "Vendhan Info Technology is a pioneering women-led IT company based in Oddanchatram, dedicated to creating opportunities for women in the technology sector. We specialize in providing comprehensive IT services including data analysis, technical support, and data management solutions.",
  aboutPageParagraph2: "Our commitment is to deliver exceptional services to our clients, bridge the gender gap in technology, and foster a supportive work environment that nurtures growth and innovation for women.",
  aboutPageMissionTitle: "Our Mission",
  aboutPageMissionText: "To bridge the gender gap in technology while delivering exceptional services to our clients. We believe in empowering women through technology and creating a supportive work environment that fosters growth and innovation.",
  aboutPageVisionTitle: "Our Vision",
  aboutPageVisionText: "To be a leading force in the IT industry, recognized for empowering women in technology and driving innovation from Oddanchatram to the global stage.",
  servicesPageTitle: "Innovative Solutions We Provide",
  servicesPageFeaturedTitle: "Addressing Future Business Challenges",
  servicesPageFeaturedSubtitle: "We partner with visionary companies to navigate the complexities of the digital landscape, delivering bespoke solutions that drive sustainable growth, foster innovation, and create lasting value. Our expertise spans across strategy, design, and technology to turn your ambitious goals into reality.",
  servicesPageFeaturedImageUrl: "https://picsum.photos/seed/services_banner/1200/500",
  servicesPageApproachTitle: "Ready to Transform Your Ideas into Reality?",
  servicesPageApproachSubtitle: "We're here to help you navigate the complexities of technology and build solutions that drive success. Let's discuss your project and how we can achieve your goals together.",
  servicesPageApproachButtonText: "Discuss Your Project",
  portfolioPageTitle: "Our Recent Works",
  contactPageTitle: "Get In Touch With Us",
  contactAddress: "123 Tech Avenue, Oddanchatram, Dindigul District, Tamil Nadu, India",
  contactPhone: "+91 98765 43210",
  contactEmail: "contact@vendhaninfotech.com",
  contactBusinessHours: "Monday - Friday, 9:00 AM - 6:00 PM (IST)",
  contactMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15729.987779374063!2d77.74958284140623!3d10.49503378939987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9dfa7f7988f5f%3A0x8f26a761a3891757!2sOddanchatram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1627546788888!5m2!1sen!2sin", // Example URL, replace with actual
  newProjectPageTitle: "Let's Start Your New Project",
  newProjectPageSubtitle: "Tell us about your project idea. Fill out the form below, and our team will get back to you to discuss how we can bring your vision to life.",
  footerText: `© ${new Date().getFullYear()} Vendhan Info Tech. All rights reserved. Empowering Women in IT.`,
};

// Hardcoded admin credentials (for demonstration purposes)
export const ADMIN_USERNAME = "vit_admin";
export const ADMIN_PASSWORD = "vit_secure_password"; // In a real app, never hardcode passwords. Use a secure backend.