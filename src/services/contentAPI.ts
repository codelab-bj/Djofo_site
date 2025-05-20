// // src/services/contentAPI.ts
// import axios from 'axios';


// // Define our content item type
// export interface ContentItem {
//   id: number;
//   title: string;
//   description: string; 
//   category: string;
//   type: string;
//   image: string;
//   featured: boolean;
//   date: string;
//   content: string;
//   link: string;
// }

// // News API key - replace with your own from https://newsapi.org
// const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;

// // Gnews API key - alternative option, replace with your own from https://gnews.io
// const GNEWS_API_KEY = process.env.REACT_APP_GNEWS_API_KEY;

// // Secondary fallback if needed - RSS feed proxy
// const RSS_FEED_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://feeds.feedburner.com/TheHackersNews&api_key=vd4ttnljfxrfwz5cjtbqqyp9avqs0ksnlwcrdbej';

// // Function to determine content category based on text analysis
// const determineCategory = (content: string, title: string): string => {
//   const contentLower = (content + title).toLowerCase();
  
//   const categoryMap: Record<string, string> = {
//     'fake news': 'disinformation',
//     'misinformation': 'disinformation',
//     'deepfake': 'disinformation',
//     'faux': 'disinformation',
//     'phishing': 'phishing',
//     'social engineering': 'phishing',
//     'pirat': 'hacking',
//     'hack': 'hacking',
//     'breach': 'hacking',
//     'vulnerability': 'hacking',
//     'ransom': 'ransomware',
//     'malware': 'ransomware',
//     'cryptomonn': 'financial',
//     'financial': 'financial',
//     'argent': 'financial',
//     'money': 'financial',
//     'scam': 'financial',
//     'crypto': 'financial',
//     'harc': 'harassment',
//     'bully': 'harassment',
//     'doxxing': 'harassment',
//     'privacy': 'safety',
//     'secur': 'safety',
//     'protect': 'safety',
//     'data leak': 'safety'
//   };
  
//   for (const [keyword, cat] of Object.entries(categoryMap)) {
//     if (contentLower.includes(keyword)) {
//       return cat;
//     }
//   }
  
//   return 'safety'; // default category
// };

// // Function to determine content type
// const determineContentType = (content: string, title: string): string => {
//   const contentLower = (content + title).toLowerCase();
  
//   if (contentLower.includes('video') || contentLower.includes('youtube') || contentLower.includes('watch')) {
//     return 'video';
//   } else if (contentLower.includes('podcast') || contentLower.includes('audio') || contentLower.includes('listen')) {
//     return 'podcast';
//   } else if (contentLower.includes('guide') || contentLower.includes('how to') || contentLower.includes('tutorial')) {
//     return 'guide';
//   } else if (contentLower.includes('investigate') || contentLower.includes('research') || contentLower.includes('study')) {
//     return 'investigation';
//   } else if (contentLower.includes('analysis') || contentLower.includes('report')) {
//     return 'investigation';
//   }
  
//   return 'article'; // default type
// };

// // Primary API - NewsAPI
// export const fetchFromNewsAPI = async (): Promise<ContentItem[]> => {
//   try {
//     const response = await axios.get(`https://newsapi.org/v2/everything`, {
//       params: {
//         q: 'cybersecurity OR "cyber security" OR hacking OR ransomware',
//         language: 'en',
//         sortBy: 'publishedAt',
//         pageSize: 30,
//         apiKey: NEWS_API_KEY
//       }
//     });
    
//     if (response.status !== 200) {
//       throw new Error('Failed to fetch from News API');
//     }
    
//     return response.data.articles.map((article: any, index: number) => {
//       const contentText = article.content || article.description || '';
      
//       return {
//         id: index + 1,
//         title: article.title,
//         description: article.description || article.title,
//         category: determineCategory(contentText, article.title),
//         type: determineContentType(contentText, article.title),
//         image: article.urlToImage || `https://source.unsplash.com/random/800x600/?cybersecurity&sig=${index}`,
//         featured: index < 3, // First 3 items are featured
//         date: article.publishedAt,
//         content: article.content || article.description,
//         link: article.url
//       };
//     });
//   } catch (error) {
//     console.error('Error fetching from News API:', error);
//     throw error;
//   }
// };

