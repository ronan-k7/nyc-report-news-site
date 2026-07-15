// "use client";

// import Image from "next/image";
// import Link from "next/link";

// /* ─────────────────────────────────────────────────────────────────────────────
//    TYPES
// ───────────────────────────────────────────────────────────────────────────── */
// export interface KeyFact {
//   label: string;
//   value: string;
// }

// export interface DossierSection {
//   id: string;
//   heading: string;
//   subheading?: string;
//   body: string[];
//   pullQuote?: string;
// }

// export interface DossierSource {
//   label: string;
//   description: string;
//   url: string;
// }

// export interface DossierRelatedLink {
//   text: string;
//   url: string;
// }

// export interface FahadGhaffarArticleData {
//   id: number;
//   category: string;
//   title: string;
//   shortdescription: string;
//   slug: string;
//   date?: string;
//   image: string;
//   alt?: string;
//   author: string;
//   articleType: "dossier-fahad";
//   editorialLabel?: string;
//   seoTitle?: string;
//   metaDescription?: string;
//   lede?: string;
//   keyFacts?: KeyFact[];
//   sections?: DossierSection[];
//   accountingQuestions?: string[];
//   sources?: DossierSource[];
//   relatedLinks?: DossierRelatedLink[];
// }

// interface Props {
//   article: FahadGhaffarArticleData;
//   displayDate: string;
//   publishedISO: string;
// }

// /* ─────────────────────────────────────────────────────────────────────────────
//    CSS
// ───────────────────────────────────────────────────────────────────────────── */
// const styles = `
//   .fg-page {
//     background: #fff;
//     min-height: 100vh;
//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
//   }
//   .fg-breadcrumb-bar { background-color: #dc3545; padding: 8px 0; }
//   .fg-breadcrumb-bar nav {
//     display: flex; flex-wrap: wrap; align-items: center; gap: 6px;
//     font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.75);
//   }
//   .fg-breadcrumb-bar a { color: rgba(255,255,255,0.75); text-decoration: none; transition: color 0.2s; }
//   .fg-breadcrumb-bar a:hover { color: #fff; }
//   .fg-bc-current { color: #fff; }
//   .fg-bc-sep { color: rgba(255,255,255,0.45); }

//   /* Hero */
//   .fg-hero {
//     background: linear-gradient(180deg, #f8f9fa 0%, #fff 100%);
//     border-bottom: 3px solid #dc3545;
//     padding: 3rem 0 2.5rem;
//   }
//   .fg-hero-inner { max-width: 900px; }
//   .fg-meta-row {
//     display: flex; flex-wrap: wrap; align-items: center;
//     gap: 10px; margin-bottom: 1.25rem;
//   }
//   .fg-badge {
//     display: inline-flex; align-items: center; gap: 5px;
//     background-color: #dc3545; color: #fff;
//     font-size: 10px; font-weight: 700; letter-spacing: 0.12em;
//     text-transform: uppercase; padding: 5px 12px; border-radius: 20px;
//   }
//   .fg-meta-date { font-size: 12px; color: #888; font-weight: 500; }
//   .fg-meta-sep { color: #ccc; }
//   .fg-meta-author {
//     font-size: 12px; font-weight: 700; color: #666;
//     text-transform: uppercase; letter-spacing: 0.05em;
//     text-decoration: none; transition: color 0.2s;
//   }
//   .fg-meta-author:hover { color: #dc3545; }
//   .fg-title {
//     font-family: 'Times New Roman', Georgia, serif;
//     font-size: clamp(2rem, 4vw, 2.75rem);
//     font-weight: 700; color: #111; line-height: 1.15;
//     margin-bottom: 1.75rem; letter-spacing: -0.01em;
//   }
//   .fg-hero-img-wrap {
//     border-radius: 12px; overflow: hidden;
//     box-shadow: 0 8px 32px rgba(0,0,0,0.12);
//     margin-bottom: 2rem; border: 2px solid #e9ecef;
//   }
//   .fg-hero-img-wrap img { width: 100%; height: auto; display: block; object-fit: cover; }
//   .fg-lede {
//     border-left: 4px solid #dc3545; background: #fff5f5;
//     padding: 1rem 1.25rem; border-radius: 0 8px 8px 0; margin-bottom: 2.5rem;
//   }
//   .fg-lede p {
//     font-family: Georgia, serif; font-size: 1.1rem; line-height: 1.7;
//     font-weight: 600; font-style: italic; color: #333; margin: 0;
//   }

//   /* Glance panel */
//   .fg-glance { border: 1px solid #e9ecef; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.07); margin-bottom: 2.5rem; }
//   .fg-glance-header {
//     background: #111; padding: 14px 20px;
//     display: flex; align-items: center; justify-content: space-between;
//   }
//   .fg-glance-dots { display: flex; gap: 6px; }
//   .fg-glance-dot { width: 8px; height: 8px; border-radius: 50%; }
//   .fg-glance-label { color: #fff; font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; }
//   .fg-glance-row {
//     display: flex; flex-direction: column;
//     padding: 12px 20px; border-bottom: 1px solid #f0f0f0; transition: background 0.15s;
//   }
//   .fg-glance-row:last-child { border-bottom: none; }
//   .fg-glance-row:hover { background: #fafafa; }
//   @media (min-width: 576px) { .fg-glance-row { flex-direction: row; align-items: flex-start; gap: 20px; } }
//   .fg-glance-key {
//     width: 130px; flex-shrink: 0; font-size: 10px; font-weight: 700;
//     text-transform: uppercase; letter-spacing: 0.12em; color: #dc3545; padding-top: 2px;
//   }
//   .fg-glance-val { font-size: 13px; color: #444; line-height: 1.6; flex: 1; }

