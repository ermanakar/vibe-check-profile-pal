
import React from 'react';
import { Profile } from '../utils/mockData';
import { cn } from '@/lib/utils';

interface ProfileStatsProps {
  profile: Profile;
  isLoading?: boolean;
  className?: string;
}

const ProfileStats: React.FC<ProfileStatsProps> = ({ 
  profile, 
  isLoading = false,
  className
}) => {
  const { stats } = profile;
  
  // Format numbers with k for thousands
  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };
  
  // Style classes
  const statsItemClass = cn(
    "stats-card flex-1 min-w-[100px]",
    isLoading && "animate-pulse-slow"
  );
  
  const statValueClass = "text-lg font-bold";
  const statLabelClass = "text-xs text-muted-foreground";
  
  return (
    <div className={cn("grid grid-cols-3 md:grid-cols-6 gap-3", className)}>
      <div className={statsItemClass}>
        <span className={statValueClass}>{formatNumber(stats.posts)}</span>
        <span className={statLabelClass}>Posts</span>
      </div>
      
      <div className={statsItemClass}>
        <span className={statValueClass}>{formatNumber(stats.followers)}</span>
        <span className={statLabelClass}>Followers</span>
      </div>
      
      <div className={statsItemClass}>
        <span className={statValueClass}>{formatNumber(stats.following)}</span>
        <span className={statLabelClass}>Following</span>
      </div>
      
      <div className={statsItemClass}>
        <span className={statValueClass}>{formatNumber(stats.likes)}</span>
        <span className={statLabelClass}>Likes</span>
      </div>
      
      <div className={statsItemClass}>
        <span className={statValueClass}>{formatNumber(stats.comments)}</span>
        <span className={statLabelClass}>Comments</span>
      </div>
      
      <div className={statsItemClass}>
        <span className={statValueClass}>{stats.engagementRate}%</span>
        <span className={statLabelClass}>Engagement</span>
      </div>
    </div>
  );
};

export default ProfileStats;
