
import React from 'react';
import { Post } from '../utils/mockData';
import PostItem from './PostItem';
import LoadingIndicator from './LoadingIndicator';
import EmptyState from './EmptyState';
import { Image } from 'lucide-react';

interface PostsListProps {
  posts: Post[];
  isLoading?: boolean;
  onSelectPost?: (post: Post) => void;
  className?: string;
}

const PostsList: React.FC<PostsListProps> = ({ 
  posts, 
  isLoading = false,
  onSelectPost,
  className = ''
}) => {
  if (isLoading) {
    return (
      <div className="py-12 flex justify-center">
        <LoadingIndicator size="lg" />
      </div>
    );
  }
  
  if (posts.length === 0) {
    return (
      <EmptyState 
        message="No posts found. When you add posts, they will appear here."
        icon={<Image className="w-12 h-12 text-muted-foreground" />}
        className="py-12"
      />
    );
  }
  
  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Latest Posts</h2>
        <span className="badge bg-secondary text-muted-foreground">
          {posts.length}
        </span>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            onClick={() => onSelectPost?.(post)}
          />
        ))}
      </div>
    </div>
  );
};

export default PostsList;