//   /* Divider */
//   .fg-divider { display: flex; align-items: center; gap: 16px; margin-bottom: 2.5rem; }
//   .fg-divider-line { flex: 1; height: 1px; background: #e9ecef; }
//   .fg-divider-label {
//     display: flex; align-items: center; gap: 6px;
//     font-size: 10px; font-weight: 700; letter-spacing: 0.18em;
//     text-transform: uppercase; color: #999;
//   }
//   .fg-divider-dot { width: 4px; height: 4px; border-radius: 50%; background: #dc3545; }

//   /* Body sections */
//   .fg-section { margin-bottom: 3rem; }
//   .fg-section-heading-row { display: flex; align-items: flex-start; gap: 14px; margin-bottom: 1.25rem; }
//   .fg-section-num {
//     flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%;
//     background: #dc3545; color: #fff; font-size: 11px; font-weight: 700;
//     display: flex; align-items: center; justify-content: center; margin-top: 4px;
//   }
//   .fg-section-heading {
//     font-family: 'Times New Roman', Georgia, serif;
//     font-size: clamp(1.25rem, 2.5vw, 1.6rem);
//     font-weight: 700; color: #111; line-height: 1.25; margin: 0;
//   }
//   .fg-section-subheading {
//     font-size: 12px; font-weight: 600; letter-spacing: 0.08em;
//     text-transform: uppercase; color: #888; margin: 0 0 1rem 42px;
//     font-family: -apple-system, sans-serif;
//   }
//   .fg-body-text {
//     font-family: Georgia, serif; font-size: 17px; line-height: 1.85;
//     color: #333; margin-bottom: 1rem; letter-spacing: 0.01em;
//   }
//   .fg-pull-quote {
//     border-left: 4px solid #dc3545; background: #fff5f5;
//     padding: 1rem 1.25rem; border-radius: 0 8px 8px 0; margin: 1.5rem 0;
//   }
//   .fg-pull-quote p {
//     font-family: Georgia, serif; font-size: 1.1rem; line-height: 1.7;
//     font-weight: 600; font-style: italic; color: #333; margin: 0;
//   }

//   /* Questions panel */
//   .fg-questions-panel { border: 1px solid #e9ecef; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.05); margin-bottom: 2.5rem; }
//   .fg-questions-header {
//     background: #111; padding: 14px 20px;
//     display: flex; align-items: center; gap: 10px;
//     font-size: 11px; font-weight: 700; letter-spacing: 0.15em;
//     text-transform: uppercase; color: #fff;
//   }
//   .fg-questions-header svg { width: 16px; height: 16px; color: #f5c6cb; flex-shrink: 0; }
//   .fg-questions-body { background: #f8f9fa; padding: 16px 20px; }
//   .fg-questions-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 4px; }
//   .fg-question-item {
//     display: flex; align-items: flex-start; gap: 8px;
//     font-size: 13px; color: #555; padding: 6px 0; border-bottom: 1px solid #eee;
//   }
//   .fg-question-item:last-child { border-bottom: none; }
//   .fg-question-item svg { width: 14px; height: 14px; color: #dc3545; flex-shrink: 0; margin-top: 2px; }

//   /* Sources panel */
//   .fg-sources-panel { border: 1px solid #e9ecef; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.05); margin-bottom: 2.5rem; }
//   .fg-sources-header {
//     background: #111; padding: 14px 20px;
//     display: flex; align-items: center; gap: 10px;
//     font-size: 11px; font-weight: 700; letter-spacing: 0.15em;
//     text-transform: uppercase; color: #fff;
//   }
//   .fg-sources-header svg { width: 16px; height: 16px; color: #f5c6cb; }
//   .fg-source-item { padding: 14px 20px; border-bottom: 1px solid #f0f0f0; background: #fff; }
//   .fg-source-item:last-child { border-bottom: none; }
//   .fg-source-label { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #111; margin-bottom: 3px; }
//   .fg-source-desc { font-family: Georgia, serif; font-size: 13px; color: #555; line-height: 1.5; margin-bottom: 5px; }
//   .fg-source-link { font-size: 12px; font-weight: 600; color: #dc3545; text-decoration: none; transition: color 0.2s; word-break: break-all; }
//   .fg-source-link:hover { color: #a71d2a; text-decoration: underline; }

//   /* Related panel */
//   .fg-related-panel { border: 1px solid #e9ecef; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.05); margin-bottom: 2.5rem; }
//   .fg-related-header { background: #dc3545; padding: 12px 20px; font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: #fff; }
//   .fg-related-list { list-style: none; padding: 0; margin: 0; background: #fff; }
//   .fg-related-list li { border-bottom: 1px solid #f0f0f0; }
//   .fg-related-list li:last-child { border-bottom: none; }
//   .fg-related-link {
//     display: flex; align-items: center; gap: 10px;
//     padding: 12px 20px; text-decoration: none;
//     color: #333; font-size: 13px; font-weight: 600;
//     transition: background 0.15s, color 0.15s;
//   }
//   .fg-related-link:hover { background: #fff8f8; color: #dc3545; text-decoration: none; }
//   .fg-related-dot { width: 6px; height: 6px; border-radius: 50%; background: #f5c6cb; flex-shrink: 0; transition: background 0.15s; }
//   .fg-related-link:hover .fg-related-dot { background: #dc3545; }

//   /* Sidebar */
//   .fg-sidebar-card { border: 1px solid #e9ecef; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.06); margin-bottom: 1.5rem; }
//   .fg-sidebar-card-header { background: #111; padding: 14px 18px; display: flex; align-items: center; justify-content: space-between; }
//   .fg-sidebar-card-title { color: #fff; font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; }
//   .fg-live-dot { width: 8px; height: 8px; border-radius: 50%; background: #dc3545; animation: fg-pulse 1.5s ease-in-out infinite; }
//   @keyframes fg-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
//   .fg-sidebar-list { list-style: none; padding: 0; margin: 0; background: #fff; }
//   .fg-sidebar-list li { border-bottom: 1px solid #f0f0f0; }
//   .fg-sidebar-list li:last-child { border-bottom: none; }
//   .fg-sidebar-item-link { display: flex; align-items: flex-start; gap: 12px; padding: 14px 18px; text-decoration: none; transition: background 0.15s; }
//   .fg-sidebar-item-link:hover { background: #fafafa; text-decoration: none; }
//   .fg-sidebar-num { font-size: 22px; font-weight: 800; color: #eee; line-height: 1; min-width: 28px; text-align: right; flex-shrink: 0; margin-top: 2px; transition: color 0.15s; }
//   .fg-sidebar-item-link:hover .fg-sidebar-num { color: #f5c6cb; }
//   .fg-sidebar-item-title { font-size: 13px; font-weight: 600; color: #222; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; transition: color 0.15s; }
//   .fg-sidebar-item-link:hover .fg-sidebar-item-title { color: #dc3545; }

//   /* About card */
//   .fg-about-card { background: #111; border-radius: 12px; padding: 20px; margin-bottom: 1.5rem; box-shadow: 0 2px 12px rgba(0,0,0,0.15); }
//   .fg-about-card-header { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
//   .fg-about-icon { width: 28px; height: 28px; border-radius: 50%; background: #dc3545; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
//   .fg-about-icon svg { width: 14px; height: 14px; color: #fff; }
//   .fg-about-label { font-size: 10px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: #fff; }
//   .fg-about-body { font-size: 13px; color: #888; line-height: 1.7; }
//   .fg-about-footer { margin-top: 14px; padding-top: 14px; border-top: 1px solid #2a2a2a; display: flex; flex-wrap: wrap; align-items: center; gap: 6px; font-size: 12px; }
//   .fg-about-by { color: #555; }
//   .fg-about-author-link { color: #f5c6cb; font-weight: 700; text-decoration: none; transition: color 0.15s; }
//   .fg-about-author-link:hover { color: #fff; }
//   .fg-about-sep { color: #333; }
//   .fg-about-date { color: #555; }

//   /* Layout */
//   .fg-layout { display: flex; flex-direction: column; gap: 2rem; }
//   @media (min-width: 992px) {
//     .fg-layout { flex-direction: row; gap: 3rem; align-items: flex-start; }
//     .fg-main { flex: 0 0 63%; max-width: 63%; }
//     .fg-sidebar { flex: 0 0 34%; max-width: 34%; position: sticky; top: 24px; }
//   }
// `;

// /* ─────────────────────────────────────────────────────────────────────────────
//    SUB-COMPONENTS
// ───────────────────────────────────────────────────────────────────────────── */
// function SectionBlock({ section, index }: { section: DossierSection; index: number }) {
//   return (
//     <div id={section.id} className="fg-section">
//       {section.heading && (
//         <div className="fg-section-heading-row">
//           <span className="fg-section-num">{index + 1}</span>
//           <h2 className="fg-section-heading">{section.heading}</h2>
//         </div>
//       )}
//       {section.subheading && <p className="fg-section-subheading">{section.subheading}</p>}
//       {section.body.map((para, i) => (
//         <p key={i} className="fg-body-text">{para}</p>
//       ))}
//       {section.pullQuote && (
//         <div className="fg-pull-quote"><p>{section.pullQuote}</p></div>
//       )}
//     </div>
//   );
// }

// function QuestionsPanel({ questions }: { questions: string[] }) {
//   return (
//     <div className="fg-questions-panel">
//       <div className="fg-questions-header">
//         <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//             d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//         </svg>
//         <span>Questions That Demand Answers</span>
//       </div>
//       <div className="fg-questions-body">
//         <ul className="fg-questions-list">
//           {questions.map((q, i) => (
//             <li key={i} className="fg-question-item">
//               <svg fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd"
//                   d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
//                   clipRule="evenodd" />
//               </svg>
//               <span>{q}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// function SourcesPanel({ sources }: { sources: DossierSource[] }) {
//   return (
//     <div className="fg-sources-panel">
//       <div className="fg-sources-header">
//         <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//             d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
//         </svg>
//         Sources &amp; Documentation
//       </div>
//       {sources.map((s, i) => (
//         <div key={i} className="fg-source-item">
//           <div className="fg-source-label">{s.label}</div>
//           <div className="fg-source-desc">{s.description}</div>
//           <a href={s.url} target="_blank" rel="noopener noreferrer" className="fg-source-link">
//             View source →
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// }

// function RelatedPanel({ links }: { links: DossierRelatedLink[] }) {
//   return (
//     <div className="fg-related-panel">
//       <div className="fg-related-header">Related Coverage</div>
//       <ul className="fg-related-list">
//         {links.map((link, i) => (
//           <li key={i}>
//             <Link
//               href={link.url.startsWith("http") ? link.url : `/${link.url.replace(/^\//, "")}`}
//               className="fg-related-link"
//               target={link.url.startsWith("http") ? "_blank" : undefined}
//               rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
//             >
//               <span className="fg-related-dot" />
//               {link.text}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function SectionsIndex({ sections }: { sections: DossierSection[] }) {
//   return (
//     <div className="fg-sidebar-card">
//       <div className="fg-sidebar-card-header">
//         <span className="fg-sidebar-card-title">In This Report</span>
//         <span className="fg-live-dot" />
//       </div>
//       <ul className="fg-sidebar-list">
//         {sections.map((s, i) => (
//           <li key={s.id}>
//             <a href={`#${s.id}`} className="fg-sidebar-item-link">
//               <span className="fg-sidebar-num">{String(i + 1).padStart(2, "0")}</span>
//               <div>
//                 <span className="fg-sidebar-item-title">{s.heading}</span>
//               </div>
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────────────────────────────────────
//    MAIN EXPORT
// ───────────────────────────────────────────────────────────────────────────── */
// export default function FahadGhaffarDossierPage({ article, displayDate, publishedISO }: Props) {
//   return (
//     <>
//       <style>{styles}</style>
//       <div className="fg-page">

//         {/* Breadcrumb */}
//         <div className="fg-breadcrumb-bar">
//           <div className="container">
//             <nav>
//               <Link href="/">Home</Link>
//               <span className="fg-bc-sep">›</span>
//               <Link href={`/${article.category}/`}>
//                 {article.category.replace(/-/g, " ").toUpperCase()}
//               </Link>
//               <span className="fg-bc-sep">›</span>
//               <span className="fg-bc-current"
//                 style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "320px" }}>
//                 {article.title}
//               </span>
//             </nav>
//           </div>
//         </div>

//         {/* Hero */}
//         <div className="fg-hero">
//           <div className="container fg-hero-inner">
//             <div className="fg-meta-row">
//               <span className="fg-badge">
//                 <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//                     d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                 </svg>
//                 {article.editorialLabel ?? "Investigation"}
//               </span>
//               <time dateTime={publishedISO} className="fg-meta-date">{displayDate}</time>
//               <span className="fg-meta-sep">·</span>
//               <Link href="/our-team" className="fg-meta-author">{article.author}</Link>
//             </div>

//             <h1 className="fg-title">{article.title}</h1>

//             <div className="fg-hero-img-wrap">
//               <Image
//                 src={article.image}
//                 alt={article.alt ?? article.title}
//                 width={1200}
//                 height={600}
//                 className="w-100"
//                 priority
//                 style={{ objectFit: "cover", maxHeight: "480px" }}
//               />
//             </div>

//             {article.lede && (
//               <div className="fg-lede"><p>{article.lede}</p></div>
//             )}
//           </div>
//         </div>

//         {/* Body */}
//         <div className="container py-4 py-md-5">
//           <div className="fg-layout">

//             <article className="fg-main">

//               {/* Key Facts glance panel */}
//               {article.keyFacts && article.keyFacts.length > 0 && (
//                 <div className="fg-glance">
//                   <div className="fg-glance-header">
//                     <div className="fg-glance-dots">
//                       <span className="fg-glance-dot" style={{ background: "#dc3545" }} />
//                       <span className="fg-glance-dot" style={{ background: "#ffc107" }} />
//                       <span className="fg-glance-dot" style={{ background: "#28a745" }} />
//                     </div>
//                     <span className="fg-glance-label">Case Summary — Key Facts</span>
//                     <div style={{ width: 64 }} />
//                   </div>
//                   {article.keyFacts.map((fact, i) => (
//                     <div key={i} className="fg-glance-row">
//                       <dt className="fg-glance-key">{fact.label}</dt>
//                       <dd className="fg-glance-val">{fact.value}</dd>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {/* Divider */}
//               <div className="fg-divider">
//                 <div className="fg-divider-line" />
//                 <div className="fg-divider-label">
//                   <span className="fg-divider-dot" />
//                   Full Report
//                   <span className="fg-divider-dot" />
//                 </div>
//                 <div className="fg-divider-line" />
//               </div>

//               {/* Sections */}
//               {article.sections?.map((section, i) => (
//                 <SectionBlock key={section.id} section={section} index={i} />
//               ))}

//               {/* Questions */}
//               {article.accountingQuestions && article.accountingQuestions.length > 0 && (
//                 <QuestionsPanel questions={article.accountingQuestions} />
//               )}

//               {/* Sources */}
//               {article.sources && article.sources.length > 0 && (
//                 <SourcesPanel sources={article.sources} />
//               )}

//               {/* Related */}
//               {article.relatedLinks && article.relatedLinks.length > 0 && (
//                 <RelatedPanel links={article.relatedLinks} />
//               )}

//             </article>

//             {/* Sidebar */}
//             <aside className="fg-sidebar">

//               {article.sections && article.sections.length > 0 && (
//                 <SectionsIndex sections={article.sections} />
//               )}

//               {article.keyFacts && article.keyFacts.length > 0 && (
//                 <div className="fg-sidebar-card">
//                   <div className="fg-sidebar-card-header">
//                     <span className="fg-sidebar-card-title">Case Snapshot</span>
//                   </div>
//                   <ul className="fg-sidebar-list">
//                     {article.keyFacts.slice(0, 5).map((fact, i) => (
//                       <li key={i}>
//                         <div style={{ padding: "10px 18px", borderBottom: "1px solid #f0f0f0" }}>
//                           <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#dc3545", marginBottom: 2 }}>
//                             {fact.label}
//                           </div>
//                           <div style={{ fontSize: 13, color: "#333", lineHeight: 1.5 }}>
//                             {fact.value}
//                           </div>
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}

//               <div className="fg-about-card">
//                 <div className="fg-about-card-header">
//                   <div className="fg-about-icon">
//                     <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//                         d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                   </div>
//                   <span className="fg-about-label">About This Report</span>
//                 </div>
//                 <p className="fg-about-body">
//                   This report is based on publicly available court filings, a civil RICO complaint filed
//                   in U.S. District Court for the District of Puerto Rico, DOJ public records, AP reporting,
//                   and local Puerto Rico news coverage. Allegations have not been fully adjudicated.
//                   The reported arbitration result has not been confirmed in a public court order.
//                 </p>
//                 <div className="fg-about-footer">
//                   <span className="fg-about-by">By</span>
//                   <Link href="/our-team" className="fg-about-author-link">{article.author}</Link>
//                   <span className="fg-about-sep">·</span>
//                   <time dateTime={publishedISO} className="fg-about-date">{displayDate}</time>
//                 </div>
//               </div>

//             </aside>
//           </div>
//         </div>

//       </div>
//     </>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";

/* ─────────────────────────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────────────────────────── */
export interface KeyFact {
  label: string;
  value: string;
}

export interface DossierSection {
  id: string;
  heading: string;
  subheading?: string;
  body: string[];
  pullQuote?: string;
}

export interface DossierSource {
  label: string;
  description: string;
  url: string;
}

export interface DossierRelatedLink {
  text: string;
  url: string;
}

export interface FahadGhaffarArticleData {
  id: number;
  category: string;
  title: string;
  shortdescription: string;
  slug: string;
  date?: string;
  image: string;
  alt?: string;
  author: string;
  articleType: "dossier-fahad";
  editorialLabel?: string;
  seoTitle?: string;
  metaDescription?: string;
  lede?: string;
  keyFacts?: KeyFact[];
  sections?: DossierSection[];
  accountingQuestions?: string[];
  sources?: DossierSource[];
  relatedLinks?: DossierRelatedLink[];
}

interface Props {
  article: FahadGhaffarArticleData;
  displayDate: string;
  publishedISO: string;
}

/* ─────────────────────────────────────────────────────────────────────────────
   CSS
───────────────────────────────────────────────────────────────────────────── */
const styles = `
  .fg-page {
    background: #fff;
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }
  .fg-breadcrumb-bar { background-color: #dc3545; padding: 8px 0; }
  .fg-breadcrumb-bar nav {
    display: flex; flex-wrap: wrap; align-items: center; gap: 6px;
    font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.75);
  }
  .fg-breadcrumb-bar a { color: rgba(255,255,255,0.75); text-decoration: none; transition: color 0.2s; }
  .fg-breadcrumb-bar a:hover { color: #fff; }
  .fg-bc-current { color: #fff; }
  .fg-bc-sep { color: rgba(255,255,255,0.45); }

  /* Hero */
  .fg-hero {
    background: linear-gradient(180deg, #f8f9fa 0%, #fff 100%);
    border-bottom: 3px solid #dc3545;
    padding: 3rem 0 2.5rem;
  }
  .fg-hero-inner { max-width: 900px; }
  .fg-meta-row {
    display: flex; flex-wrap: wrap; align-items: center;
    gap: 10px; margin-bottom: 1.25rem;
  }
  .fg-badge {
    display: inline-flex; align-items: center; gap: 5px;
    background-color: #dc3545; color: #fff;
    font-size: 10px; font-weight: 700; letter-spacing: 0.12em;
    text-transform: uppercase; padding: 5px 12px; border-radius: 20px;
  }
  .fg-meta-date { font-size: 12px; color: #888; font-weight: 500; }
  .fg-meta-sep { color: #ccc; }
  .fg-meta-author {
    font-size: 12px; font-weight: 700; color: #666;
    text-transform: uppercase; letter-spacing: 0.05em;
    text-decoration: none; transition: color 0.2s;
  }
  .fg-meta-author:hover { color: #dc3545; }
  .fg-title {
    font-family: 'Times New Roman', Georgia, serif;
    font-size: clamp(2rem, 4vw, 2.75rem);
    font-weight: 700; color: #111; line-height: 1.15;
    margin-bottom: 1.75rem; letter-spacing: -0.01em;
  }
  .fg-hero-img-wrap {
    border-radius: 12px; overflow: hidden;
    box-shadow: 0 8px 32px rgba(0,0,0,0.12);
    margin-bottom: 2rem; border: 2px solid #e9ecef;
  }
  .fg-hero-img-wrap img { width: 100%; height: auto; display: block; object-fit: cover; }
  .fg-lede {
    border-left: 4px solid #dc3545; background: #fff5f5;
    padding: 1rem 1.25rem; border-radius: 0 8px 8px 0; margin-bottom: 2.5rem;
  }
  .fg-lede p {
    font-family: Georgia, serif; font-size: 1.1rem; line-height: 1.7;
    font-weight: 600; font-style: italic; color: #333; margin: 0;
  }

  /* Glance panel */
  .fg-glance { border: 1px solid #e9ecef; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.07); margin-bottom: 2.5rem; }
  .fg-glance-header {
    background: #111; padding: 14px 20px;
    display: flex; align-items: center; justify-content: space-between;
  }
  .fg-glance-dots { display: flex; gap: 6px; }
  .fg-glance-dot { width: 8px; height: 8px; border-radius: 50%; }
  .fg-glance-label { color: #fff; font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; }
  .fg-glance-row {
    display: flex; flex-direction: column;
    padding: 12px 20px; border-bottom: 1px solid #f0f0f0; transition: background 0.15s;
  }
  .fg-glance-row:last-child { border-bottom: none; }
  .fg-glance-row:hover { background: #fafafa; }
  @media (min-width: 576px) { .fg-glance-row { flex-direction: row; align-items: flex-start; gap: 20px; } }
  .fg-glance-key {
    width: 130px; flex-shrink: 0; font-size: 10px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.12em; color: #dc3545; padding-top: 2px;
  }
  .fg-glance-val { font-size: 13px; color: #444; line-height: 1.6; flex: 1; }

  /* Divider */
  .fg-divider { display: flex; align-items: center; gap: 16px; margin-bottom: 2.5rem; }
  .fg-divider-line { flex: 1; height: 1px; background: #e9ecef; }
  .fg-divider-label {
    display: flex; align-items: center; gap: 6px;
    font-size: 10px; font-weight: 700; letter-spacing: 0.18em;
    text-transform: uppercase; color: #999;
  }
  .fg-divider-dot { width: 4px; height: 4px; border-radius: 50%; background: #dc3545; }

  /* Body sections */
  .fg-section { margin-bottom: 3rem; }
  .fg-section-heading-row { display: flex; align-items: flex-start; gap: 14px; margin-bottom: 1.25rem; }
  .fg-section-num {
    flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%;
    background: #dc3545; color: #fff; font-size: 11px; font-weight: 700;
    display: flex; align-items: center; justify-content: center; margin-top: 4px;
  }
  .fg-section-heading {
    font-family: 'Times New Roman', Georgia, serif;
    font-size: clamp(1.25rem, 2.5vw, 1.6rem);
    font-weight: 700; color: #111; line-height: 1.25; margin: 0;
  }
  .fg-section-subheading {
    font-size: 12px; font-weight: 600; letter-spacing: 0.08em;
    text-transform: uppercase; color: #888; margin: 0 0 1rem 42px;
    font-family: -apple-system, sans-serif;
  }
  .fg-body-text {
    font-family: Georgia, serif; font-size: 17px; line-height: 1.85;
    color: #333; margin-bottom: 1rem; letter-spacing: 0.01em;
  }
  .fg-pull-quote {
    border-left: 4px solid #dc3545; background: #fff5f5;
    padding: 1rem 1.25rem; border-radius: 0 8px 8px 0; margin: 1.5rem 0;
  }
  .fg-pull-quote p {
    font-family: Georgia, serif; font-size: 1.1rem; line-height: 1.7;
    font-weight: 600; font-style: italic; color: #333; margin: 0;
  }

  /* Questions panel */
  .fg-questions-panel { border: 1px solid #e9ecef; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.05); margin-bottom: 2.5rem; }
  .fg-questions-header {
    background: #111; padding: 14px 20px;
    display: flex; align-items: center; gap: 10px;
    font-size: 11px; font-weight: 700; letter-spacing: 0.15em;
    text-transform: uppercase; color: #fff;
  }
  .fg-questions-header svg { width: 16px; height: 16px; color: #f5c6cb; flex-shrink: 0; }
  .fg-questions-body { background: #f8f9fa; padding: 16px 20px; }
  .fg-questions-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 4px; }
  .fg-question-item {
    display: flex; align-items: flex-start; gap: 8px;
    font-size: 13px; color: #555; padding: 6px 0; border-bottom: 1px solid #eee;
  }
  .fg-question-item:last-child { border-bottom: none; }
  .fg-question-item svg { width: 14px; height: 14px; color: #dc3545; flex-shrink: 0; margin-top: 2px; }

  /* Sources panel */
  .fg-sources-panel { border: 1px solid #e9ecef; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.05); margin-bottom: 2.5rem; }
  .fg-sources-header {
    background: #111; padding: 14px 20px;
    display: flex; align-items: center; gap: 10px;
    font-size: 11px; font-weight: 700; letter-spacing: 0.15em;
    text-transform: uppercase; color: #fff;
  }
  .fg-sources-header svg { width: 16px; height: 16px; color: #f5c6cb; }
  .fg-source-item { padding: 14px 20px; border-bottom: 1px solid #f0f0f0; background: #fff; }
  .fg-source-item:last-child { border-bottom: none; }
  .fg-source-label { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #111; margin-bottom: 3px; }
  .fg-source-desc { font-family: Georgia, serif; font-size: 13px; color: #555; line-height: 1.5; margin-bottom: 5px; }
  .fg-source-link { font-size: 12px; font-weight: 600; color: #dc3545; text-decoration: none; transition: color 0.2s; word-break: break-all; }
  .fg-source-link:hover { color: #a71d2a; text-decoration: underline; }

  /* Related panel */
  .fg-related-panel { border: 1px solid #e9ecef; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.05); margin-bottom: 2.5rem; }
  .fg-related-header { background: #dc3545; padding: 12px 20px; font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: #fff; }
  .fg-related-list { list-style: none; padding: 0; margin: 0; background: #fff; }
  .fg-related-list li { border-bottom: 1px solid #f0f0f0; }
  .fg-related-list li:last-child { border-bottom: none; }
  .fg-related-link {
    display: flex; align-items: center; gap: 10px;
    padding: 12px 20px; text-decoration: none;
    color: #333; font-size: 13px; font-weight: 600;
    transition: background 0.15s, color 0.15s;
  }
  .fg-related-link:hover { background: #fff8f8; color: #dc3545; text-decoration: none; }
  .fg-related-dot { width: 6px; height: 6px; border-radius: 50%; background: #f5c6cb; flex-shrink: 0; transition: background 0.15s; }
  .fg-related-link:hover .fg-related-dot { background: #dc3545; }

  /* Sidebar */
  .fg-sidebar-card { border: 1px solid #e9ecef; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.06); margin-bottom: 1.5rem; }
  .fg-sidebar-card-header { background: #111; padding: 14px 18px; display: flex; align-items: center; justify-content: space-between; }
  .fg-sidebar-card-title { color: #fff; font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; }
  .fg-live-dot { width: 8px; height: 8px; border-radius: 50%; background: #dc3545; animation: fg-pulse 1.5s ease-in-out infinite; }
  @keyframes fg-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
  .fg-sidebar-list { list-style: none; padding: 0; margin: 0; background: #fff; }
  .fg-sidebar-list li { border-bottom: 1px solid #f0f0f0; }
  .fg-sidebar-list li:last-child { border-bottom: none; }
  .fg-sidebar-item-link { display: flex; align-items: flex-start; gap: 12px; padding: 14px 18px; text-decoration: none; transition: background 0.15s; }
  .fg-sidebar-item-link:hover { background: #fafafa; text-decoration: none; }
  .fg-sidebar-num { font-size: 22px; font-weight: 800; color: #eee; line-height: 1; min-width: 28px; text-align: right; flex-shrink: 0; margin-top: 2px; transition: color 0.15s; }
  .fg-sidebar-item-link:hover .fg-sidebar-num { color: #f5c6cb; }
  .fg-sidebar-item-title { font-size: 13px; font-weight: 600; color: #222; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; transition: color 0.15s; }
  .fg-sidebar-item-link:hover .fg-sidebar-item-title { color: #dc3545; }

  /* About card */
  .fg-about-card { background: #111; border-radius: 12px; padding: 20px; margin-bottom: 1.5rem; box-shadow: 0 2px 12px rgba(0,0,0,0.15); }
  .fg-about-card-header { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
  .fg-about-icon { width: 28px; height: 28px; border-radius: 50%; background: #dc3545; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .fg-about-icon svg { width: 14px; height: 14px; color: #fff; }
  .fg-about-label { font-size: 10px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: #fff; }
  .fg-about-body { font-size: 13px; color: #888; line-height: 1.7; }
  .fg-about-footer { margin-top: 14px; padding-top: 14px; border-top: 1px solid #2a2a2a; display: flex; flex-wrap: wrap; align-items: center; gap: 6px; font-size: 12px; }
  .fg-about-by { color: #555; }
  .fg-about-author-link { color: #f5c6cb; font-weight: 700; text-decoration: none; transition: color 0.15s; }
  .fg-about-author-link:hover { color: #fff; }
  .fg-about-sep { color: #333; }
  .fg-about-date { color: #555; }

  /* Layout */
  .fg-layout { display: flex; flex-direction: column; gap: 2rem; }
  @media (min-width: 992px) {
    .fg-layout { flex-direction: row; gap: 3rem; align-items: flex-start; }
    .fg-main { flex: 0 0 63%; max-width: 63%; }
    .fg-sidebar { flex: 0 0 34%; max-width: 34%; position: sticky; top: 24px; }
  }
`;

