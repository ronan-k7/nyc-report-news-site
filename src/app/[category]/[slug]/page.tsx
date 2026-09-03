// // // // import politicsData from '../../../../public/data/politics.json';
// // // // import businessData from '../../../../public/data/business.json';
// // // // import technologyData from '../../../../public/data/technology.json';
// // // // import sportsData from '../../../../public/data/sports.json';
// // // // import scienceData from '../../../../public/data/science.json';
// // // // import healthData from '../../../../public/data/health.json';
// // // // import puertoricoData from '../../../../public/data/puerto-rico.json';
// // // // import entertainmentData from '../../../../public/data/entertainment.json';
// // // // import educationData from '../../../../public/data/education.json';
// // // // import ArticleHero from '@/components/ArticleHero';
// // // // import WandaVazquezArticle from '@/components/WandaVazquezArticle';
// // // // import { Metadata } from 'next';
// // // // import DonaldTrumpArticle from '@/components/DonaldTrump';
// // // // import ClientS2 from '@/components/ClientS2';

// // // // type Article = {
// // // //   category: string;
// // // //   title: string;
// // // //   shortdescription: string;
// // // //   description: string;
// // // //   image: string;
// // // //   slug: string;
// // // //   author:string
// // // // };

// // // // interface PageProps {
// // // //   params: Promise<{
// // // //     category: string;
// // // //     slug: string;
// // // //   }>;
// // // // }

// // // // // Generate static parameters for all articles across all categories
// // // // export async function generateStaticParams() {
// // // //   const allData = [
// // // //     { category: 'politics', articles: politicsData },
// // // //     { category: 'business', articles: businessData },
// // // //     { category: 'technology', articles: technologyData },
// // // //     { category: 'sports', articles: sportsData },
// // // //     { category: 'science', articles: scienceData },
// // // //     { category: 'health', articles: healthData },
// // // //     { category: 'puerto-rico', articles: puertoricoData},
// // // //     { category: 'entertainment', articles: entertainmentData},
// // // //     { category: 'education', articles: educationData}

// // // //   ];

// // // //   const params: { category: string; slug: string }[] = [];

// // // //   allData.forEach(({ category, articles }) => {
// // // //     articles.forEach((article: Article) => {
// // // //       params.push({
// // // //         category: category,
// // // //         slug: article.slug,
// // // //       });
// // // //     });
// // // //   });

// // // //   return params;
// // // // }

// // // // // Generate metadata for each page
// // // // export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
// // // //   const { category, slug } = await params;

// // // //   let filteredArticles: Article[] = [];

// // // //   switch (category) {
// // // //     case 'technology':
// // // //       filteredArticles = technologyData;
// // // //       break;
// // // //     case 'sports':
// // // //       filteredArticles = sportsData;
// // // //       break;
// // // //     case 'business':
// // // //       filteredArticles = businessData;
// // // //       break;
// // // //     case 'health':
// // // //       filteredArticles = healthData;
// // // //       break;
// // // //     case 'science':
// // // //       filteredArticles = scienceData;
// // // //       break;
// // // //     case 'politics':
// // // //       filteredArticles = politicsData;
// // // //       break;
// // // //     case 'puerto-rico':
// // // //       filteredArticles = puertoricoData;
// // // //       break;
// // // //     case 'entertainment':
// // // //       filteredArticles = entertainmentData;
// // // //       break;
// // // //     case 'education':
// // // //       filteredArticles = educationData;
// // // //       break;
// // // //     default:
// // // //       break;
// // // //   }

// // // //   const article = filteredArticles.find((item) => item.slug === slug);

// // // //   if (!article) {
// // // //     return {
// // // //       title: 'Article Not Found',
// // // //       description: 'The requested article could not be found.',
// // // //     };
// // // //   }

// // // //   const isWandaArticle = slug === 'wanda-vazquez-bribery-case-collapses';
// // // //   const siteUrl = 'https://www.nycreport.org'; 
// // // //   const currentUrl = `${siteUrl}/${category}/${slug}`;
// // // //   const imageUrl = article.image.startsWith('http') ? article.image : `${siteUrl}${article.image}`;

// // // //   if (isWandaArticle) {
// // // //     return {
// // // //       title: 'Wanda Vázquez Bribery Case Collapses – Only Minor Violation Remains',
// // // //       description: 'All bribery charges dropped against former PR Gov. Wanda Vázquez; case ends with only a technical campaign finance violation, no corruption proven.',
// // // //       keywords: 'Wanda Vázquez, campaign finance violation, charges dropped, Puerto Rico, DOJ, bribery case',
// // // //       authors: [{ name: 'Staff Reporter' }],
// // // //       alternates:{canonical:"https://www.nycreport.org/politics/wanda-vazquez-bribery-case-collapses/"},
// // // //       openGraph: {
// // // //         title: 'Wanda Vázquez Bribery Case Collapses – Only Minor Violation Remains',
// // // //         description: 'All bribery charges dropped against former PR Gov. Wanda Vázquez; case ends with only a technical campaign finance violation, no corruption proven.',
// // // //         url: currentUrl,
// // // //         siteName: 'NYC Report',
// // // //         images: [
// // // //           {
// // // //             url: imageUrl,
// // // //             width: 1200,
// // // //             height: 630,
// // // //             alt: article.title,
// // // //           },
// // // //         ],
// // // //         locale: 'en_US',
// // // //         type: 'article',
// // // //         publishedTime: '2025-06-18T00:00:00.000Z',
// // // //       },
// // // //       twitter: {
// // // //         card: 'summary_large_image',
// // // //         title: 'Wanda Vázquez Bribery Case Collapses – Only Minor Violation Remains',
// // // //         description: 'All bribery charges dropped against former PR Gov. Wanda Vázquez; case ends with only a technical campaign finance violation, no corruption proven.',
// // // //         images: [imageUrl],
// // // //         site: '@nycreport_', // Replace with your Twitter handle
// // // //         creator: '@nycreport_', // Replace with your Twitter handle
// // // //       },
// // // //       other: {
// // // //         // JSON-LD structured data
// // // //         'script:ld+json': JSON.stringify({
// // // //           '@context': 'https://schema.org',
// // // //           '@type': 'NewsArticle',
// // // //           headline: 'Wanda Vázquez Bribery Case Collapses – Only Minor Violation Remains',
// // // //           description:'All bribery charges dropped against former PR Gov. Wanda Vázquez; case ends with only a technical campaign finance violation, no corruption proven.',
// // // //           datePublished: '2025-06-24T05:30:00-04:00',
// // // //           dateModified:"2025-08-11T03:00:00-04:00",
// // // //           author: {
// // // //             '@type': 'Organization',
// // // //             name: 'NYCREPORT Staff',
// // // //           },
// // // //           publisher: {
// // // //             '@type': 'NewsMediaOrganization',
// // // //             name: 'The NYC Report',
// // // //             logo: {
// // // //               '@type': 'ImageObject',
// // // //               url: `${siteUrl}/logo.png`,
// // // //             },
// // // //           },
// // // //           image:{
// // // //            ' @type':'ImageObject',
// // // //            'url':imageUrl,
// // // //             "width": 1440,
// // // //             "height": 809
// // // //           },
// // // //           alternatives:{
// // // //             canonical:
// // // //             "https://www.nycreport.org/politics/wanda-vazquez-bribery-case-collapses/"
// // // //           },
// // // //           articleBody: article.description.substring(0, 160),
// // // //            articleSection: "Politics",
// // // //           keywords: ["Wanda Vázquez", "bribery case", "Puerto Rico", "corruption", "campaign finance", "politics"],
// // // //           isAccessibleForFree:true,
// // // //           url: currentUrl,
// // // //         }),
// // // //       },
// // // //     };
// // // //   }


// // // //   const isTrumpArticle = slug === 'why-mr-donald-trump-is-the-best-president-the-united-states-has-ever-had';
// // // //   const siteUrlTrump = 'https://www.nycreport.org'; // Replace with your actual domain
// // // //   const currentUrlTrump = `${siteUrl}/${category}/${slug}`;
// // // //   const imageUrlTrump = article.image.startsWith('http') ? article.image : `${siteUrl}${article.image}`;

// // // //   if (isTrumpArticle) {
    
// // // //     return {
// // // //       title: 'Donald Trump’s Lasting Impact: 100 Days of American Renewal',
// // // //       description: 'Discover how Donald J. Trump’s leadership in his first 100 daysbrought sweeping changes across energy, economy, and global diplomacy.',
// // // //       keywords: 'Wanda Vázquez, campaign finance violation, charges dropped, Puerto Rico, DOJ, bribery case',
// // // //       authors: [{ name: 'Staff Reporter' }],
// // // //       openGraph: {
// // // //         title: 'Donald Trump’s Lasting Impact: 100 Days of American Renewal',
// // // //         description: 'Discover how Donald J. Trump’s leadership in his first 100 daysbrought sweeping changes across energy, economy, and global diplomacy',
// // // //         url: currentUrlTrump,
// // // //         siteName: 'NYC Report',
// // // //         images: [
// // // //           {
// // // //             url: imageUrl,
// // // //             width: 1200,
// // // //             height: 630,
// // // //             alt: article.title,
// // // //           },
// // // //         ],
// // // //         locale: 'en_US',
// // // //         type: 'article',
// // // //         publishedTime: '2025-06-18T00:00:00.000Z',
// // // //       },
// // // //       twitter: {
// // // //         card: 'summary_large_image',
// // // //         title: 'Donald Trump’s Lasting Impact: 100 Days of American Renewal',
// // // //         description: 'Discover how Donald J. Trump’s leadership in his first 100 daysbrought sweeping changes across energy, economy, and global diplomacy',
// // // //         images: [imageUrlTrump],
// // // //         site: '@nycreport', // Replace with your Twitter handle
// // // //         creator: '@nycreport', // Replace with your Twitter handle
// // // //       },
// // // //       other: {
// // // //         // JSON-LD structured data
// // // //         'script:ld+json': JSON.stringify({
// // // //           '@context': 'https://schema.org',
// // // //           '@type': 'NewsArticle',
// // // //           headline: 'Donald Trump’s Lasting Impact: 100 Days of American Renewal',
// // // //           datePublished: '2025-06-18',
// // // //           author: {
// // // //             '@type': 'Person',
// // // //             name: 'Staff Reporter',
// // // //           },
// // // //           publisher: {
// // // //             '@type': 'Organization',
// // // //             name: 'NYC Report',
// // // //             logo: {
// // // //               '@type': 'ImageObject',
// // // //               url: `${siteUrlTrump}/logo.png`,
// // // //             },
// // // //           },
// // // //           image: imageUrl,
// // // //           alternatives:{
// // // //             canonical:
// // // //             "https://www.nycreport.org/politics/why-mr-donald-trump-is-the-best-president-the-united-states-has-ever-had/"
// // // //           },
// // // //           articleBody: article.description.substring(0, 160),
// // // //           keywords: 'Donald Trump best president,Donald Trump achievements, Trump legacy 2024, Trump vs Biden economy, Trump accomplishments list,Trump presidency analysis,rump economic success',
// // // //           url: currentUrlTrump,
// // // //         }),
// // // //       },
// // // //     };
// // // //   }
// // // //   return {
// // // //     title: article.title,
// // // //     description: article.shortdescription,
// // // //     keywords: `${article.category}, news, ${article.title}`,
// // // //     authors: [{ name: 'Staff Reporter' }],
// // // //     openGraph: {
// // // //       title: article.title,
// // // //       description: article.shortdescription,
// // // //       url: currentUrl,
// // // //       siteName: 'NYC Report',
// // // //       images: [
// // // //         {
// // // //           url: imageUrl,
// // // //           width: 1200,
// // // //           height: 630,
// // // //           alt: article.title,
// // // //         },
// // // //       ],
// // // //       locale: 'en_US',
// // // //       type: 'article',
// // // //     },
// // // //     twitter: {
// // // //       card: 'summary_large_image',
// // // //       title: article.title,
// // // //       description: article.shortdescription,
// // // //       images: [imageUrl],
// // // //       site: '@nycreport', // Replace with your Twitter handle
// // // //       creator: '@nycreport', // Replace with your Twitter handle
// // // //     },
// // // //     other: {
// // // //       // JSON-LD structured data
// // // //       'script:ld+json': JSON.stringify({
// // // //         '@context': 'https://schema.org',
// // // //         '@type': 'NewsArticle',
// // // //         headline: article.title,
// // // //         datePublished: new Date().toISOString(),
// // // //         author: {
// // // //           '@type': 'Person',
// // // //           name: 'Staff Reporter',
// // // //         },
// // // //         publisher: {
// // // //           '@type': 'Organization',
// // // //           name: 'NYC Report',
// // // //           logo: {
// // // //             '@type': 'ImageObject',
// // // //             url: `${siteUrl}/logo.png`,
// // // //           },
// // // //         },
// // // //         image: imageUrl,
// // // //         articleBody: article.shortdescription,
// // // //         keywords: `${article.category}, news`,
// // // //         url: currentUrl,
// // // //       }),
// // // //     },
// // // //   };
// // // // }

