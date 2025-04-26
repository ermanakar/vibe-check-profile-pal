
import React from 'react';
import { Post } from '../utils/mockData';
import { Heart, MessageCircle, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PostItemProps {
  post: Post;
  onClick?: () => void;
  className?: string;
}

const PostItem: React.FC<PostItemProps> = ({ 
  post, 
  onClick,
  className
}) => {
  const { imageUrl, caption, likes, comments, date } = post;
  
  // Format numbers with k for thousands
  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };
  
  // Format the caption to be shorter if needed
  const truncateCaption = (text: string, maxLength = 100): string => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength - 3) + '...';
  };
  
  return (
    <div 
      className={cn(
        "bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow", 
        className
      )}
      onClick={onClick}
    >
      {/* Post image */}
      <div className="aspect-square overflow-hidden bg-secondary">
        <img 
          src={imageUrl} 
          alt={truncateCaption(caption, 20)}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Post details */}
      <div className="p-3">
        <p className="text-sm mb-2">
          {truncateCaption(caption)}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Heart className="w-3 h-3" />
              {formatNumber(likes)}
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle className="w-3 h-3" />
              {formatNumber(comments)}
            </span>
          </div>
          
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
