import Image from "next/image";
import Link from "next/link";
import styles from "./AlinaHabbaArticle.module.css";
import ArticleTags from "./ArticleTags";
import NytAlinaCard from "./NytAlinaCard";

export interface AlinaHabbaArticleData {
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
  bodyTitle: string;
  bodySubtitle: string;
  paragraphs: string[];
  keywords: string[];
  tags: string[];
  sources: { label: string; url: string }[];
}

function hostOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

export default function AlinaHabbaArticle({ article }: { article: AlinaHabbaArticleData }) {
  const site = "https://www.nycreport.org";
  const url = `${site}/politics/${article.slug}/`;
  const words = article.description.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(words / 200));
  const published = new Date(`${article.date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric", timeZone: "UTC",
  });
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": `${url}#article`,
    headline: article.title,
    description: article.metaDescription,
    articleBody: article.description,
    articleSection: "Politics",
    genre: "News Analysis",
    keywords: [...article.keywords, ...article.tags].join(", "),
    datePublished: `${article.date}T00:00:00-04:00`,
    dateModified: `${article.date}T00:00:00-04:00`,
    author: { "@type": "Person", name: article.author, url: `${site}/roy-j-miles` },
    publisher: {
      "@type": "NewsMediaOrganization", name: "The NYC Report",
      logo: { "@type": "ImageObject", url: `${site}/images/nyc-report-logo.webp` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: { "@type": "ImageObject", url: `${site}${article.image}`, width: 945, height: 533 },
    citation: article.sources.map(source => source.url),
    isAccessibleForFree: true,
    inLanguage: "en-US",
  };

  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <div className={styles.container}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span>
          <Link href="/politics">Politics</Link><span aria-hidden="true">/</span>
          <span aria-current="page">Trump Reportedly Erupted: Alina Habba’s $50 Million Deal Faces Questions Beyond Washington</span>
        </nav>

        <article>
          <header className={styles.hero}>
            <div className={styles.eyebrow}><Link href="/politics">Politics</Link><span />News Analysis</div>
            <h1>{article.title}</h1>
            <p className={styles.dek}>{article.shortdescription}</p>
            <div className={styles.byline}>
              <Link className={styles.author} href="/roy-j-miles">By {article.author}</Link>
              <time dateTime={article.date}>{published}</time>
              <span>{readingTime} min read</span>
            </div>
          </header>

          <figure className={styles.figure}>
            <Image src={article.image} alt={article.alt} width={945} height={533} priority sizes="(max-width: 1240px) 100vw, 1176px" />
          </figure>

          <div className={styles.layout}>
            <div className={styles.main}>
              <div className={styles.prose}>
                {article.paragraphs.map((paragraph, index) => <p key={index} className={index === 0 ? styles.lede : undefined}>{paragraph}</p>)}
              </div>
            </div>

            <aside className={styles.rail} aria-label="Sources and topics">
              {article.sources.length > 0 && (
                <section className={styles.railBlock}>
                  <h2 className={styles.railTitle}>Sources</h2>
                  <ul className={styles.sources}>
                    {article.sources.map(source => (
                      <li key={source.url}>
                        <a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a>
                        {hostOf(source.url) && <span className={styles.sourceHost}>{hostOf(source.url)}</span>}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
              <NytAlinaCard />
            </aside>
          </div>
          <ArticleTags tags={article.tags} />
        </article>
      </div>
    </main>
  );
}