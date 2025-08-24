'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  className = ''
}) => {
  return (
    <div className={`p-6 text-center ${className}`}>
      <Icon className="w-12 h-12 mx-auto text-accent mb-4" />
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export { FeatureCard };