// // Secondary API - GNews
// export const fetchFromGNewsAPI = async (): Promise<ContentItem[]> => {
//   try {
//     const response = await axios.get(`https://gnews.io/api/v4/search`, {
//       params: {
//         q: 'cybersecurity hacking ransomware "data breach"',
//         lang: 'en',
//         max: 30,
//         token: GNEWS_API_KEY
//       }
//     });
    
//     if (response.status !== 200) {
//       throw new Error('Failed to fetch from GNews API');
//     }
    
//     return response.data.articles.map((article: any, index: number) => {
//       const contentText = article.content || article.description || '';
      
//       return {
//         id: index + 1,
//         title: article.title,
//         description: article.description || article.title,
//         category: determineCategory(contentText, article.title),
//         type: determineContentType(contentText, article.title),
//         image: article.image || `https://source.unsplash.com/random/800x600/?cybersecurity&sig=${index}`,
//         featured: index < 3, // First 3 items are featured
//         date: article.publishedAt,
//         content: article.content || article.description,
//         link: article.url
//       };
//     });
//   } catch (error) {
//     console.error('Error fetching from GNews API:', error);
//     throw error;
//   }
// };

// // Fallback - RSS feed
// export const fetchFromRSSFeed = async (): Promise<ContentItem[]> => {
//   try {
//     const response = await axios.get(RSS_FEED_URL);
    
//     if (response.status !== 200) {
//       throw new Error('Failed to fetch from RSS feed');
//     }
    
//     return response.data.items.map((item: any, index: number) => {
//       // Extract the first image from the content if available
//       let imageUrl = '';
      
//       // Try to extract image from content
//       const imageMatch = item.content.match(/<img.*?src="(.*?)".*?>/);
//       if (imageMatch && imageMatch[1]) {
//         imageUrl = imageMatch[1];
//       } else if (item.thumbnail && item.thumbnail !== '') {
//         // Use thumbnail if available
//         imageUrl = item.thumbnail;
//       } else if (item.enclosure && item.enclosure.link) {
//         // Use enclosure link if available
//         imageUrl = item.enclosure.link;
//       } else {
//         // Use a fallback image from Unsplash
//         imageUrl = `https://source.unsplash.com/random/800x600/?cybersecurity&sig=${index}`;
//       }
      
//       return {
//         id: index + 1,
//         title: item.title,
//         description: item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
//         category: determineCategory(item.content, item.title),
//         type: determineContentType(item.content, item.title),
//         image: imageUrl,
//         featured: index < 3, // First 3 items are featured
//         date: item.pubDate,
//         content: item.content,
//         link: item.link
//       };
//     });
//   } catch (error) {
//     console.error('Error fetching from RSS feed:', error);
//     throw error;
//   }
// };

// // Main function to fetch content with failover
// export const fetchCybersecurityContent = async (): Promise<ContentItem[]> => {
//   try {
//     // Try News API first
//     return await fetchFromNewsAPI();
//   } catch (error) {
//     console.warn('News API failed, trying GNews API');
//     try {
//       // If News API fails, try GNews
//       return await fetchFromGNewsAPI();
//     } catch (error) {
//       console.warn('GNews API failed, falling back to RSS feed');
//       // If both APIs fail, fall back to RSS feed
//       return await fetchFromRSSFeed();
//     }
//   }
// };

// // Function to fetch single content item by ID 
// export const fetchContentById = async (id: string): Promise<ContentItem> => {
//   try {
//     const allContent = await fetchCybersecurityContent();
//     const contentIndex = parseInt(id) - 1;
//     const item = allContent[contentIndex];
    
//     if (!item) {
//       throw new Error('Content not found');
//     }
    
//     return item;
//   } catch (error) {
//     console.error('Error fetching content by ID:', error);
//     throw error;
//   }
// };












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

