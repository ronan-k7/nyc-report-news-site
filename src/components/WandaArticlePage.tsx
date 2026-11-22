import Image from "next/image";
import Link from "next/link";
import styles from "./WandaArticlePage.module.css";
import ArticleTags from "./ArticleTags";

/* ─────────────────────────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────────────────────────── */

export interface WandaSource {
  publisher?: string;
  label: string;
  url: string;
  description?: string;
}

export interface WandaRelated {
  slug: string;
  category: string;
  title: string;
  image: string;
}

export interface WandaArticleData {
  title: string;
  slug: string;
  category: string;
  seoTitle: string;
  metaDescription: string;
  shortdescription: string;
  description: string;
  author: string;
  date: string; // YYYY-MM-DD
  image: string;
  alt: string;
  imageCaption?: string;
  editorialLabel?: string;
  keywords: string[];
  tags: string[];
  keyFacts: { label: string; value: string }[];
  paragraphs: string[];
  pullQuote?: { label: string; text: string; afterParagraph: number };
  noteTitle?: string;
  noteBody?: string;
  sources: WandaSource[];
  primarySourceIndex?: number;
}

/* ─────────────────────────────────────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────────────────────────────────────── */

const SITE = "https://www.nycreport.org";
const IMG_W = 1200;
const IMG_H = 1200;

function hostOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

/* ─────────────────────────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────────────────────────── */

