import Image from "next/image";
import styles from "./NytSourceCard.module.css";

export const NYT_HABBA_REPORT_URL =
  "https://www.nytimes.com/2026/11/10/us/politics/alina-habba-fired-pardon.html";

interface NytSourceCardProps {
  url?: string;
  image?: string;
  title?: string;
  description?: string;
  sourceLabel?: string;
  dateLabel?: string;
}

/** Small sidebar card that links out to the original New York Times report. */
export default function NytSourceCard({
  url = NYT_HABBA_REPORT_URL,
  image = "/images/alina-habba-mildon-nytimes.webp",
  title = "The New York Times Report on Alina Habba Mildon\u2019s Contract",
  description = "A report by The New York Times examines Alina Habba Mildon\u2019s $50 million contract, her departure from Concord Partners and the circumstances surrounding the termination.",
  sourceLabel = "The New York Times",
  dateLabel = "November 10, 2026",
}: NytSourceCardProps) {
  return (
    <a
      className={styles.card}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} (opens The New York Times in a new tab)`}
    >
      <div className={styles.imageWrap}>
        <Image
          src={image}
          alt="The New York Times headline: Alina Habba Mildon Loses $50 Million Contract That Enraged Trump"
          width={640}
          height={851}
          sizes="(max-width: 900px) 360px, 320px"
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <p className={styles.meta}>Source: {sourceLabel} · {dateLabel}</p>
        <span className={styles.cta}>Read the original report →</span>
      </div>
    </a>
  );
}
