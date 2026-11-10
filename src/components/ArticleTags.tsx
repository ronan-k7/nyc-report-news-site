import styles from "./ArticleTags.module.css";

/**
 * Tag row shown at the end of an article: a "TAG" label followed by pill chips.
 * Renders nothing when there are no tags, so it is safe on any article template.
 */
export default function ArticleTags({ tags }: { tags?: string[] }) {
  const clean = Array.from(new Set((tags ?? []).map(t => t.trim()).filter(Boolean)));
  if (clean.length === 0) return null;
  return (
    <nav className={styles.tagBar} aria-label="Article tags">
      <span className={styles.label}>Tag</span>
      <ul className={styles.list}>
        {clean.map(tag => (
          <li key={tag} className={styles.chip}>{tag}</li>
        ))}
      </ul>
    </nav>
  );
}
