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
  content: string;
}

export const newsItems: NewsItem[] = [
  // Technology Articles
  {
    id: 1,
    title: "AI-Powered Trading Platforms Show Promise in Recent Market Tests",
    excerpt:
      "New research shows that AI-powered trading platforms are outperforming traditional methods in volatile market conditions, with a 23% higher success rate in predicting market movements.",
    category: "Technology",
    timeAgo: "2 hours ago",
    image: "https://loremflickr.com/400/300/artificial-intelligence",
    source: "TechFinance",
    readTime: "8 min read",
    content: "Artificial intelligence (AI) is making waves in the financial industry, especially in the realm of trading. Recent market tests have demonstrated that AI-powered trading platforms are significantly outperforming traditional methods, especially in volatile market conditions. These platforms leverage advanced machine learning algorithms to analyze vast amounts of data in real time, detecting patterns that human analysts might overlook. The result? A 23% higher success rate in predicting market movements. As AI continues to evolve, experts predict that its role in trading will only grow, potentially reshaping how investment decisions are made. However, the rise of AI in trading also raises concerns about the transparency of these algorithms and the ethical implications of machine-driven trading decisions."
  },
  {
    id: 2,
    title: "Blockchain Tech Gains Ground in Banking",
    excerpt:
      "Banks are increasingly adopting blockchain technology for secure transactions, improving efficiency, and cutting down on fraud.",
    category: "Technology",
    timeAgo: "1 day ago",
    image: "https://loremflickr.com/400/300/blockchain",
    source: "Blockchain Journal",
    readTime: "6 min read",
    content: "Blockchain technology, once primarily associated with cryptocurrencies, is now making significant inroads into traditional banking. Major financial institutions are adopting blockchain to enhance transaction security, reduce fraud, and increase transparency. Unlike conventional databases, blockchain offers a decentralized ledger that is difficult to tamper with, making it ideal for secure financial transactions. Many banks are also experimenting with blockchain to streamline back-office processes, potentially saving millions of dollars annually. However, challenges remain, particularly around regulatory compliance and scalability. As blockchain matures, it is expected to play an increasingly central role in banking, transforming how money and data move around the world."
  },
  {
    id: 3,
    title: "Quantum Computing Poses New Opportunities and Threats to Finance",
    excerpt:
      "The advent of quantum computing could change the landscape of data processing in finance, but raises concerns over data security.",
    category: "Technology",
    timeAgo: "3 days ago",
    image: "https://loremflickr.com/400/300/quantum-computing",
    source: "FutureFinance",
    readTime: "7 min read",
    content: "Quantum computing, with its unprecedented processing power, is on the brink of revolutionizing numerous industries, and finance is no exception. Quantum computers have the potential to process complex calculations in seconds that would take traditional computers years. In finance, this could lead to groundbreaking advancements in risk analysis, portfolio optimization, and fraud detection. However, quantum computing also poses a threat to current encryption methods, which underpin the security of digital transactions and data storage. Financial institutions are now investing in quantum-resistant encryption and exploring partnerships with tech firms to understand how best to harness quantum power. The race is on to leverage this technology before it undermines the very security it promises to enhance."
  },
  {
    id: 4,
    title: "Fintech Startups Use AI to Enhance Customer Experience",
    excerpt:
      "New fintech companies are leveraging AI to improve customer service, with personalized recommendations and streamlined support.",
    category: "Technology",
    timeAgo: "5 days ago",
    image: "https://loremflickr.com/400/300/fintech",
    source: "TechToday",
    readTime: "5 min read",
    content: "Artificial Intelligence (AI) is transforming the fintech industry, enabling startups to deliver a highly personalized user experience. Through AI-driven insights, fintech companies can provide tailored financial advice, predict user needs, and streamline customer support. For instance, AI chatbots can now handle a wide array of customer inquiries, reducing response times and enhancing customer satisfaction. Additionally, AI algorithms analyze spending habits and market trends to offer personalized investment recommendations, helping users make informed decisions. As fintech firms continue to embrace AI, customers can expect a more seamless, intuitive, and responsive experience. However, the use of AI also raises privacy concerns, as vast amounts of personal data are required to fuel these algorithms."
  },

  // Economy Articles
  {
    id: 5,
    title: "Federal Reserve Hints at Potential Rate Cuts in Coming Months",
    excerpt:
      "The Federal Reserve's latest meeting minutes suggest a shift in monetary policy, with officials discussing the possibility of rate cuts as inflation shows signs of cooling.",
    category: "Economy",
    timeAgo: "4 hours ago",
    image: "https://loremflickr.com/400/300/federal-reserve",
    source: "Market Watch",
    readTime: "7 min read",
    content: "In a recent release of meeting minutes, the Federal Reserve has indicated that it may consider cutting interest rates in response to signs of cooling inflation. This shift in monetary policy could have significant implications for the economy, potentially making borrowing cheaper for businesses and consumers. Lower interest rates typically stimulate economic activity by encouraging spending and investment. However, the Fed also faces the challenge of maintaining stability and preventing excessive inflation. As officials weigh the benefits and risks, markets are reacting with cautious optimism, with some sectors poised to benefit more than others from potential rate cuts."
  },
  {
    id: 6,
    title: "Global Markets React to Trade Dispute Resolution",
    excerpt:
      "International markets show positive trends following the resolution of a major trade dispute between two economic giants.",
    category: "Economy",
    timeAgo: "8 hours ago",
    image: "https://loremflickr.com/400/300/trade",
    source: "Global Economics",
    readTime: "6 min read",
    content: "A recent resolution to a prolonged trade dispute between two of the world’s largest economies has sent positive ripples through global markets. The agreement, which eases tariffs and trade restrictions, has reassured investors and opened up new opportunities for businesses. Sectors like manufacturing, technology, and agriculture are expected to see significant benefits. The trade deal underscores the importance of economic cooperation in a globally connected world and highlights the potential impacts of geopolitical tensions on financial markets. Analysts are now watching closely to see how the economies of both countries respond to this new, more favorable trade environment."
  },
  {
    id: 7,
    title: "U.S. Job Market Shows Resilience Amidst Inflation",
    excerpt:
      "Despite rising inflation, the U.S. job market remains strong, with unemployment rates holding steady.",
    category: "Economy",
    timeAgo: "10 hours ago",
    image: "https://loremflickr.com/400/300/jobs",
    source: "Economic Insights",
    readTime: "5 min read",
    content: "Amidst concerns over inflation, the U.S. job market has shown remarkable resilience. Unemployment rates have held steady, and job creation remains robust in sectors like healthcare, technology, and hospitality. This strength in the labor market suggests that employers are confident in the long-term outlook of the economy, even as inflationary pressures raise costs. Economists are closely monitoring wage growth, as higher wages could lead to further inflation. Overall, the job market’s resilience provides a stabilizing factor for the economy, even in uncertain times."
  },
  {
    id: 8,
    title: "European Union Proposes New Tax Reforms",
    excerpt:
      "The EU is set to introduce new tax reforms aimed at boosting economic recovery and promoting fair taxation.",
    category: "Economy",
    timeAgo: "1 day ago",
    image: "https://loremflickr.com/400/300/eu",
    source: "EuroFinance",
    readTime: "7 min read",
    content: "In an effort to support economic recovery and ensure fair taxation, the European Union has proposed a set of tax reforms. The new measures focus on increasing tax transparency, reducing loopholes, and implementing environmental taxes. The EU's goal is to create a more balanced tax system that supports sustainable growth. These reforms are expected to face scrutiny from member states, but if implemented, they could set a new standard for tax fairness and environmental responsibility across the region. The proposals underscore the EU’s commitment to addressing economic inequality and fostering a resilient economic landscape."
  },
{
    id: 9,
    title: "Green Energy Stocks Surge Amid New Climate Legislation",
    excerpt:
      "Renewable energy companies see significant stock price increases following the announcement of new global climate initiatives and government incentives.",
    category: "Energy",
    timeAgo: "6 hours ago",
    image: "https://loremflickr.com/400/300/energy",
    source: "Clean Energy Report",
    readTime: "6 min read",
    content: "In light of recent climate legislation aimed at reducing carbon emissions, green energy stocks have surged significantly. Renewable energy companies are experiencing major gains as governments worldwide commit to greener policies and initiatives. With substantial incentives for clean energy projects, industries like solar, wind, and hydroelectric power are seeing an influx of investment. Analysts are optimistic that this trend will continue, as more governments and corporations aim for net-zero emissions targets by 2050. However, the growth of green stocks also brings volatility, as these sectors are often dependent on subsidies and regulatory stability."
  },
  {
    id: 10,
    title: "Breakthrough in Solar Panel Efficiency Could Transform Energy Sector",
    excerpt:
      "Scientists have developed a new type of solar cell with unprecedented efficiency, potentially transforming the renewable energy landscape.",
    category: "Energy",
    timeAgo: "10 hours ago",
    image: "https://loremflickr.com/400/300/solar",
    source: "EnergyTech News",
    readTime: "7 min read",
    content: "A breakthrough in solar technology has led to the creation of solar panels with unprecedented efficiency, capturing more sunlight than ever before. This new type of solar cell could transform the renewable energy industry by making solar power significantly more viable and cost-effective. With this advancement, solar energy could potentially meet a much larger share of global energy demand. The technology is expected to reduce costs and increase energy yield, making it an attractive option for both residential and commercial energy consumers. This breakthrough could accelerate the transition from fossil fuels to renewable sources, helping to meet global climate targets."
  },
  {
    id: 11,
    title: "Hydrogen Fuel Gains Traction as Clean Energy Alternative",
    excerpt:
      "As governments look for sustainable energy sources, hydrogen fuel is emerging as a viable option, with several countries investing in hydrogen infrastructure.",
    category: "Energy",
    timeAgo: "1 day ago",
    image: "https://loremflickr.com/400/300/hydrogen",
    source: "Green Future",
    readTime: "8 min read",
    content: "Hydrogen fuel is quickly gaining traction as a clean energy alternative to fossil fuels, driven by government incentives and investments in hydrogen infrastructure. Hydrogen, when used as fuel, emits only water vapor, making it an environmentally friendly choice. Countries such as Japan, Germany, and Australia are leading the charge, investing heavily in hydrogen production and distribution networks. The technology, however, is still developing, with challenges related to cost, storage, and transportation. As research continues, hydrogen fuel could play a significant role in achieving global emissions reduction goals."
  },
  {
    id: 12,
    title: "Wind Energy Investments Reach All-Time High",
    excerpt:
      "Investments in wind energy are at an all-time high, with companies betting on wind farms to meet future energy demands.",
    category: "Energy",
    timeAgo: "2 days ago",
    image: "https://loremflickr.com/400/300/wind-energy",
    source: "EcoEnergy Insights",
    readTime: "5 min read",
    content: "The wind energy sector is booming, with record-breaking investments as companies and governments look to meet future energy demands sustainably. Onshore and offshore wind farms are being developed at an unprecedented pace, driven by incentives and increasing energy demands. Major companies are pouring billions into wind technology, positioning wind energy as a cornerstone of the future energy mix. Despite challenges like environmental impact and land use concerns, the wind sector continues to expand, with many countries committing to aggressive renewable energy targets."
  },

  // Crypto Articles
  {
    id: 13,
    title: "Cryptocurrency Market Sees Record Institutional Investment",
    excerpt:
      "Major financial institutions are increasingly adding cryptocurrencies to their portfolios, driving the market to new heights with unprecedented institutional adoption.",
    category: "Crypto",
    timeAgo: "8 hours ago",
    image: "https://loremflickr.com/400/300/cryptocurrency",
    source: "Crypto Daily",
    readTime: "6 min read",
    content: "The cryptocurrency market is experiencing a surge in institutional investment, with major financial institutions now adding digital assets to their portfolios. This trend is driving the market to new heights, with many seeing it as a sign of cryptocurrencies gaining mainstream acceptance. Large firms like BlackRock and Fidelity have launched crypto funds, sparking interest from other institutional players. However, while institutional investment brings legitimacy to the market, it also raises regulatory concerns, as governments worldwide work to establish frameworks for crypto regulation. The influx of institutional capital is expected to add stability to the volatile market, although challenges remain regarding security and transparency."
  },
  {
    id: 14,
    title: "Bitcoin Rallies After El Salvador Announces BTC Bonds",
    excerpt:
      "Bitcoin's price surged following El Salvador's announcement of Bitcoin-backed bonds, a first in global finance.",
    category: "Crypto",
    timeAgo: "1 day ago",
    image: "https://loremflickr.com/400/300/bitcoin",
    source: "Finance Today",
    readTime: "5 min read",
    content: "Bitcoin experienced a rally following the announcement from El Salvador of the world’s first Bitcoin-backed bonds. These bonds aim to raise capital for national projects, funded entirely by Bitcoin. El Salvador's bold move is seen as a test case for the integration of cryptocurrencies into sovereign finance. Investors have shown interest in the bonds, seeing them as a high-risk, high-reward opportunity. The success of this initiative could pave the way for other nations to consider similar cryptocurrency-backed financial products, though it also faces criticism from international financial institutions concerned about volatility."
  },
  {
    id: 15,
    title: "NFT Market Experiences Rapid Growth, Raises Concerns",
    excerpt:
      "The NFT market is booming, but experts warn of risks and uncertainties in this nascent sector.",
    category: "Crypto",
    timeAgo: "2 days ago",
    image: "https://loremflickr.com/400/300/nft",
    source: "Digital Asset News",
    readTime: "8 min read",
    content: "Non-fungible tokens (NFTs) have taken the world by storm, with markets for digital art, collectibles, and virtual goods growing rapidly. While the NFT market has attracted massive interest from investors and creators alike, experts are cautious. Many raise concerns over the speculative nature of NFTs, high transaction fees, and environmental impact due to blockchain energy use. Despite these issues, proponents argue that NFTs represent a revolutionary way for creators to monetize their work and for consumers to own unique digital assets. The future of NFTs remains uncertain, as the market could evolve or experience a speculative bubble."
  },
  {
    id: 16,
    title: "Ethereum's Upcoming Upgrade Promises Lower Fees",
    excerpt:
      "Ethereum developers plan an upgrade to reduce transaction fees, making the network more accessible and efficient.",
    category: "Crypto",
    timeAgo: "3 days ago",
    image: "https://loremflickr.com/400/300/ethereum",
    source: "Crypto Weekly",
    readTime: "7 min read",
    content: "Ethereum, the world’s second-largest cryptocurrency network, is set to undergo a major upgrade aimed at reducing transaction fees. This upgrade, known as Ethereum 2.0, promises a shift from a proof-of-work (PoW) to a proof-of-stake (PoS) model, which should reduce energy consumption and lower fees. The high fees on Ethereum have been a barrier for many users, particularly in the NFT and DeFi sectors. By reducing fees, Ethereum developers hope to make the network more accessible and attractive to a wider audience. The upgrade is expected to enhance scalability and security, positioning Ethereum for further growth in the decentralized finance space."
  },

  // Real Estate Articles
  {
    id: 17,
    title: "Real Estate Market Shows Signs of Cooling in Major Cities",
    excerpt:
      "Housing prices in major metropolitan areas are showing signs of stabilization after two years of unprecedented growth, experts suggest a shift in market dynamics.",
    category: "Real Estate",
    timeAgo: "12 hours ago",
    image: "https://loremflickr.com/400/300/realestate",
    source: "Property Insider",
    readTime: "5 min read",
    content: "After two years of skyrocketing home prices, the real estate market in major cities is showing signs of cooling. Experts suggest that factors like rising mortgage rates, inflation, and a slowdown in demand have led to more stable pricing. While this could provide relief for prospective buyers, the shift also raises concerns about economic implications for homeowners and investors. Analysts predict that the market will continue to stabilize, offering a more balanced environment for both buyers and sellers. However, economic uncertainties and potential interest rate hikes may still impact market trends in the coming months."
  },
  {
    id: 18,
    title: "Suburban Housing Demand Increases Post-Pandemic",
    excerpt:
      "The pandemic has reshaped housing preferences, with more families moving to suburban areas in search of space and affordability.",
    category: "Real Estate",
    timeAgo: "1 day ago",
    image: "https://loremflickr.com/400/300/suburb",
    source: "Housing Trends",
    readTime: "6 min read",
    content: "The COVID-19 pandemic has had a lasting impact on housing preferences, with a notable shift toward suburban living. Families are moving out of crowded urban centers, seeking larger homes, more outdoor space, and affordability. This trend has led to increased demand in suburban areas, driving up home prices in once-overlooked regions. As remote work becomes more common, suburban and rural areas are expected to see continued interest. This shift is reshaping the real estate landscape, impacting urban planning, infrastructure needs, and the future of city living."
  },
  {
    id: 19,
    title: "Luxury Real Estate Market Booms Despite Economic Concerns",
    excerpt:
      "The luxury real estate market remains strong, with high-net-worth individuals investing heavily in properties amidst economic uncertainties.",
    category: "Real Estate",
    timeAgo: "2 days ago",
    image: "https://loremflickr.com/400/300/luxury",
    source: "Luxury Property News",
    readTime: "8 min read",
    content: "Despite economic uncertainties, the luxury real estate market is thriving as wealthy investors seek safe-haven assets. High-net-worth individuals are investing in high-end properties as a way to protect their wealth against inflation and potential market downturns. This boom is evident in prime locations like New York, London, and Dubai, where luxury properties are selling at record prices. Experts attribute this trend to the stability of real estate as an investment and the desire for exclusive, high-quality living spaces. The demand for luxury properties is expected to continue, although future economic shifts could influence investor behavior."
  },
  {
    id: 20,
    title: "Rising Interest Rates Impact First-Time Homebuyers",
    excerpt:
      "Higher interest rates are creating challenges for first-time homebuyers, making mortgage payments more expensive and reducing affordability.",
    category: "Real Estate",
    timeAgo: "4 days ago",
    image: "https://loremflickr.com/400/300/interest-rates",
    source: "Real Estate Journal",
    readTime: "7 min read",
    content: "With rising interest rates, first-time homebuyers are facing increased challenges in the housing market. Higher rates make monthly mortgage payments more expensive, reducing affordability for many prospective buyers. This trend is particularly impactful in markets where home prices have already surged, making it difficult for new entrants to purchase homes. Financial advisors recommend that buyers plan carefully and consider various financing options. While higher rates may cool the market, they also underscore the importance of budgeting and planning for homeownership. As the economic landscape continues to shift, first-time buyers may need to adapt their strategies to secure affordable housing."
  }
];

export const marketSnapshot = [
  { symbol: "AAPL", price: 178.72, change: +2.45 },
  { symbol: "MSFT", price: 334.27, change: -1.23 },
  { symbol: "GOOGL", price: 125.23, change: +0.87 },
  { symbol: "AMZN", price: 127.74, change: +1.56 },
  { symbol: "TSLA", price: 238.45, change: -1.23 },
  { symbol: "NVDA", price: 456.78, change: +5.67 },
];
