// frontend-bc3415/src/data/newsData.ts
export const newsCategories = [
  "All",
  "Technology",
  "Energy",
  "Real Estate",
  "Crypto",
  "Markets",
  "Economy",
  "Commodities",
];

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  timeAgo: string;
  image: string;
  source: string;
  readTime: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "AI-Powered Trading Platforms Show Promise in Recent Market Tests",
    excerpt:
      "New research shows that AI-powered trading platforms are outperforming traditional methods in volatile market conditions, with a 23% higher success rate in predicting market movements.",
    category: "Technology",
    timeAgo: "2 hours ago",
    image: "https://source.unsplash.com/random/400x300?tech",
    source: "TechFinance",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Federal Reserve Hints at Potential Rate Cuts in Coming Months",
    excerpt:
      "The Federal Reserve's latest meeting minutes suggest a shift in monetary policy, with officials discussing the possibility of rate cuts as inflation shows signs of cooling.",
    category: "Economy",
    timeAgo: "4 hours ago",
    image: "https://source.unsplash.com/random/400x300?business",
    source: "Market Watch",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Green Energy Stocks Surge Amid New Climate Legislation",
    excerpt:
      "Renewable energy companies see significant stock price increases following the announcement of new global climate initiatives and government incentives.",
    category: "Energy",
    timeAgo: "6 hours ago",
    image: "https://source.unsplash.com/random/400x300?energy",
    source: "Clean Energy Report",
    readTime: "3 min read",
  },
  {
    id: 4,
    title: "Cryptocurrency Market Sees Record Institutional Investment",
    excerpt:
      "Major financial institutions are increasingly adding cryptocurrencies to their portfolios, driving the market to new heights with unprecedented institutional adoption.",
    category: "Crypto",
    timeAgo: "8 hours ago",
    image: "https://source.unsplash.com/random/400x300?cryptocurrency",
    source: "Crypto Daily",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "Real Estate Market Shows Signs of Cooling in Major Cities",
    excerpt:
      "Housing prices in major metropolitan areas are showing signs of stabilization after two years of unprecedented growth, experts suggest a shift in market dynamics.",
    category: "Real Estate",
    timeAgo: "12 hours ago",
    image: "https://source.unsplash.com/random/400x300?realestate",
    source: "Property Insider",
    readTime: "4 min read",
  },
];

export const marketSnapshot = [
  { symbol: "AAPL", price: 178.72, change: +2.45 },
  { symbol: "MSFT", price: 334.27, change: -1.23 },
  { symbol: "GOOGL", price: 125.23, change: +0.87 },
  { symbol: "AMZN", price: 127.74, change: +1.56 },
  { symbol: "TSLA", price: 238.45, change: -1.23 },
  { symbol: "NVDA", price: 456.78, change: +5.67 },
];