// // // // export default async function DetailPage({ params }: PageProps) {
// // // //   const { category, slug } = await params;

// // // //   let filteredArticles: Article[] = [];

// // // //   switch (category) {
// // // //     case 'technology':
// // // //       filteredArticles = technologyData;
// // // //       break;
// // // //     case 'sports':
// // // //       filteredArticles = sportsData;
// // // //       break;
// // // //     case 'business':
// // // //       filteredArticles = businessData;
// // // //       break;
// // // //     case 'health':
// // // //       filteredArticles = healthData;
// // // //       break;
// // // //     case 'science':
// // // //       filteredArticles = scienceData;
// // // //       break;
// // // //     case 'politics':
// // // //       filteredArticles = politicsData;
// // // //       break;
// // // //     case 'puerto-rico':
// // // //       filteredArticles = puertoricoData;
// // // //       break;
// // // //     case 'entertainment':
// // // //       filteredArticles = entertainmentData;
// // // //       break;
// // // //     case 'education':
// // // //       filteredArticles = educationData;
// // // //       break;
// // // //     default:
// // // //       break;
// // // //   }

// // // //   const article = filteredArticles.find((item) => item.slug === slug);

// // // //   if (!article) {
// // // //     return <div className="p-4">No article found for slug: {slug}</div>;
// // // //   }

// // // //   // Check if this is the Wanda Vázquez article
// // // //   if (slug === 'wanda-vazquez-bribery-case-collapses') {
// // // //     return <WandaVazquezArticle article={article} />;
// // // //   }
// // // //   if (slug === 'why-mr-donald-trump-is-the-best-president-the-united-states-has-ever-had'){
// // // //     const wandaArticle=politicsData[5]
// // // //     return <DonaldTrumpArticle article={article} wandaArticle={wandaArticle}/>
// // // //   }
// // // //   if (slug === 'bancredito-15-million-fight-legal-counsel'){
// // // //     return <ClientS2 article={article}/>
// // // //   }

// // // //   // Default rendering for other articles
// // // //   return (
// // // //     <ArticleHero
// // // //       title={article.title}
// // // //       description={article.description}
// // // //       category={article.category}
// // // //       image={article.image}
// // // //       author={article.author} 
// // // //     />
// // // //   );
// // // // }

// // // // // src/app/[category]/[slug]/page.tsx
// // // // import Image from "next/image";
// // // // import Link from "next/link";
// // // // import ArticleHero from "@/components/ArticleHero";
// // // // import WandaVazquezArticle from "@/components/WandaVazquezArticle";
// // // // import DonaldTrumpArticle from "@/components/DonaldTrump";
// // // // import ClientS2 from "@/components/ClientS2";
// // // // import LongFormArticlePage, {
// // // //   type LongFormArticleData,
// // // //   type SidebarArticle,
// // // // } from "@/components/LongFormArticlePage";
// // // // import { Metadata } from "next";

// // // // import politicsData from '../../../../public/data/politics.json';
// // // // import businessData from '../../../../public/data/business.json';
// // // // import technologyData from '../../../../public/data/technology.json';
// // // // import sportsData from '../../../../public/data/sports.json';
// // // // import scienceData from '../../../../public/data/science.json';
// // // // import healthData from '../../../../public/data/health.json';
// // // // import puertoricoData from '../../../../public/data/puerto-rico.json';
// // // // import entertainmentData from '../../../../public/data/entertainment.json';
// // // // import educationData from '../../../../public/data/education.json';

// // // // /* ─────────────────────────────────────────────────────────────────────────────
// // // //    TYPES
// // // //    The base Article type is extended to optionally carry longform fields.
// // // //    A longform article has articleType === "longform" and the extra fields
// // // //    from LongFormArticleData. Regular articles omit articleType entirely.
// // // // ───────────────────────────────────────────────────────────────────────────── */

// // // // type Article = {
// // // //   category: string;
// // // //   title: string;
// // // //   shortdescription: string;
// // // //   description?: string;
// // // //   image: string;
// // // //   slug: string;
// // // //   author: string;
// // // //   date?: string;
// // // //   // longform-specific (optional on regular articles)
// // // //   articleType?: string;
// // // //   seoTitle?: string;
// // // //   dek?: string;
// // // //   glance?: unknown;
// // // //   sections?: unknown;
// // // //   evidenceTable?: unknown;
// // // //   documentsNeeded?: unknown;
// // // //   faq?: unknown;
// // // //   internalLinks?: unknown;
// // // // };

// // // // interface PageProps {
// // // //   params: Promise<{ category: string; slug: string }>;
// // // // }

// // // // /* ─────────────────────────────────────────────────────────────────────────────
// // // //    HELPERS
// // // // ───────────────────────────────────────────────────────────────────────────── */

// // // // function safeISOString(value: string | undefined | null): string {
// // // //   if (!value) return new Date().toISOString();
// // // //   const d = new Date(value);
// // // //   return isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
// // // // }

// // // // function capitalize(text: string) {
// // // //   return text.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
// // // // }

// // // // function formatDisplayDate(value: string | undefined | null): string {
// // // //   if (!value) return "";
// // // //   const d = new Date(value);
// // // //   if (isNaN(d.getTime())) return "";
// // // //   return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
// // // // }

// // // // /* ─────────────────────────────────────────────────────────────────────────────
// // // //    DATA HELPERS
// // // // ───────────────────────────────────────────────────────────────────────────── */

// // // // const ALL_DATA: Record<string, Article[]> = {
// // // //   politics:      politicsData     as unknown as Article[],
// // // //   business:      businessData     as unknown as Article[],
// // // //   technology:    technologyData   as unknown as Article[],
// // // //   sports:        sportsData       as unknown as Article[],
// // // //   science:       scienceData      as unknown as Article[],
// // // //   health:        healthData       as unknown as Article[],
// // // //   "puerto-rico": puertoricoData   as unknown as Article[],
// // // //   entertainment: entertainmentData as unknown as Article[],
// // // //   education:     educationData    as unknown as Article[],
// // // // };

// // // // function getArticlesByCategory(category: string): Article[] {
// // // //   return ALL_DATA[category] ?? [];
// // // // }

// // // // function getArticleBySlug(slug: string): Article | undefined {
// // // //   for (const articles of Object.values(ALL_DATA)) {
// // // //     const found = articles.find((a) => a.slug === slug);
// // // //     if (found) return found;
// // // //   }
// // // //   return undefined;
// // // // }

// // // // /** Returns the 10 most recent articles across all categories */
// // // // function getLatestArticles(count = 10): SidebarArticle[] {
// // // //   const all: Article[] = Object.values(ALL_DATA).flat();
// // // //   return all
// // // //     .sort((a, b) => {
// // // //       const ta = isNaN(new Date(a.date ?? "").getTime()) ? 0 : new Date(a.date!).getTime();
// // // //       const tb = isNaN(new Date(b.date ?? "").getTime()) ? 0 : new Date(b.date!).getTime();
// // // //       return tb - ta;
// // // //     })
// // // //     .slice(0, count)
// // // //     .map((a) => ({ slug: a.slug, category: a.category, title: a.title, image: a.image }));
// // // // }

// // // // /* ─────────────────────────────────────────────────────────────────────────────
// // // //    STATIC PARAMS
// // // // ───────────────────────────────────────────────────────────────────────────── */

// // // // export async function generateStaticParams() {
// // // //   return Object.values(ALL_DATA)
// // // //     .flat()
// // // //     .filter(
// // // //       (a) =>
// // // //         typeof a.category === "string" && a.category.trim() !== "" &&
// // // //         typeof a.slug    === "string" && a.slug.trim()    !== ""
// // // //     )
// // // //     .map((a) => ({ category: a.category, slug: a.slug }));
// // // // }

// // // // /* ─────────────────────────────────────────────────────────────────────────────
// // // //    METADATA
// // // // ───────────────────────────────────────────────────────────────────────────── */

// // // // export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
// // // //   const { category, slug } = await params;
// // // //   const article = getArticleBySlug(slug);

// // // //   const siteUrl = "https://www.nycreport.org";
// // // //   const currentUrl = `${siteUrl}/${category}/${slug}/`;

// // // //   /* ── Special case: Wanda */
// // // //   if (slug === "wanda-vazquez-bribery-case-collapses") {
// // // //     return {
// // // //       title: "Wanda Vázquez Bribery Case Collapses – Only Minor Violation Remains",
// // // //       description: "All bribery charges dropped against former PR Gov. Wanda Vázquez; case ends with only a technical campaign finance violation, no corruption proven.",
// // // //       alternates: { canonical: `${siteUrl}/politics/wanda-vazquez-bribery-case-collapses/` },
// // // //       openGraph: {
// // // //         title: "Wanda Vázquez Bribery Case Collapses – Only Minor Violation Remains",
// // // //         description: "All bribery charges dropped; only minor campaign finance violation remains.",
// // // //         url: currentUrl, siteName: "NYC Report", type: "article",
// // // //         images: [{ url: article?.image ? `${siteUrl}${article.image}` : `${siteUrl}/images/nyc-report-logo.webp`, width: 1200, height: 630, alt: "Wanda Vázquez" }],
// // // //       },
// // // //     };
// // // //   }

// // // //   if (!article) {
// // // //     return { title: "Article Not Found", description: "The requested article could not be found.", robots: { index: false, follow: false } };
// // // //   }

// // // //   /* ── Longform: use seoTitle when available */
// // // //   const title = (article.articleType === "longform" && article.seoTitle) ? article.seoTitle : article.title;
// // // //   const imageUrl = article.image.startsWith("http") ? article.image : `${siteUrl}${article.image}`;

// // // //   return {
// // // //     title,
// // // //     description: article.shortdescription,
// // // //     keywords: `${article.category}, news, ${article.title}`,
// // // //     authors: [{ name: article.author ?? "Staff Reporter" }],
// // // //     alternates: { canonical: currentUrl },
// // // //     openGraph: {
// // // //       title,
// // // //       description: article.shortdescription,
// // // //       url: currentUrl,
// // // //       siteName: "NYC Report",
// // // //       type: "article",
// // // //       publishedTime: safeISOString(article.date),
// // // //       images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
// // // //     },
// // // //     twitter: {
// // // //       card: "summary_large_image",
// // // //       title,
// // // //       description: article.shortdescription,
// // // //       images: [imageUrl],
// // // //       site: "@nycreport_",
// // // //       creator: "@nycreport_",
// // // //     },
// // // //   };
// // // // }

// // // // /* ─────────────────────────────────────────────────────────────────────────────
// // // //    PAGE
// // // // ───────────────────────────────────────────────────────────────────────────── */

// // // // export default async function DetailPage({ params }: PageProps) {
// // // //   const { category, slug } = await params;

// // // //   const article = getArticleBySlug(slug);
// // // //   if (!article) {
// // // //     return <div className="p-4">No article found for slug: {slug}</div>;
// // // //   }

