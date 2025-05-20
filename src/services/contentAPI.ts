// src/services/contentAPI.ts
import axios from 'axios';


// Define our content item type
export interface ContentItem {
  id: number;
  title: string;
  description: string; 
  category: string;
  type: string;
  image: string;
  featured: boolean;
  date: string;
  content: string;
  link: string;
}

// News API key - replace with your own from https://newsapi.org
const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;

// Gnews API key - alternative option, replace with your own from https://gnews.io
const GNEWS_API_KEY = process.env.REACT_APP_GNEWS_API_KEY;

// Secondary fallback if needed - RSS feed proxy
const RSS_FEED_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://feeds.feedburner.com/TheHackersNews&api_key=vd4ttnljfxrfwz5cjtbqqyp9avqs0ksnlwcrdbej';

// Function to determine content category based on text analysis
const determineCategory = (content: string, title: string): string => {
  const contentLower = (content + title).toLowerCase();
  
  const categoryMap: Record<string, string> = {
    'fake news': 'disinformation',
    'misinformation': 'disinformation',
    'deepfake': 'disinformation',
    'faux': 'disinformation',
    'phishing': 'phishing',
    'social engineering': 'phishing',
    'pirat': 'hacking',
    'hack': 'hacking',
    'breach': 'hacking',
    'vulnerability': 'hacking',
    'ransom': 'ransomware',
    'malware': 'ransomware',
    'cryptomonn': 'financial',
    'financial': 'financial',
    'argent': 'financial',
    'money': 'financial',
    'scam': 'financial',
    'crypto': 'financial',
    'harc': 'harassment',
    'bully': 'harassment',
    'doxxing': 'harassment',
    'privacy': 'safety',
    'secur': 'safety',
    'protect': 'safety',
    'data leak': 'safety'
  };
  
  for (const [keyword, cat] of Object.entries(categoryMap)) {
    if (contentLower.includes(keyword)) {
      return cat;
    }
  }
  
  return 'safety'; // default category
};

// Function to determine content type
const determineContentType = (content: string, title: string): string => {
  const contentLower = (content + title).toLowerCase();
  
  if (contentLower.includes('video') || contentLower.includes('youtube') || contentLower.includes('watch')) {
    return 'video';
  } else if (contentLower.includes('podcast') || contentLower.includes('audio') || contentLower.includes('listen')) {
    return 'podcast';
  } else if (contentLower.includes('guide') || contentLower.includes('how to') || contentLower.includes('tutorial')) {
    return 'guide';
  } else if (contentLower.includes('investigate') || contentLower.includes('research') || contentLower.includes('study')) {
    return 'investigation';
  } else if (contentLower.includes('analysis') || contentLower.includes('report')) {
    return 'investigation';
  }
  
  return 'article'; // default type
};

// Primary API - NewsAPI
export const fetchFromNewsAPI = async (): Promise<ContentItem[]> => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/everything`, {
      params: {
        q: 'cybersecurity OR "cyber security" OR hacking OR ransomware',
        language: 'en',
        sortBy: 'publishedAt',
        pageSize: 30,
        apiKey: NEWS_API_KEY
      }
    });
    
    if (response.status !== 200) {
      throw new Error('Failed to fetch from News API');
    }
    
    return response.data.articles.map((article: any, index: number) => {
      const contentText = article.content || article.description || '';
      
      return {
        id: index + 1,
        title: article.title,
        description: article.description || article.title,
        category: determineCategory(contentText, article.title),
        type: determineContentType(contentText, article.title),
        image: article.urlToImage || `https://source.unsplash.com/random/800x600/?cybersecurity&sig=${index}`,
        featured: index < 3, // First 3 items are featured
        date: article.publishedAt,
        content: article.content || article.description,
        link: article.url
      };
    });
  } catch (error) {
    console.error('Error fetching from News API:', error);
    throw error;
  }
};

// Secondary API - GNews
export const fetchFromGNewsAPI = async (): Promise<ContentItem[]> => {
  try {
    const response = await axios.get(`https://gnews.io/api/v4/search`, {
      params: {
        q: 'cybersecurity hacking ransomware "data breach"',
        lang: 'en',
        max: 30,
        token: GNEWS_API_KEY
      }
    });
    
    if (response.status !== 200) {
      throw new Error('Failed to fetch from GNews API');
    }
    
    return response.data.articles.map((article: any, index: number) => {
      const contentText = article.content || article.description || '';
      
      return {
        id: index + 1,
        title: article.title,
        description: article.description || article.title,
        category: determineCategory(contentText, article.title),
        type: determineContentType(contentText, article.title),
        image: article.image || `https://source.unsplash.com/random/800x600/?cybersecurity&sig=${index}`,
        featured: index < 3, // First 3 items are featured
        date: article.publishedAt,
        content: article.content || article.description,
        link: article.url
      };
    });
  } catch (error) {
    console.error('Error fetching from GNews API:', error);
    throw error;
  }
};

// Fallback - RSS feed
export const fetchFromRSSFeed = async (): Promise<ContentItem[]> => {
  try {
    const response = await axios.get(RSS_FEED_URL);
    
    if (response.status !== 200) {
      throw new Error('Failed to fetch from RSS feed');
    }
    
    return response.data.items.map((item: any, index: number) => {
      // Extract the first image from the content if available
      let imageUrl = '';
      
      // Try to extract image from content
      const imageMatch = item.content.match(/<img.*?src="(.*?)".*?>/);
      if (imageMatch && imageMatch[1]) {
        imageUrl = imageMatch[1];
      } else if (item.thumbnail && item.thumbnail !== '') {
        // Use thumbnail if available
        imageUrl = item.thumbnail;
      } else if (item.enclosure && item.enclosure.link) {
        // Use enclosure link if available
        imageUrl = item.enclosure.link;
      } else {
        // Use a fallback image from Unsplash
        imageUrl = `https://source.unsplash.com/random/800x600/?cybersecurity&sig=${index}`;
      }
      
      return {
        id: index + 1,
        title: item.title,
        description: item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
        category: determineCategory(item.content, item.title),
        type: determineContentType(item.content, item.title),
        image: imageUrl,
        featured: index < 3, // First 3 items are featured
        date: item.pubDate,
        content: item.content,
        link: item.link
      };
    });
  } catch (error) {
    console.error('Error fetching from RSS feed:', error);
    throw error;
  }
};

// Main function to fetch content with failover
export const fetchCybersecurityContent = async (): Promise<ContentItem[]> => {
  try {
    // Try News API first
    return await fetchFromNewsAPI();
  } catch (error) {
    console.warn('News API failed, trying GNews API');
    try {
      // If News API fails, try GNews
      return await fetchFromGNewsAPI();
    } catch (error) {
      console.warn('GNews API failed, falling back to RSS feed');
      // If both APIs fail, fall back to RSS feed
      return await fetchFromRSSFeed();
    }
  }
};

// Function to fetch single content item by ID 
export const fetchContentById = async (id: string): Promise<ContentItem> => {
  try {
    const allContent = await fetchCybersecurityContent();
    const contentIndex = parseInt(id) - 1;
    const item = allContent[contentIndex];
    
    if (!item) {
      throw new Error('Content not found');
    }
    
    return item;
  } catch (error) {
    console.error('Error fetching content by ID:', error);
    throw error;
  }
};