"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────────────────────────── */
export interface GlanceItem { label: string; value: string; }
export interface ArticleSection {
  heading?: string;
  content?: string[];
  list?: string[];
  afterList?: string[];
  afterTable?: string[];
  table?: { headers: string[]; rows: string[][]; };
}
export interface EvidenceTable { headers: string[]; rows: string[][]; }
export interface FAQ { question: string; answer: string; }
// export interface InternalLink { text: string; slug: string; }
export interface InternalLink {  text: string;  slug?: string;  url?: string;}
export interface LongFormArticleData {
  category: string; title: string; shortdescription: string; slug: string;
  date?: string; author?: string; image: string; articleType: "longform";
  seoTitle?: string; dek?: string; glance?: GlanceItem[];
  sections?: ArticleSection[]; evidenceTable?: EvidenceTable;
  documentsNeeded?: string[]; faq?: FAQ[]; internalLinks?: InternalLink[];
}
export interface SidebarArticle { slug: string; category: string; title: string; image: string; }
interface Props {
  article: LongFormArticleData; displayDate: string; publishedISO: string;
  latestArticles: SidebarArticle[]; moreArticles: SidebarArticle[];
}

/* ─────────────────────────────────────────────────────────────────────────────
   INLINE MARKDOWN — **bold**
───────────────────────────────────────────────────────────────────────────── */
function InlineText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**")
          ? <strong key={i}>{part.slice(2, -2)}</strong>
          : <span key={i}>{part}</span>
      )}
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   STATUS BADGE
───────────────────────────────────────────────────────────────────────────── */
function StatusBadge({ status }: { status: string }) {
  let cls = "longform-badge-neutral";
  if (status.includes("✓"))  cls = "longform-badge-success";
  else if (status.includes("✗")) cls = "longform-badge-danger";
  else if (status.includes("⚠")) cls = "longform-badge-warning";
  else if (status.includes("?")) cls = "longform-badge-info";
  return <span className={`longform-status-badge ${cls}`}>{status}</span>;
}