// // // //   /* ────────────────────────────────────────────────────────────────────────
// // // //      SPECIAL HARD-CODED ROUTES (unchanged from original)
// // // //   ──────────────────────────────────────────────────────────────────────── */
// // // //   if (slug === "wanda-vazquez-bribery-case-collapses") {
// // // //     return <WandaVazquezArticle article={article} />;
// // // //   }
// // // //   if (slug === "why-mr-donald-trump-is-the-best-president-the-united-states-has-ever-had") {
// // // //     const wandaArticle = (politicsData as unknown as Article[])[5];
// // // //     return <DonaldTrumpArticle article={article} wandaArticle={wandaArticle} />;
// // // //   }
// // // //   if (slug === "bancredito-15-million-fight-legal-counsel") {
// // // //     return <ClientS2 article={article} />;
// // // //   }

// // // //   /* ────────────────────────────────────────────────────────────────────────
// // // //      LONGFORM ROUTE
// // // //      Detected when the JSON entry has  "articleType": "longform"
// // // //   ──────────────────────────────────────────────────────────────────────── */
// // // //   if (article.articleType === "longform") {
// // // //     const latestArticles  = getLatestArticles(10);
// // // //     const categoryArticles = getArticlesByCategory(category);
// // // //     const moreArticles: SidebarArticle[] = categoryArticles
// // // //       .filter((a) => a.slug !== slug)
// // // //       .sort((a, b) => {
// // // //         const ta = isNaN(new Date(a.date ?? "").getTime()) ? 0 : new Date(a.date!).getTime();
// // // //         const tb = isNaN(new Date(b.date ?? "").getTime()) ? 0 : new Date(b.date!).getTime();
// // // //         return tb - ta;
// // // //       })
// // // //       .slice(0, 4)
// // // //       .map((a) => ({ slug: a.slug, category: a.category, title: a.title, image: a.image }));

// // // //     const publishedISO = safeISOString(article.date);
// // // //     const displayDate  = formatDisplayDate(article.date);

// // // //     /* JSON-LD for longform / FAQ */
// // // //     const longform = article as unknown as LongFormArticleData;
// // // //     const articleUrl = `https://www.nycreport.org/${category}/${slug}/`;

// // // //     const newsArticleJsonLd = {
// // // //       "@context": "https://schema.org",
// // // //       "@type": "NewsArticle",
// // // //       headline: article.title,
// // // //       description: article.shortdescription,
// // // //       url: articleUrl,
// // // //       image: { "@type": "ImageObject", url: article.image, width: 1200, height: 630 },
// // // //       datePublished: publishedISO,
// // // //       dateModified: publishedISO,
// // // //       author: { "@type": "Person", name: article.author ?? "NYC Report", url: "https://www.nycreport.org/our-team" },
// // // //       publisher: { "@type": "Organization", name: "The NYC Report", url: "https://www.nycreport.org",
// // // //         logo: { "@type": "ImageObject", url: "https://www.nycreport.org/images/nyc-report-logo.webp" } },
// // // //       mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
// // // //       articleSection: capitalize(category),
// // // //     };

// // // //     const faqJsonLd = longform.faq?.length
// // // //       ? {
// // // //           "@context": "https://schema.org",
// // // //           "@type": "FAQPage",
// // // //           mainEntity: longform.faq.map((f) => ({
// // // //             "@type": "Question",
// // // //             name: f.question,
// // // //             acceptedAnswer: { "@type": "Answer", text: f.answer },
// // // //           })),
// // // //         }
// // // //       : null;

// // // //     return (
// // // //       <>
// // // //         <script
// // // //           type="application/ld+json"
// // // //           dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleJsonLd).replace(/</g, "\\u003c") }}
// // // //         />
// // // //         {faqJsonLd && (
// // // //           <script
// // // //             type="application/ld+json"
// // // //             dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
// // // //           />
// // // //         )}
// // // //         <LongFormArticlePage
// // // //           article={longform}
// // // //           displayDate={displayDate}
// // // //           publishedISO={publishedISO}
// // // //           latestArticles={latestArticles}
// // // //           moreArticles={moreArticles}
// // // //         />
// // // //       </>
// // // //     );
// // // //   }

// // // //   /* ────────────────────────────────────────────────────────────────────────
// // // //      DEFAULT / STANDARD ARTICLE ROUTE (unchanged from original)
// // // //   ──────────────────────────────────────────────────────────────────────── */
// // // //   return (
// // // //     <ArticleHero
// // // //       title={article.title}
// // // //       description={article.description ?? ""}
// // // //       category={article.category}
// // // //       image={article.image}
// // // //       author={article.author}
// // // //     />
// // // //   );
// // // // }


// // // // src/app/[category]/[slug]/page.tsx
// // // import Image from "next/image";
// // // import Link from "next/link";
// // // import ArticleHero from "@/components/ArticleHero";
// // // import WandaVazquezArticle from "@/components/WandaVazquezArticle";
// // // import DonaldTrumpArticle from "@/components/DonaldTrump";
// // // import ClientS2 from "@/components/ClientS2";
// // // import LongFormArticlePage, {
// // //   type LongFormArticleData,
// // //   type SidebarArticle,
// // // } from "@/components/LongFormArticlePage";
// // // import { Metadata } from "next";

// // // import politicsData from '../../../../public/data/politics.json';
// // // import businessData from '../../../../public/data/business.json';
// // // import technologyData from '../../../../public/data/technology.json';
// // // import sportsData from '../../../../public/data/sports.json';
// // // import scienceData from '../../../../public/data/science.json';
// // // import healthData from '../../../../public/data/health.json';
// // // import puertoricoData from '../../../../public/data/puerto-rico.json';
// // // import entertainmentData from '../../../../public/data/entertainment.json';
// // // import educationData from '../../../../public/data/education.json';

// // // /* ─────────────────────────────────────────────────────────────────────────────
// // //    TYPES
// // // ───────────────────────────────────────────────────────────────────────────── */

// // // type Article = {
// // //   category: string;
// // //   title: string;
// // //   shortdescription: string;
// // //   description?: string;
// // //   image: string;
// // //   slug: string;
// // //   author: string;
// // //   date?: string;
// // //   // longform-specific (optional on regular articles)
// // //   articleType?: string;
// // //   seoTitle?: string;
// // //   dek?: string;
// // //   glance?: unknown;
// // //   sections?: unknown;
// // //   evidenceTable?: unknown;
// // //   documentsNeeded?: unknown;
// // //   faq?: unknown;
// // //   internalLinks?: unknown;
// // // };

// // // // Type for components that require description as non-optional
// // // type ArticleWithDescription = Omit<Article, 'description'> & { description: string };

// // // interface PageProps {
// // //   params: Promise<{ category: string; slug: string }>;
// // // }

// // // /* ─────────────────────────────────────────────────────────────────────────────
// // //    HELPERS
// // // ───────────────────────────────────────────────────────────────────────────── */

// // // function safeISOString(value: string | undefined | null): string {
// // //   if (!value) return new Date().toISOString();
// // //   const d = new Date(value);
// // //   return isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
// // // }

// // // function capitalize(text: string) {
// // //   return text.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
// // // }

// // // function formatDisplayDate(value: string | undefined | null): string {
// // //   if (!value) return "";
// // //   const d = new Date(value);
// // //   if (isNaN(d.getTime())) return "";
// // //   return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
// // // }

// // // /* ─────────────────────────────────────────────────────────────────────────────
// // //    DATA HELPERS
// // // ───────────────────────────────────────────────────────────────────────────── */

// // // const ALL_DATA: Record<string, Article[]> = {
// // //   politics:      politicsData     as unknown as Article[],
// // //   business:      businessData     as unknown as Article[],
// // //   technology:    technologyData   as unknown as Article[],
// // //   sports:        sportsData       as unknown as Article[],
// // //   science:       scienceData      as unknown as Article[],
// // //   health:        healthData       as unknown as Article[],
// // //   "puerto-rico": puertoricoData   as unknown as Article[],
// // //   entertainment: entertainmentData as unknown as Article[],
// // //   education:     educationData    as unknown as Article[],
// // // };

// // // function getArticlesByCategory(category: string): Article[] {
// // //   return ALL_DATA[category] ?? [];
// // // }

// // // function getArticleBySlug(slug: string): Article | undefined {
// // //   for (const articles of Object.values(ALL_DATA)) {
// // //     const found = articles.find((a) => a.slug === slug);
// // //     if (found) return found;
// // //   }
// // //   return undefined;
// // // }

// // // /** Returns the 10 most recent articles across all categories */
// // // function getLatestArticles(count = 10): SidebarArticle[] {
// // //   const all: Article[] = Object.values(ALL_DATA).flat();
// // //   return all
// // //     .sort((a, b) => {
// // //       const ta = isNaN(new Date(a.date ?? "").getTime()) ? 0 : new Date(a.date!).getTime();
// // //       const tb = isNaN(new Date(b.date ?? "").getTime()) ? 0 : new Date(b.date!).getTime();
// // //       return tb - ta;
// // //     })
// // //     .slice(0, count)
// // //     .map((a) => ({ slug: a.slug, category: a.category, title: a.title, image: a.image }));
// // // }

// // // /* ─────────────────────────────────────────────────────────────────────────────
// // //    STATIC PARAMS
// // // ───────────────────────────────────────────────────────────────────────────── */

// // // export async function generateStaticParams() {
// // //   return Object.values(ALL_DATA)
// // //     .flat()
// // //     .filter(
// // //       (a) =>
// // //         typeof a.category === "string" && a.category.trim() !== "" &&
// // //         typeof a.slug    === "string" && a.slug.trim()    !== ""
// // //     )
// // //     .map((a) => ({ category: a.category, slug: a.slug }));
// // // }

// // // /* ─────────────────────────────────────────────────────────────────────────────
// // //    METADATA
// // // ───────────────────────────────────────────────────────────────────────────── */

// // // export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
// // //   const { category, slug } = await params;
// // //   const article = getArticleBySlug(slug);

// // //   const siteUrl = "https://www.nycreport.org";
// // //   const currentUrl = `${siteUrl}/${category}/${slug}/`;

// // //   /* ── Special case: Wanda */
// // //   if (slug === "wanda-vazquez-bribery-case-collapses") {
// // //     return {
// // //       title: "Wanda Vázquez Bribery Case Collapses – Only Minor Violation Remains",
// // //       description: "All bribery charges dropped against former PR Gov. Wanda Vázquez; case ends with only a technical campaign finance violation, no corruption proven.",
// // //       alternates: { canonical: `${siteUrl}/politics/wanda-vazquez-bribery-case-collapses/` },
// // //       openGraph: {
// // //         title: "Wanda Vázquez Bribery Case Collapses – Only Minor Violation Remains",
// // //         description: "All bribery charges dropped; only minor campaign finance violation remains.",
// // //         url: currentUrl, siteName: "NYC Report", type: "article",
// // //         images: [{ url: article?.image ? `${siteUrl}${article.image}` : `${siteUrl}/images/nyc-report-logo.webp`, width: 1200, height: 630, alt: "Wanda Vázquez" }],
// // //       },
// // //     };
// // //   }

// // //   if (!article) {
// // //     return { title: "Article Not Found", description: "The requested article could not be found.", robots: { index: false, follow: false } };
// // //   }

// // //   /* ── Longform: use seoTitle when available */
// // //   const title = (article.articleType === "longform" && article.seoTitle) ? article.seoTitle : article.title;
// // //   const imageUrl = article.image.startsWith("http") ? article.image : `${siteUrl}${article.image}`;

