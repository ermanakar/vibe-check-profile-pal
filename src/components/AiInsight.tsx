
import React from 'react';
import { cn } from '@/lib/utils';

interface AiInsightProps {
  insightText?: string;
  className?: string;
}

const AiInsight: React.FC<AiInsightProps> = ({ 
  insightText, 
  className 
}) => {
  if (!insightText) return null;
  
  return (
    <div className={cn(
      "bg-gradient-to-r from-insight-purple to-insight-blue p-6 rounded-2xl shadow-sm", 
      className
    )}>
      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
        <span className="inline-block w-5 h-5">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" />
            <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
        AI First Impression
      </h3>
      <p className="text-sm leading-relaxed">{insightText}</p>
    </div>
  );
};

export default AiInsight;
