"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────────────────────────── */
export interface AnalysisSection {
  id: string;
  heading: string;
  emphasis?: boolean;
  body: string[];
  questions?: string[];
  closingBody?: string[];
  pullQuote?: string;
  finalStatement?: string;
  finalBody?: string[];
}

export interface AnalysisSource {
  label: string;
  description: string;
  url: string;
  linkText?: string; // optional override for the visible link word/phrase
}

export interface AnalysisRelatedLink {
  text: string;
  url: string;
}

export interface MediaAnalysisArticleData {
  id: number;
  category: string;
  title: string;
  shortdescription: string;
  slug: string;
  date?: string;
  image: string;
  alt?: string;
  imageCaption?: string;
  author: string;
  articleType: "media-analysis";
  editorialLabel?: string;
  seoTitle?: string;
  metaDescription?: string;
  dek?: string;
  lede?: string;
  openingBeats?: string[];
  answerStatement?: string;
  answerFollowUp?: string[];
  sections?: AnalysisSection[];
  sources?: AnalysisSource[];
  relatedLinks?: AnalysisRelatedLink[];
  // author sidebar (all optional — falls back gracefully)
  authorTitle?: string;
  authorBio?: string;
  authorImage?: string;
}

interface Props {
  article: MediaAnalysisArticleData;
  displayDate: string;
  publishedISO: string;
}

/* ─────────────────────────────────────────────────────────────────────────────
   INLINE MARKDOWN-LINK PARSER
───────────────────────────────────────────────────────────────────────────── */
function renderInlineLinks(text: string, keyPrefix: string) {
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    nodes.push(
      <a
        key={`${keyPrefix}-lnk-${i++}`}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="ma-inline-link"
      >
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase() ?? "")
    .join("");
}

