export interface ProfileData {
    name: string;
    email: string;
    avatar: { 
      high: string; 
      medium: string; 
      low: string
    };
  }

export interface AvatarProps {
    url: string;
    alt: string;
  }