// Mediastack API key - reliable free API with generous free tier
// Get your API key from https://mediastack.com/
const MEDIASTACK_API_KEY = process.env.REACT_APP_MEDIASTACK_API_KEY;

// News API key - as backup
const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;

// The Guardian API key - another reliable free option
// Get your API key from https://open-platform.theguardian.com/
const GUARDIAN_API_KEY = process.env.REACT_APP_GUARDIAN_API_KEY;

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

// Primary API - Mediastack (very reliable free tier)
export const fetchFromMediastack = async (): Promise<ContentItem[]> => {
  try {
    const response = await axios.get(`http://api.mediastack.com/v1/news`, {
      params: {
        access_key: MEDIASTACK_API_KEY,
        keywords: 'cybersecurity,hacking,ransomware,"data breach"',
        languages: 'en',
        limit: 30,
        sort: 'published_desc'
      }
    });
    
    if (response.status !== 200) {
      throw new Error('Failed to fetch from Mediastack API');
    }
    
    return response.data.data.map((article: any, index: number) => {
      const contentText = article.description || '';
      
      return {
        id: index + 1,
        title: article.title,
        description: article.description || article.title.substring(0, 100) + '...',
        category: determineCategory(contentText, article.title),
        type: determineContentType(contentText, article.title),
        image: article.image || `https://source.unsplash.com/random/800x600/?cybersecurity&sig=${index}`,
        featured: index < 3, // First 3 items are featured
        date: article.published_at,
        content: article.description || article.title,
        link: article.url
      };
    });
  } catch (error) {
    console.error('Error fetching from Mediastack API:', error);
    throw error;
  }
};

// Secondary API - The Guardian
export const fetchFromGuardian = async (): Promise<ContentItem[]> => {
  try {
    const response = await axios.get(`https://content.guardianapis.com/search`, {
      params: {
        q: 'cybersecurity OR hacking OR ransomware OR "data breach"',
        section: 'technology',
        'show-fields': 'headline,trailText,thumbnail,body,shortUrl',
        'api-key': GUARDIAN_API_KEY
      }
    });
    
    if (response.status !== 200) {
      throw new Error('Failed to fetch from Guardian API');
    }
    
    return response.data.response.results.map((article: any, index: number) => {
      const fields = article.fields || {};
      const contentText = fields.body || fields.trailText || '';
      
      return {
        id: index + 1,
        title: fields.headline || article.webTitle,
        description: fields.trailText || article.webTitle.substring(0, 100) + '...',
        category: determineCategory(contentText, article.webTitle),
        type: determineContentType(contentText, article.webTitle),
        image: fields.thumbnail || `https://source.unsplash.com/random/800x600/?cybersecurity&sig=${index}`,
        featured: index < 3, // First 3 items are featured
        date: article.webPublicationDate,
        content: fields.body || fields.trailText || '',
        link: fields.shortUrl || article.webUrl
      };
    });
  } catch (error) {
    console.error('Error fetching from Guardian API:', error);
    throw error;
  }
};

// Original News API - now as a fallback
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

// Fallback - Cyber Security News RSS Feed via rss2json API (very reliable)
export const fetchFromRSSFeed = async (): Promise<ContentItem[]> => {
  try {
    // Using the public rss2json API - no API key needed for basic usage
    const response = await axios.get('https://api.rss2json.com/v1/api.json', {
      params: {
        rss_url: 'https://www.cybersecurity-insiders.com/feed/',
        count: 30
      }
    });
    
    if (response.status !== 200) {
      throw new Error('Failed to fetch from RSS feed');
    }
    
    return response.data.items.map((item: any, index: number) => {
      // Extract the first image from the content if available
      let imageUrl = '';
      
      // Try to extract image from content
      const imageMatch = item.content?.match(/<img.*?src="(.*?)".*?>/);
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
      
      // Clean description of HTML tags
      const cleanDescription = item.description?.replace(/<[^>]*>/g, '') || '';
      
      return {
        id: index + 1,
        title: item.title,
        description: cleanDescription.substring(0, 150) + '...',
        category: determineCategory(item.content || '', item.title),
        type: determineContentType(item.content || '', item.title),
        image: imageUrl,
        featured: index < 3, // First 3 items are featured
        date: item.pubDate,
        content: item.content || cleanDescription,
        link: item.link
      };
    });
  } catch (error) {
    console.error('Error fetching from RSS feed:', error);
    throw error;
  }
};

