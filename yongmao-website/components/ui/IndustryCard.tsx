'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  className?: string;
  onClick?: () => void;
}

const IndustryCard: React.FC<IndustryCardProps> = ({
  icon: Icon,
  title,
  className = '',
  onClick
}) => {
  return (
    <div 
      className={`p-6 bg-white border border-gray-200 rounded-lg lift-and-shadow cursor-pointer text-center ${className}`}
      onClick={onClick}
    >
      <Icon className="w-10 h-10 mx-auto text-primary mb-3" />
      <h4 className="font-semibold text-primary">{title}</h4>
    </div>
  );
};

export { IndustryCard };