/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface AITool {
  id: string;
  name: string;
  description: string;
  category: 'Writing' | 'Image' | 'Video' | 'Code' | 'Productivity' | 'Marketing';
  pricing: 'Free' | 'Freemium' | 'Paid';
  imageUrl: string;
  rating: number;
  trendingRank?: number;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  avatarUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
}
