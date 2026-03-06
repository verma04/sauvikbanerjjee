
const newsData2: any[] = [];
const newsData = [
  {
    "text": "Artificial intelligence & human intervention.",
    "img": "/news/Business Standard.png",
    "description": "Artificial intelligence & human intervention.",
    "date": "September 07, 2016",
    "url": "https://www.business-standard.com/article/opinion/sauvik-banerjjee-artificial-intelligence-human-intervention-116090701457_1.html"
  },
  {
    "text": "Meet Sauvik Banerjjee, a Ranji trophy player who went on to architect Reliance Jio",
    "img": "/news/Your Story.png",
    "description": "Meet Sauvik Banerjjee, a Ranji trophy player who went on to architect Reliance Jio",
    "date": "March 07, 2017",
    "url": "https://yourstory.com/2017/03/techie-tuesdays-sauvik-banerjjee"
  },
  {
    "text": "Tata Group’s E-Commerce Venture Strengthens Top Deck",
    "img": "/news/VC Circle.png",
    "description": "Tata Group’s E-Commerce Venture Strengthens Top Deck",
    "date": "April 26, 2017",
    "url": "https://www.vccircle.com/tata-groups-e-commerce-venture-strengthens-top-deck"
  },
  {
    "text": "TataCLiQ.com Strengthens Leadership Team with Sauvik Banerjjee",
    "img": "/news/Exchange 4 Media.jpeg",
    "description": "TataCLiQ.com Strengthens Leadership Team with Sauvik Banerjjee",
    "date": "April 27, 2017",
    "url": "https://www.exchange4media.com/digital-news/tatacliq.com-strengthens-leadership-team-with-sauvik-banerjjeekishore-mardikarand-behram-sabawala-68573.html"
  },
  {
    "text": "AI, ML will be game-changers in online retail: Sauvik Banerjjee, CTO of TataCLiQ",
    "img": "/news/Your Story.png",
    "description": "AI, ML will be game-changers in online retail: Sauvik Banerjjee, CTO of TataCLiQ",
    "date": "July 30, 2017",
    "url": "https://yourstory.com/2017/07/sauvik-banerjjee-cto-tatacliq-ai-ml"
  },
  {
    "text": "Sauvik Banerjjee, CTO, TataCLiQ",
    "img": "/news/India Retailing.png",
    "description": "Sauvik Banerjjee, CTO, TataCLiQ",
    "date": "September 19, 2017",
    "url": "https://www.indiaretailing.com/2017/09/19/sauvik-banerjjee-cto-tatacliq"
  },
  {
    "text": "Leadership is all about empowering and extracting the performance without doing micromanagement – Sauvik Banerjjee, CTO, Tata CLiQ",
    "img": "/news/Your Story.png",
    "description": "Leadership is all about empowering and extracting the performance without doing micromanagement – Sauvik Banerjjee, CTO, Tata CLiQ",
    "date": "September 21, 2017",
    "url": "https://yourstory.com/2017/09/sauvik-banerjjee-cto-tata-cliq-ama"
  },
  {
    "text": "World-Renowned Bengali Techie Brings Projects to Bengal",
    "img": "/news/GB-Logo-2020-head.jpg",
    "description": "World-Renowned Bengali Techie Brings Projects to Bengal",
    "date": "October 16, 2017",
    "url": "https://www.getbengal.com/details/world-renowned-bengali-techie-brings-projects-to-bengal"
  },
  {
    "text": "Leadership Talk by Mr. Sauvik Banerjjee, VP – Tata Industries, CTO – Tata CLiQ",
    "img": "/news/SIBM Pune.png",
    "description": "Leadership Talk by Mr. Sauvik Banerjjee, VP – Tata Industries, CTO – Tata CLiQ",
    "date": "December 1, 2018",
    "url": "https://blog.sibmpune.edu.in/leadership-talk-tata-industries"
  },
  {
    "text": "Empathy in Digital Era with Sauvik Banerjjee",
    "img": "/news/Medium.png",
    "description": "Empathy in Digital Era with Sauvik Banerjjee",
    "date": "November 20, 2020",
    "url": "https://medium.com/rohit-lalwani/empathy-in-digital-era-with-sauvik-banerjjee-521b02afae0c"
  },
  {
    "text": "Join a firm that doesn't treat you as employee id: Banerjjee of Tata Neu",
    "img": "/news/Business Standard.png",
    "description": "Join a firm that doesn't treat you as employee id: Banerjjee of Tata Neu",
    "date": "June 06, 2022",
    "url": "https://www.business-standard.com/article/companies/join-a-firm-that-doesn-t-treat-you-as-employee-id-banerjjee-of-tata-neu-122060500620_1.html"
  },
  {
    "text": "The Big Picture: Sauvik Banerjjee at Tata Digital and Anand Chandrasekaran at Mad Street Den",
    "img": "/news/Forbes India.png",
    "description": "The Big Picture: Sauvik Banerjjee at Tata Digital and Anand Chandrasekaran at Mad Street Den",
    "date": "June 09, 2022",
    "url": "https://www.forbesindia.com/audio/forbes-india-daily-tech-conver-sation/the-big-picture-sauvik-banerjjee-at-tata-digital-and-anand-chandrasekaran-at-mad-street-den-on-whither-personalisation/77129"
  },
  {
    "text": "Sauvik Banerjjee resigns as Tata Neu’s CTO",
    "img": "/news/Var India.jpeg",
    "description": "Sauvik Banerjjee resigns as Tata Neu’s CTO",
    "date": "July 29, 2022",
    "url": "https://varindia.com/news/sauvik-banerjjee-resigns-as-tata-neus-cto"
  },
  {
    "text": "Tata Neu’s CTO Sauvik Banerjjee quits, to take on global role",
    "img": "/news/Money Control.png",
    "description": "Tata Neu’s CTO Sauvik Banerjjee quits, to take on global role",
    "date": "July 28, 2022",
    "url": "https://www.moneycontrol.com/news/business/tata-neus-cto-sauvik-banerjjee-quits-to-take-on-global-role-8908871.html"
  },
  {
    "text": "Tata Neu CTO Sauvik Banerjjee Resigns, External Hire Likely To Fill The Position",
    "img": "/news/Startup Story Media.png",
    "description": "Tata Neu CTO Sauvik Banerjjee Resigns, External Hire Likely To Fill The Position",
    "date": "July 29, 2022",
    "url": "https://startupstorymedia.com/insights-tata-neu-cto-sauvik-banerjjee-resigns-external-hire-likely-to-fill-the-position/"
  },
  {
    "text": "CTO Sauvik Banerjjee quits Tata Neu four months after launch",
    "img": "/news/CIO News. The Mainstream.png",
    "description": "CTO Sauvik Banerjjee quits Tata Neu four months after launch",
    "date": "July 29, 2022",
    "url": "https://cionews.co.in/cto-sauvik-banerjjee-quits-tata-neu/"
  },
  {
    "text": "Tata Neu’s CTO Sauvik Banerjjee Resigns",
    "img": "/news/BW Disrupt.png",
    "description": "Tata Neu’s CTO Sauvik Banerjjee Resigns",
    "date": "July 29, 2022",
    "url": "https://www.bwdisrupt.com/article/tata-neus-cto-sauvik-banerjjee-resigns-439368"
  },
  {
    "text": "Tata Neu CTO Quits Within 4 Months of Super App Launch",
    "img": "/news/Trak In.png",
    "description": "Tata Neu CTO Quits Within 4 Months of Super App Launch",
    "date": "July 31, 2022",
    "url": "https://trak.in/tags/business/2022/07/31/tata-neu-cto-quits-within-4-months-of-super-app-launch-whats-the-reason-is-tata-neu-a-failure"
  },
  {
    "text": "Rezolve Appoints Sauvik Banerjjee as Global CEO of Products, Technology, and Digital Services",
    "img": "/news/Yahoo Finance.png",
    "description": "Rezolve Appoints Sauvik Banerjjee as Global CEO of Products, Technology, and Digital Services",
    "date": "August 08, 2022",
    "url": "https://finance.yahoo.com/news/rezolve-appoints-sauvik-banerjjee-global-113000405.html"
  },
  {
    "text": "Tata Neu CTO Sauvik Banerjjee Quits",
    "img": "/news/News Drum.png",
    "description": "Tata Neu CTO Sauvik Banerjjee Quits",
    "date": "August 05, 2022",
    "url": "https://www.newsdrum.in/business/tata-neu-cto-sauvik-banerjjee-quits-71285.html"
  },
  {
    "text": "Tata Neu CTO Sauvik Banerjjee Quits",
    "img": "/news/Business Today.png",
    "description": "Tata Neu CTO Sauvik Banerjjee Quits",
    "date": "August 05, 2022",
    "url": "https://www.businesstoday.in/technology/story/tata-neu-cto-sauvik-banerjjee-quits-343919-2022-08-05"
  },
  {
    "text": "Tata Neu CTO Sauvik Banerjjee Quits",
    "img": "/news/Outlook India.png",
    "description": "Tata Neu CTO Sauvik Banerjjee Quits",
    "date": "August 05, 2022",
    "url": "https://www.outlookindia.com/business/tata-neu-cto-sauvik-banerjee-quits-news-214472"
  },
  {
    "text": "Tata Neu CTO Sauvik Banerjjee Quits within Months of App Launch",
    "img": "/news/officenewz-logo_vr2-1.jpg",
    "description": "Tata Neu CTO Sauvik Banerjjee Quits within Months of App Launch",
    "date": "August 06, 2022",
    "url": "https://officenewz.com/2022/08/06/tata-neu-cto-sauvik-banerjjee-quits-within-months-of-app-launch/"
  },
  {
    "text": "Tata Neu’s Former CTO Sauvik Banerjjee Joins UK Firm Rezolve As CEO",
    "img": "/news/MSN.jpeg",
    "description": "Tata Neu’s Former CTO Sauvik Banerjjee Joins UK Firm Rezolve As CEO",
    "date": "August 08, 2022",
    "url": "https://www.msn.com/en-in/money/topstories/corporate-crossings-tata-neu-s-former-cto-sauvik-banerjjee-joins-uk-firm-rezolve-as-ceo/ar-AA10r7wC"
  },
  {
    "text": "Rezolve Appoints Sauvik Banerjjee as Global CEO of Products, Technology, and Digital Services",
    "img": "/news/Bloomberg.png",
    "description": "Rezolve Appoints Sauvik Banerjjee as Global CEO of Products, Technology, and Digital Services",
    "date": "August 08, 2022",
    "url": "https://www.bloomberg.com/press-releases/2022-08-08/rezolve-appoints-sauvik-banerjjee-as-global-ceo-of-products-technology-and-digital-services"
  },
  {
    "text": "Sauvik Banerjjee Former Tata Digital CTO Joins UK’s Rezolve",
    "img": "/news/Business Standard.png",
    "description": "Sauvik Banerjjee Former Tata Digital CTO Joins UK’s Rezolve",
    "date": "August 08, 2022",
    "url": "https://www.business-standard.com/article/companies/sauvik-banerjjee-former-tata-digital-cto-joins-uk-s-rezolve-122080801619_1.html"
  },
  {
    "text": "Rezolve Appoints Sauvik Banerjjee As Global Chief Executive Of Products, Technology And Digital Services",
    "img": "/news/CXO TV. Tech Plus Media.jpeg",
    "description": "Rezolve Appoints Sauvik Banerjjee As Global Chief Executive Of Products, Technology And Digital Services",
    "date": "August 09, 2022",
    "url": "https://cxotv.techplusmedia.com/trending-news/rezolve-appoints-sauvik-banerjjee-as-global-chief-executive-of-products-technology-and-digital-services"
  },
  {
    "text": "Former Tata Neu CTO Sauvik Banerjjee joins Rezolve",
    "img": "/news/The Economic Times | Tech.jpeg",
    "description": "Former Tata Neu CTO Sauvik Banerjjee joins Rezolve",
    "date": "August 09, 2022",
    "url": "https://economictimes.indiatimes.com/tech/technology/former-tata-neu-cto-sauvik-banerjjee-joins-rezolve/articleshow/93448437.cms?from=mdr"
  },
  {
    "text": "CTO Sauvik Banerjjee Quits Tata Neu Four Months After Launch",
    "img": "/news/Tech Shots.jpeg",
    "description": "CTO Sauvik Banerjjee Quits Tata Neu Four Months After Launch",
    "date": "March 24, 2023",
    "url": "https://www.techshotsapp.com/people/cto-sauvik-banerjjee-quits-tata-neu-four-months-after-launch"
  },
  {
    "text": "Building from the Groud Up: Key Strategies for Startups to Achieve Entrepreneurial Success",
    "img": "/news/Your Story.png",
    "description": "Building from the Groud Up: Key Strategies for Startups to Achieve Entrepreneurial Success",
    "date": "April 29, 2025",
    "url": "https://yourstory.com/2025/04/startups-entrepreneurial-success-key-strategies?utm_source=chatgpt.com"
  },
  {
    "text": "Co-Living 2.0: Sustainable, Tech-Led, Community-Centric and Growth-Focused",
    "img": "/news/Economic Times | Hospitality World.png",
    "description": "Co-Living 2.0: Sustainable, Tech-Led, Community-Centric and Growth-Focused",
    "date": "May 05, 2025",
    "url": "https://hospitality.economictimes.indiatimes.com/news/speaking-heads/co-living-2-0-sustainable-tech-led-community-centric-and-growth-focused/120893198"
  },
  {
    "text": "Rezolve Ai Establishes Global Professional Services Division Amid Surging Demand in $500 Billion Enterprise AI Market",
    "img": "/news/Yahoo Finance.png",
    "description": "Rezolve Ai Establishes Global Professional Services Division Amid Surging Demand in $500 Billion Enterprise AI Market",
    "date": "June 26, 2025",
    "url": "https://finance.yahoo.com/news/rezolve-ai-establishes-global-professional-120000679.html"
  },
  {
    "text": "Sauvik Banerjjee to Lead Rezolve Ai as President & Chief Digital Officer",
    "img": "/news/Press Trust of India.jpeg",
    "description": "Sauvik Banerjjee to Lead Rezolve Ai as President & Chief Digital Officer",
    "date": "July 01, 2025",
    "url": "https://www.ptinews.com/story/business/sauvik-banerjjee-to-lead-rezolve-ai-as-president-chief-digital-officer/2690837?utm_source=chatgpt.com"
  },
  {
    "text": "UK-Based Rezolve AI Appoints Sauvik Banerjjee as President of Global Professional Services & CDO",
    "img": "/news/The Economic Times | Tech.jpeg",
    "description": "UK-Based Rezolve AI Appoints Sauvik Banerjjee as President of Global Professional Services & CDO",
    "date": "July 01, 2025",
    "url": "https://economictimes.indiatimes.com/tech/artificial-intelligence/uk-based-rezolve-ai-appoints-sauvik-banerjjee-as-global-ceo-of-products-tech-digital-services/articleshow/122186791.cms"
  },
  {
    "text": "Sauvik Banerjjee to Lead Rezolve AI as President and Chief Digital Officer",
    "img": "/news/The Week.png",
    "description": "Sauvik Banerjjee to Lead Rezolve AI as President and Chief Digital Officer",
    "date": "July 01, 2025",
    "url": "https://www.theweek.in/wire-updates/business/2025/07/01/dcm123-biz-resolve-ai-appt.html"
  },
  {
    "text": "Uk-based Rezolve Ai Appoints Sauvik Banerjjee As Global Ceo Of Products, Tech, Digital Services",
    "img": "/news/Benchmark Six Sigma.png",
    "description": "Uk-based Rezolve Ai Appoints Sauvik Banerjjee As Global Ceo Of Products, Tech, Digital Services",
    "date": "July 01, 2025",
    "url": "https://www.benchmarksixsigma.com/forum/topic/40629-ai-news-from-et-uk-based-rezolve-ai-appoints-sauvik-banerjjee-as-global-ceo-of-products-tech-digital-services/#comment-62170"
  },
  {
    "text": "Sauvik Banerjjee Leads Rezolve AI as President & CDO",
    "img": "/news/Rediff.png",
    "description": "Sauvik Banerjjee Leads Rezolve AI as President & CDO",
    "date": "July 01, 2025",
    "url": "https://money.rediff.com/news/market/sauvik-banerjjee-leads-rezolve-ai-as-president-cdo/29433220250701"
  },
  {
    "text": "Sauvik Banerjjee: Steering Rezolve Ai's Global Ascension",
    "img": "/news/Devdis Course.png",
    "description": "Sauvik Banerjjee: Steering Rezolve Ai's Global Ascension",
    "date": "July 01, 2025",
    "url": "https://www.devdiscourse.com/article/technology/3488886-sauvik-banerjjee-steering-rezolve-ais-global-ascension?utm_source=chatgpt.com"
  },
  {
    "text": "Rezolve Ai Announces Leadership Reorganization To Drive Growth",
    "img": "/news/Investing.png",
    "description": "Rezolve Ai Announces Leadership Reorganization To Drive Growth",
    "date": "October 22, 2025",
    "url": "https://www.investing.com/news/company-news/rezolve-ai-announces-leadership-reorganization-to-drive-growth-93CH-4301716?utm_source=chatgpt.com"
  },
  {
    "text": "Rezolve Ai’s Acceleration Toward $500 Million ARR Exit Rate for 2026 Attracts Industry Titans from Apple, Google, Microsoft, SAP and Tata Digital",
    "img": "/news/Stock Titan.jpeg",
    "description": "Rezolve Ai’s Acceleration Toward $500 Million ARR Exit Rate for 2026 Attracts Industry Titans from Apple, Google, Microsoft, SAP and Tata Digital",
    "date": "November 11, 2025",
    "url": "https://www.stocktitan.net/news/RZLV/rezolve-ai-s-acceleration-toward-500-million-arr-exit-rate-for-2026-jihklpqrz8rk.html?utm_source=chatgpt.com"
  }
];
export { newsData, newsData2 };