/* ─────────────────────────────────────────────────────────────────────────────
   SECTION BLOCK
───────────────────────────────────────────────────────────────────────────── */
function ArticleSectionBlock({ section, index }: { section: ArticleSection; index: number }) {
  return (
    <div className="longform-section-block">
      {section.heading && (
        <div className="longform-section-heading-row">
          <span className="longform-section-number">{index + 1}</span>
          <h2 className="longform-section-heading">{section.heading}</h2>
        </div>
      )}

      {section.content?.map((para, i) => (
        <p key={i} className="longform-body-text">
          <InlineText text={para} />
        </p>
      ))}

      {section.table && (
        <div className="longform-table-wrapper">
          <table className="longform-table">
            <thead>
              <tr>
                {section.table.headers.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "" : "longform-table-alt"}>
                  {row.map((cell, ci) => (
                    <td key={ci}><InlineText text={cell} /></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {section.afterTable?.map((para, i) => (
        <p key={i} className="longform-body-text"><InlineText text={para} /></p>
      ))}

      {section.list && section.list.length > 0 && (
        <ul className="longform-bullet-list">
          {section.list.map((item, i) => (
            <li key={i} className="longform-bullet-item">
              <span className="longform-bullet-dot" />
              <span><InlineText text={item} /></span>
            </li>
          ))}
        </ul>
      )}

      {section.afterList?.map((para, i) => (
        <p key={i} className="longform-body-text"><InlineText text={para} /></p>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ ACCORDION
───────────────────────────────────────────────────────────────────────────── */
function FAQSection({ faq }: { faq: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="longform-faq-section">
      <div className="longform-panel-header-row">
        <div className="longform-accent-bar" />
        <h2 className="longform-panel-title">Frequently Asked Questions</h2>
      </div>
      <div className="longform-faq-list">
        {faq.map((item, i) => (
          <div key={i} className={`longform-faq-item${open === i ? " longform-faq-open" : ""}`}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="longform-faq-trigger"
              aria-expanded={open === i}
            >
              <span className="longform-faq-question">{item.question}</span>
              <span className={`longform-faq-icon${open === i ? " longform-faq-icon-open" : ""}`}>
                <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </button>
            {open === i && (
              <div className="longform-faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   EVIDENCE TABLE
───────────────────────────────────────────────────────────────────────────── */
function EvidenceTableBlock({ table }: { table: EvidenceTable }) {
  return (
    <div className="longform-section-block">
      <div className="longform-panel-header-row">
        <div className="longform-accent-bar" />
        <h2 className="longform-panel-title">Evidence Status</h2>
      </div>
      <div className="longform-table-wrapper">
        <table className="longform-table">
          <thead>
            <tr>
              {table.headers.map((h, i) => <th key={i}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, ri) => (
              <tr key={ri} className={ri % 2 === 0 ? "" : "longform-table-alt"}>
                <td className="longform-table-primary-cell">{row[0]}</td>
                <td><StatusBadge status={row[1]} /></td>
                <td className="longform-table-note-cell">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   DOCUMENTS NEEDED
───────────────────────────────────────────────────────────────────────────── */
function DocumentsNeeded({ docs }: { docs: string[] }) {
  return (
    <div className="longform-docs-panel">
      <div className="longform-docs-header">
        <svg className="longform-docs-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span>Documents That Matter</span>
      </div>
      <div className="longform-docs-body">
        <ul className="longform-docs-grid">
          {docs.map((doc, i) => (
            <li key={i} className="longform-docs-item">
              <svg className="longform-docs-item-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
              </svg>
              <span>{doc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   RELATED TOPICS
───────────────────────────────────────────────────────────────────────────── */
// function RelatedTopics({ links, category }: { links: InternalLink[]; category: string }) {
//   return (
//     <div className="longform-related-panel">
//       <div className="longform-related-header">Related Coverage</div>
//       <ul className="longform-related-list">
//         {links.map((link, i) => (
//           <li key={i}>
//             <Link href={`/${category}/${link.slug}/`} className="longform-related-link">
//               <span className="longform-related-dot" />
//               <span>{link.text}</span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
function RelatedTopics({
  links,
  category,
}: {
  links: InternalLink[];
  category: string;
}) {
  return (
    <div className="longform-related-panel">
      <div className="longform-related-header">
        Related Coverage
      </div>

      <ul className="longform-related-list">
        {links.map((link, i) => {
          const href = link.url
            ? link.url
            : `/${category}/${link.slug}/`;

          return (
            <li key={i}>
              <Link
                href={href}
                className="longform-related-link"
                target={link.url ? "_blank" : undefined}
                rel={link.url ? "noopener noreferrer" : undefined}
              >
                <span className="longform-related-dot" />
                <span>{link.text}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   CSS
───────────────────────────────────────────────────────────────────────────── */
const styles = `
  /* ── Page wrapper */
  .longform-page {
    background: #fff;
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }

  /* ── Breadcrumb */
  .longform-breadcrumb-bar {
    background-color: #dc3545;
    padding: 8px 0;
  }
  .longform-breadcrumb-bar nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    font-weight: 600;
    color: rgba(255,255,255,0.75);
  }
  .longform-breadcrumb-bar a {
    color: rgba(255,255,255,0.75);
    text-decoration: none;
    transition: color 0.2s;
  }
  .longform-breadcrumb-bar a:hover { color: #fff; }
  .longform-breadcrumb-bar .longform-bc-current { color: #fff; }
  .longform-breadcrumb-sep { color: rgba(255,255,255,0.45); }

  /* ── Hero */
  .longform-hero {
    background: linear-gradient(180deg, #f8f9fa 0%, #fff 100%);
    border-bottom: 3px solid #dc3545;
    padding: 3rem 0 2.5rem;
  }
  .longform-hero-inner { max-width: 900px; }

  /* ── Meta row */
  .longform-meta-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    margin-bottom: 1.25rem;
  }
  .longform-investigation-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background-color: #dc3545;
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 5px 12px;
    border-radius: 20px;
  }
  .longform-meta-date {
    font-size: 12px;
    color: #888;
    font-weight: 500;
  }
  .longform-meta-sep { color: #ccc; }
  .longform-meta-author {
    font-size: 12px;
    font-weight: 700;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-decoration: none;
    transition: color 0.2s;
  }
  .longform-meta-author:hover { color: #dc3545; text-decoration: none; }

  /* ── Title */
  .longform-title {
    font-family: 'Times New Roman', Georgia, serif;
    font-size: clamp(2rem, 4vw, 2.75rem);
    font-weight: 700;
    color: #111;
    line-height: 1.15;
    margin-bottom: 1.75rem;
    letter-spacing: -0.01em;
  }

  /* ── Hero image */
  .longform-hero-image-wrap {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0,0,0,0.12);
    margin-bottom: 2rem;
    border: 2px solid #e9ecef;
  }
  .longform-hero-image-wrap img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

  /* ── Dek */
  .longform-dek {
    border-left: 4px solid #dc3545;
    background: #fff5f5;
    padding: 1rem 1.25rem;
    border-radius: 0 8px 8px 0;
    margin-bottom: 2.5rem;
  }
  .longform-dek p {
    font-family: Georgia, serif;
    font-size: 1.1rem;
    line-height: 1.7;
    font-weight: 600;
    font-style: italic;
    color: #333;
    margin: 0;
  }

  /* ── At a Glance */
  .longform-glance {
    border: 1px solid #e9ecef;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(0,0,0,0.07);
    margin-bottom: 2.5rem;
  }
  .longform-glance-header {
    background: #111;
    padding: 14px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .longform-glance-dots { display: flex; gap: 6px; }
  .longform-glance-dot {
    width: 8px; height: 8px; border-radius: 50%;
  }
  .longform-glance-label {
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }
  .longform-glance-row {
    display: flex;
    flex-direction: column;
    padding: 12px 20px;
    border-bottom: 1px solid #f0f0f0;
    transition: background 0.15s;
  }
  .longform-glance-row:last-child { border-bottom: none; }
  .longform-glance-row:hover { background: #fafafa; }
  @media (min-width: 576px) {
    .longform-glance-row { flex-direction: row; align-items: flex-start; gap: 20px; }
  }
  .longform-glance-key {
    width: 130px;
    flex-shrink: 0;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #dc3545;
    padding-top: 2px;
  }
  .longform-glance-val {
    font-size: 13px;
    color: #444;
    line-height: 1.6;
    flex: 1;
  }

  /* ── Divider */
  .longform-divider {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 2.5rem;
  }
  .longform-divider-line { flex: 1; height: 1px; background: #e9ecef; }
  .longform-divider-label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #999;
  }
  .longform-divider-dot { width: 4px; height: 4px; border-radius: 50%; background: #dc3545; }

  /* ── Section blocks */
  .longform-section-block { margin-bottom: 3rem; }
  .longform-section-heading-row {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    margin-bottom: 1.25rem;
  }
  .longform-section-number {
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #dc3545;
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4px;
  }
  .longform-section-heading {
    font-family: 'Times New Roman', Georgia, serif;
    font-size: clamp(1.25rem, 2.5vw, 1.6rem);
    font-weight: 700;
    color: #111;
    line-height: 1.25;
    margin: 0;
  }
  .longform-body-text {
    font-family: Georgia, serif;
    font-size: 17px;
    line-height: 1.85;
    color: #333;
    margin-bottom: 1rem;
    letter-spacing: 0.01em;
  }

  /* ── Tables */
  .longform-table-wrapper {
    overflow-x: auto;
    border-radius: 10px;
    border: 1px solid #e9ecef;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    margin: 1.5rem 0;
  }
  .longform-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
  }
  .longform-table thead tr {
    background: #111;
    color: #fff;
  }
  .longform-table th {
    padding: 12px 18px;
    text-align: left;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  .longform-table td {
    padding: 12px 18px;
    border-top: 1px solid #f0f0f0;
    color: #444;
    line-height: 1.5;
  }
  .longform-table tbody tr { background: #fff; }
  .longform-table-alt { background: #fafafa !important; }
  .longform-table tbody tr:hover { background: #fff8f8 !important; }
  .longform-table-primary-cell { font-weight: 600; color: #111 !important; }
  .longform-table-note-cell { font-style: italic; color: #888 !important; font-size: 12px !important; }

  /* ── Bullet list */
  .longform-bullet-list {
    list-style: none;
    padding: 0;
    margin: 1.25rem 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .longform-bullet-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    background: #fafafa;
    border-left: 4px solid #f5c6cb;
    border-radius: 0 6px 6px 0;
    padding: 10px 14px;
    font-size: 15px;
    color: #444;
    line-height: 1.6;
  }
  .longform-bullet-dot {
    flex-shrink: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #dc3545;
    margin-top: 8px;
  }

  /* ── Status badges */
  .longform-status-badge {
    display: inline-flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 20px;
  }
  .longform-badge-neutral  { background: #f1f3f5; color: #555; border: 1px solid #dee2e6; }
  .longform-badge-success  { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
  .longform-badge-danger   { background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
  .longform-badge-warning  { background: #fff3cd; color: #856404; border: 1px solid #ffeeba; }
  .longform-badge-info     { background: #d1ecf1; color: #0c5460; border: 1px solid #bee5eb; }

  /* ── Panel header row */
  .longform-panel-header-row {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 1rem;
  }
  .longform-accent-bar {
    width: 4px;
    height: 32px;
    background: #dc3545;
    border-radius: 2px;
    flex-shrink: 0;
  }
  .longform-panel-title {
    font-family: 'Times New Roman', Georgia, serif;
    font-size: clamp(1.15rem, 2vw, 1.45rem);
    font-weight: 700;
    color: #111;
    margin: 0;
  }

  /* ── FAQ */
  .longform-faq-section { margin: 2.5rem 0; }
  .longform-faq-list {
    border: 1px solid #e9ecef;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }
  .longform-faq-item { border-bottom: 1px solid #f0f0f0; background: #fff; }
  .longform-faq-item:last-child { border-bottom: none; }
  .longform-faq-open { background: #fff8f8; }
  .longform-faq-trigger {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    transition: background 0.15s;
  }
  .longform-faq-trigger:hover { background: #fff8f8; }
  .longform-faq-question {
    font-size: 15px;
    font-weight: 600;
    color: #222;
    line-height: 1.4;
    padding-right: 20px;
    font-family: Georgia, serif;
  }
  .longform-faq-icon {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #dc3545;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;
  }
  .longform-faq-icon-open { transform: rotate(45deg); }
  .longform-faq-answer {
    padding: 0 20px 18px;
    background: #fff8f8;
    border-top: 1px solid #f5c6cb;
  }
  .longform-faq-answer p {
    font-family: Georgia, serif;
    font-size: 14px;
    color: #444;
    line-height: 1.75;
    margin: 14px 0 0;
  }

  /* ── Documents panel */
  .longform-docs-panel {
    border: 1px solid #e9ecef;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    margin-bottom: 2.5rem;
  }
  .longform-docs-header {
    background: #111;
    padding: 14px 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #fff;
  }
  .longform-docs-icon { width: 16px; height: 16px; color: #f5c6cb; flex-shrink: 0; }
  .longform-docs-body { background: #f8f9fa; padding: 16px 20px; }
  .longform-docs-grid {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 4px;
  }
  @media (min-width: 576px) {
    .longform-docs-grid { grid-template-columns: 1fr 1fr; }
  }
  .longform-docs-item {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 13px;
    color: #555;
    padding: 6px 0;
    border-bottom: 1px solid #eee;
  }
  .longform-docs-item:last-child { border-bottom: none; }
  .longform-docs-item-icon { width: 14px; height: 14px; color: #dc3545; flex-shrink: 0; margin-top: 2px; }

  /* ── Related panel */
  .longform-related-panel {
    border: 1px solid #e9ecef;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    margin-bottom: 2.5rem;
  }
  .longform-related-header {
    background: #dc3545;
    padding: 12px 20px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #fff;
  }
  .longform-related-list {
    list-style: none;
    padding: 0;
    margin: 0;
    background: #fff;
  }
  .longform-related-list li { border-bottom: 1px solid #f0f0f0; }
  .longform-related-list li:last-child { border-bottom: none; }
  .longform-related-link {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 20px;
    text-decoration: none;
    color: #333;
    font-size: 13px;
    font-weight: 600;
    transition: background 0.15s, color 0.15s;
  }
  .longform-related-link:hover { background: #fff8f8; color: #dc3545; text-decoration: none; }
  .longform-related-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: #f5c6cb; flex-shrink: 0;
    transition: background 0.15s;
  }
  .longform-related-link:hover .longform-related-dot { background: #dc3545; }

  /* ── Sidebar */
  .longform-sidebar-card {
    border: 1px solid #e9ecef;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    margin-bottom: 1.5rem;
  }
  .longform-sidebar-card-header {
    background: #111;
    padding: 14px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .longform-sidebar-card-title {
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }
  .longform-live-dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: #dc3545;
    animation: longform-pulse 1.5s ease-in-out infinite;
  }
  @keyframes longform-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
  .longform-sidebar-list { list-style: none; padding: 0; margin: 0; background: #fff; }
  .longform-sidebar-list li { border-bottom: 1px solid #f0f0f0; }
  .longform-sidebar-list li:last-child { border-bottom: none; }
  .longform-sidebar-item-link {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 14px 18px;
    text-decoration: none;
    transition: background 0.15s;
  }
  .longform-sidebar-item-link:hover { background: #fafafa; text-decoration: none; }
  .longform-sidebar-num {
    font-size: 22px;
    font-weight: 800;
    color: #eee;
    line-height: 1;
    min-width: 28px;
    text-align: right;
    flex-shrink: 0;
    margin-top: 2px;
    transition: color 0.15s;
  }
  .longform-sidebar-item-link:hover .longform-sidebar-num { color: #f5c6cb; }
  .longform-sidebar-cat {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #dc3545;
    display: block;
    margin-bottom: 3px;
  }
  .longform-sidebar-item-title {
    font-size: 13px;
    font-weight: 600;
    color: #222;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    transition: color 0.15s;
  }
  .longform-sidebar-item-link:hover .longform-sidebar-item-title { color: #dc3545; }

  /* ── About card */
  .longform-about-card {
    background: #111;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 12px rgba(0,0,0,0.15);
  }
  .longform-about-card-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
  }
  .longform-about-icon {
    width: 28px; height: 28px; border-radius: 50%;
    background: #dc3545;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .longform-about-icon svg { width: 14px; height: 14px; color: #fff; }
  .longform-about-label {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #fff;
  }
  .longform-about-body {
    font-size: 13px;
    color: #888;
    line-height: 1.7;
  }
  .longform-about-footer {
    margin-top: 14px;
    padding-top: 14px;
    border-top: 1px solid #2a2a2a;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
    font-size: 12px;
  }
  .longform-about-by { color: #555; }
  .longform-about-author-link {
    color: #f5c6cb;
    font-weight: 700;
    text-decoration: none;
    transition: color 0.15s;
  }
  .longform-about-author-link:hover { color: #fff; text-decoration: none; }
  .longform-about-sep { color: #333; }
  .longform-about-date { color: #555; }

  /* ── More articles */
  .longform-more-section {
    margin-top: 4rem;
    padding-top: 2.5rem;
    border-top: 2px solid #f0f0f0;
  }
  .longform-more-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 2rem;
  }
  .longform-more-line { flex: 1; height: 1px; background: #eee; }
  .longform-more-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #111;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .longform-more-dot { width: 8px; height: 8px; border-radius: 50%; background: #dc3545; }
  .longform-more-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }
  @media (min-width: 576px) { .longform-more-grid { grid-template-columns: 1fr 1fr; } }
  @media (min-width: 992px) { .longform-more-grid { grid-template-columns: repeat(4, 1fr); } }

  .longform-more-card {
    border: 1px solid #e9ecef;
    border-radius: 12px;
    overflow: hidden;
    text-decoration: none;
    display: block;
    transition: box-shadow 0.25s, transform 0.25s;
  }
  .longform-more-card:hover {
    box-shadow: 0 8px 28px rgba(0,0,0,0.12);
    transform: translateY(-3px);
    text-decoration: none;
  }
  .longform-more-img-wrap {
    width: 100%;
    height: 160px;
    overflow: hidden;
    background: #f0f0f0;
  }
  .longform-more-img-wrap img {
    width: 100%; height: 100%; object-fit: cover;
    transition: transform 0.4s;
  }
  .longform-more-card:hover .longform-more-img-wrap img { transform: scale(1.05); }
  .longform-more-body { padding: 14px; background: #fff; }
  .longform-more-cat {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #dc3545;
    display: block;
    margin-bottom: 6px;
  }
  .longform-more-title {
    font-family: Georgia, serif;
    font-size: 14px;
    font-weight: 700;
    color: #222;
    line-height: 1.4;
    transition: color 0.15s;
  }
  .longform-more-card:hover .longform-more-title { color: #dc3545; }

  /* ── Responsive layout */
  .longform-layout {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  @media (min-width: 992px) {
    .longform-layout { flex-direction: row; gap: 3rem; align-items: flex-start; }
    .longform-main { flex: 0 0 63%; max-width: 63%; }
    .longform-sidebar { flex: 0 0 34%; max-width: 34%; position: sticky; top: 24px; }
  }
`;

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────────────────────── */
export default function LongFormArticlePage({ article, displayDate, publishedISO, latestArticles, moreArticles }: Props) {
  const capitalize = (text: string) => text.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <>
      <style>{styles}</style>
      <div className="longform-page">

        {/* ── Breadcrumb */}
        <div className="longform-breadcrumb-bar">
          <div className="container">
            <nav>
              <Link href="/">Home</Link>
              <span className="longform-bc-sep">›</span>
              <Link href={`/${article.category}/`}>
                {article.category.replace(/-/g, " ").toUpperCase()}
              </Link>
              <span className="longform-bc-sep">›</span>
              <span className="longform-bc-current" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "320px" }}>
                {article.title}
              </span>
            </nav>
          </div>
        </div>

        {/* ── Hero area */}
        <div className="longform-hero">
          <div className="container longform-hero-inner">
            {/* Meta */}
            <div className="longform-meta-row">
              <span className="longform-investigation-badge">
                <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Investigation
              </span>
              <time dateTime={publishedISO} className="longform-meta-date">{displayDate}</time>
              <span className="longform-meta-sep">·</span>
              <Link href="" className="longform-meta-author">{article.author}</Link>
            </div>

            {/* Title */}
            <h1 className="longform-title">{article.title}</h1>

            {/* Hero image */}
            <div className="longform-hero-image-wrap">
              <Image
                src={article.image}
                alt={article.title}
                width={1200}
                height={600}
                className="w-100"
                priority
                style={{ objectFit: "cover", maxHeight: "480px" }}
              />
            </div>

            {/* Dek */}
            {article.dek && (
              <div className="longform-dek">
                <p>{article.dek}</p>
              </div>
            )}
          </div>
        </div>

        {/* ── Main content */}
        <div className="container py-4 py-md-5">
          <div className="longform-layout">

            {/* ════════════════════════════════════════
                ARTICLE BODY
            ════════════════════════════════════════ */}
            <article className="longform-main">

              {/* At a Glance */}
              {article.glance && article.glance.length > 0 && (
                <div className="longform-glance">
                  <div className="longform-glance-header">
                    <div className="longform-glance-dots">
                      <span className="longform-glance-dot" style={{ background: "#dc3545" }} />
                      <span className="longform-glance-dot" style={{ background: "#ffc107" }} />
                      <span className="longform-glance-dot" style={{ background: "#28a745" }} />
                    </div>
                    <span className="longform-glance-label">At a Glance</span>
                    <div style={{ width: 64 }} />
                  </div>
                  {article.glance.map((item, i) => (
                    <div key={i} className="longform-glance-row">
                      <dt className="longform-glance-key">{item.label}</dt>
                      <dd className="longform-glance-val">{item.value}</dd>
                    </div>
                  ))}
                </div>
              )}

              {/* Divider */}
              <div className="longform-divider">
                <div className="longform-divider-line" />
                <div className="longform-divider-label">
                  <span className="longform-divider-dot" />
                  Full Report
                  <span className="longform-divider-dot" />
                </div>
                <div className="longform-divider-line" />
              </div>

              {/* Sections */}
              {article.sections?.map((section, i) => (
                <ArticleSectionBlock key={i} section={section} index={i} />
              ))}

              {/* Evidence table */}
              {article.evidenceTable && <EvidenceTableBlock table={article.evidenceTable} />}

              {/* Documents */}
              {article.documentsNeeded && article.documentsNeeded.length > 0 && (
                <DocumentsNeeded docs={article.documentsNeeded} />
              )}

              {/* Related */}
              {article.internalLinks && article.internalLinks.length > 0 && (
                <RelatedTopics links={article.internalLinks} category={article.category} />
              )}

              {/* FAQ */}
              {article.faq && article.faq.length > 0 && <FAQSection faq={article.faq} />}

            </article>

            {/* ════════════════════════════════════════
                SIDEBAR
            ════════════════════════════════════════ */}
            <aside className="longform-sidebar">

              {/* Latest news */}
              <div className="longform-sidebar-card">
                <div className="longform-sidebar-card-header">
                  <span className="longform-sidebar-card-title">Latest News</span>
                  <span className="longform-live-dot" />
                </div>
                <ul className="longform-sidebar-list">
                  {latestArticles.slice(0, 6).map((item, i) => (
                    <li key={item.slug}>
                      <Link href={`/${item.category}/${item.slug}/`} className="longform-sidebar-item-link">
                        <span className="longform-sidebar-num">{String(i + 1).padStart(2, "0")}</span>
                        <div>
                          <span className="longform-sidebar-cat">{item.category.replace(/-/g, " ")}</span>
                          <span className="longform-sidebar-item-title">{item.title}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About this investigation */}
              <div className="longform-about-card">
                <div className="longform-about-card-header">
                  <div className="longform-about-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="longform-about-label">About This Report</span>
                </div>
                <p className="longform-about-body">
                  This investigation is based on publicly available records, court filings, administrative orders, and official documents. Allegations reported here have not been proven in court.
                </p>
                <div className="longform-about-footer">
                  <span className="longform-about-by">By</span>
                  <Link href="#" className="longform-about-author-link">{article.author}</Link>
                  <span className="longform-about-sep">·</span>
                  <time dateTime={publishedISO} className="longform-about-date">{displayDate}</time>
                </div>
              </div>

            </aside>
          </div>

          {/* ── More articles */}
          {moreArticles.length > 0 && (
            <section className="longform-more-section">
              <div className="longform-more-header">
                <div className="longform-more-line" />
                <h2 className="longform-more-label">
                  <span className="longform-more-dot" />
                  More in {capitalize(article.category)}
                </h2>
                <div className="longform-more-line" />
              </div>
              <div className="longform-more-grid">
                {moreArticles.map((item) => (
                  <Link key={item.slug} href={`/${article.category}/${item.slug}/`} className="longform-more-card">
                    <div className="longform-more-img-wrap">
                      <Image src={item.image} alt={item.title} width={400} height={250} />
                    </div>
                    <div className="longform-more-body">
                      <span className="longform-more-cat">{item.category.replace(/-/g, " ")}</span>
                      <div className="longform-more-title">{item.title}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}