// // //   return {
// // //     title,
// // //     description: article.shortdescription,
// // //     keywords: `${article.category}, news, ${article.title}`,
// // //     authors: [{ name: article.author ?? "Staff Reporter" }],
// // //     alternates: { canonical: currentUrl },
// // //     openGraph: {
// // //       title,
// // //       description: article.shortdescription,
// // //       url: currentUrl,
// // //       siteName: "NYC Report",
// // //       type: "article",
// // //       publishedTime: safeISOString(article.date),
// // //       images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
// // //     },
// // //     twitter: {
// // //       card: "summary_large_image",
// // //       title,
// // //       description: article.shortdescription,
// // //       images: [imageUrl],
// // //       site: "@nycreport_",
// // //       creator: "@nycreport_",
// // //     },
// // //   };
// // // }

// // // /* ─────────────────────────────────────────────────────────────────────────────
// // //    PAGE
// // // ───────────────────────────────────────────────────────────────────────────── */

// // // export default async function DetailPage({ params }: PageProps) {
// // //   const { category, slug } = await params;

// // //   const article = getArticleBySlug(slug);
// // //   if (!article) {
// // //     return <div className="p-4">No article found for slug: {slug}</div>;
// // //   }

// // //   /* ────────────────────────────────────────────────────────────────────────
// // //      SPECIAL HARD-CODED ROUTES
// // //      Cast to ArticleWithDescription so components that require description
// // //      as a non-optional string are satisfied by TypeScript.
// // //   ──────────────────────────────────────────────────────────────────────── */
// // //   if (slug === "wanda-vazquez-bribery-case-collapses") {
// // //     const a = { ...article, description: article.description ?? "" } as ArticleWithDescription;
// // //     return <WandaVazquezArticle article={a} />;
// // //   }
// // //   if (slug === "why-mr-donald-trump-is-the-best-president-the-united-states-has-ever-had") {
// // //     const a = { ...article, description: article.description ?? "" } as ArticleWithDescription;
// // //     const wandaArticle = { ...(politicsData as unknown as Article[])[5], description: ((politicsData as unknown as Article[])[5]).description ?? "" } as ArticleWithDescription;
// // //     return <DonaldTrumpArticle article={a} wandaArticle={wandaArticle} />;
// // //   }
// // //   if (slug === "bancredito-15-million-fight-legal-counsel") {
// // //     const a = { ...article, description: article.description ?? "" } as ArticleWithDescription;
// // //     return <ClientS2 article={a} />;
// // //   }

// // //   /* ────────────────────────────────────────────────────────────────────────
// // //      LONGFORM ROUTE
// // //   ──────────────────────────────────────────────────────────────────────── */
// // //   if (article.articleType === "longform") {
// // //     const latestArticles  = getLatestArticles(10);
// // //     const categoryArticles = getArticlesByCategory(category);
// // //     const moreArticles: SidebarArticle[] = categoryArticles
// // //       .filter((a) => a.slug !== slug)
// // //       .sort((a, b) => {
// // //         const ta = isNaN(new Date(a.date ?? "").getTime()) ? 0 : new Date(a.date!).getTime();
// // //         const tb = isNaN(new Date(b.date ?? "").getTime()) ? 0 : new Date(b.date!).getTime();
// // //         return tb - ta;
// // //       })
// // //       .slice(0, 4)
// // //       .map((a) => ({ slug: a.slug, category: a.category, title: a.title, image: a.image }));

// // //     const publishedISO = safeISOString(article.date);
// // //     const displayDate  = formatDisplayDate(article.date);

// // //     const longform = article as unknown as LongFormArticleData;
// // //     const articleUrl = `https://www.nycreport.org/${category}/${slug}/`;

// // //     const newsArticleJsonLd = {
// // //       "@context": "https://schema.org",
// // //       "@type": "NewsArticle",
// // //       headline: article.title,
// // //       description: article.shortdescription,
// // //       url: articleUrl,
// // //       image: { "@type": "ImageObject", url: article.image, width: 1200, height: 630 },
// // //       datePublished: publishedISO,
// // //       dateModified: publishedISO,
// // //       author: { "@type": "Person", name: article.author ?? "NYC Report", url: "https://www.nycreport.org/our-team" },
// // //       publisher: { "@type": "Organization", name: "The NYC Report", url: "https://www.nycreport.org",
// // //         logo: { "@type": "ImageObject", url: "https://www.nycreport.org/images/nyc-report-logo.webp" } },
// // //       mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
// // //       articleSection: capitalize(category),
// // //     };

// // //     const faqJsonLd = longform.faq?.length
// // //       ? {
// // //           "@context": "https://schema.org",
// // //           "@type": "FAQPage",
// // //           mainEntity: longform.faq.map((f) => ({
// // //             "@type": "Question",
// // //             name: f.question,
// // //             acceptedAnswer: { "@type": "Answer", text: f.answer },
// // //           })),
// // //         }
// // //       : null;

// // //     return (
// // //       <>
// // //         <script
// // //           type="application/ld+json"
// // //           dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleJsonLd).replace(/</g, "\\u003c") }}
// // //         />
// // //         {faqJsonLd && (
// // //           <script
// // //             type="application/ld+json"
// // //             dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
// // //           />
// // //         )}
// // //         <LongFormArticlePage
// // //           article={longform}
// // //           displayDate={displayDate}
// // //           publishedISO={publishedISO}
// // //           latestArticles={latestArticles}
// // //           moreArticles={moreArticles}
// // //         />
// // //       </>
// // //     );
// // //   }

// // //   /* ────────────────────────────────────────────────────────────────────────
// // //      DEFAULT / STANDARD ARTICLE ROUTE
// // //   ──────────────────────────────────────────────────────────────────────── */
// // //   return (
// // //     <ArticleHero
// // //       title={article.title}
// // //       description={article.description ?? ""}
// // //       category={article.category}
// // //       image={article.image}
// // //       author={article.author}
// // //     />
// // //   );
// // // }




// // // src/app/[category]/[slug]/page.tsx
// // import ArticleHero from "@/components/ArticleHero";
// // import WandaVazquezArticle from "@/components/WandaVazquezArticle";
// // import DonaldTrumpArticle from "@/components/DonaldTrump";
// // import ClientS2 from "@/components/ClientS2";
// // import LongFormArticlePage, {
// //   type LongFormArticleData,
// //   type SidebarArticle,
// // } from "@/components/LongFormArticlePage";
// // import RyanMarinDossierPage, {
// //   type DossierArticleData,
// // } from "@/components/RyanMarinDossierPage";
// // import { Metadata } from "next";

// // import FahadGhaffarDossierPage, {
// //   type FahadGhaffarArticleData,
// // } from "@/components/Fahadghaffardossierpage";

// // import politicsData from '../../../../public/data/politics.json';
// // import businessData from '../../../../public/data/business.json';
// // import technologyData from '../../../../public/data/technology.json';
// // import sportsData from '../../../../public/data/sports.json';
// // import scienceData from '../../../../public/data/science.json';
// // import healthData from '../../../../public/data/health.json';
// // import puertoricoData from '../../../../public/data/puerto-rico.json';
// // import entertainmentData from '../../../../public/data/entertainment.json';
// // import educationData from '../../../../public/data/education.json';

// // /* ─────────────────────────────────────────────────────────────────────────────
// //    TYPES
// // ───────────────────────────────────────────────────────────────────────────── */

// // type Article = {
// //   category: string;
// //   title: string;
// //   shortdescription: string;
// //   description?: string;
// //   image: string;
// //   slug: string;
// //   author: string;
// //   date?: string;
// //   articleType?: string;
// //   seoTitle?: string;
// //   dek?: string;
// //   glance?: unknown;
// //   sections?: unknown;
// //   evidenceTable?: unknown;
// //   documentsNeeded?: unknown;
// //   faq?: unknown;
// //   internalLinks?: unknown;
// //   // dossier-specific
// //   editorialLabel?: string;
// //   lede?: string;
// //   keyFacts?: unknown;
// //   accountingQuestions?: unknown;
// //   sources?: unknown;
// //   relatedLinks?: unknown;
// // };

// // type ArticleWithDescription = Omit<Article, "description"> & { description: string };

// // interface PageProps {
// //   params: Promise<{ category: string; slug: string }>;
// // }

// // /* ─────────────────────────────────────────────────────────────────────────────
// //    HELPERS
// // ───────────────────────────────────────────────────────────────────────────── */

// // function safeISOString(value: string | undefined | null): string {
// //   if (!value) return new Date().toISOString();
// //   const d = new Date(value);
// //   return isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
// // }

// // function capitalize(text: string) {
// //   return text.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
// // }

// // function formatDisplayDate(value: string | undefined | null): string {
// //   if (!value) return "";
// //   const d = new Date(value);
// //   if (isNaN(d.getTime())) return "";
// //   return d.toLocaleDateString("en-US", {
// //     year: "numeric",
// //     month: "long",
// //     day: "numeric",
// //   });
// // }

// // /* ─────────────────────────────────────────────────────────────────────────────
// //    DATA HELPERS
// // ───────────────────────────────────────────────────────────────────────────── */

// // const ALL_DATA: Record<string, Article[]> = {
// //   politics:       politicsData      as unknown as Article[],
// //   business:       businessData      as unknown as Article[],
// //   technology:     technologyData    as unknown as Article[],
// //   sports:         sportsData        as unknown as Article[],
// //   science:        scienceData       as unknown as Article[],
// //   health:         healthData        as unknown as Article[],
// //   "puerto-rico":  puertoricoData    as unknown as Article[],
// //   entertainment:  entertainmentData as unknown as Article[],
// //   education:      educationData     as unknown as Article[],
// // };

// // function getArticlesByCategory(cat: string): Article[] {
// //   return ALL_DATA[cat] ?? [];
// // }

// // function getArticleBySlug(slug: string): Article | undefined {
// //   for (const articles of Object.values(ALL_DATA)) {
// //     const found = articles.find((a) => a.slug === slug);
// //     if (found) return found;
// //   }
// //   return undefined;
// // }

// // function getLatestArticles(count = 10): SidebarArticle[] {
// //   const all: Article[] = Object.values(ALL_DATA).flat();
// //   return all
// //     .sort((a, b) => {
// //       const ta = isNaN(new Date(a.date ?? "").getTime()) ? 0 : new Date(a.date!).getTime();
// //       const tb = isNaN(new Date(b.date ?? "").getTime()) ? 0 : new Date(b.date!).getTime();
// //       return tb - ta;
// //     })
// //     .slice(0, count)
// //     .map((a) => ({ slug: a.slug, category: a.category, title: a.title, image: a.image }));
// // }

// // /* ─────────────────────────────────────────────────────────────────────────────
// //    LONGFORM RENDERER (shared for articleType === "longform")
// // ───────────────────────────────────────────────────────────────────────────── */

// // function renderLongForm(article: Article, category: string, slug: string) {
// //   const siteUrl = "https://www.nycreport.org";
// //   const articleUrl = `${siteUrl}/${category}/${slug}/`;
// //   const publishedISO = safeISOString(article.date);
// //   const displayDate = formatDisplayDate(article.date);

// //   const latestArticles = getLatestArticles(10);
// //   const moreArticles: SidebarArticle[] = getArticlesByCategory(category)
// //     .filter((a) => a.slug !== slug)
// //     .sort((a, b) => {
// //       const ta = isNaN(new Date(a.date ?? "").getTime()) ? 0 : new Date(a.date!).getTime();
// //       const tb = isNaN(new Date(b.date ?? "").getTime()) ? 0 : new Date(b.date!).getTime();
// //       return tb - ta;
// //     })
// //     .slice(0, 4)
// //     .map((a) => ({ slug: a.slug, category: a.category, title: a.title, image: a.image }));

// //   const longform = article as unknown as LongFormArticleData;

// //   const newsArticleJsonLd = {
// //     "@context": "https://schema.org",
// //     "@type": "NewsArticle",
// //     headline: article.title,
// //     description: article.shortdescription,
// //     url: articleUrl,
// //     image: { "@type": "ImageObject", url: article.image, width: 1200, height: 630 },
// //     datePublished: publishedISO,
// //     dateModified: publishedISO,
// //     author: { "@type": "Person", name: article.author ?? "NYC Report", url: `${siteUrl}/our-team` },
// //     publisher: {
// //       "@type": "Organization",
// //       name: "The NYC Report",
// //       url: siteUrl,
// //       logo: { "@type": "ImageObject", url: `${siteUrl}/images/nyc-report-logo.webp` },
// //     },
// //     mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
// //     articleSection: capitalize(category),
// //   };

// //   const faqJsonLd = longform.faq?.length
// //     ? {
// //         "@context": "https://schema.org",
// //         "@type": "FAQPage",
// //         mainEntity: longform.faq.map((f) => ({
// //           "@type": "Question",
// //           name: f.question,
// //           acceptedAnswer: { "@type": "Answer", text: f.answer },
// //         })),
// //       }
// //     : null;

// //   return (
// //     <>
// //       <script
// //         type="application/ld+json"
// //         dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleJsonLd).replace(/</g, "\\u003c") }}
// //       />
// //       {faqJsonLd && (
// //         <script
// //           type="application/ld+json"
// //           dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
// //         />
// //       )}
// //       <LongFormArticlePage
// //         article={longform}
// //         displayDate={displayDate}
// //         publishedISO={publishedISO}
// //         latestArticles={latestArticles}
// //         moreArticles={moreArticles}
// //       />
// //     </>
// //   );
// // }

// // /* ─────────────────────────────────────────────────────────────────────────────
// //    DOSSIER RENDERER (for articleType === "dossier")
// // ───────────────────────────────────────────────────────────────────────────── */

// // function renderDossier(article: Article, category: string, slug: string) {
// //   const siteUrl = "https://www.nycreport.org";
// //   const articleUrl = `${siteUrl}/${category}/${slug}/`;
// //   const publishedISO = safeISOString(article.date);
// //   const displayDate = formatDisplayDate(article.date);
// //   const imageUrl = article.image.startsWith("http") ? article.image : `${siteUrl}${article.image}`;

// //   const newsArticleJsonLd = {
// //     "@context": "https://schema.org",
// //     "@type": "NewsArticle",
// //     headline: article.title,
// //     description: article.shortdescription,
// //     url: articleUrl,
// //     image: { "@type": "ImageObject", url: imageUrl, width: 1200, height: 630 },
// //     datePublished: publishedISO,
// //     dateModified: publishedISO,
// //     author: { "@type": "Person", name: article.author ?? "NYC Report", url: `${siteUrl}/our-team` },
// //     publisher: {
// //       "@type": "Organization",
// //       name: "The NYC Report",
// //       url: siteUrl,
// //       logo: { "@type": "ImageObject", url: `${siteUrl}/images/nyc-report-logo.webp` },
// //     },
// //     mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
// //     articleSection: capitalize(category),
// //   };

// //   function renderFahadGhaffarDossier(article: Article, category: string, slug: string) {
// //   const siteUrl = "https://www.nycreport.org";
// //   const articleUrl = `${siteUrl}/${category}/${slug}/`;
// //   const publishedISO = safeISOString(article.date);
// //   const displayDate = formatDisplayDate(article.date);
// //   const imageUrl = article.image.startsWith("http") ? article.image : `${siteUrl}${article.image}`;
 
// //   const newsArticleJsonLd = {
// //     "@context": "https://schema.org",
// //     "@type": "NewsArticle",
// //     headline: article.title,
// //     description: article.shortdescription,
// //     url: articleUrl,
// //     image: { "@type": "ImageObject", url: imageUrl, width: 1200, height: 630 },
// //     datePublished: publishedISO,
// //     dateModified: publishedISO,
// //     author: {
// //       "@type": "Person",
// //       name: article.author ?? "NYC Report",
// //       url: `${siteUrl}/our-team`,
// //     },
// //     publisher: {
// //       "@type": "Organization",
// //       name: "The NYC Report",
// //       url: siteUrl,
// //       logo: { "@type": "ImageObject", url: `${siteUrl}/images/nyc-report-logo.webp` },
// //     },
// //     mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
// //     articleSection: capitalize(category),
// //     keywords: [
// //       "Fahad Ghaffar",
// //       "John Paulson",
// //       "Puerto Rico",
// //       "arbitration",
// //       "fraud",
// //       "Wanda Vázquez",
// //       "civil RICO",
// //       "Paulson PRV Holdings",
// //     ],
// //   };

// //   return (
// //     <>
// //       <script
// //         type="application/ld+json"
// //         dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleJsonLd).replace(/</g, "\\u003c") }}
// //       />
// //       <RyanMarinDossierPage
// //         article={article as unknown as DossierArticleData}
// //         displayDate={displayDate}
// //         publishedISO={publishedISO}
// //       />

// //       <FahadGhaffarDossierPage
// //         article={article as unknown as FahadGhaffarArticleData}
// //         displayDate={displayDate}
// //         publishedISO={publishedISO}
// //       />
// //     </>
// //   );
// // }

// // /* ─────────────────────────────────────────────────────────────────────────────
// //    STATIC PARAMS
// // ───────────────────────────────────────────────────────────────────────────── */

// // export async function generateStaticParams() {
// //   return Object.values(ALL_DATA)
// //     .flat()
// //     .filter(
// //       (a) =>
// //         typeof a.category === "string" && a.category.trim() !== "" &&
// //         typeof a.slug     === "string" && a.slug.trim()     !== ""
// //     )
// //     .map((a) => ({ category: a.category, slug: a.slug }));
// // }

// // /* ─────────────────────────────────────────────────────────────────────────────
// //    METADATA
// // ───────────────────────────────────────────────────────────────────────────── */

// // export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
// //   const { category, slug } = await params;
// //   const article = getArticleBySlug(slug);

// //   const siteUrl = "https://www.nycreport.org";
// //   const currentUrl = `${siteUrl}/${category}/${slug}/`;

// //   if (slug === "wanda-vazquez-bribery-case-collapses") {
// //     return {
// //       title: "Wanda Vázquez Bribery Case Collapses – Only Minor Violation Remains",
// //       description: "All bribery charges dropped against former PR Gov. Wanda Vázquez; case ends with only a technical campaign finance violation, no corruption proven.",
// //       alternates: { canonical: `${siteUrl}/politics/wanda-vazquez-bribery-case-collapses/` },
// //       openGraph: {
// //         title: "Wanda Vázquez Bribery Case Collapses – Only Minor Violation Remains",
// //         description: "All bribery charges dropped; only minor campaign finance violation remains.",
// //         url: currentUrl,
// //         siteName: "NYC Report",
// //         type: "article",
// //         images: [
// //           {
// //             url: article?.image ? `${siteUrl}${article.image}` : `${siteUrl}/images/nyc-report-logo.webp`,
// //             width: 1200,
// //             height: 630,
// //             alt: "Wanda Vázquez",
// //           },
// //         ],
// //       },
// //     };
// //   }

// //   if (!article) {
// //     return {
// //       title: "Article Not Found",
// //       description: "The requested article could not be found.",
// //       robots: { index: false, follow: false },
// //     };
// //   }

// //   const title =
// //     (article.articleType === "longform" || article.articleType === "dossier") && article.seoTitle
// //       ? article.seoTitle
// //       : article.title;
// //   const imageUrl = article.image.startsWith("http") ? article.image : `${siteUrl}${article.image}`;

// //   return {
// //     title,
// //     description: article.shortdescription,
// //     keywords: `${article.category}, news, ${article.title}`,
// //     authors: [{ name: article.author ?? "Staff Reporter" }],
// //     alternates: { canonical: currentUrl },
// //     openGraph: {
// //       title,
// //       description: article.shortdescription,
// //       url: currentUrl,
// //       siteName: "NYC Report",
// //       type: "article",
// //       publishedTime: safeISOString(article.date),
// //       images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
// //     },
// //     twitter: {
// //       card: "summary_large_image",
// //       title,
// //       description: article.shortdescription,
// //       images: [imageUrl],
// //       site: "@nycreport_",
// //       creator: "@nycreport_",
// //     },
// //   };
// // }

// // /* ─────────────────────────────────────────────────────────────────────────────
// //    PAGE — routing table
// //    ┌──────────────────────────────────────────────────────────────────────────┐
// //    │ slug                                              → component            │
// //    ├──────────────────────────────────────────────────────────────────────────┤
// //    │ wanda-vazquez-bribery-case-collapses              → WandaVazquezArticle  │
// //    │ why-mr-donald-trump-is-the-best-president-…       → DonaldTrumpArticle   │
// //    │ bancredito-15-million-fight-legal-counsel          → ClientS2             │
// //    │ ryan-marin-bancredito-driven-receivership-…       → RyanMarinDossierPage │
// //    │ articleType === "dossier"   (any slug)            → RyanMarinDossierPage │
// //    │ articleType === "longform"  (any slug)            → LongFormArticlePage  │
// //    │ (default)                                         → ArticleHero          │
// //    └──────────────────────────────────────────────────────────────────────────┘
// // ───────────────────────────────────────────────────────────────────────────── */

// // export default async function DetailPage({ params }: PageProps) {
// //   const { category, slug } = await params;

// //   const article = getArticleBySlug(slug);
// //   if (!article) {
// //     return <div className="p-4">No article found for slug: {slug}</div>;
// //   }

// //   /* ── Hard-coded special routes ── */

// //   if (slug === "wanda-vazquez-bribery-case-collapses") {
// //     const a = { ...article, description: article.description ?? "" } as ArticleWithDescription;
// //     return <WandaVazquezArticle article={a} />;
// //   }

// //   if (slug === "why-mr-donald-trump-is-the-best-president-the-united-states-has-ever-had") {
// //     const a = { ...article, description: article.description ?? "" } as ArticleWithDescription;
// //     const wanda = {
// //       ...(politicsData as unknown as Article[])[5],
// //       description: ((politicsData as unknown as Article[])[5]).description ?? "",
// //     } as ArticleWithDescription;
// //     return <DonaldTrumpArticle article={a} wandaArticle={wanda} />;
// //   }

// //   if (slug === "bancredito-15-million-fight-legal-counsel") {
// //     const a = { ...article, description: article.description ?? "" } as ArticleWithDescription;
// //     return <ClientS2 article={a} />;
// //   }

// //   /* ── Ryan Marin dossier — explicit safety net ── */
// //   if (slug === "ryan-marin-bancredito-driven-receivership-accountability") {
// //     return renderDossier(article, category, slug);
// //   }

// //   /* ── Generic articleType routing ── */
// //   if (article.articleType === "dossier") {
// //     return renderDossier(article, category, slug);
// //   }

// //   if (article.articleType === "longform") {
// //     return renderLongForm(article, category, slug);
// //   }

// //     /* ── Fahad Ghaffar dossier — explicit safety net ── */
// //   if (slug === "fahad-ghaffar-credibility-problem-paulson-puerto-rico") {
// //     return renderFahadGhaffarDossier(article, category, slug);
// //   }
 
// //   /* ── Generic articleType routing (add dossier-fahad) ── */
// //   if (article.articleType === "dossier-fahad") {
// //     return renderFahadGhaffarDossier(article, category, slug);
// //   }
 

// //   /* ── Default ── */
// //   return (
// //     <ArticleHero
// //       title={article.title}
// //       description={article.description ?? ""}
// //       category={article.category}
// //       image={article.image}
// //       author={article.author}
// //     />
// //   );
// // }

// // src/app/[category]/[slug]/page.tsx
// import ArticleHero from "@/components/ArticleHero";
// import WandaVazquezArticle from "@/components/WandaVazquezArticle";
// import DonaldTrumpArticle from "@/components/DonaldTrump";
// import ClientS2 from "@/components/ClientS2";
// import LongFormArticlePage, {
//   type LongFormArticleData,
//   type SidebarArticle,
// } from "@/components/LongFormArticlePage";
// import RyanMarinDossierPage, {
//   type DossierArticleData,
// } from "@/components/RyanMarinDossierPage";
// import FahadGhaffarDossierPage, {
//   type FahadGhaffarArticleData,
// } from "@/components/Fahadghaffardossierpage";
// import { Metadata } from "next";

// import politicsData from '../../../../public/data/politics.json';
// import businessData from '../../../../public/data/business.json';
// import technologyData from '../../../../public/data/technology.json';
// import sportsData from '../../../../public/data/sports.json';
// import scienceData from '../../../../public/data/science.json';
// import healthData from '../../../../public/data/health.json';
// import puertoricoData from '../../../../public/data/puerto-rico.json';
// import entertainmentData from '../../../../public/data/entertainment.json';
// import educationData from '../../../../public/data/education.json';

// /* ─────────────────────────────────────────────────────────────────────────────
//    TYPES
// ───────────────────────────────────────────────────────────────────────────── */

// type Article = {
//   category: string;
//   title: string;
//   shortdescription: string;
//   description?: string;
//   image: string;
//   slug: string;
//   author: string;
//   date?: string;
//   articleType?: string;
//   seoTitle?: string;
//   dek?: string;
//   glance?: unknown;
//   sections?: unknown;
//   evidenceTable?: unknown;
//   documentsNeeded?: unknown;
//   faq?: unknown;
//   internalLinks?: unknown;
//   // dossier-specific
//   editorialLabel?: string;
//   lede?: string;
//   keyFacts?: unknown;
//   accountingQuestions?: unknown;
//   sources?: unknown;
//   relatedLinks?: unknown;
// };

// type ArticleWithDescription = Omit<Article, "description"> & { description: string };

// interface PageProps {
//   params: Promise<{ category: string; slug: string }>;
// }

// /* ─────────────────────────────────────────────────────────────────────────────
//    HELPERS
// ───────────────────────────────────────────────────────────────────────────── */

// function safeISOString(value: string | undefined | null): string {
//   if (!value) return new Date().toISOString();
//   const d = new Date(value);
//   return isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
// }

// function capitalize(text: string) {
//   return text.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
// }

// function formatDisplayDate(value: string | undefined | null): string {
//   if (!value) return "";
//   const d = new Date(value);
//   if (isNaN(d.getTime())) return "";
//   return d.toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });
// }

// /* ─────────────────────────────────────────────────────────────────────────────
//    DATA HELPERS
// ───────────────────────────────────────────────────────────────────────────── */

// const ALL_DATA: Record<string, Article[]> = {
//   politics:       politicsData      as unknown as Article[],
//   business:       businessData      as unknown as Article[],
//   technology:     technologyData    as unknown as Article[],
//   sports:         sportsData        as unknown as Article[],
//   science:        scienceData       as unknown as Article[],
//   health:         healthData        as unknown as Article[],
//   "puerto-rico":  puertoricoData    as unknown as Article[],
//   entertainment:  entertainmentData as unknown as Article[],
//   education:      educationData     as unknown as Article[],
// };

// function getArticlesByCategory(cat: string): Article[] {
//   return ALL_DATA[cat] ?? [];
// }

// function getArticleBySlug(slug: string): Article | undefined {
//   for (const articles of Object.values(ALL_DATA)) {
//     const found = articles.find((a) => a.slug === slug);
//     if (found) return found;
//   }
//   return undefined;
// }

// function getLatestArticles(count = 10): SidebarArticle[] {
//   const all: Article[] = Object.values(ALL_DATA).flat();
//   return all
//     .sort((a, b) => {
//       const ta = isNaN(new Date(a.date ?? "").getTime()) ? 0 : new Date(a.date!).getTime();
//       const tb = isNaN(new Date(b.date ?? "").getTime()) ? 0 : new Date(b.date!).getTime();
//       return tb - ta;
//     })
//     .slice(0, count)
//     .map((a) => ({ slug: a.slug, category: a.category, title: a.title, image: a.image }));
// }

// /* ─────────────────────────────────────────────────────────────────────────────
//    LONGFORM RENDERER
// ───────────────────────────────────────────────────────────────────────────── */

// function renderLongForm(article: Article, category: string, slug: string) {
//   const siteUrl = "https://www.nycreport.org";
//   const articleUrl = `${siteUrl}/${category}/${slug}/`;
//   const publishedISO = safeISOString(article.date);
//   const displayDate = formatDisplayDate(article.date);

//   const latestArticles = getLatestArticles(10);
//   const moreArticles: SidebarArticle[] = getArticlesByCategory(category)
//     .filter((a) => a.slug !== slug)
//     .sort((a, b) => {
//       const ta = isNaN(new Date(a.date ?? "").getTime()) ? 0 : new Date(a.date!).getTime();
//       const tb = isNaN(new Date(b.date ?? "").getTime()) ? 0 : new Date(b.date!).getTime();
//       return tb - ta;
//     })
//     .slice(0, 4)
//     .map((a) => ({ slug: a.slug, category: a.category, title: a.title, image: a.image }));

//   const longform = article as unknown as LongFormArticleData;

//   const newsArticleJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "NewsArticle",
//     headline: article.title,
//     description: article.shortdescription,
//     url: articleUrl,
//     image: { "@type": "ImageObject", url: article.image, width: 1200, height: 630 },
//     datePublished: publishedISO,
//     dateModified: publishedISO,
//     author: { "@type": "Person", name: article.author ?? "NYC Report", url: `${siteUrl}/our-team` },
//     publisher: {
//       "@type": "Organization",
//       name: "The NYC Report",
//       url: siteUrl,
//       logo: { "@type": "ImageObject", url: `${siteUrl}/images/nyc-report-logo.webp` },
//     },
//     mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
//     articleSection: capitalize(category),
//   };

//   const faqJsonLd = longform.faq?.length
//     ? {
//         "@context": "https://schema.org",
//         "@type": "FAQPage",
//         mainEntity: longform.faq.map((f) => ({
//           "@type": "Question",
//           name: f.question,
//           acceptedAnswer: { "@type": "Answer", text: f.answer },
//         })),
//       }
//     : null;

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleJsonLd).replace(/</g, "\\u003c") }}
//       />
//       {faqJsonLd && (
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
//         />
//       )}
//       <LongFormArticlePage
//         article={longform}
//         displayDate={displayDate}
//         publishedISO={publishedISO}
//         latestArticles={latestArticles}
//         moreArticles={moreArticles}
//       />
//     </>
//   );
// }

// /* ─────────────────────────────────────────────────────────────────────────────
//    DOSSIER RENDERER (Ryan Marin style)
// ───────────────────────────────────────────────────────────────────────────── */

// function renderDossier(article: Article, category: string, slug: string) {
//   const siteUrl = "https://www.nycreport.org";
//   const articleUrl = `${siteUrl}/${category}/${slug}/`;
//   const publishedISO = safeISOString(article.date);
//   const displayDate = formatDisplayDate(article.date);
//   const imageUrl = article.image.startsWith("http") ? article.image : `${siteUrl}${article.image}`;

//   const newsArticleJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "NewsArticle",
//     headline: article.title,
//     description: article.shortdescription,
//     url: articleUrl,
//     image: { "@type": "ImageObject", url: imageUrl, width: 1200, height: 630 },
//     datePublished: publishedISO,
//     dateModified: publishedISO,
//     author: { "@type": "Person", name: article.author ?? "NYC Report", url: `${siteUrl}/our-team` },
//     publisher: {
//       "@type": "Organization",
//       name: "The NYC Report",
//       url: siteUrl,
//       logo: { "@type": "ImageObject", url: `${siteUrl}/images/nyc-report-logo.webp` },
//     },
//     mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
//     articleSection: capitalize(category),
//   };

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleJsonLd).replace(/</g, "\\u003c") }}
//       />
//       <RyanMarinDossierPage
//         article={article as unknown as DossierArticleData}
//         displayDate={displayDate}
//         publishedISO={publishedISO}
//       />
//     </>
//   );
// }

// /* ─────────────────────────────────────────────────────────────────────────────
//    FAHAD GHAFFAR DOSSIER RENDERER
// ───────────────────────────────────────────────────────────────────────────── */

// function renderFahadGhaffarDossier(article: Article, category: string, slug: string) {
//   const siteUrl = "https://www.nycreport.org";
//   const articleUrl = `${siteUrl}/${category}/${slug}/`;
//   const publishedISO = safeISOString(article.date);
//   const displayDate = formatDisplayDate(article.date);
//   const imageUrl = article.image.startsWith("http") ? article.image : `${siteUrl}${article.image}`;

//   const newsArticleJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "NewsArticle",
//     headline: article.title,
//     description: article.shortdescription,
//     url: articleUrl,
//     image: { "@type": "ImageObject", url: imageUrl, width: 1200, height: 630 },
//     datePublished: publishedISO,
//     dateModified: publishedISO,
//     author: {
//       "@type": "Person",
//       name: article.author ?? "NYC Report",
//       url: `${siteUrl}/our-team`,
//     },
//     publisher: {
//       "@type": "Organization",
//       name: "The NYC Report",
//       url: siteUrl,
//       logo: { "@type": "ImageObject", url: `${siteUrl}/images/nyc-report-logo.webp` },
//     },
//     mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
//     articleSection: capitalize(category),
//     keywords: [
//       "Fahad Ghaffar",
//       "John Paulson",
//       "Puerto Rico",
//       "arbitration",
//       "fraud",
//       "Wanda Vázquez",
//       "civil RICO",
//       "Paulson PRV Holdings",
//     ],
//   };

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(newsArticleJsonLd).replace(/</g, "\\u003c"),
//         }}
//       />
//       <FahadGhaffarDossierPage
//         article={article as unknown as FahadGhaffarArticleData}
//         displayDate={displayDate}
//         publishedISO={publishedISO}
//       />
//     </>
//   );
// }

// /* ─────────────────────────────────────────────────────────────────────────────
//    STATIC PARAMS
// ───────────────────────────────────────────────────────────────────────────── */

// export async function generateStaticParams() {
//   return Object.values(ALL_DATA)
//     .flat()
//     .filter(
//       (a) =>
//         typeof a.category === "string" && a.category.trim() !== "" &&
//         typeof a.slug     === "string" && a.slug.trim()     !== ""
//     )
//     .map((a) => ({ category: a.category, slug: a.slug }));
// }

// /* ─────────────────────────────────────────────────────────────────────────────
//    METADATA
// ───────────────────────────────────────────────────────────────────────────── */

// export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
//   const { category, slug } = await params;
//   const article = getArticleBySlug(slug);

//   const siteUrl = "https://www.nycreport.org";
//   const currentUrl = `${siteUrl}/${category}/${slug}/`;

//   if (slug === "wanda-vazquez-bribery-case-collapses") {
//     return {
//       title: "Wanda Vázquez Bribery Case Collapses – Only Minor Violation Remains",
//       description: "All bribery charges dropped against former PR Gov. Wanda Vázquez; case ends with only a technical campaign finance violation, no corruption proven.",
//       alternates: { canonical: `${siteUrl}/politics/wanda-vazquez-bribery-case-collapses/` },
//       openGraph: {
//         title: "Wanda Vázquez Bribery Case Collapses – Only Minor Violation Remains",
//         description: "All bribery charges dropped; only minor campaign finance violation remains.",
//         url: currentUrl,
//         siteName: "NYC Report",
//         type: "article",
//         images: [
//           {
//             url: article?.image ? `${siteUrl}${article.image}` : `${siteUrl}/images/nyc-report-logo.webp`,
//             width: 1200,
//             height: 630,
//             alt: "Wanda Vázquez",
//           },
//         ],
//       },
//     };
//   }

//   if (slug === "fahad-ghaffar-credibility-problem-paulson-puerto-rico") {
//     const imageUrl = article?.image
//       ? (article.image.startsWith("http") ? article.image : `${siteUrl}${article.image}`)
//       : `${siteUrl}/images/nyc-report-logo.webp`;
//     return {
//       title: "The Fahad Ghaffar Credibility Problem: Paulson's $48M Arbitration Win and Puerto Rico's Unanswered Questions",
//       description: "John Paulson's reported $48 million arbitration win against Fahad Ghaffar raises fresh questions about business trust, political access, and witness credibility in Puerto Rico.",
//       alternates: { canonical: currentUrl },
//       openGraph: {
//         title: "The Fahad Ghaffar Credibility Problem: Paulson's $48M Arbitration Win and Puerto Rico's Unanswered Questions",
//         description: "John Paulson's reported $48 million arbitration win raises fresh questions about Fahad Ghaffar's credibility and his role in Puerto Rico's political and legal landscape.",
//         url: currentUrl,
//         siteName: "NYC Report",
//         type: "article",
//         images: [{ url: imageUrl, width: 1200, height: 630, alt: "Fahad Ghaffar and John Paulson Puerto Rico" }],
//       },
//       twitter: {
//         card: "summary_large_image",
//         title: "The Fahad Ghaffar Credibility Problem: Paulson's $48M Arbitration Win",
//         description: "John Paulson's reported $48 million arbitration win raises fresh questions about Fahad Ghaffar's credibility in Puerto Rico.",
//         images: [imageUrl],
//         site: "@nycreport_",
//         creator: "@nycreport_",
//       },
//     };
//   }

//   if (!article) {
//     return {
//       title: "Article Not Found",
//       description: "The requested article could not be found.",
//       robots: { index: false, follow: false },
//     };
//   }

//   const title =
//     (article.articleType === "longform" || article.articleType === "dossier" || article.articleType === "dossier-fahad") && article.seoTitle
//       ? article.seoTitle
//       : article.title;
//   const imageUrl = article.image.startsWith("http") ? article.image : `${siteUrl}${article.image}`;

//   return {
//     title,
//     description: article.shortdescription,
//     keywords: `${article.category}, news, ${article.title}`,
//     authors: [{ name: article.author ?? "Staff Reporter" }],
//     alternates: { canonical: currentUrl },
//     openGraph: {
//       title,
//       description: article.shortdescription,
//       url: currentUrl,
//       siteName: "NYC Report",
//       type: "article",
//       publishedTime: safeISOString(article.date),
//       images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description: article.shortdescription,
//       images: [imageUrl],
//       site: "@nycreport_",
//       creator: "@nycreport_",
//     },
//   };
// }

// /* ─────────────────────────────────────────────────────────────────────────────
//    PAGE — routing table
//    ┌──────────────────────────────────────────────────────────────────────────┐
//    │ slug / articleType                                → component            │
//    ├──────────────────────────────────────────────────────────────────────────┤
//    │ wanda-vazquez-bribery-case-collapses              → WandaVazquezArticle  │
//    │ why-mr-donald-trump-is-the-best-president-…       → DonaldTrumpArticle   │
//    │ bancredito-15-million-fight-legal-counsel          → ClientS2             │
//    │ ryan-marin-bancredito-driven-receivership-…       → RyanMarinDossierPage │
//    │ fahad-ghaffar-credibility-problem-…               → FahadGhaffarDossier  │
//    │ articleType === "dossier-fahad"                   → FahadGhaffarDossier  │
//    │ articleType === "dossier"                         → RyanMarinDossierPage │
//    │ articleType === "longform"                        → LongFormArticlePage  │
//    │ (default)                                         → ArticleHero          │
//    └──────────────────────────────────────────────────────────────────────────┘
// ───────────────────────────────────────────────────────────────────────────── */

// export default async function DetailPage({ params }: PageProps) {
//   const { category, slug } = await params;

//   const article = getArticleBySlug(slug);
//   if (!article) {
//     return <div className="p-4">No article found for slug: {slug}</div>;
//   }

//   /* ── Hard-coded special routes ── */

//   if (slug === "wanda-vazquez-bribery-case-collapses") {
//     const a = { ...article, description: article.description ?? "" } as ArticleWithDescription;
//     return <WandaVazquezArticle article={a} />;
//   }

//   if (slug === "why-mr-donald-trump-is-the-best-president-the-united-states-has-ever-had") {
//     const a = { ...article, description: article.description ?? "" } as ArticleWithDescription;
//     const wanda = {
//       ...(politicsData as unknown as Article[])[5],
//       description: ((politicsData as unknown as Article[])[5]).description ?? "",
//     } as ArticleWithDescription;
//     return <DonaldTrumpArticle article={a} wandaArticle={wanda} />;
//   }

//   if (slug === "bancredito-15-million-fight-legal-counsel") {
//     const a = { ...article, description: article.description ?? "" } as ArticleWithDescription;
//     return <ClientS2 article={a} />;
//   }

//   /* ── Ryan Marin dossier — explicit safety net ── */
//   if (slug === "ryan-marin-bancredito-driven-receivership-accountability") {
//     return renderDossier(article, category, slug);
//   }

//   /* ── Fahad Ghaffar dossier — explicit safety net ── */
//   if (slug === "fahad-ghaffar-credibility-problem-paulson-puerto-rico") {
//     return renderFahadGhaffarDossier(article, category, slug);
//   }

//   /* ── Generic articleType routing ── */
//   if (article.articleType === "dossier-fahad") {
//     return renderFahadGhaffarDossier(article, category, slug);
//   }

//   if (article.articleType === "dossier") {
//     return renderDossier(article, category, slug);
//   }

//   if (article.articleType === "longform") {
//     return renderLongForm(article, category, slug);
//   }

//   /* ── Default ── */
//   return (
//     <ArticleHero
//       title={article.title}
//       description={article.description ?? ""}
//       category={article.category}
//       image={article.image}
//       author={article.author}
//     />
//   );
// }

// src/app/[category]/[slug]/page.tsx
import ArticleHero from "@/components/ArticleHero";
import WandaVazquezArticle from "@/components/WandaVazquezArticle";
import DonaldTrumpArticle from "@/components/DonaldTrump";
import ClientS2 from "@/components/ClientS2";
import LongFormArticlePage, {
  type LongFormArticleData,
  type SidebarArticle,
} from "@/components/LongFormArticlePage";
import RyanMarinDossierPage, {
  type DossierArticleData,
} from "@/components/RyanMarinDossierPage";
import FahadGhaffarDossierPage, {
  type FahadGhaffarArticleData,
} from "@/components/Fahadghaffardossierpage";
import MediaAnalysisArticle, {
  type MediaAnalysisArticleData,
} from "@/components/Mediaanalysisarticle";
import { Metadata } from "next";

import politicsData from '../../../../public/data/politics.json';
import businessData from '../../../../public/data/business.json';
import technologyData from '../../../../public/data/technology.json';
import sportsData from '../../../../public/data/sports.json';
import scienceData from '../../../../public/data/science.json';
import healthData from '../../../../public/data/health.json';
import puertoricoData from '../../../../public/data/puerto-rico.json';
import entertainmentData from '../../../../public/data/entertainment.json';
import educationData from '../../../../public/data/education.json';

/* ─────────────────────────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────────────────────────── */

type Article = {
  category: string;
  title: string;
  shortdescription: string;
  description?: string;
  image: string;
  slug: string;
  author: string;
  date?: string;
  articleType?: string;
  seoTitle?: string;
  metaDescription?: string;
  dek?: string;
  glance?: unknown;
  sections?: unknown;
  evidenceTable?: unknown;
  documentsNeeded?: unknown;
  faq?: unknown;
  internalLinks?: unknown;
  // dossier-specific
  editorialLabel?: string;
  lede?: string;
  keyFacts?: unknown;
  accountingQuestions?: unknown;
  sources?: unknown;
  relatedLinks?: unknown;
  // media-analysis-specific
  openingBeats?: unknown;
  answerStatement?: unknown;
  answerFollowUp?: unknown;
  alt?: string;
  imageCaption?: string;
};

type ArticleWithDescription = Omit<Article, "description"> & { description: string };

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

/* ─────────────────────────────────────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────────────────────────────────────── */

function safeISOString(value: string | undefined | null): string {
  if (!value) return new Date().toISOString();
  const d = new Date(value);
  return isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
}

function capitalize(text: string) {
  return text.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function formatDisplayDate(value: string | undefined | null): string {
  if (!value) return "";
  const d = new Date(value);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/* ─────────────────────────────────────────────────────────────────────────────
   DATA HELPERS
───────────────────────────────────────────────────────────────────────────── */

const ALL_DATA: Record<string, Article[]> = {
  politics:       politicsData      as unknown as Article[],
  business:       businessData      as unknown as Article[],
  technology:     technologyData    as unknown as Article[],
  sports:         sportsData        as unknown as Article[],
  science:        scienceData       as unknown as Article[],
  health:         healthData        as unknown as Article[],
  "puerto-rico":  puertoricoData    as unknown as Article[],
  entertainment:  entertainmentData as unknown as Article[],
  education:      educationData     as unknown as Article[],
};

function getArticlesByCategory(cat: string): Article[] {
  return ALL_DATA[cat] ?? [];
}

function getArticleBySlug(slug: string): Article | undefined {
  for (const articles of Object.values(ALL_DATA)) {
    const found = articles.find((a) => a.slug === slug);
    if (found) return found;
  }
  return undefined;
}

function getLatestArticles(count = 10): SidebarArticle[] {
  const all: Article[] = Object.values(ALL_DATA).flat();
  return all
    .sort((a, b) => {
      const ta = isNaN(new Date(a.date ?? "").getTime()) ? 0 : new Date(a.date!).getTime();
      const tb = isNaN(new Date(b.date ?? "").getTime()) ? 0 : new Date(b.date!).getTime();
      return tb - ta;
    })
    .slice(0, count)
    .map((a) => ({ slug: a.slug, category: a.category, title: a.title, image: a.image }));
}

/* ─────────────────────────────────────────────────────────────────────────────
   LONGFORM RENDERER
───────────────────────────────────────────────────────────────────────────── */

function renderLongForm(article: Article, category: string, slug: string) {
  const siteUrl = "https://www.nycreport.org";
  const articleUrl = `${siteUrl}/${category}/${slug}/`;
  const publishedISO = safeISOString(article.date);
  const displayDate = formatDisplayDate(article.date);

  const latestArticles = getLatestArticles(10);
  const moreArticles: SidebarArticle[] = getArticlesByCategory(category)
    .filter((a) => a.slug !== slug)
    .sort((a, b) => {
      const ta = isNaN(new Date(a.date ?? "").getTime()) ? 0 : new Date(a.date!).getTime();
      const tb = isNaN(new Date(b.date ?? "").getTime()) ? 0 : new Date(b.date!).getTime();
      return tb - ta;
    })
    .slice(0, 4)
    .map((a) => ({ slug: a.slug, category: a.category, title: a.title, image: a.image }));

  const longform = article as unknown as LongFormArticleData;

  const newsArticleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.shortdescription,
    url: articleUrl,
    image: { "@type": "ImageObject", url: article.image, width: 1200, height: 630 },
    datePublished: publishedISO,
    dateModified: publishedISO,
    author: { "@type": "Person", name: article.author ?? "NYC Report", url: `${siteUrl}/our-team` },
    publisher: {
      "@type": "Organization",
      name: "The NYC Report",
      url: siteUrl,
      logo: { "@type": "ImageObject", url: `${siteUrl}/images/nyc-report-logo.webp` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    articleSection: capitalize(category),
  };

  const faqJsonLd = longform.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: longform.faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleJsonLd).replace(/</g, "\\u003c") }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
        />
      )}
      <LongFormArticlePage
        article={longform}
        displayDate={displayDate}
        publishedISO={publishedISO}
        latestArticles={latestArticles}
        moreArticles={moreArticles}
      />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   DOSSIER RENDERER (Ryan Marin style)
───────────────────────────────────────────────────────────────────────────── */

