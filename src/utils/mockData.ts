
export interface Profile {
  username: string;
  fullName: string;
  bio: string;
  profileImage: string;
  isPrivate: boolean;
  isBusiness: boolean;
  isNew: boolean;
  stats: {
    posts: number;
    followers: number;
    following: number;
    likes: number;
    comments: number;
    engagementRate: number;
  };
  profileEssence?: string;
}

export interface Post {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  date: string;
}

export const mockProfile: Profile = {
  username: "travel_enthusiast",
  fullName: "Alex Morgan",
  bio: "Travel blogger | Photographer | Coffee lover\n✈️ Currently exploring Asia\n📍 Based in London",
  profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  isPrivate: false,
  isBusiness: true,
  isNew: false,
  stats: {
    posts: 217,
    followers: 15200,
    following: 842,
    likes: 32450,
    comments: 4328,
    engagementRate: 4.8
  },
  profileEssence: "Your profile presents as an established travel content creator with a strong visual identity. The consistent travel themes and high-quality photography create a cohesive brand image. Your engagement rate of 4.8% is above average for your follower count, indicating an active and interested audience. Your caption style balances personal stories with practical information, which resonates well with travel enthusiasts. To further grow your audience, consider more collaborative content and location-specific hashtag strategies."
};

export const mockPosts: Post[] = [
  {
    id: "1",
    imageUrl: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    caption: "Paradise found in Bali #travelgram #bali",
    likes: 1243,
    comments: 89,
    date: "2023-07-15"
  },
  {
    id: "2",
    imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    caption: "Mountain views never get old #hiking #adventure",
    likes: 2105,
    comments: 134,
    date: "2023-07-02"
  },
  {
    id: "3",
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    caption: "Early morning in Barcelona #spain #citybreak",
    likes: 1876,
    comments: 105,
    date: "2023-06-28"
  },
  {
    id: "4",
    imageUrl: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    caption: "Coffee with a view #coffee #travellife",
    likes: 1532,
    comments: 67,
    date: "2023-06-20"
  },
  {
    id: "5",
    imageUrl: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    caption: "Street food adventures in Thailand #foodie #thailand",
    likes: 1890,
    comments: 123,
    date: "2023-06-15"
  },
  {
    id: "6",
    imageUrl: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fHww",
    caption: "Lost in the streets of Paris #paris #france",
    likes: 2354,
    comments: 156,
    date: "2023-06-10"
  }
];
