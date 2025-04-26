
import React, { useState } from 'react';
import { mockProfile, mockPosts, Post } from '../utils/mockData';
import ProfileHeader from '@/components/ProfileHeader';
import ProfileStats from '@/components/ProfileStats';
import InsightButtons from '@/components/InsightButtons';
import AiInsight from '@/components/AiInsight';
import PostsList from '@/components/PostsList';
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import PostItem from '@/components/PostItem';

const Index = () => {
  const { toast } = useToast();
  const [profile, setProfile] = useState(mockProfile);
  const [posts, setPosts] = useState(mockPosts);
  const [isLoading, setIsLoading] = useState(false);
  const [isGeneratingInsights, setIsGeneratingInsights] = useState(false);
  const [creditsAvailable, setCreditsAvailable] = useState(5);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const handleRefresh = () => {
    if (creditsAvailable <= 0) {
      toast({
        title: "No credits available",
        description: "You need credits to refresh your profile",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setCreditsAvailable(prev => prev - 1);
      setIsLoading(false);
      toast({
        title: "Profile refreshed",
        description: "Your profile has been successfully updated"
      });
    }, 2000);
  };
  
  const handleGetVibeCheck = () => {
    if (creditsAvailable <= 0) {
      toast({
        title: "No credits available",
        description: "You need credits to generate insights",
        variant: "destructive"
      });
      return;
    }
    
    setIsGeneratingInsights(true);
    
    // Simulate API call
    setTimeout(() => {
      setCreditsAvailable(prev => prev - 1);
      setIsGeneratingInsights(false);
      toast({
        title: "Insights generated",
        description: "Your profile insights have been updated"
      });
    }, 3000);
  };
  
  const handleSelectPost = (post: Post) => {
    setSelectedPost(post);
  };
  
  return (
    <div className="container max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Profile Vibe Check
      </h1>
      
      <div className="flex flex-col gap-6">
        {/* Profile Header */}
        <ProfileHeader 
          profile={profile}
          isLoading={isLoading}
          onRefresh={handleRefresh}
          creditsAvailable={creditsAvailable}
        />
        
        {/* Profile Stats */}
        <ProfileStats 
          profile={profile}
          isLoading={isLoading}
        />
        
        {/* Insight Buttons */}
        <InsightButtons
          onGetVibeCheck={handleGetVibeCheck}
          isGeneratingInsights={isGeneratingInsights}
          creditsAvailable={creditsAvailable}
          hasInsights={!!profile.profileEssence}
        />
        
        {/* AI Insight */}
        <AiInsight insightText={profile.profileEssence} />
        
        {/* Posts List */}
        <PostsList
          posts={posts}
          isLoading={isLoading}
          onSelectPost={handleSelectPost}
          className="mt-4"
        />
      </div>
      
      {/* Post Detail Dialog */}
      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Post Details</DialogTitle>
          </DialogHeader>
          {selectedPost && (
            <div className="flex flex-col gap-4">
              <img 
                src={selectedPost.imageUrl} 
                alt={selectedPost.caption}
                className="w-full h-auto rounded-lg"
              />
              <div>
                <p className="text-sm mb-2">{selectedPost.caption}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <span>{selectedPost.likes} likes</span>
                    <span>{selectedPost.comments} comments</span>
                  </div>
                  <span>{selectedPost.date}</span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
