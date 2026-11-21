import Image from "next/image";
import Link from "next/link";
import styles from "./AlinaturhanmildonArticlePage.module.css";
import ArticleTags from "./ArticleTags";

/* ─────────────────────────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────────────────────────── */

export type MildonBlock =
  | { type: "p"; text: string }
  | { type: "guests"; items: { name: string; role: string; image?: string; url?: string }[] }
  | { type: "callout"; label: string; text: string; tone?: "response" | "note" };

export interface MildonSection {
  id: string;
  heading: string;
  blocks: MildonBlock[];
}

export interface MildonSource {
  publisher?: string;
  label: string;
  url: string;
  description?: string;
}

export interface MildonRelated {
  slug: string;
  category: string;
  title: string;
  image: string;
}

export interface AlinaturhanmildonArticleData {
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
  sections: MildonSection[];
  sources: MildonSource[];
}

/* ─────────────────────────────────────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────────────────────────────────────── */

const SITE = "https://www.nycreport.org";
const IMG_W = 880;
const IMG_H = 660;

function hostOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

const pad = (n: number) => String(n).padStart(2, "0");

/* ─────────────────────────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────────────────────────── */

export default function AlinaturhanmildonArticlePage({
  article,
  related = [],
}: {
  article: AlinaturhanmildonArticleData;
  related?: MildonRelated[];
}) {
  const url = `${SITE}/politics/${article.slug}/`;
  const sources = (article.sources ?? []).filter((s) => s.url && s.label);
  const sections = article.sections ?? [];

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
    articleSection: "Politics",
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

  const lastSectionIndex = sections.length - 1;

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
          <Link href="/politics">Politics</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{article.title}</span>
        </nav>
      </div>

      <article className={styles.article}>
        {/* ── Hero: headline left, photo right ── */}
        <header className={styles.hero}>
          <div className={styles.heroText}>
            <div className={styles.meta}>
              <Link className={styles.badge} href="/politics">
                Politics
              </Link>
              <span className={styles.label}>{article.editorialLabel ?? "Society"}</span>
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
              sizes="(max-width: 900px) 100vw, 520px"
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
            {sections.map((section, sIndex) => (
              <section key={section.id} id={section.id} className={styles.section}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.sectionNumber} aria-hidden="true">
                    {pad(sIndex + 1)}
                  </span>
                  {section.heading}
                </h2>

                {section.blocks.map((block, bIndex) => {
                  if (block.type === "guests") {
                    return (
                      <ul key={bIndex} className={styles.guests} aria-label="Notable guests">
                        {block.items.map((guest) => (
                          <li key={guest.name} className={styles.guest}>
                            {guest.image ? (
                              <div className={styles.guestPhoto}>
                                <Image
                                  src={guest.image}
                                  alt={`Portrait of ${guest.name}, ${guest.role}`}
                                  width={400}
                                  height={500}
                                  sizes="(max-width: 767px) 96px, 220px"
                                  className={styles.guestImg}
                                />
                              </div>
                            ) : (
                              <span className={styles.monogram} aria-hidden="true">
                                {initials(guest.name)}
                              </span>
                            )}
                            <div className={styles.guestText}>
                              {guest.url ? (
                                <a
                                  href={guest.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`${styles.guestName} ${styles.guestLink}`}
                                  title={`${guest.name} on Wikipedia`}
                                >
                                  {guest.name}
                                </a>
                              ) : (
                                <span className={styles.guestName}>{guest.name}</span>
                              )}
                              <span className={styles.guestRole}>{guest.role}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  if (block.type === "callout") {
                    return (
                      <aside
                        key={bIndex}
                        className={`${styles.callout} ${block.tone === "note" ? styles.calloutNote : ""}`}
                      >
                        <span className={styles.calloutLabel}>{block.label}</span>
                        <p>{block.text}</p>
                      </aside>
                    );
                  }

                  const isLede = sIndex === 0 && bIndex === 0;
                  const isClosing =
                    sIndex === lastSectionIndex && bIndex === section.blocks.length - 1;
                  return (
                    <p
                      key={bIndex}
                      className={isLede ? styles.lede : isClosing ? styles.closing : undefined}
                    >
                      {block.text}
                    </p>
                  );
                })}
              </section>
            ))}

            {/* ── References ── */}
            {sources.length > 0 && (
              <section id="references" className={styles.refs} aria-labelledby="references-title">
                <h2 id="references-title">References</h2>
                <ol className={styles.refList}>
                  {sources.map((source, index) => (
                    <li key={source.url} className={styles.refItem}>
                      <span className={styles.refNumber} aria-hidden="true">
                        {pad(index + 1)}
                      </span>
                      <div className={styles.refContent}>
                        {source.publisher && (
                          <span className={styles.refPublisher}>{source.publisher}</span>
                        )}
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
                        {source.description && (
                          <p className={styles.refDescription}>{source.description}</p>
                        )}
                        {hostOf(source.url) && (
                          <span className={styles.refHost}>{hostOf(source.url)}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}
          </div>

          {/* ── Sidebar: contents + primary source ── */}
          <aside className={styles.sidebar} aria-label="Article navigation">
            <div className={styles.sidebarInner}>
              <nav className={styles.contents} aria-label="Table of contents">
                <h2>In this article</h2>
                <ol>
                  {sections.map((section, index) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`}>
                        <span>{pad(index + 1)}</span>
                        {section.heading}
                      </a>
                    </li>
                  ))}
                  {sources.length > 0 && (
                    <li>
                      <a href="#references">
                        <span>{pad(sections.length + 1)}</span>References
                      </a>
                    </li>
                  )}
                </ol>
              </nav>

              {sources[0] && (
                <a
                  className={styles.primarySource}
                  href={sources[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.primaryLabel}>Primary source</span>
                  <strong>{sources[0].label}</strong>
                  <span className={styles.primaryMeta}>
                    {sources[0].publisher ?? hostOf(sources[0].url)} · Read the original report →
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