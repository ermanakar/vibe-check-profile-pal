
import React from 'react';
import { Button } from "@/components/ui/button";
import { Search, Edit, Circle } from 'lucide-react';

interface InsightButtonsProps {
  onGetVibeCheck: () => void;
  isGeneratingInsights?: boolean;
  creditsAvailable?: number;
  hasInsights?: boolean;
}

const InsightButtons: React.FC<InsightButtonsProps> = ({
  onGetVibeCheck,
  isGeneratingInsights = false,
  creditsAvailable = 5,
  hasInsights = false
}) => {
  return (
    <div className="flex flex-col gap-4">
      <Button
        onClick={onGetVibeCheck}
        disabled={isGeneratingInsights || creditsAvailable <= 0}
        className="gradient-button gradient-purple h-12"
      >
        {isGeneratingInsights ? (
          <span className="flex items-center gap-2">
            <Circle className="w-4 h-4 animate-pulse" /> Generating Insights...
          </span>
        ) : hasInsights ? (
          <span className="flex items-center gap-2">
            <Search className="w-4 h-4" /> Get Updated Vibe Check
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Search className="w-4 h-4" /> Get the Full Vibe Check
          </span>
        )}
      </Button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button
          variant="outline"
          className="border-purple border-2 text-purple hover:bg-purple-light hover:text-white h-12"
        >
          <span className="flex items-center gap-2">
            <Edit className="w-4 h-4" /> Get AI Help For Your Next Post
          </span>
        </Button>
        
        <Button
          variant="outline"
          className="border-purple border-2 text-purple hover:bg-purple-light hover:text-white h-12"
        >
          <span className="flex items-center gap-2">
            <Search className="w-4 h-4" /> Get AI to Analyse Your Comments
          </span>
        </Button>
      </div>
    </div>
  );
};

export default InsightButtons;