/* Derive a short, readable host name from a URL for the citation card footer */
function hostFromUrl(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

/* ─────────────────────────────────────────────────────────────────────────────
   CSS
───────────────────────────────────────────────────────────────────────────── */
const styles = `
  :root {
    --ma-ink: #16140F;
    --ma-ink-soft: #55503F;
    --ma-paper: #FBF9F5;
    --ma-line: #E4DDD0;
    --ma-red: #AF262E;
    --ma-red-deep: #7E1B21;
    --ma-gold: #96742E;
  }

  .ma-page {
    background: var(--ma-paper);
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    color: var(--ma-ink);
  }

  .ma-container {
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 24px;
  }

  /* Breadcrumb */
  .ma-breadcrumb-bar { background-color: var(--ma-ink); padding: 9px 0; }
  .ma-breadcrumb-bar nav {
    display: flex; flex-wrap: wrap; align-items: center; gap: 7px;
    font-size: 12px; font-weight: 500; color: rgba(251,249,245,0.62);
  }
  .ma-breadcrumb-bar a { color: rgba(251,249,245,0.62); text-decoration: none; }
  .ma-breadcrumb-bar a:hover { color: #fff; }
  .ma-bc-current { color: #fff; }
  .ma-bc-current-text {
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 320px;
  }
  .ma-bc-sep { color: rgba(251,249,245,0.3); }

  /* Masthead — kicker beside the headline, not stacked above it */
  .ma-masthead { border-bottom: 1px solid var(--ma-line); padding: 3rem 0 2.5rem; }
  .ma-masthead-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
  @media (min-width: 720px) {
    .ma-masthead-grid { grid-template-columns: 140px 1fr; gap: 2rem; align-items: start; }
  }
  .ma-kicker {
    border-left: 3px solid var(--ma-red);
    padding-left: 14px;
    padding-top: 2px;
  }
  .ma-kicker span {
    font-size: 12.5px; font-weight: 600; color: var(--ma-red);
    display: block; line-height: 1.4;
  }
  .ma-headline {
    font-family: Georgia, 'Times New Roman', serif;
    font-size: clamp(2.1rem, 4.6vw, 3.35rem);
    font-weight: 700; color: var(--ma-ink); line-height: 1.12;
    margin: 0 0 1.1rem; letter-spacing: -0.015em;
    max-width: 22ch;
  }
  .ma-dek {
    font-family: Georgia, serif; font-size: 1.2rem; line-height: 1.6;
    color: var(--ma-ink-soft); margin-bottom: 1.4rem; max-width: 62ch;
  }
  .ma-byline-row {
    display: flex; flex-wrap: wrap; align-items: center; gap: 10px;
    font-size: 13px; color: var(--ma-ink-soft); padding-top: 1rem; border-top: 1px solid var(--ma-line);
  }
  .ma-byline-name { font-weight: 700; color: var(--ma-ink); text-decoration: none; }
  .ma-byline-name:hover { color: var(--ma-red); }
  .ma-byline-sep { color: #C9C2B2; }

  /* Layout */
  .ma-layout { display: flex; flex-direction: column; gap: 2.5rem; }
  @media (min-width: 1024px) {
    .ma-layout { flex-direction: row; gap: 3.75rem; align-items: flex-start; }
    .ma-main { flex: 1 1 0; min-width: 0; }
    .ma-margin { flex: 0 0 300px; width: 300px; position: sticky; top: 28px; }
  }

  /* Figure */
  .ma-figure { margin: 2rem 0 2.5rem; }
  .ma-figure-frame {
    border: 1px solid var(--ma-line); overflow: hidden;
    aspect-ratio: 16 / 9; position: relative;
  }
  .ma-figure-frame img { width: 100%; height: 100%; display: block; object-fit: cover; }
  .ma-figure-caption {
    font-size: 12.5px; font-style: italic; color: #8B8574;
    margin-top: 9px; padding-left: 2px;
  }

  /* Lede with drop cap */
  .ma-lede {
    font-family: Georgia, serif; font-size: 1.2rem; line-height: 1.75;
    color: var(--ma-ink); margin-bottom: 1.5rem;
  }
  .ma-lede-dropcap {
    float: left; font-family: Georgia, serif; font-weight: 700;
    font-size: 3.6rem; line-height: 0.82; color: var(--ma-red);
    padding: 4px 10px 0 0;
  }

  .ma-body-text {
    font-family: Georgia, serif; font-size: 16.5px; line-height: 1.8;
    color: #2C2A24; margin-bottom: 1.05rem;
  }
  .ma-inline-link { color: var(--ma-red); text-decoration: underline; text-underline-offset: 2px; }
  .ma-inline-link:hover { color: var(--ma-red-deep); }

  /* Verdict strip */
  .ma-verdict {
    display: grid; grid-template-columns: 1fr; gap: 1px;
    background: var(--ma-line); border: 1px solid var(--ma-line);
    margin: 2rem 0 2.5rem;
  }
  @media (min-width: 640px) { .ma-verdict { grid-template-columns: 1fr 1fr; } }
  .ma-verdict-cell { background: var(--ma-paper); padding: 1.25rem 1.5rem; }
  .ma-verdict-label {
    font-size: 11.5px; font-weight: 600; letter-spacing: 0.02em; margin-bottom: 8px;
  }
  .ma-verdict-cell.claim .ma-verdict-label { color: #8B8574; }
  .ma-verdict-cell.answer .ma-verdict-label { color: var(--ma-red); }
  .ma-verdict-text { font-family: Georgia, serif; font-size: 14.5px; line-height: 1.6; color: #3A3730; }
  .ma-verdict-cell.answer .ma-verdict-text { font-weight: 700; color: var(--ma-ink); }

  /* Section dividers */
  .ma-section { margin-bottom: 2.75rem; scroll-margin-top: 90px; }
  .ma-section-head {
    display: flex; align-items: baseline; gap: 14px;
    border-top: 1px solid var(--ma-ink); padding-top: 10px; margin-bottom: 1.1rem;
  }
  .ma-section-heading {
    font-family: Georgia, serif; font-size: clamp(1.15rem, 2.2vw, 1.45rem);
    font-weight: 700; color: var(--ma-ink); line-height: 1.3; margin: 0;
  }
  .ma-section.emphasis .ma-section-head { border-top: 3px solid var(--ma-red); }
  .ma-section.emphasis .ma-section-heading { font-size: clamp(1.4rem, 3vw, 1.85rem); }

  /* Pull quote */
  .ma-pullquote {
    margin: 1.75rem 0; padding: 1.1rem 1.5rem;
    border-top: 1px solid var(--ma-red); border-bottom: 1px solid var(--ma-red);
  }
  .ma-pullquote p {
    font-family: Georgia, serif; font-size: 1.2rem; font-weight: 700;
    font-style: italic; color: var(--ma-ink); margin: 0; text-align: center;
  }

  /* Question ledger */
  .ma-ledger { border: 1px solid var(--ma-ink); margin: 1.5rem 0 1rem; }
  .ma-ledger-title {
    background: var(--ma-ink); color: var(--ma-paper); padding: 10px 16px;
    font-size: 12.5px; font-weight: 600;
  }
  .ma-ledger-row {
    display: flex; gap: 14px; padding: 12px 16px;
    border-bottom: 1px solid var(--ma-line); align-items: flex-start;
  }
  .ma-ledger-row:last-child { border-bottom: none; }
  .ma-ledger-num {
    flex-shrink: 0; width: 22px; height: 22px; border: 1.5px solid var(--ma-red);
    color: var(--ma-red); font-size: 11px; font-weight: 700;
    display: flex; align-items: center; justify-content: center; margin-top: 2px;
  }
  .ma-ledger-q { font-family: Georgia, serif; font-size: 14.5px; line-height: 1.55; color: #2C2A24; }

  /* Final statement */
  .ma-final-statement {
    font-family: Georgia, serif; font-size: 1.3rem; font-weight: 700;
    color: var(--ma-red); margin: 1.75rem 0 0.75rem; line-height: 1.4;
  }

  /* Citations — card style */
  .ma-citations { margin: 3rem 0 2.5rem; border-top: 2px solid var(--ma-ink); padding-top: 1.25rem; scroll-margin-top: 90px; }
  .ma-citations-title { font-size: 12.5px; font-weight: 600; color: var(--ma-ink); margin-bottom: 1rem; }
  .ma-citations-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 14px;
    width: 100%;
  }
  @media (min-width: 640px) {
    .ma-citations-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
  .ma-citation-card {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #fff;
    border: 1px solid var(--ma-line);
    border-radius: 8px;
    padding: 16px 18px;
    transition: border-color 120ms ease, box-shadow 120ms ease, transform 120ms ease;
  }
  .ma-citation-card:hover {
    border-color: var(--ma-red);
    box-shadow: 0 4px 14px rgba(22, 20, 15, 0.08);
    transform: translateY(-1px);
  }
  .ma-citation-top { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 8px; }
  .ma-citation-num {
    flex-shrink: 0; width: 22px; height: 22px; border-radius: 50%;
    background: var(--ma-ink); color: var(--ma-paper);
    font-family: Georgia, serif; font-weight: 700; font-size: 12px;
    display: flex; align-items: center; justify-content: center;
  }
  .ma-citation-label { font-size: 13.5px; font-weight: 700; color: var(--ma-ink); line-height: 1.35; }
  .ma-citation-desc {
    font-family: Georgia, serif; font-size: 13.5px; color: var(--ma-ink-soft);
    line-height: 1.55; margin-bottom: 14px;
  }
  .ma-citation-footer {
    display: flex; align-items: center; justify-content: space-between; gap: 10px;
    margin-top: auto; padding-top: 12px; border-top: 1px solid #F0EDE5;
  }
  .ma-citation-host { font-size: 11.5px; color: #8B8574; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .ma-citation-link {
    flex-shrink: 0;
    display: inline-flex; align-items: center; gap: 5px;
    font-size: 12px; font-weight: 700; color: var(--ma-red);
    text-decoration: none; border: 1px solid var(--ma-red);
    padding: 5px 12px; border-radius: 999px;
    transition: background 120ms ease, color 120ms ease;
  }
  .ma-citation-link:hover { background: var(--ma-red); color: #fff; }
  .ma-citation-link-arrow { font-size: 13px; line-height: 1; }

  /* Continue reading */
  .ma-continue { border-top: 1px solid var(--ma-line); padding-top: 1.25rem; scroll-margin-top: 90px; }
  .ma-continue-title { font-size: 12.5px; font-weight: 600; color: #8B8574; margin-bottom: 0.75rem; }
  .ma-continue-list { list-style: none; margin: 0; padding: 0; }
  .ma-continue-list li { border-bottom: 1px solid #F0EDE5; }
  .ma-continue-list li:last-child { border-bottom: none; }
  .ma-continue-link {
    display: block; padding: 10px 0; text-decoration: none; color: var(--ma-ink);
    font-family: Georgia, serif; font-size: 14px; font-weight: 700;
  }
  .ma-continue-link:hover { color: var(--ma-red); }

  /* ── Sidebar: Table of Contents ── */
  .ma-toc {
    border: 1px solid var(--ma-line); margin-bottom: 1.75rem;
  }
  .ma-toc-title {
    font-size: 12px; font-weight: 600; color: #8B8574;
    padding: 14px 18px 10px;
  }
  .ma-toc-list { list-style: none; margin: 0; padding: 0 8px 12px; }
  .ma-toc-item { margin: 0; }
  .ma-toc-link {
    display: flex; gap: 10px; align-items: baseline;
    padding: 7px 10px; text-decoration: none; border-left: 2px solid transparent;
    font-size: 13.5px; color: var(--ma-ink-soft); line-height: 1.4;
    transition: border-color 120ms ease, color 120ms ease, background 120ms ease;
  }
  .ma-toc-link:hover { color: var(--ma-ink); background: #F3EFE6; }
  .ma-toc-link.active {
    border-left-color: var(--ma-red); color: var(--ma-ink); font-weight: 700;
    background: #F6EEE9;
  }
  .ma-toc-num { color: var(--ma-gold); font-family: Georgia, serif; font-weight: 700; flex-shrink: 0; }

  /* ── Sidebar: Author bio ── */
  .ma-author-card { border: 1px solid var(--ma-line); padding: 1.5rem; margin-bottom: 1.75rem; }
  .ma-author-top { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
  .ma-avatar {
    width: 46px; height: 46px; border-radius: 50%; flex-shrink: 0;
    background: var(--ma-ink); color: var(--ma-paper);
    display: flex; align-items: center; justify-content: center;
    font-family: Georgia, serif; font-weight: 700; font-size: 15px;
    overflow: hidden;
  }
  .ma-avatar img { width: 100%; height: 100%; object-fit: cover; }
  .ma-author-name { font-weight: 700; color: var(--ma-ink); font-size: 14.5px; }
  .ma-author-title { font-size: 12.5px; color: var(--ma-gold); margin-top: 1px; }
  .ma-author-bio { font-size: 13px; color: var(--ma-ink-soft); line-height: 1.65; margin-bottom: 12px; }
  .ma-author-meta { font-size: 12px; color: #8B8574; border-top: 1px solid var(--ma-line); padding-top: 10px; }

  /* ── Sidebar: About this analysis ── */
  .ma-about-card { border-left: 2px solid var(--ma-ink); padding-left: 16px; }
  .ma-about-title { font-size: 12px; font-weight: 600; color: #8B8574; margin-bottom: 8px; }
  .ma-about-body { font-size: 13px; color: var(--ma-ink-soft); line-height: 1.7; }
`;

/* ─────────────────────────────────────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────────────────────────────────────── */
function SectionBlock({ section }: { section: AnalysisSection }) {
  return (
    <div id={section.id} className={`ma-section${section.emphasis ? " emphasis" : ""}`}>
      <div className="ma-section-head">
        <h2 className="ma-section-heading">{section.heading}</h2>
      </div>

      {section.body.map((para, i) => (
        <p key={`b-${i}`} className="ma-body-text">
          {renderInlineLinks(para, `${section.id}-b${i}`)}
        </p>
      ))}

      {section.questions && (
        <div className="ma-ledger">
          <div className="ma-ledger-title">The question ledger</div>
          {section.questions.map((q, i) => (
            <div key={i} className="ma-ledger-row">
              <span className="ma-ledger-num">{i + 1}</span>
              <span className="ma-ledger-q">{q}</span>
            </div>
          ))}
        </div>
      )}

      {section.closingBody &&
        section.closingBody.map((para, i) => (
          <p key={`c-${i}`} className="ma-body-text">
            {renderInlineLinks(para, `${section.id}-c${i}`)}
          </p>
        ))}

      {section.pullQuote && (
        <div className="ma-pullquote">
          <p>{section.pullQuote}</p>
        </div>
      )}

      {section.finalStatement && <p className="ma-final-statement">{section.finalStatement}</p>}

      {section.finalBody &&
        section.finalBody.map((para, i) => (
          <p key={`f-${i}`} className="ma-body-text">
            {renderInlineLinks(para, `${section.id}-f${i}`)}
          </p>
        ))}
    </div>
  );
}

function Citations({ sources }: { sources: AnalysisSource[] }) {
  return (
    <div className="ma-citations" id="ma-citations">
      <div className="ma-citations-title">Citations</div>
      <div className="ma-citations-grid">
        {sources.map((s, i) => (
          <div key={i} className="ma-citation-card">
            <div className="ma-citation-top">
              <span className="ma-citation-num">{i + 1}</span>
              <span className="ma-citation-label">{s.label}</span>
            </div>
            <div className="ma-citation-desc">{s.description}</div>
            <div className="ma-citation-footer">
              <span className="ma-citation-host">{hostFromUrl(s.url)}</span>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="ma-citation-link">
                {s.linkText ?? "View source"}
                <span className="ma-citation-link-arrow">↗</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContinueReading({ links }: { links: AnalysisRelatedLink[] }) {
  return (
    <div className="ma-continue" id="ma-continue-reading">
      <div className="ma-continue-title">Continue reading</div>
      <ul className="ma-continue-list">
        {links.map((link, i) => (
          <li key={i}>
            <Link
              href={link.url.startsWith("http") ? link.url : `/${link.url.replace(/^\//, "")}`}
              className="ma-continue-link"
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TableOfContents({
  entries,
  activeId,
}: {
  entries: { id: string; label: string }[];
  activeId: string | null;
}) {
  if (entries.length === 0) return null;
  return (
    <nav className="ma-toc" aria-label="Table of contents">
      <div className="ma-toc-title">On this page</div>
      <ul className="ma-toc-list">
        {entries.map((entry, i) => (
          <li key={entry.id} className="ma-toc-item">
            <a
              href={`#${entry.id}`}
              className={`ma-toc-link${activeId === entry.id ? " active" : ""}`}
            >
              <span className="ma-toc-num">{String(i + 1).padStart(2, "0")}</span>
              <span>{entry.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function AuthorCard({ article, displayDate, publishedISO }: Props) {
  return (
    <div className="ma-author-card">
      <div className="ma-author-top">
        <div className="ma-avatar">
          {article.authorImage ? (
            <Image src={article.authorImage} alt={article.author} width={46} height={46} />
          ) : (
            initials(article.author)
          )}
        </div>
        <div>
          <div className="ma-author-name">{article.author}</div>
          <div className="ma-author-title">{article.authorTitle ?? "Staff Reporter, NYC Report"}</div>
        </div>
      </div>
      <p className="ma-author-bio">
        {article.authorBio ??
          `${article.author} covers accountability and public-records reporting for NYC Report, with a focus on how claims made in the press hold up against the documented record.`}
      </p>
      <div className="ma-author-meta">
        Published <time dateTime={publishedISO}>{displayDate}</time>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────────────────────────────────────── */
export default function MediaAnalysisArticle({ article, displayDate, publishedISO }: Props) {
  const tocEntries = useMemo(() => {
    const entries: { id: string; label: string }[] = [];
    (article.sections ?? []).forEach((s) => entries.push({ id: s.id, label: s.heading }));
    if (article.sources?.length) entries.push({ id: "ma-citations", label: "Citations" });
    if (article.relatedLinks?.length) entries.push({ id: "ma-continue-reading", label: "Continue reading" });
    return entries;
  }, [article.sections, article.sources, article.relatedLinks]);

  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (tocEntries.length === 0) return;

    observerRef.current?.disconnect();
    const observer = new IntersectionObserver(
      (visibleEntries) => {
        const visible = visibleEntries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-100px 0px -70% 0px", threshold: 0 }
    );

    tocEntries.forEach((entry) => {
      const el = document.getElementById(entry.id);
      if (el) observer.observe(el);
    });

    observerRef.current = observer;
    return () => observer.disconnect();
  }, [tocEntries]);

  return (
    <>
      <style>{styles}</style>
      <div className="ma-page">

        {/* Breadcrumb */}
        <div className="ma-breadcrumb-bar">
          <div className="ma-container">
            <nav>
              <Link href="/">Home</Link>
              <span className="ma-bc-sep">›</span>
              <Link href={`/${article.category}/`}>{article.category.replace(/-/g, " ")}</Link>
              <span className="ma-bc-sep">›</span>
              <span className="ma-bc-current ma-bc-current-text">{article.title}</span>
            </nav>
          </div>
        </div>

        {/* Masthead */}
        <div className="ma-masthead">
          <div className="ma-container ma-masthead-grid">
            <div className="ma-kicker">
              {/* <span>{article.editorialLabel ?? "Media analysis"}</span> */}
            </div>
            <div>
              <h1 className="ma-headline">{article.title}</h1>
              {article.dek && <p className="ma-dek">{article.dek}</p>}
              <div className="ma-byline-row">
                <Link href="/our-team" className="ma-byline-name">{article.author}</Link>
                <span className="ma-byline-sep">·</span>
                <time dateTime={publishedISO}>{displayDate}</time>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="ma-container py-4 py-md-5">
          <div className="ma-layout">

            <article className="ma-main">

              {/* Hero figure */}
              <div className="ma-figure">
                <div className="ma-figure-frame">
                  <Image
                    src={article.image}
                    alt={article.alt ?? article.title}
                    fill
                    priority
                  />
                </div>
                {article.imageCaption && <p className="ma-figure-caption">{article.imageCaption}</p>}
              </div>

              {/* Lede with drop cap */}
              {article.lede && (
                <p className="ma-lede">
                  <span className="ma-lede-dropcap">{article.lede.charAt(0)}</span>
                  {article.lede.slice(1)}
                </p>
              )}

              {article.openingBeats?.map((para, i) => (
                <p key={i} className="ma-body-text">{para}</p>
              ))}

              {/* Verdict strip */}
              {article.answerStatement && (
                <div className="ma-verdict">
                  <div className="ma-verdict-cell claim">
                    <div className="ma-verdict-label">The question put to him</div>
                    <div className="ma-verdict-text">
                      Had he communicated, directly or indirectly, with attorney Christopher Kise about the federal prosecution involving Herrera Velutini and former Puerto Rico Governor Wanda Vázquez Garced?
                    </div>
                  </div>
                  <div className="ma-verdict-cell answer">
                    <div className="ma-verdict-label">Blanche's answer</div>
                    <div className="ma-verdict-text">{article.answerStatement}</div>
                  </div>
                </div>
              )}

              {article.answerFollowUp?.map((para, i) => (
                <p key={i} className="ma-body-text">{para}</p>
              ))}

              {/* Sections */}
              {article.sections?.map((section) => (
                <SectionBlock key={section.id} section={section} />
              ))}

              {/* Citations */}
              {article.sources && article.sources.length > 0 && <Citations sources={article.sources} />}

              {/* Continue reading */}
              {article.relatedLinks && article.relatedLinks.length > 0 && (
                <ContinueReading links={article.relatedLinks} />
              )}

            </article>

            {/* Margin column */}
            <aside className="ma-margin">
              <TableOfContents entries={tocEntries} activeId={activeId} />
              <AuthorCard article={article} displayDate={displayDate} publishedISO={publishedISO} />
              <div className="ma-about-card">
                <div className="ma-about-title">About this analysis</div>
                <p className="ma-about-body">
                  This piece examines how the Herrera Velutini narrative was reported against the
                  on-the-record denial issued by Attorney General Todd Blanche, and argues that the
                  same evidentiary standard applied to the accusation should apply to the response.
                </p>
              </div>
            </aside>
{/* test */}
          </div>
        </div>
      </div>
    </>
  );
}