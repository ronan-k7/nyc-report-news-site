'use client';

import React from 'react';
import Link from 'next/link';
import { getCategorySlug } from '@/utils/categorySlug';

interface SidebarItem {
  time: string;
  title: string;
  category?: string;
  isBreaking?: boolean;
  slug?: string;
}

interface NewsArticleProps {
  mainArticle: {
    title: string;
    image: string;
    category?: string;
    description?: string;
    shortdescription?: string;
    slug: string;
    author: string;
  };
  sidebarTitle?: string;
  sidebarItems?: SidebarItem[];
  continueButton?: string;
}

const NewsArticleComponent: React.FC<NewsArticleProps> = ({
  mainArticle,
  sidebarTitle = 'LIVE UPDATES',
  sidebarItems = [
  {
    time: '10:30',
    category: 'INSIGHT',
    title: 'US and Iran Sign Peace Agreement Following Months of Tensions',
    isBreaking: true,
  },
  {
    time: '10:25',
    title: 'Apple Introduces AI-Powered Siri and iOS 27 at WWDC 2026',
  },
  {
    time: '10:20',
    title: "Lionel Messi Matches Men's World Cup Goals Record with Hat Trick",
  },
  {
    time: '10:12',
    title: 'NASA Reveals Artemis III Crew for Upcoming Moon Mission',
  },
  {
    time: '10:08',
    title: 'Global Leaders Discuss New Security and Trade Initiatives',
  },
],
  continueButton = 'continue',
}) => {
  const mainHref = `/${getCategorySlug(mainArticle.category ?? '')}/${mainArticle.slug}`;

  return (
    <div className="component-news-container d-flex justify-content-center">
      <div className="container-fluid mx-auto px-3 px-md-4 px-lg-6" style={{ maxWidth: '1400px' }}>
        <div className="row section1-width border-bottom justify-content-center">
          {/* Main Article */}
          <div className="col-lg-8 col-md-7 border-end">
            <Link href={mainHref} className="text-decoration-none text-reset" title={mainArticle.title}>
              <div className="component-main-article">
                <img
                  src={mainArticle.image}
                  alt={mainArticle.title}
                  width={1280}
                  height={720}
                  className="component-article-image"
                />

                <div className="mt-3">
                  {mainArticle.category && (
                    <span className="component-category-badge">{mainArticle.category}</span>
                  )}

                  <h2 className="component-article-title">{mainArticle.title}</h2>
                  <p>{mainArticle.shortdescription}</p>

                  <p className="text-secondary small mt-1 mb-0">
                    By <span className="fw-semibold">{mainArticle.author}</span>
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4 col-md-5">
            <div className="component-sidebar">
              <h2 className="component-sidebar-title">{sidebarTitle}</h2>

              {sidebarItems.map((item, idx) => {
                const itemHref =
                  item.slug && item.category
                    ? `/${getCategorySlug(item.category)}/${item.slug}`
                    : '#';

                return (
                  <Link
                    key={idx}
                    href={itemHref}
                    className="text-reset text-decoration-none"
                    title={item.title}
                  >
                    <div className="component-sidebar-item">
                      <div className="component-sidebar-meta">
                        <span className="component-sidebar-time">{item.time}</span>

                        {item.category && (
                          <span className="component-sidebar-category">{item.category}</span>
                        )}

                        {item.isBreaking && (
                          <span className="component-breaking-icon">⚡</span>
                        )}
                      </div>

                      <div className="component-sidebar-title-text">{item.title}</div>
                    </div>
                  </Link>
                );
              })}

              <button className="component-continue-btn">{continueButton}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArticleComponent;

// // 'use client';

// // import React from 'react';
// // import Link from 'next/link';
// // import Image from 'next/image';

// // /* ─────────────────────────────────────────────── */
// // /*  Types                                         */
// // /* ─────────────────────────────────────────────── */

// // interface SidebarItem {
// //   time: string;
// //   title: string;
// //   category?: string;
// //   isBreaking?: boolean;
// //   slug?: string;           // NEW → lets you link each sidebar article
// // }

// // interface NewsArticleProps {
// //   mainArticle: {
// //     title: string;
// //     image: string;
// //     category?: string;
// //     description?: string;
// //     shortdescription?:string
// //     slug: string; 
// //     author:string;         
// //   };
// //   sidebarTitle?: string;
// //   sidebarItems?: SidebarItem[];
// //   continueButton?: string;
// // }

// // /* ─────────────────────────────────────────────── */
// // /*  Component                                     */
// // /* ─────────────────────────────────────────────── */

// // const NewsArticleComponent: React.FC<NewsArticleProps> = ({
// //   mainArticle,
// //  sidebarTitle = 'LIVE UPDATES',
// // sidebarItems = [
// //   {
// //     time: "10:30",
// //     category: "INSIGHT",
// //     title: "Ex-Barclays Chief Jes Staley Loses Appeal Against U.K. Finance-Sector Ban",
// //     isBreaking: true
// //   },
// //   {
// //     time: "10:15",
// //     title: "Brazil’s Supreme Court Rules Social Media Platforms Can Be Held Liable for User Content"
// //   },
// //   {
// //     time: "10:15",
// //     title: "Global Markets Climb as U.S. Stocks Near Record Highs"
// //   },
// //   {
// //     time: "10:12",
// //     title: "GE Appliances to Move Washing Machine Production from China to Kentucky with $490 Million Investment"
// //   },
// //   {
// //     time: "10:08",
// //     title: "Palestinian Activist Mahmoud Khalil Rallies with Supporters in NYC Following Release"
// //   }
// // ]
// // ,
// //   continueButton = "continue",
// // }) => {
// //   /* Helper for the main article URL */
// //   const mainHref = `/${(mainArticle.category ?? '').toLowerCase()}/${mainArticle.slug}`;

// //   return (  
// //     <div className="component-news-container">
// //       <div className="container-fluid">
// //         <div className="row section1-width border-bottom">
// //           {/* ─── Main Article ─────────────────────────────── */}
// //           <div className="col-lg-8 col-md-7 border-end">
// //             <Link href={mainHref} className="text-decoration-none text-reset" title={mainArticle.title}>
// //               <div className="component-main-article">
// //                 <img
// //                   src={mainArticle.image}
// //                   alt={mainArticle.title}
// //                   width={1280}
// //                   height={720}
// //                   className="component-article-image"
                  
// //                 />

// //                 <div className="mt-3">
// //                   {mainArticle.category && (
// //                     <span className="component-category-badge">
// //                       {mainArticle.category}
// //                     </span>
// //                   )}

// //                   <h2 className="component-article-title">
// //                     {mainArticle.title}
// //                   </h2>
// //                   <p>{mainArticle.shortdescription}</p>
                
// //               <p className="text-secondary small mt-1 mb-0">
// //                 By <span className="fw-semibold">{mainArticle.author}</span>
// //               </p>
            
// //                 </div>
// //               </div>
// //             </Link>
// //           </div>

// //           {/* ─── Sidebar ─────────────────────────────────── */}
// //           <div className="col-lg-4 col-md-5">
// //             <div className="component-sidebar">
// //               <h2 className="component-sidebar-title">{sidebarTitle}</h2>

// //               {sidebarItems.map((item, idx) => {
// //                 const itemHref =
// //                   item.slug && item.category
// //                     ? `/${item.category.toLowerCase()}/${item.slug}`
// //                     : '#'; // fall back to "#" if no slug provided

// //                 return (
// //                   <Link
// //                     key={idx}
// //                     href={itemHref}
// //                     className="text-reset text-decoration-none"
// //                     title={item.title}
// //                   >
// //                     <div className="component-sidebar-item">
// //                       <div className="component-sidebar-meta">
// //                         <span className="component-sidebar-time">
// //                           {item.time}
// //                         </span>

// //                         {item.category && (
// //                           <span className="component-sidebar-category">
// //                             {item.category}
// //                           </span>
// //                         )}

// //                         {item.isBreaking && (
// //                           <span className="component-breaking-icon">⚡</span>
// //                         )}
// //                       </div>

// //                       <div className="component-sidebar-title-text">
// //                         {item.title}
// //                       </div>
// //                     </div>
// //                   </Link>
// //                 );
// //               })}

// //               <button className="component-continue-btn">
// //                 {continueButton}
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default NewsArticleComponent;



// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// interface SidebarItem {
//   time: string;
//   title: string;
//   category?: string;
//   isBreaking?: boolean;
//   slug?: string;
// }

// interface NewsArticleProps {
//   mainArticle: {
//     title: string;
//     image: string;
//     category?: string;
//     description?: string;
//     shortdescription?: string;
//     slug: string;
//     author: string;
//   };
//   sidebarTitle?: string;
//   sidebarItems?: SidebarItem[];
//   continueButton?: string;
// }

// const NewsArticleComponent: React.FC<NewsArticleProps> = ({
//   mainArticle,
//   sidebarTitle = 'LIVE UPDATES',
//   sidebarItems = [
//   // 🏛️ POLITICS
//   {
//     time: "10:30",
//     category: "INSIGHT",
//     title: "DHS Funding Battle Intensifies as New Secretary Pushes Immigration Policy Changes",
//     isBreaking: true,
//   },

//   // 💼 BUSINESS
//   {
//     time: "10:25",
    
//     title: "Public Storage to Acquire National Storage Affiliates in $10.5 Billion Deal",
//   },

//   // 🏀 SPORTS
//   {
//     time: "10:20",

//     title: "Team USA Finishes Undefeated in Women’s World Cup Qualifiers" ,
//   },

//   // 🎬 ENTERTAINMENT
//   {
//     time: "10:12",

//     title: "Bad Bunny’s Global Influence Grows After Historic Super Bowl Performance",
//   },

//   // 🇵🇷 PUERTO RICO
//   {
//     time: "10:08",

//     title: "Puerto Rico Lawmakers Debate New Transparency Rules for Public Information Access",
//   },
// ],
//   continueButton = "continue",
// }) => {
//   const mainHref = `/${(mainArticle.category ?? '').toLowerCase()}/${mainArticle.slug}`;

//   return (
//     <div className="component-news-container d-flex justify-content-center">
//       <div className="container-fluid mx-auto px-3 px-md-4 px-lg-6" style={{ maxWidth: '1400px' }}>
//         <div className="row section1-width border-bottom justify-content-center">
//           {/* Main Article */}
//           <div className="col-lg-8 col-md-7 border-end">
//             <Link href={mainHref} className="text-decoration-none text-reset" title={mainArticle.title}>
//               <div className="component-main-article">
//                 <img
//                   src={mainArticle.image}
//                   alt={mainArticle.title}
//                   width={1280}
//                   height={720}
//                   className="component-article-image"
//                 />

//                 <div className="mt-3">
//                   {mainArticle.category && (
//                     <span className="component-category-badge">
//                       {mainArticle.category}
//                     </span>
//                   )}

//                   <h2 className="component-article-title">
//                     {mainArticle.title}
//                   </h2>
//                   <p>{mainArticle.shortdescription}</p>

//                   <p className="text-secondary small mt-1 mb-0">
//                     By <span className="fw-semibold">{mainArticle.author}</span>
//                   </p>
//                 </div>
//               </div>
//             </Link>
//           </div>

//           {/* Sidebar */}
//           <div className="col-lg-4 col-md-5">
//             <div className="component-sidebar">
//               <h2 className="component-sidebar-title">{sidebarTitle}</h2>

//               {sidebarItems.map((item, idx) => {
//                 const itemHref =
//                   item.slug && item.category
//                     ? `/${item.category.toLowerCase()}/${item.slug}`
//                     : '#';

//                 return (
//                   <Link
//                     key={idx}
//                     href={itemHref}
//                     className="text-reset text-decoration-none"
//                     title={item.title}
//                   >
//                     <div className="component-sidebar-item">
//                       <div className="component-sidebar-meta">
//                         <span className="component-sidebar-time">{item.time}</span>

//                         {item.category && (
//                           <span className="component-sidebar-category">{item.category}</span>
//                         )}

//                         {item.isBreaking && (
//                           <span className="component-breaking-icon">⚡</span>
//                         )}
//                       </div>

//                       <div className="component-sidebar-title-text">{item.title}</div>
//                     </div>
//                   </Link>
//                 );
//               })}

//               <button className="component-continue-btn">{continueButton}</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsArticleComponent;