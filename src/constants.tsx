import { AITool, Testimonial, BlogPost } from './types';

export const AI_TOOLS: AITool[] = [
  {
    id: '1',
    name: 'ChatGPT',
    description: 'Advanced conversational AI by OpenAI for text generation and reasoning.',
    category: 'Writing',
    pricing: 'Freemium',
    imageUrl: 'https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.59f2e898.png',
    rating: 4.9,
    trendingRank: 1,
  },
  {
    id: '2',
    name: 'Midjourney',
    description: 'Powerful AI image generator known for high artistic quality and detail.',
    category: 'Image',
    pricing: 'Paid',
    imageUrl: 'https://www.midjourney.com/apple-touch-icon.png',
    rating: 4.8,
    trendingRank: 2,
  },
  {
    id: '3',
    name: 'Claude',
    description: 'Helpful, harmless, and honest AI assistant with a large context window.',
    category: 'Writing',
    pricing: 'Freemium',
    imageUrl: 'https://anthropic.com/favicon.ico',
    rating: 4.9,
    trendingRank: 3,
  },
  {
    id: '4',
    name: 'Gemini',
    description: 'Multimodal AI model by Google capable of understanding text, images, and code.',
    category: 'Code',
    pricing: 'Freemium',
    imageUrl: 'https://www.gstatic.com/lamda/images/favicon_v1.png',
    rating: 4.7,
    trendingRank: 4,
  },
  {
    id: '5',
    name: 'Notion AI',
    description: 'Integrated AI assistant within Notion to help you write, edit, and summarize.',
    category: 'Productivity',
    pricing: 'Paid',
    imageUrl: 'https://www.notion.so/images/favicon.ico',
    rating: 4.6,
  },
  {
    id: '6',
    name: 'Runway ML',
    description: 'Creative suite for video generation and editing using state-of-the-art AI.',
    category: 'Video',
    pricing: 'Paid',
    imageUrl: 'https://runwayml.com/favicon.ico',
    rating: 4.8,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Sarah Chen',
    role: 'Creative Director',
    content: 'NexusAI has completely transformed how our agency discovers new tools. The curated selections are top-notch.',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    id: '2',
    author: 'Marcus Wright',
    role: 'Senior Developer',
    content: 'The coding assistants I found here have at least doubled my productivity. Essential resource for devs.',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Generative Video',
    excerpt: 'How AI is rewriting the rules of cinematography and video production.',
    date: 'May 15, 2026',
    category: 'AI Trends',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'Prompt Engineering in 2026',
    excerpt: 'New techniques for getting the most out of large language models.',
    date: 'May 12, 2026',
    category: 'Guides',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
  },
];
