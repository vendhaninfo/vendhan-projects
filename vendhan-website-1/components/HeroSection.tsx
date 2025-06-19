
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContent } from '../contexts/ContentContext';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  imageUrl?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, buttonText, buttonLink, imageUrl }) => {
  const navigate = useNavigate();
  const { content } = useContent();

  const defaultImageUrl = 'https://picsum.photos/seed/hero/1920/1080';
  const bgStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${imageUrl || defaultImageUrl})`,
  };

  return (
    <div
      className="relative bg-cover bg-center py-32 md:py-48 text-center text-white"
      style={bgStyle}
    >
      <div className="container mx-auto px-6 z-10 relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{fontFamily: "'Poppins', sans-serif"}}>{title}</h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto">{subtitle}</p>
        <button
          onClick={() => navigate(buttonLink)}
          className="bg-primary text-text-on-primary font-semibold py-3 px-8 rounded-lg hover:bg-opacity-80 transition duration-300 text-lg transform hover:scale-105"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