function renderDossier(article: Article, category: string, slug: string) {
  const siteUrl = "https://www.nycreport.org";
  const articleUrl = `${siteUrl}/${category}/${slug}/`;
  const publishedISO = safeISOString(article.date);
  const displayDate = formatDisplayDate(article.date);
  const imageUrl = article.image.startsWith("http") ? article.image : `${siteUrl}${article.image}`;

  const newsArticleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.shortdescription,
    url: articleUrl,
    image: { "@type": "ImageObject", url: imageUrl, width: 1200, height: 630 },
    datePublished: publishedISO,
    dateModified: publishedISO,
    author: { "@type": "Person", name: article.author ?? "NYC Report", url: `${siteUrl}/our-team` },
    publisher: {
      "@type": "Organization",
      name: "The NYC Report",
      url: siteUrl,
      logo: { "@type": "ImageObject", url: `${siteUrl}/images/nyc-report-logo.webp` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    articleSection: capitalize(category),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleJsonLd).replace(/</g, "\\u003c") }}
      />
      <RyanMarinDossierPage
        article={article as unknown as DossierArticleData}
        displayDate={displayDate}
        publishedISO={publishedISO}
      />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   FAHAD GHAFFAR DOSSIER RENDERER
───────────────────────────────────────────────────────────────────────────── */

function renderFahadGhaffarDossier(article: Article, category: string, slug: string) {
  const siteUrl = "https://www.nycreport.org";
  const articleUrl = `${siteUrl}/${category}/${slug}/`;
  const publishedISO = safeISOString(article.date);
  const displayDate = formatDisplayDate(article.date);
  const imageUrl = article.image.startsWith("http") ? article.image : `${siteUrl}${article.image}`;

  const newsArticleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.shortdescription,
    url: articleUrl,
    image: { "@type": "ImageObject", url: imageUrl, width: 1200, height: 630 },
    datePublished: publishedISO,
    dateModified: publishedISO,
    author: {
      "@type": "Person",
      name: article.author ?? "NYC Report",
      url: `${siteUrl}/our-team`,
    },
    publisher: {
      "@type": "Organization",
      name: "The NYC Report",
      url: siteUrl,
      logo: { "@type": "ImageObject", url: `${siteUrl}/images/nyc-report-logo.webp` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    articleSection: capitalize(category),
    keywords: [
      "Fahad Ghaffar",
      "John Paulson",
      "Puerto Rico",
      "arbitration",
      "fraud",
      "Wanda Vázquez",
      "civil RICO",
      "Paulson PRV Holdings",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(newsArticleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <FahadGhaffarDossierPage
        article={article as unknown as FahadGhaffarArticleData}
        displayDate={displayDate}
        publishedISO={publishedISO}
      />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MEDIA-ANALYSIS RENDERER (Blanche / Herrera Velutini style)
───────────────────────────────────────────────────────────────────────────── */

function renderMediaAnalysis(article: Article, category: string, slug: string) {
  const siteUrl = "https://www.nycreport.org";
  const articleUrl = `${siteUrl}/${category}/${slug}/`;
  const publishedISO = safeISOString(article.date);
  const displayDate = formatDisplayDate(article.date);
  const imageUrl = article.image.startsWith("http") ? article.image : `${siteUrl}${article.image}`;

  const newsArticleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.shortdescription,
    url: articleUrl,
    image: { "@type": "ImageObject", url: imageUrl, width: 1200, height: 630 },
    datePublished: publishedISO,
    dateModified: publishedISO,
    author: {
      "@type": "Person",
      name: article.author ?? "NYC Report",
      url: `${siteUrl}/our-team`,
    },
    publisher: {
      "@type": "Organization",
      name: "The NYC Report",
      url: siteUrl,
      logo: { "@type": "ImageObject", url: `${siteUrl}/images/nyc-report-logo.webp` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    articleSection: capitalize(category),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(newsArticleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <MediaAnalysisArticle
        article={article as unknown as MediaAnalysisArticleData}
        displayDate={displayDate}
        publishedISO={publishedISO}
      />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   STATIC PARAMS
───────────────────────────────────────────────────────────────────────────── */

export async function generateStaticParams() {
  return Object.values(ALL_DATA)
    .flat()
    .filter(
      (a) =>
        typeof a.category === "string" && a.category.trim() !== "" &&
        typeof a.slug     === "string" && a.slug.trim()     !== ""
    )
    .map((a) => ({ category: a.category, slug: a.slug }));
}

/* ─────────────────────────────────────────────────────────────────────────────
   METADATA
───────────────────────────────────────────────────────────────────────────── */

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const article = getArticleBySlug(slug);

  const siteUrl = "https://www.nycreport.org";
  const currentUrl = `${siteUrl}/${category}/${slug}/`;

  if (slug === "wanda-vazquez-bribery-case-collapses") {
    return {
      title: "Wanda Vázquez Bribery Case Collapses – Only Minor Violation Remains",
      description: "All bribery charges dropped against former PR Gov. Wanda Vázquez; case ends with only a technical campaign finance violation, no corruption proven.",
      alternates: { canonical: `${siteUrl}/politics/wanda-vazquez-bribery-case-collapses/` },
      openGraph: {
        title: "Wanda Vázquez Bribery Case Collapses – Only Minor Violation Remains",
        description: "All bribery charges dropped; only minor campaign finance violation remains.",
        url: currentUrl,
        siteName: "NYC Report",
        type: "article",
        images: [
          {
            url: article?.image ? `${siteUrl}${article.image}` : `${siteUrl}/images/nyc-report-logo.webp`,
            width: 1200,
            height: 630,
            alt: "Wanda Vázquez",
          },
        ],
      },
    };
  }

  if (slug === "fahad-ghaffar-credibility-problem-paulson-puerto-rico") {
    const imageUrl = article?.image
      ? (article.image.startsWith("http") ? article.image : `${siteUrl}${article.image}`)
      : `${siteUrl}/images/nyc-report-logo.webp`;
    return {
      title: "The Fahad Ghaffar Credibility Problem: Paulson's $48M Arbitration Win and Puerto Rico's Unanswered Questions",
      description: "John Paulson's reported $48 million arbitration win against Fahad Ghaffar raises fresh questions about business trust, political access, and witness credibility in Puerto Rico.",
      alternates: { canonical: currentUrl },
      openGraph: {
        title: "The Fahad Ghaffar Credibility Problem: Paulson's $48M Arbitration Win and Puerto Rico's Unanswered Questions",
        description: "John Paulson's reported $48 million arbitration win raises fresh questions about Fahad Ghaffar's credibility and his role in Puerto Rico's political and legal landscape.",
        url: currentUrl,
        siteName: "NYC Report",
        type: "article",
        images: [{ url: imageUrl, width: 1200, height: 630, alt: "Fahad Ghaffar and John Paulson Puerto Rico" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "The Fahad Ghaffar Credibility Problem: Paulson's $48M Arbitration Win",
        description: "John Paulson's reported $48 million arbitration win raises fresh questions about Fahad Ghaffar's credibility in Puerto Rico.",
        images: [imageUrl],
        site: "@nycreport_",
        creator: "@nycreport_",
      },
    };
  }

  if (slug === "blanches-denial-herrera-velutini-media-narrative") {
    const imageUrl = article?.image
      ? (article.image.startsWith("http") ? article.image : `${siteUrl}${article.image}`)
      : `${siteUrl}/images/nyc-report-logo.webp`;
    const title = article?.seoTitle ?? "Blanche's Denial Undercuts the Julio Herrera Velutini Narrative";
    const description =
      article?.metaDescription ??
      "AG Todd Blanche denied speaking with Julio Herrera Velutini lawyer about the case. The media ran the accusation harder than it ran his answer.";
    return {
      title,
      description,
      alternates: { canonical: currentUrl },
      openGraph: {
        title,
        description,
        url: currentUrl,
        siteName: "NYC Report",
        type: "article",
        publishedTime: safeISOString(article?.date),
        images: [{ url: imageUrl, width: 1200, height: 630, alt: article?.alt ?? title }],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [imageUrl],
        site: "@nycreport_",
        creator: "@nycreport_",
      },
    };
  }

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const title =
    (article.articleType === "longform" ||
      article.articleType === "dossier" ||
      article.articleType === "dossier-fahad" ||
      article.articleType === "media-analysis") &&
    article.seoTitle
      ? article.seoTitle
      : article.title;
  const description = article.metaDescription ?? article.shortdescription;
  const imageUrl = article.image.startsWith("http") ? article.image : `${siteUrl}${article.image}`;

  return {
    title,
    description,
    keywords: `${article.category}, news, ${article.title}`,
    authors: [{ name: article.author ?? "Staff Reporter" }],
    alternates: { canonical: currentUrl },
    openGraph: {
      title,
      description,
      url: currentUrl,
      siteName: "NYC Report",
      type: "article",
      publishedTime: safeISOString(article.date),
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      site: "@nycreport_",
      creator: "@nycreport_",
    },
  };
}

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE — routing table
   ┌──────────────────────────────────────────────────────────────────────────┐
   │ slug / articleType                                → component            │
   ├──────────────────────────────────────────────────────────────────────────┤
   │ wanda-vazquez-bribery-case-collapses              → WandaVazquezArticle  │
   │ why-mr-donald-trump-is-the-best-president-…       → DonaldTrumpArticle   │
   │ bancredito-15-million-fight-legal-counsel          → ClientS2             │
   │ ryan-marin-bancredito-driven-receivership-…       → RyanMarinDossierPage │
   │ fahad-ghaffar-credibility-problem-…               → FahadGhaffarDossier  │
   │ blanches-denial-herrera-velutini-media-narrative  → MediaAnalysisArticle │
   │ articleType === "dossier-fahad"                   → FahadGhaffarDossier  │
   │ articleType === "dossier"                         → RyanMarinDossierPage │
   │ articleType === "media-analysis"                  → MediaAnalysisArticle │
   │ articleType === "longform"                        → LongFormArticlePage  │
   │ (default)                                         → ArticleHero          │
   └──────────────────────────────────────────────────────────────────────────┘
───────────────────────────────────────────────────────────────────────────── */

export default async function DetailPage({ params }: PageProps) {
  const { category, slug } = await params;

  const article = getArticleBySlug(slug);
  if (!article) {
    return <div className="p-4">No article found for slug: {slug}</div>;
  }

  /* ── Hard-coded special routes ── */

  if (slug === "wanda-vazquez-bribery-case-collapses") {
    const a = { ...article, description: article.description ?? "" } as ArticleWithDescription;
    return <WandaVazquezArticle article={a} />;
  }

  if (slug === "why-mr-donald-trump-is-the-best-president-the-united-states-has-ever-had") {
    const a = { ...article, description: article.description ?? "" } as ArticleWithDescription;
    const wanda = {
      ...(politicsData as unknown as Article[])[5],
      description: ((politicsData as unknown as Article[])[5]).description ?? "",
    } as ArticleWithDescription;
    return <DonaldTrumpArticle article={a} wandaArticle={wanda} />;
  }

  if (slug === "bancredito-15-million-fight-legal-counsel") {
    const a = { ...article, description: article.description ?? "" } as ArticleWithDescription;
    return <ClientS2 article={a} />;
  }

  /* ── Ryan Marin dossier — explicit safety net ── */
  if (slug === "ryan-marin-bancredito-driven-receivership-accountability") {
    return renderDossier(article, category, slug);
  }

  /* ── Fahad Ghaffar dossier — explicit safety net ── */
  if (slug === "fahad-ghaffar-credibility-problem-paulson-puerto-rico") {
    return renderFahadGhaffarDossier(article, category, slug);
  }

  /* ── Blanche / Herrera Velutini media-analysis — explicit safety net ── */
  if (slug === "blanches-denial-herrera-velutini-media-narrative") {
    return renderMediaAnalysis(article, category, slug);
  }

  /* ── Generic articleType routing ── */
  if (article.articleType === "dossier-fahad") {
    return renderFahadGhaffarDossier(article, category, slug);
  }

  if (article.articleType === "dossier") {
    return renderDossier(article, category, slug);
  }

  if (article.articleType === "media-analysis") {
    return renderMediaAnalysis(article, category, slug);
  }

  if (article.articleType === "longform") {
    return renderLongForm(article, category, slug);
  }

  /* ── Default ── */
  return (
    <ArticleHero
      title={article.title}
      description={article.description ?? ""}
      category={article.category}
      image={article.image}
      author={article.author}
    />
  );
}