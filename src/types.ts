export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'strength' | 'cardio' | 'wellness' | 'specialty';
  benefits: string[];
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  image: string;
  amenities: string[];
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  image: string;
  specialties: string[];
  bio: string;
  experience: string;
  certification: string;
}

export interface Transformation {
  id: string;
  name: string;
  beforeImg: string;
  afterImg: string;
  duration: string;
  achievement: string;
}

export interface ClassScheduleItem {
  id: string;
  className: string;
  trainer: string;
  time: string; // e.g. "08:00 AM"
  duration: string; // e.g. "60 min"
  room: string;
  intensity: 'Low' | 'Medium' | 'High';
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  achievement: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  billing: string;
  features: string[];
  popular: boolean;
  color: string; // For customized styling
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
}