/* ─────────────────────────────────────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────────────────────────────────────── */
function SectionBlock({ section, index }: { section: DossierSection; index: number }) {
  return (
    <div id={section.id} className="fg-section">
      {section.heading && (
        <div className="fg-section-heading-row">
          <span className="fg-section-num">{index + 1}</span>
          <h2 className="fg-section-heading">{section.heading}</h2>
        </div>
      )}
      {section.subheading && <p className="fg-section-subheading">{section.subheading}</p>}
      {section.body.map((para, i) => (
        <p key={i} className="fg-body-text">{para}</p>
      ))}
      {section.pullQuote && (
        <div className="fg-pull-quote"><p>{section.pullQuote}</p></div>
      )}
    </div>
  );
}

function QuestionsPanel({ questions }: { questions: string[] }) {
  return (
    <div className="fg-questions-panel">
      <div className="fg-questions-header">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span>Questions That Demand Answers</span>
      </div>
      <div className="fg-questions-body">
        <ul className="fg-questions-list">
          {questions.map((q, i) => (
            <li key={i} className="fg-question-item">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd" />
              </svg>
              <span>{q}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SourcesPanel({ sources }: { sources: DossierSource[] }) {
  return (
    <div className="fg-sources-panel">
      <div className="fg-sources-header">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
        Sources &amp; Documentation
      </div>
      {sources.map((s, i) => (
        <div key={i} className="fg-source-item">
          <div className="fg-source-label">{s.label}</div>
          <div className="fg-source-desc">{s.description}</div>
          <a href={s.url} target="_blank" rel="noopener noreferrer" className="fg-source-link">
            View source →
          </a>
        </div>
      ))}
    </div>
  );
}

function RelatedPanel({ links }: { links: DossierRelatedLink[] }) {
  return (
    <div className="fg-related-panel">
      <div className="fg-related-header">Related Coverage</div>
      <ul className="fg-related-list">
        {links.map((link, i) => (
          <li key={i}>
            <Link
              href={link.url.startsWith("http") ? link.url : `/${link.url.replace(/^\//, "")}`}
              className="fg-related-link"
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <span className="fg-related-dot" />
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SectionsIndex({ sections }: { sections: DossierSection[] }) {
  return (
    <div className="fg-sidebar-card">
      <div className="fg-sidebar-card-header">
        <span className="fg-sidebar-card-title">In This Report</span>
        <span className="fg-live-dot" />
      </div>
      <ul className="fg-sidebar-list">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className="fg-sidebar-item-link">
              <span className="fg-sidebar-num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <span className="fg-sidebar-item-title">{s.heading}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────────────────────────────────────── */
export default function FahadGhaffarDossierPage({ article, displayDate, publishedISO }: Props) {
  return (
    <>
      <style>{styles}</style>
      <div className="fg-page">

        {/* Breadcrumb */}
        <div className="fg-breadcrumb-bar">
          <div className="container">
            <nav>
              <Link href="/">Home</Link>
              <span className="fg-bc-sep">›</span>
              <Link href={`/${article.category}/`}>
                {article.category.replace(/-/g, " ").toUpperCase()}
              </Link>
              <span className="fg-bc-sep">›</span>
              <span className="fg-bc-current"
                style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "320px" }}>
                {article.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <div className="fg-hero">
          <div className="container fg-hero-inner">
            <div className="fg-meta-row">
              <span className="fg-badge">
                <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {article.editorialLabel ?? "Investigation"}
              </span>
              <time dateTime={publishedISO} className="fg-meta-date">{displayDate}</time>
              <span className="fg-meta-sep">·</span>
              <Link href="/our-team" className="fg-meta-author">{article.author}</Link>
            </div>

            <h1 className="fg-title">{article.title}</h1>

            <div className="fg-hero-img-wrap">
              <Image
                src={article.image}
                alt={article.alt ?? article.title}
                width={1200}
                height={600}
                className="w-100"
                priority
                style={{ objectFit: "cover", maxHeight: "480px" }}
              />
            </div>

            {article.lede && (
              <div className="fg-lede"><p>{article.lede}</p></div>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="container py-4 py-md-5">
          <div className="fg-layout">

            <article className="fg-main">

              {/* Key Facts glance panel */}
              {article.keyFacts && article.keyFacts.length > 0 && (
                <div className="fg-glance">
                  <div className="fg-glance-header">
                    <div className="fg-glance-dots">
                      <span className="fg-glance-dot" style={{ background: "#dc3545" }} />
                      <span className="fg-glance-dot" style={{ background: "#ffc107" }} />
                      <span className="fg-glance-dot" style={{ background: "#28a745" }} />
                    </div>
                    <span className="fg-glance-label">Case Summary — Key Facts</span>
                    <div style={{ width: 64 }} />
                  </div>
                  {article.keyFacts.map((fact, i) => (
                    <div key={i} className="fg-glance-row">
                      <dt className="fg-glance-key">{fact.label}</dt>
                      <dd className="fg-glance-val">{fact.value}</dd>
                    </div>
                  ))}
                </div>
              )}

              {/* Divider */}
              <div className="fg-divider">
                <div className="fg-divider-line" />
                <div className="fg-divider-label">
                  <span className="fg-divider-dot" />
                  Full Report
                  <span className="fg-divider-dot" />
                </div>
                <div className="fg-divider-line" />
              </div>

              {/* Sections */}
              {article.sections?.map((section, i) => (
                <SectionBlock key={section.id} section={section} index={i} />
              ))}

              {/* Questions */}
              {article.accountingQuestions && article.accountingQuestions.length > 0 && (
                <QuestionsPanel questions={article.accountingQuestions} />
              )}

              {/* Sources */}
              {article.sources && article.sources.length > 0 && (
                <SourcesPanel sources={article.sources} />
              )}

              {/* Related */}
              {article.relatedLinks && article.relatedLinks.length > 0 && (
                <RelatedPanel links={article.relatedLinks} />
              )}

            </article>

            {/* Sidebar */}
            <aside className="fg-sidebar">

              {article.sections && article.sections.length > 0 && (
                <SectionsIndex sections={article.sections} />
              )}

              {article.keyFacts && article.keyFacts.length > 0 && (
                <div className="fg-sidebar-card">
                  <div className="fg-sidebar-card-header">
                    <span className="fg-sidebar-card-title">Case Snapshot</span>
                  </div>
                  <ul className="fg-sidebar-list">
                    {article.keyFacts.slice(0, 5).map((fact, i) => (
                      <li key={i}>
                        <div style={{ padding: "10px 18px", borderBottom: "1px solid #f0f0f0" }}>
                          <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#dc3545", marginBottom: 2 }}>
                            {fact.label}
                          </div>
                          <div style={{ fontSize: 13, color: "#333", lineHeight: 1.5 }}>
                            {fact.value}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="fg-about-card">
                <div className="fg-about-card-header">
                  <div className="fg-about-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="fg-about-label">About This Report</span>
                </div>
                <p className="fg-about-body">
                  This report is based on publicly available court filings, a civil RICO complaint filed
                  in U.S. District Court for the District of Puerto Rico, DOJ public records, AP reporting,
                  and local Puerto Rico news coverage. Allegations have not been fully adjudicated.
                  The reported arbitration result has not been confirmed in a public court order.
                </p>
                <div className="fg-about-footer">
                  <span className="fg-about-by">By</span>
                  <Link href="/our-team" className="fg-about-author-link">{article.author}</Link>
                  <span className="fg-about-sep">·</span>
                  <time dateTime={publishedISO} className="fg-about-date">{displayDate}</time>
                </div>
              </div>

            </aside>
          </div>
        </div>

      </div>
    </>
  );
}