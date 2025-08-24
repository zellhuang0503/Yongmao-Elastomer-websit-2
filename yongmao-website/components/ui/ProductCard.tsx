'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  imageUrl,
  href,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden lift-and-shadow cursor-pointer flex flex-col ${className}`}>
      <Image 
        src={imageUrl} 
        alt={title}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <Link 
          href={href}
          className="text-accent font-bold hover:underline arrow-nudge inline-flex items-center mt-auto self-start"
        >
          查看詳情 <ArrowRight className="w-4 h-4 ml-2 arrow-icon" />
        </Link>
      </div>
    </div>
  );
};

export { ProductCard };