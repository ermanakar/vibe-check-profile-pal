
import React from 'react';
import { Profile } from '../utils/mockData';
import { RefreshCcw } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ProfileHeaderProps {
  profile: Profile;
  isLoading?: boolean;
  onRefresh?: () => void;
  creditsAvailable?: number;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ 
  profile, 
  isLoading = false,
  onRefresh,
  creditsAvailable = 5
}) => {
  const { username, fullName, bio, profileImage, isPrivate, isBusiness, isNew } = profile;
  
  // Format bio text with line breaks
  const bioLines = bio.split('\n');
  
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 bg-white rounded-2xl shadow-sm animate-fade-in">
      {/* Profile Image */}
      <div className="relative">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-secondary">
          {isLoading ? (
            <div className="w-full h-full bg-secondary animate-pulse-slow" />
          ) : (
            <img 
              src={profileImage} 
              alt={`${username}'s profile`}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>
      
      {/* Profile Info */}
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h1 className="text-xl font-bold">{username}</h1>
          {isPrivate && (
            <span className="badge bg-gray-200 text-gray-700">Private</span>
          )}
          {isBusiness && (
            <span className="badge bg-blue-100 text-blue-700">Business</span>
          )}
          {isNew && (
            <span className="badge bg-green-100 text-green-700">New</span>
          )}
        </div>
        
        <h2 className="text-lg text-gray-700 mb-2">{fullName}</h2>
        
        <div className="text-sm text-gray-600 mb-2 max-w-md">
          {bioLines.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < bioLines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      </div>
      
      {/* Refresh Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={onRefresh}
        disabled={isLoading || creditsAvailable <= 0}
        className="flex items-center gap-2 self-start"
      >
        <RefreshCcw className="h-4 w-4" />
        <span>{isLoading ? 'Refreshing...' : 'Refresh'}</span>
      </Button>
    </div>
  );
};

export default ProfileHeader;