// Last resort - Fetch from HackerNews API (completely free, no API key needed)
export const fetchFromHackerNews = async (): Promise<ContentItem[]> => {
  try {
    // Get top stories IDs
    const topStoriesResponse = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
    const storyIds = topStoriesResponse.data.slice(0, 30); // Get top 30 stories

    // Fetch details for each story
    const storyPromises = storyIds.map((id: number) => 
      axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    );
    
    const storyResponses = await Promise.all(storyPromises);
    const stories = storyResponses.map(response => response.data);
    
    // Filter for cybersecurity relevant stories
    const securityKeywords = ['security', 'hack', 'breach', 'cyber', 'ransomware', 'phishing', 'malware'];
    const filteredStories = stories.filter((story: any) => {
      const title = (story.title || '').toLowerCase();
      return securityKeywords.some(keyword => title.includes(keyword));
    });
    
    return filteredStories.map((story: any, index: number) => {
      return {
        id: index + 1,
        title: story.title,
        description: `Posted by ${story.by} with ${story.score} points and ${story.descendants || 0} comments`,
        category: 'hacking', // Default for HN
        type: 'article', // Default for HN
        image: `https://source.unsplash.com/random/800x600/?cybersecurity&sig=${story.id}`,
        featured: index < 3,
        date: new Date(story.time * 1000).toISOString(),
        content: `${story.title} - Posted by ${story.by} with ${story.score} points and ${story.descendants || 0} comments`,
        link: story.url || `https://news.ycombinator.com/item?id=${story.id}`
      };
    });
  } catch (error) {
    console.error('Error fetching from HackerNews API:', error);
    throw error;
  }
};

// Add a specific function to cache content
let contentCache: ContentItem[] = [];
let cacheTimestamp: number = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes cache lifetime

// Function to get and cache content
const getCachedContent = async (): Promise<ContentItem[]> => {
  const now = Date.now();
  
  // Return cached content if it's still valid
  if (contentCache.length > 0 && (now - cacheTimestamp) < CACHE_TTL) {
    return contentCache;
  }
  
  // Otherwise fetch fresh content
  try {
    const freshContent = await fetchFromMediastack()
      .catch(() => fetchFromGuardian())
      .catch(() => fetchFromNewsAPI())
      .catch(() => fetchFromRSSFeed())
      .catch(() => fetchFromHackerNews());
      
    // Update cache
    contentCache = freshContent;
    cacheTimestamp = now;
    
    return freshContent;
  } catch (error) {
    // If all fetches fail and we have any cached content, return that
    if (contentCache.length > 0) {
      console.warn('All APIs failed, returning stale cached content');
      return contentCache;
    }
    // Otherwise re-throw
    throw error;
  }
};

// Main function to fetch content with failover chain - now using cache
export const fetchCybersecurityContent = async (): Promise<ContentItem[]> => {
  return getCachedContent();
};

// NEW FUNCTION: Fetch content by ID
export const fetchContentById = async (id: string): Promise<ContentItem> => {
  // Convert id to number if it's a string
  const numericId = parseInt(id, 10);
  
  if (isNaN(numericId)) {
    throw new Error('Invalid ID format');
  }
  
  try {
    // First check if we have the content in cache
    if (contentCache.length > 0) {
      const cachedItem = contentCache.find(item => item.id === numericId);
      if (cachedItem) {
        return cachedItem;
      }
    }
    
    // If not in cache, fetch all content and then find the item
    const allContent = await fetchCybersecurityContent();
    const contentItem = allContent.find(item => item.id === numericId);
    
    if (!contentItem) {
      throw new Error(`Content with ID ${id} not found`);
    }
    
    return contentItem;
  } catch (error) {
    console.error(`Error fetching content with ID ${id}:`, error);
    throw error;
  }
};