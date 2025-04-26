
import React from 'react';
import { Image } from 'lucide-react';

interface EmptyStateProps {
  message: string;
  icon?: React.ReactNode;
  className?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ 
  message, 
  icon = <Image className="w-12 h-12 text-muted-foreground" />,
  className = '' 
}) => {
  return (
    <div className={`flex flex-col items-center justify-center p-8 text-center ${className}`}>
      <div className="mb-4 text-muted-foreground">
        {icon}
      </div>
      <p className="text-muted-foreground text-sm">{message}</p>
    </div>
  );
};

export default EmptyState;
