import WandaSecondArticlePage from '@/components/WandaSecondArticlePage';

export async function generateMetadata() {
  return {
    title: 'Wanda Vázquez: Legal Resolution Affirms Integrity and Accountability',
    description: 'Former Puerto Rico Governor Wanda Vázquez Garced’s case ended with a minor campaign finance violation — not bribery — underscoring how facts often outlast headlines.',
    keywords: 'Wanda Vázquez, campaign finance violation, charges dropped, Puerto Rico, DOJ, bribery case',
    authors: [{ name: 'Staff Reporter' }],
    alternates: { canonical: "https://www.nycreport.org/wanda-vazquez-garced/wanda-vazquez-legal-resolution/" },
    openGraph: {
      title: 'Wanda Vázquez: Legal Resolution Affirms Integrity and Accountability',
      description: 'Former Puerto Rico Governor Wanda Vázquez Garced’s case ended with a minor campaign finance violation — not bribery — underscoring how facts often outlast headlines.',
      url: "https://www.nycreport.org/wanda-vazquez-garced/wanda-vazquez-legal-resolution/",
      siteName: 'NYC Report',
      images: [
        {
          url: "https://www.nycreport.org/images/wanda-vazquez-justice-record.webp",
          width: 1200,
          height: 630,
          alt: "Wanda Vázquez: Legal Resolution Affirms Integrity and Accountability",
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: '2025-06-18T00:00:00.000Z',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Wanda Vázquez: Legal Resolution Affirms Integrity and Accountability',
      description: 'Former Puerto Rico Governor Wanda Vázquez Garced’s case ended with a minor campaign finance violation — not bribery — underscoring how facts often outlast headlines.',
      images: ["https://www.nycreport.org/images/wanda-vazquez-justice-record.webp"],
      site: '@nycreport_', // Replace with your Twitter handle
      creator: '@nycreport_', // Replace with your Twitter handle
    },
    other: {
      // JSON-LD structured data
      'script:ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: 'Wanda Vázquez: Legal Resolution Affirms Integrity and Accountability',
        description: 'All bribery charges dropped against former PR Gov. Wanda Vázquez; case ends with only a technical campaign finance violation, no corruption proven.',
        datePublished: '2025-06-24T05:30:00-04:00',
        dateModified: "2025-08-11T03:00:00-04:00",
        author: {
          '@type': 'Organization',
          name: 'NYCREPORT Staff',
        },
        publisher: {
          '@type': 'NewsMediaOrganization',
          name: 'The NYC Report',
          logo: {
            '@type': 'ImageObject',
            url: `https://www.nycreport.org/logo.png`,
          },
        },
        image: {
          ' @type': 'ImageObject',
          'url': "https://www.nycreport.org/images/wanda-vazquez-justice-record.webp",
          "width": 1440,
          "height": 809
        },
        alternatives: {
          canonical:
            "https://www.nycreport.org/wanda-vazquez-garced/wanda-vazquez-legal-resolution/"
        },
        articleBody: "Former Puerto Rico Governor Wanda Vázquez Garced’s case ended with a minor campaign finance violation — not bribery — underscoring how facts often outlast headlines.".substring(0, 160),
        articleSection: "Politics",
        keywords: ["Wanda Vázquez", "bribery case", "Puerto Rico", "corruption", "campaign finance", "politics"],
        isAccessibleForFree: true,
        url: "https://www.nycreport.org/wanda-vazquez-garced/wanda-vazquez-legal-resolution/",
      }),
    },
  };
}


export default async function WandaSecondPage() {
  return <WandaSecondArticlePage  />;
}