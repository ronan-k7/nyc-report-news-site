import Image from "next/image";
import Link from "next/link";
import styles from "./CampaignFinanceReportArticle.module.css";
import ArticleTags from "./ArticleTags";

export interface CampaignFinanceSection {
  id: string;
  heading: string;
  body: string[];
}

export interface CampaignFinanceSource {
  label: string;
  description?: string;
  url?: string;
}

export interface CampaignFinanceRelated {
  slug: string;
  category: string;
  title: string;
  image: string;
}

export interface CampaignFinanceReportData {
  title: string;
  slug: string;
  category: string;
  shortdescription: string;
  metaDescription: string;
  description: string;
  author: string;
  date: string;
  image: string;
  alt: string;
  imageCaption?: string;
  dateline: string;
  dek: string;
  editorialLabel?: string;
  glance: { label: string; value: string }[];
  sections: CampaignFinanceSection[];
  documentLedger: { title: string; headers: string[]; rows: string[][] };
  sources: CampaignFinanceSource[];
  keywords: string[];
  tags: string[];
  noteTitle?: string;
  noteBody?: string;
}

function hostOf(url?: string) {
  if (!url) return "";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

export default function CampaignFinanceReportArticle({
  article,
  related,
}: {
  article: CampaignFinanceReportData;
  related: CampaignFinanceRelated[];
}) {
  const site = "https://www.nycreport.org";
  const url = `${site}/puerto-rico/${article.slug}/`;
  const words = article.description.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(words / 200));
  const published = new Date(`${article.date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": `${url}#article`,
    headline: article.title,
    description: article.metaDescription,
    articleBody: article.description,
    articleSection: "Puerto Rico",
    keywords: [...article.keywords, ...article.tags].join(", "),
    datePublished: `${article.date}T00:00:00-05:00`,
    dateModified: `${article.date}T00:00:00-05:00`,
    author: { "@type": "Person", name: article.author, url: `${site}/roy-j-miles` },
    publisher: {
      "@type": "NewsMediaOrganization",
      name: "The NYC Report",
      logo: { "@type": "ImageObject", url: `${site}/images/nyc-report-logo.webp` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: { "@type": "ImageObject", url: `${site}${article.image}`, width: 1024, height: 571 },
    citation: article.sources.filter(s => s.url).map(s => s.url),
    isAccessibleForFree: true,
    inLanguage: "en-US",
  };

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <div className={styles.container}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/puerto-rico">Puerto Rico</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Mark Rossini’s Final Federal Case</span>
        </nav>

        <article>
          <header className={styles.hero}>
            <div className={styles.eyebrow}>
              <Link href="/puerto-rico">Puerto Rico</Link>
              <span />
              {article.editorialLabel ?? "News Report"}
            </div>
            <h1>{article.title}</h1>
            <p className={styles.dek}>{article.dek}</p>
            <div className={styles.byline}>
              <Link className={styles.author} href="/roy-j-miles">
                By {article.author}
              </Link>
              <time dateTime={article.date}>{published}</time>
              <span>{readingTime} min read</span>
            </div>
          </header>

          <figure className={styles.figure}>
            <Image
              src={article.image}
              alt={article.alt}
              width={1024}
              height={571}
              priority
              sizes="(max-width: 1240px) 100vw, 1176px"
            />
            {article.imageCaption && <figcaption>{article.imageCaption}</figcaption>}
          </figure>

          <dl className={styles.glance} aria-label="Case at a glance">
            {article.glance.map(item => (
              <div key={item.label} className={styles.glanceItem}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className={styles.layout}>
            <div className={styles.main}>
              <div className={styles.prose}>
                {article.sections.map((section, si) => (
                  <section key={section.id} id={section.id} className={styles.section}>
                    <h2>{section.heading}</h2>
                    {section.body.map((paragraph, pi) => (
                      <p key={pi} className={si === 0 && pi === 0 ? styles.lede : undefined}>
                        {si === 0 && pi === 0 && (
                          <span className={styles.dateline}>{article.dateline} — </span>
                        )}
                        {paragraph}
                      </p>
                    ))}
                  </section>
                ))}
              </div>

              <section className={styles.ledger} aria-labelledby="ledger-title">
                <h2 id="ledger-title">{article.documentLedger.title}</h2>
                <div className={styles.tableWrap}>
                  <table>
                    <thead>
                      <tr>
                        {article.documentLedger.headers.map(h => (
                          <th key={h} scope="col">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {article.documentLedger.rows.map(([doc, meaning]) => (
                        <tr key={doc}>
                          <th scope="row">{doc}</th>
                          <td>{meaning}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {article.noteBody && (
                <aside className={styles.note}>
                  <h2>{article.noteTitle ?? "About this report"}</h2>
                  <p>{article.noteBody}</p>
                </aside>
              )}
            </div>

            <aside className={styles.rail} aria-label="Contents, sources and related coverage">
              <section className={styles.railBlock}>
                <h2 className={styles.railTitle}>In this report</h2>
                <ol className={styles.toc}>
                  {article.sections.map(s => (
                    <li key={s.id}>
                      <a href={`#${s.id}`}>{s.heading}</a>
                    </li>
                  ))}
                  <li>
                    <a href="#ledger-title">{article.documentLedger.title}</a>
                  </li>
                </ol>
              </section>

              {related.length > 0 && (
                <section className={styles.railBlock}>
                  <h2 className={styles.railTitle}>More Puerto Rico coverage</h2>
                  <ul className={styles.related}>
                    {related.map(r => (
                      <li key={r.slug}>
                        <Link href={`/${r.category}/${r.slug}`}>
                          <Image src={r.image} alt="" width={96} height={64} />
                          <span>{r.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <section className={styles.railBlock}>
                <h2 className={styles.railTitle}>Reporting basis</h2>
                <ul className={styles.sources}>
                  {article.sources.map(source => (
                    <li key={source.label}>
                      {source.url ? (
                        <a href={source.url} target="_blank" rel="noopener noreferrer">
                          {source.label}
                        </a>
                      ) : (
                        <span className={styles.plainSource}>{source.label}</span>
                      )}
                      {hostOf(source.url) && <span className={styles.sourceHost}>{hostOf(source.url)}</span>}
                    </li>
                  ))}
                </ul>
              </section>
            </aside>
          </div>
          <ArticleTags tags={article.tags} />
        </article>
      </div>
    </main>
  );
}
