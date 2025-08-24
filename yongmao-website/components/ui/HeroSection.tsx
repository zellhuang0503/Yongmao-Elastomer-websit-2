'use client';

import React from 'react';
import { Button } from './Button';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  primaryButtonText = "探索解決方案",
  primaryButtonHref = "#",
  secondaryButtonText = "聯絡我們",
  secondaryButtonHref = "/contact",
  className = ''
}) => {
  return (
    <section className={`bg-white text-center py-20 md:py-32 ${className}`}>
      <div className="container mx-auto px-6 section-content">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          {subtitle}
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="accent" size="lg">
            <a href={primaryButtonHref}>{primaryButtonText}</a>
          </Button>
          <Button variant="secondary" size="lg">
            <a href={secondaryButtonHref}>{secondaryButtonText}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };