import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import styles from "./HabbaVanityArticle.module.css";

export interface HabbaVanityArticleData {
  title: string;
  bodySubtitle: string;
  slug: string;
  metaDescription: string;
  description: string;
  paragraphs: string[];
  author: string;
  date: string;
  image: string;
  alt: string;
  keywords: string[];
  highlight: { firms: string; spending: string; quote: string };
  contents: { id: string; label: string; paragraph: number }[];
  timeline: { date: string; text: string }[];
}

export default function HabbaVanityArticle({ article }: { article: HabbaVanityArticleData }) {
  const site = "https://www.nycreport.org";
  const url = `${site}/politics/${article.slug}/`;
  const articleBody = article.paragraphs.flatMap((paragraph, index) => index === 5
    ? [paragraph, article.highlight.quote] : [paragraph]).join("\n\n");
  const readTime = Math.ceil(articleBody.split(/\s+/).length / 200);
  const date = new Date(`${article.date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric", timeZone: "UTC",
  });
  const schema = {
    "@context": "https://schema.org", "@type": "NewsArticle",
    "@id": `${url}#article`, url, mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: article.title, description: article.metaDescription, articleBody,
    articleSection: "Politics", keywords: article.keywords.join(", "),
    datePublished: `${article.date}T00:00:00-05:00`, dateModified: `${article.date}T00:00:00-05:00`,
    image: { "@type": "ImageObject", url: `${site}${article.image}`, width: 4000, height: 2666 },
    author: { "@type": "Person", name: article.author, url: `${site}/roy-j-miles` },
    publisher: { "@type": "NewsMediaOrganization", name: "The NYC Report", url: site,
      logo: { "@type": "ImageObject", url: `${site}/images/nyc-report-logo.webp` } },
    isAccessibleForFree: true, inLanguage: "en-US",
  };

  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <div className={styles.breadcrumbBar}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span>
          <Link href="/politics">Politics</Link><span aria-hidden="true">/</span>
          <span aria-current="page">{article.title}</span>
        </nav>
      </div>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.meta}>
            <Link className={styles.badge} href="/politics">Politics</Link>
            <time dateTime={article.date}>{date}</time>
            <span>{readTime} min read</span>
          </div>
          <h1>{article.title}</h1>
          <p className={styles.subtitle}>{article.bodySubtitle}</p>
          <p className={styles.byline}>By <Link href="/roy-j-miles">{article.author}</Link></p>
        </header>
        <figure className={styles.figure}>
          <Image src={article.image} alt={article.alt} width={4000} height={2666}
            priority sizes="(max-width: 1100px) 100vw, 1040px" />
        </figure>
        <div className={styles.readingLayout}>
          <div className={styles.prose} data-article-body>
            {article.paragraphs.map((paragraph, index) => (
              <Fragment key={index}>
                <p id={article.contents.find(item => item.paragraph === index)?.id}
                  data-pdf-paragraph={index}
                  className={index === 0 ? styles.lede : index >= article.paragraphs.length - 2 ? styles.closing : undefined}>
                  {paragraph}
                </p>
                {index === 5 && (
                  <section className={styles.highlight} aria-label="Legal and advisory responsibilities">
                    <div className={styles.stats}>
                      <div><strong>20+</strong><span>law firms</span></div>
                      <div><strong>$100M</strong><span>yearly legal and advisory spending</span></div>
                    </div>
                    <blockquote><p>{article.highlight.quote}</p></blockquote>
                  </section>
                )}
              </Fragment>
            ))}
          </div>
          <aside className={styles.sidebar} aria-label="Article navigation and timeline">
            <div className={styles.sidebarInner}>
              <nav className={styles.contents} aria-label="Table of contents">
                <h2>Table of contents</h2>
                <ol>{article.contents.map((item, index) => (
                  <li key={item.id}><a href={`#${item.id}`}><span>{String(index + 1).padStart(2, "0")}</span>{item.label}</a></li>
                ))}</ol>
              </nav>
              <section className={styles.timeline} aria-labelledby="timeline-title">
                <h2 id="timeline-title">Timeline</h2>
                <ol>{article.timeline.map(item => (
                  <li key={item.date}><h3>{item.date}</h3><p>{item.text}</p></li>
                ))}</ol>
              </section>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
