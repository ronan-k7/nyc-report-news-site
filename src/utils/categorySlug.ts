const categorySlugMap: Record<string, string> = {
  'politics': 'politics',
  'business': 'business',
  'technology': 'technology',
  'sports': 'sports',
  'science': 'science',
  'health': 'health',
  'puerto rico': 'puerto-rico',   // lowercase with space
  'puerto-rico': 'puerto-rico',   // lowercase with hyphen
  'Puerto-Rico': 'puerto-rico',   // ← exactly as stored in your JSON
  'Puerto Rico': 'puerto-rico',   // capital with space
  'entertainment': 'entertainment',
  'education': 'education',
};

export function getCategorySlug(category: string): string {
  // 1. Exact match first (preserves casing variants like "Puerto-Rico")
  if (categorySlugMap[category] !== undefined) {
    return categorySlugMap[category];
  }
  // 2. Lowercase match as fallback
  const lower = category.toLowerCase().trim();
  if (categorySlugMap[lower] !== undefined) {
    return categorySlugMap[lower];
  }
  // 3. Last resort: lowercase + replace spaces with hyphens
  return lower.replace(/\s+/g, '-');
}