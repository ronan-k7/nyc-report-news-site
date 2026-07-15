// // app/sitemap.js
// // Place this file at the root of your `app` directory (Next.js App Router).
// // Adjust the relative import paths below if your `public/data` files live
// // at a different depth.

// import politicsData from "../../public/data/politics.json";
// import businessData from "../../public/data/business.json";
// import technologyData from "../../public/data/technology.json";
// import sportsData from "../../public/data/sports.json";
// import scienceData from "../../public/data/science.json";
// import healthData from "../../public/data/health.json";
// import puertoricoData from "../../public/data/puerto-rico.json";
// import entertainmentData from "../../public/data/entertainment.json";
// import educationData from "../../public/data/education.json";


// const SITE_URL = "https://www.nycreport.org";

// // [ urlSegment, dataArray ] — add/remove categories here only, nothing else
// // needs to change when you add a new vertical.
// const CATEGORIES = [
//   ["politics", politicsData],
//   ["business", businessData],
//   ["technology", technologyData],
//   ["sports", sportsData],
//   ["science", scienceData],
//   ["health", healthData],
//   ["puerto-rico", puertoricoData],
//   ["entertainment", entertainmentData],
//   ["education", educationData],
// ];

// export default function sitemap() {
//   const now = new Date();

//   /* ---------------- STATIC PAGES ----------------
//      These are never date-filtered — they always stay in the sitemap. */
//   const staticPages = [
//     { url: SITE_URL, lastModified: now, changeFrequency: "daily", priority: 1.0 },
//     { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
//     { url: `${SITE_URL}/our-team`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
//     { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
//     { url: `${SITE_URL}/editorial-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
//     { url: `${SITE_URL}/corrections-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
//     { url: `${SITE_URL}/source-methodology`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
//     { url: `${SITE_URL}/ownership-and-funding`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
//     { url: `${SITE_URL}/advertising-and-sponsored-content-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
//     { url: `${SITE_URL}/right-of-reply-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
//     { url: `${SITE_URL}/legal`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
//     { url: `${SITE_URL}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
//     { url: `${SITE_URL}/terms-and-conditions`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
//   ];

//   /* ---------------- CATEGORY LANDING PAGES ----------------
//      Also never date-filtered — /business/, /politics/, etc. always stay. */
//   const categoryPages = CATEGORIES.map(([slug]) => ({
//     url: `${SITE_URL}/${slug}`,
//     lastModified: now,
//     changeFrequency: "daily",
//     priority: 0.8,
//   }));

//   /* ---------------- ARTICLE PAGES ----------------
//      Rolling window: current calendar month + the previous calendar month.
//      No hardcoded month/year — this recalculates itself every time the
//      sitemap is built, so in August it keeps July+August, in September it
//      automatically shifts to August+September, etc. */
//   const currentYear = now.getFullYear();
//   const currentMonth = now.getMonth(); // 0-11

//   const prevMonthDate = new Date(currentYear, currentMonth - 1, 1);
//   const prevYear = prevMonthDate.getFullYear();
//   const prevMonth = prevMonthDate.getMonth();

//   const isWithinWindow = (dateStr) => {
//     const d = new Date(dateStr);
//     if (isNaN(d.getTime())) return false;
//     const y = d.getFullYear();
//     const m = d.getMonth();
//     return (
//       (y === currentYear && m === currentMonth) ||
//       (y === prevYear && m === prevMonth)
//     );
//   };

//   const articlePages = [];

//   CATEGORIES.forEach(([slug, posts]) => {
//     if (!Array.isArray(posts)) return;
//     posts.forEach((post) => {
//       if (!post?.date || !post?.slug) return;
//       if (!isWithinWindow(post.date)) return;
//       articlePages.push({
//         url: `${SITE_URL}/${slug}/${post.slug}`,
//         lastModified: new Date(post.date),
//         changeFrequency: "weekly",
//         priority: 0.9,
//       });
//     });
//   });

//   /* ---------------- COMBINE ALL ---------------- */
//   return [...staticPages, ...categoryPages, ...articlePages];
// }

// app/sitemap.js

import politicsData from "../../public/data/politics.json";
import businessData from "../../public/data/business.json";
import technologyData from "../../public/data/technology.json";
import sportsData from "../../public/data/sports.json";
import scienceData from "../../public/data/science.json";
import healthData from "../../public/data/health.json";
import puertoricoData from "../../public/data/puerto-rico.json";
import entertainmentData from "../../public/data/entertainment.json";
import educationData from "../../public/data/education.json";

const SITE_URL = "https://www.nycreport.org";

const CATEGORIES = [
  ["politics", politicsData],
  ["business", businessData],
  ["technology", technologyData],
  ["sports", sportsData],
  ["science", scienceData],
  ["health", healthData],
  ["puerto-rico", puertoricoData],
  ["entertainment", entertainmentData],
  ["education", educationData],
];

const toValidDate = (dateStr, fallback) => {
  if (!dateStr) return fallback;
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? fallback : d;
};

export default function sitemap() {
  const now = new Date();

  const staticPages = [
    { url: SITE_URL, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/our-team`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/editorial-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/corrections-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/source-methodology`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/ownership-and-funding`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/advertising-and-sponsored-content-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/right-of-reply-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/legal`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/terms-and-conditions`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];

  const categoryPages = CATEGORIES.map(([slug]) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.8,
  }));

  const articlePages = [];

  CATEGORIES.forEach(([slug, posts]) => {
    if (!Array.isArray(posts)) return;
    posts.forEach((post) => {
      if (!post?.slug) return;
      articlePages.push({
        url: `${SITE_URL}/${slug}/${post.slug}`,
        lastModified: toValidDate(post.date, now),  // safely falls back to now
        changeFrequency: "weekly",
        priority: 0.9,
      });
    });
  });

  return [...staticPages, ...categoryPages, ...articlePages];
}