export default function WandaArticlePage({
  article,
  related = [],
}: {
  article: WandaArticleData;
  related?: WandaRelated[];
}) {
  const url = `${SITE}/puerto-rico/${article.slug}/`;
  const sources = (article.sources ?? []).filter((s) => s.url && s.label);
  const paragraphs = article.paragraphs ?? [];
  const primary = sources[article.primarySourceIndex ?? 0] ?? sources[0];

  const readTime = Math.max(1, Math.ceil(article.description.split(/\s+/).length / 200));
  const published = new Date(`${article.date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": `${url}#article`,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: article.title,
    description: article.metaDescription,
    articleBody: article.description,
    articleSection: "Puerto Rico",
    genre: "Opinion and analysis",
    keywords: [...article.keywords, ...article.tags].join(", "),
    datePublished: `${article.date}T00:00:00-05:00`,
    dateModified: `${article.date}T00:00:00-05:00`,
    image: { "@type": "ImageObject", url: `${SITE}${article.image}`, width: IMG_W, height: IMG_H },
    author: { "@type": "Person", name: article.author, url: `${SITE}/roy-j-miles` },
    publisher: {
      "@type": "NewsMediaOrganization",
      name: "The NYC Report",
      url: SITE,
      logo: { "@type": "ImageObject", url: `${SITE}/images/nyc-report-logo.webp` },
    },
    ...(sources.length > 0 ? { citation: sources.map((s) => s.url) } : {}),
    isAccessibleForFree: true,
    inLanguage: "en-US",
  };

  const lastIndex = paragraphs.length - 1;
  const quoteAfter = article.pullQuote?.afterParagraph ?? -1;

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />

      {/* ── Breadcrumb ── */}
      <div className={styles.breadcrumbBar}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/puerto-rico">Puerto Rico</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{article.title}</span>
        </nav>
      </div>

      <article className={styles.article}>
        {/* ── Hero: headline left, photo right ── */}
        <header className={styles.hero}>
          <div className={styles.heroText}>
            <div className={styles.meta}>
              <Link className={styles.badge} href="/puerto-rico">
                Puerto Rico
              </Link>
              <span className={styles.label}>{article.editorialLabel ?? "Opinion and analysis"}</span>
            </div>
            <h1>{article.title}</h1>
            <p className={styles.dek}>{article.shortdescription}</p>
            <div className={styles.byline}>
              <Link className={styles.author} href="/roy-j-miles">
                By {article.author}
              </Link>
              <time dateTime={article.date}>{published}</time>
              <span>{readTime} min read</span>
            </div>
          </div>

          <figure className={styles.figure}>
            <Image
              src={article.image}
              alt={article.alt}
              width={IMG_W}
              height={IMG_H}
              priority
              sizes="(max-width: 1000px) 100vw, 520px"
            />
            {article.imageCaption && <figcaption>{article.imageCaption}</figcaption>}
          </figure>
        </header>

        {/* ── At a glance ── */}
        {article.keyFacts?.length > 0 && (
          <section className={styles.glance} aria-label="At a glance">
            {article.keyFacts.map((fact) => (
              <div key={fact.label} className={styles.fact}>
                <span className={styles.factLabel}>{fact.label}</span>
                <strong className={styles.factValue}>{fact.value}</strong>
              </div>
            ))}
          </section>
        )}

        {/* ── Body + sticky sidebar ── */}
        <div className={styles.readingLayout}>
          <div className={styles.mainCol}>
            <section className={styles.section}>
              {paragraphs.map((text, index) => (
                <div key={index}>
                  <p className={index === 0 ? styles.lede : index === lastIndex ? styles.closing : undefined}>
                    {text}
                  </p>
                  {article.pullQuote && quoteAfter === index + 1 && (
                    <aside className={styles.callout}>
                      <span className={styles.calloutLabel}>{article.pullQuote.label}</span>
                      <p>{article.pullQuote.text}</p>
                    </aside>
                  )}
                </div>
              ))}

              {article.noteBody && (
                <aside className={`${styles.callout} ${styles.calloutNote}`}>
                  <span className={styles.calloutLabel}>{article.noteTitle ?? "About this analysis"}</span>
                  <p>{article.noteBody}</p>
                </aside>
              )}
            </section>

            {/* ── References ── */}
            {sources.length > 0 && (
              <section id="references" className={styles.refs} aria-labelledby="references-title">
                <h2 id="references-title">References</h2>
                <ol className={styles.refList}>
                  {sources.map((source, index) => (
                    <li key={source.url} id={`ref-${index + 1}`} className={styles.refItem}>
                      <span className={styles.refNumber} aria-hidden="true">
                        {index + 1}
                      </span>
                      <div className={styles.refContent}>
                        {source.publisher && <span className={styles.refPublisher}>{source.publisher}</span>}
                        <a
                          className={styles.refLink}
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>{source.label}</span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M7 17 17 7" />
                            <path d="M8 7h9v9" />
                          </svg>
                        </a>
                        {source.description && <p className={styles.refDescription}>{source.description}</p>}
                        {hostOf(source.url) && <span className={styles.refHost}>{hostOf(source.url)}</span>}
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}
          </div>

          {/* ── Sidebar: sources list ── */}
          <aside className={styles.sidebar} aria-label="Article navigation">
            <div className={styles.sidebarInner}>
              {sources.length > 0 && (
                <nav className={styles.contents} aria-label="Sources in this article">
                  <h2>Sources</h2>
                  <ol>
                    {sources.map((source, index) => (
                      <li key={source.url}>
                        <a href={`#ref-${index + 1}`}>
                          <span>{index + 1}</span>
                          {source.label}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              {primary && (
                <a
                  className={styles.primarySource}
                  href={primary.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.primaryLabel}>Primary source</span>
                  <strong>{primary.label}</strong>
                  <span className={styles.primaryMeta}>
                    {primary.publisher ?? hostOf(primary.url)} · Read the original filing →
                  </span>
                </a>
              )}
            </div>
          </aside>
        </div>

        {/* ── Tags ── */}
        <ArticleTags tags={article.tags} />

        {/* ── Related coverage ── */}
        {related.length > 0 && (
          <section className={styles.related} aria-labelledby="related-title">
            <h2 id="related-title">Related coverage</h2>
            <ul className={styles.relatedGrid}>
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/${item.category}/${item.slug}`} className={styles.relatedCard}>
                    <Image
                      src={item.image}
                      alt=""
                      width={480}
                      height={270}
                      sizes="(max-width: 700px) 100vw, 340px"
                    />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </main>
  );
}
