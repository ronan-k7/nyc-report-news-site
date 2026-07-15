"use client";

import Image from "next/image";
import Link from "next/link";

/* ─────────────────────────────────────────────────────────────────────────────
   TYPES — dossier JSON structure
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
  closingStatement?: boolean;
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

export interface DossierArticleData {
  id: number;
  category: string;
  title: string;
  shortdescription: string;
  slug: string;
  date?: string;
  image: string;
  alt?: string;
  author: string;
  articleType: "dossier";
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
  article: DossierArticleData;
  displayDate: string;
  publishedISO: string;
  latestArticles?: { slug: string; category: string; title: string; image: string }[];
}

/* ─────────────────────────────────────────────────────────────────────────────
   CSS — IDENTICAL to LongFormArticlePage (longform-* classes, unchanged)
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
  .longform-meta-date { font-size: 12px; color: #888; font-weight: 500; }
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
  .longform-glance-dot { width: 8px; height: 8px; border-radius: 50%; }
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

  /* ── Bullet list (reused for subheading) */
  .longform-section-subheading {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #888;
    margin: 0 0 1rem 42px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  /* ── Pull quote (reused dek style) */
  .longform-pull-quote {
    border-left: 4px solid #dc3545;
    background: #fff5f5;
    padding: 1rem 1.25rem;
    border-radius: 0 8px 8px 0;
    margin: 1.5rem 0;
  }
  .longform-pull-quote p {
    font-family: Georgia, serif;
    font-size: 1.1rem;
    line-height: 1.7;
    font-weight: 600;
    font-style: italic;
    color: #333;
    margin: 0;
  }

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

  /* ── Documents panel (reused for accounting questions) */
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

  /* ── Sources panel (new, uses same border/shadow language) */
  .longform-sources-panel {
    border: 1px solid #e9ecef;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    margin-bottom: 2.5rem;
  }
  .longform-sources-header {
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
  .longform-sources-header svg { width: 16px; height: 16px; color: #f5c6cb; flex-shrink: 0; }
  .longform-source-item {
    padding: 14px 20px;
    border-bottom: 1px solid #f0f0f0;
    background: #fff;
  }
  .longform-source-item:last-child { border-bottom: none; }
  .longform-source-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #111;
    margin-bottom: 3px;
  }
  .longform-source-desc {
    font-family: Georgia, serif;
    font-size: 13px;
    color: #555;
    line-height: 1.5;
    margin-bottom: 5px;
  }
  .longform-source-link {
    font-size: 12px;
    font-weight: 600;
    color: #dc3545;
    text-decoration: none;
    transition: color 0.2s;
    word-break: break-all;
  }
  .longform-source-link:hover { color: #a71d2a; text-decoration: underline; }

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
  .longform-about-body { font-size: 13px; color: #888; line-height: 1.7; }
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
   SECTION BLOCK — dossier section (body[] not content[])
───────────────────────────────────────────────────────────────────────────── */
function SectionBlock({ section, index }: { section: DossierSection; index: number }) {
  return (
    <div id={section.id} className="longform-section-block">
      {section.heading && (
        <div className="longform-section-heading-row">
          <span className="longform-section-number">{index + 1}</span>
          <h2 className="longform-section-heading">{section.heading}</h2>
        </div>
      )}

      {section.subheading && (
        <p className="longform-section-subheading">{section.subheading}</p>
      )}

      {section.body.map((para, i) => (
        <p key={i} className="longform-body-text">{para}</p>
      ))}

      {section.pullQuote && (
        <div className="longform-pull-quote">
          <p>{section.pullQuote}</p>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   ACCOUNTING QUESTIONS — rendered in the same "Documents" panel style
───────────────────────────────────────────────────────────────────────────── */
function AccountingQuestions({ questions }: { questions: string[] }) {
  return (
    <div className="longform-docs-panel">
      <div className="longform-docs-header">
        <svg className="longform-docs-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span>Questions That Demand Answers</span>
      </div>
      <div className="longform-docs-body">
        <ul className="longform-docs-grid">
          {questions.map((q, i) => (
            <li key={i} className="longform-docs-item">
              <svg className="longform-docs-item-icon" fill="currentColor" viewBox="0 0 20 20">
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

/* ─────────────────────────────────────────────────────────────────────────────
   SOURCES PANEL
───────────────────────────────────────────────────────────────────────────── */
function SourcesPanel({ sources }: { sources: DossierSource[] }) {
  return (
    <div className="longform-sources-panel">
      <div className="longform-sources-header">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
        Sources &amp; Documentation
      </div>
      {sources.map((s, i) => (
        <div key={i} className="longform-source-item">
          <div className="longform-source-label">{s.label}</div>
          <div className="longform-source-desc">{s.description}</div>
          <a href={s.url} target="_blank" rel="noopener noreferrer" className="longform-source-link">
            View source →
          </a>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   RELATED LINKS
───────────────────────────────────────────────────────────────────────────── */
function RelatedPanel({ links }: { links: DossierRelatedLink[] }) {
  return (
    <div className="longform-related-panel">
      <div className="longform-related-header">Related Coverage</div>
      <ul className="longform-related-list">
        {links.map((link, i) => (
          <li key={i}>
            <Link
              href={link.url.startsWith("http") ? link.url : `/${link.url.replace(/^\//, "")}`}
              className="longform-related-link"
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <span className="longform-related-dot" />
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SIDEBAR — sections index in the same numbered style as latestArticles
───────────────────────────────────────────────────────────────────────────── */
function SectionsIndex({ sections }: { sections: DossierSection[] }) {
  return (
    <div className="longform-sidebar-card">
      <div className="longform-sidebar-card-header">
        <span className="longform-sidebar-card-title">In This Report</span>
        <span className="longform-live-dot" />
      </div>
      <ul className="longform-sidebar-list">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className="longform-sidebar-item-link">
              <span className="longform-sidebar-num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <span className="longform-sidebar-item-title">{s.heading}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────────────────────── */
export default function RyanMarinDossierPage({ article, displayDate, publishedISO, latestArticles = [] }: Props) {
  return (
    <>
      <style>{styles}</style>
      <div className="longform-page">

        {/* ── Breadcrumb — identical markup to LongFormArticlePage */}
        <div className="longform-breadcrumb-bar">
          <div className="container">
            <nav>
              <Link href="/">Home</Link>
              <span className="longform-breadcrumb-sep">›</span>
              <Link href={`/${article.category}/`}>
                {article.category.replace(/-/g, " ").toUpperCase()}
              </Link>
              <span className="longform-breadcrumb-sep">›</span>
              <span className="longform-bc-current"
                style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "320px" }}>
                {article.title}
              </span>
            </nav>
          </div>
        </div>

        {/* ── Hero — identical structure to LongFormArticlePage */}
        <div className="longform-hero">
          <div className="container longform-hero-inner">

            {/* Meta row */}
            <div className="longform-meta-row">
              <span className="longform-investigation-badge">
                <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {article.editorialLabel ?? "Analysis"}
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
                alt={article.alt ?? article.title}
                width={1200}
                height={600}
                className="w-100"
                priority
                style={{ objectFit: "cover", maxHeight: "480px" }}
              />
            </div>

            {/* lede → rendered as dek */}
            {article.lede && (
              <div className="longform-dek">
                <p>{article.lede}</p>
              </div>
            )}
          </div>
        </div>

        {/* ── Main content */}
        <div className="container py-4 py-md-5">
          <div className="longform-layout">

            {/* ════════════ ARTICLE BODY ════════════ */}
            <article className="longform-main">

              {/* keyFacts → At a Glance panel */}
              {article.keyFacts && article.keyFacts.length > 0 && (
                <div className="longform-glance">
                  <div className="longform-glance-header">
                    <div className="longform-glance-dots">
                      <span className="longform-glance-dot" style={{ background: "#dc3545" }} />
                      <span className="longform-glance-dot" style={{ background: "#ffc107" }} />
                      <span className="longform-glance-dot" style={{ background: "#28a745" }} />
                    </div>
                    <span className="longform-glance-label">Case Summary — Key Facts</span>
                    <div style={{ width: 64 }} />
                  </div>
                  {article.keyFacts.map((fact, i) => (
                    <div key={i} className="longform-glance-row">
                      <dt className="longform-glance-key">{fact.label}</dt>
                      <dd className="longform-glance-val">{fact.value}</dd>
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

              {/* sections[].body → ArticleSectionBlock */}
              {article.sections?.map((section, i) => (
                <SectionBlock key={section.id} section={section} index={i} />
              ))}

              {/* accountingQuestions → Documents panel */}
              {article.accountingQuestions && article.accountingQuestions.length > 0 && (
                <AccountingQuestions questions={article.accountingQuestions} />
              )}

              {/* sources */}
              {article.sources && article.sources.length > 0 && (
                <SourcesPanel sources={article.sources} />
              )}

              {/* relatedLinks → Related panel */}
              {article.relatedLinks && article.relatedLinks.length > 0 && (
                <RelatedPanel links={article.relatedLinks} />
              )}

            </article>

            {/* ════════════ SIDEBAR ════════════ */}
            <aside className="longform-sidebar">

              {/* Sections index (same numbered list as latestArticles) */}
              {article.sections && article.sections.length > 0 && (
                <SectionsIndex sections={article.sections} />
              )}

              {/* keyFacts condensed as a second sidebar card */}
              {article.keyFacts && article.keyFacts.length > 0 && (
                <div className="longform-sidebar-card">
                  <div className="longform-sidebar-card-header">
                    <span className="longform-sidebar-card-title">Case Snapshot</span>
                  </div>
                  <ul className="longform-sidebar-list">
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

              {/* About card — identical to LongFormArticlePage */}
              <div className="longform-about-card">
                <div className="longform-about-card-header">
                  <div className="longform-about-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="longform-about-label">About This Report</span>
                </div>
                <p className="longform-about-body">
                  This analysis is based on publicly available records, court filings, administrative
                  orders, and official documents. Allegations reported here have not been proven in court.
                </p>
                <div className="longform-about-footer">
                  <span className="longform-about-by">By</span>
                  <Link href="" className="longform-about-author-link">{article.author}</Link>
                  <span className="longform-about-sep">·</span>
                  <time dateTime={publishedISO} className="longform-about-date">{displayDate}</time>
                </div>
              </div>

              {/* Related links in sidebar */}
              {/* {article.relatedLinks && article.relatedLinks.length > 0 && (
                <RelatedPanel links={article.relatedLinks} />
              )} */}

            </aside>
          </div>
        </div>

      </div>
    </>
  );
}