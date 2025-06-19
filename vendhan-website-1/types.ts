
import React from 'react';

export interface NavLinkItem {
  name: string;
  path: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  client?: string;
  year?: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactElement<{ className?: string; children?: React.ReactNode; }>; 
  imageUrl?: string; // Added for dedicated service image
}

export interface AdminReply {
  id: string;
  text: string;
  timestamp: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  company?: string;
  projectDetails: string;
  timestamp: string;
  status: 'New' | 'Viewed' | 'Contacted' | 'Archived';
  adminReplies?: AdminReply[]; // Added to store admin replies
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  backgroundLight: string;
  backgroundDark: string;
  textLight: string;
  textDark: string;
  textOnPrimary: string;
}

export interface SiteContent {
  companyName: string;
  homeHeroTitle: string;
  homeHeroSubtitle: string;
  homeHeroButtonText: string;
  homeLocationText: string; 
  homeCareersText: string; 
  homeFeatureSectionTitle: string; 
  homeFeature1Title: string; 
  homeFeature1Desc: string; 
  homeFeature2Title: string; 
  homeFeature2Desc: string; 
  homeFeature3Title: string; 
  homeFeature3Desc: string; 
  homeServicesTitle: string;
  homeProjectApproachTitle: string; 
  homeProjectApproachSubtitle: string; 
  homeProjectApproachButtonText: string; 
  aboutPageTitle: string;
  aboutPageParagraph1: string;
  aboutPageParagraph2: string;
  aboutPageMissionTitle: string; 
  aboutPageMissionText: string; 
  aboutPageVisionTitle: string; 
  aboutPageVisionText: string; 
  servicesPageTitle: string;
  servicesPageFeaturedTitle: string; 
  servicesPageFeaturedSubtitle: string; 
  servicesPageFeaturedImageUrl: string; 
  servicesPageApproachTitle: string; 
  servicesPageApproachSubtitle: string; 
  servicesPageApproachButtonText: string; 
  portfolioPageTitle: string;
  contactPageTitle: string;
  contactAddress: string; // New
  contactPhone: string; // New
  contactEmail: string; // New
  contactBusinessHours: string; // New
  contactMapEmbedUrl: string; // New
  newProjectPageTitle: string;
  newProjectPageSubtitle: string;
  footerText: string;
}

export enum AdminSection {
  Dashboard = 'dashboard',
  ThemeSettings = 'theme',
  ContentManagement = 'content',
  ClientRequests = 'requests',
}

export interface AuthContextType {
  isAuthenticated: boolean;
  login: (username_param: string, password_param: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}