import NewsArticleComponent from "@/components/NewsArticleComponent";
import NewsBus from "@/components/NewsBus";
import OpinionsLesPlusLues from "@/components/OpinionsLesPlusLues";
import NewsCard from "@/components/NewsCard";
import NewsSection from "@/components/NewsSection";
import politicsData from '../../public/data/politics.json';
import businessData from '../../public/data/business.json';
import technologyData from '../../public/data/technology.json';
import sportsData from '../../public/data/sports.json';
import scienceData from '../../public/data/science.json'
import healthData from '../../public/data/health.json';
import puertoricoData from '../../public/data/puerto-rico.json'
import entertainmentData from '../../public/data/entertainment.json';
import Script from "next/script";
import { title } from "process";
import CategoryPage from "./[category]/page";
import { Metadata } from "next";

const data1 = [
  {
    id: '01',
    category: 'Opinion',
    title: "Core Scientific Stock Jumps 33% Amid Buyout Talks With CoreWeave"
  },
  {
    id: '02',
    category: 'Opinion',
    title: "Climate inaction or the tragedy of an obsolete mental model"
  },
  {
    id: '03',
    category: 'Opinion',
    title: "Republican Senators Unveil Framework for U.S. Crypto Regulation"
  }
];

const data2=[
  {
    id:'01',
    category:"Opinion",
    title:"A Political Shock in New York, and Democrats Demand Details on Iran Strike"
  },
  {
    id:'02',
    category:"Opinion",
    title:"Suspect Mounted Deadly Firefighter Ambush From a Tree, Sheriff Says"
  },
  {
    id:'03',
    category:"Opinion",
    title:"Victim of Boulder Firebombing Attack Dies of Wounds"
  }
]

export const metadata: Metadata = {

  title: "The NYC Report - Latest News & Analysis on New York City",
  description:
    " Your daily source for in-depth news, reports, and analysis covering politics, business, and culture in New York City and beyond. Stay informed with The NYC Report.",
  keywords:
    "Breaking business news,Politics, Global financial insights, Global business investments, Market trends 2025, Private equity insights, Venture capital news, Cryptocurrency updates, Blockchain analysis, AI & tech startup news, Sustainable investing, ESG strategies, Stock market tips, Smart investing,",
  openGraph: {
    title: "Business,Politics, Technology,Health,Science,Sports",
    description:
      "Stay updated with breaking news, global business insights, and financial strategies. Explore business investments, market trends, and analysis.",
    url: "https://www.nycreport.org/",
    
    siteName: "nycreport",
    images: [
      {
        url: "https://www.nycreport.org/images/nyc-report-logo.webp",
        width: 1024,
        height: 1024,
        alt: "nycreport Logo",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site:"@nycreport_",
    title: "Business,Politics, Technology,Health,Science,Sports",
    description:
      "Stay updated with breaking news, global business insights, and financial strategies. Explore business investments, market trends, and analysis.",
    images:
      "https://www.nycreport.org/images/nyc-report-logo.webp",
  },
    metadataBase: new URL("https://www.nycreport.org/"),
  alternates: {
    canonical: "https://www.nycreport.org/",
    languages: {
      en: "https://www.nycreport.org/",
      "x-default": "https://www.nycreport.org/",
    },
  },
other: {
  author: ["Lisa F Keith", "Roy J Miles", "Edwin V Christopher"]
}
,
  icons: {
    icon: "/favicon.ico",
  },
};
export default function Home() {
  return (
    <main className="d-flex justify-content-center min-vh-100 bg-white">
    <Script
    id="structured-data-webpage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Business,Politics, Technology,Health,Science,Sports",
              description:
                "Stay updated with breaking news, global business insights, and financial strategies. Explore business investments, market trends, and analysis.",
              url: "https://www.nycreport.org/",
              speakable: {
                "@type": "SpeakableSpecification",
                cssSelector: ["h1"],
              },
            },
            null,
            2
          ),
        }}
      />
    
     <Script
        id="structured-data-itemlist"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              url: "https://www.nycreport.org/",
              numberOfItems: 5,
              itemListOrder: "http://schema.org/ItemListOrderAscending",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://www.nycreport.org/",
              },

           
            },
            null,
            2
          ),
        }}
      />
  
  


      {/* Flex-centered wrapper – centers the whole content block */}
      <div className="flex-grow-1w-100" style={{ maxWidth: '1400px' }}>

    <div className="container py-3 px-3 px-md-4 px-lg-1 mx-auto">


      <NewsArticleComponent mainArticle={puertoricoData[16]} />


      <div className="row width-first justify-content-center">
        <div className="col-lg-8">
          <NewsBus
            title={puertoricoData[13].title}
             shortdescription={puertoricoData[13].shortdescription ?? ''}
            isPremium={true}
            imageUrl={puertoricoData[13].image}
            category={puertoricoData[13].category}
            slug={puertoricoData[13].slug}
            author={puertoricoData[13].author}
          />
          <NewsBus
            title={sportsData[0].title}
            shortdescription={sportsData[0].shortdescription ??''}
            isPremium={true}
            imageUrl={sportsData[0].image}
            category={sportsData[0].category}
            slug={sportsData[0].slug}
            author={sportsData[0].author}
          /> 
          <NewsBus
            title={technologyData[0].title}
            shortdescription={technologyData[0].shortdescription ?? ''}
            isPremium={true}
            imageUrl={technologyData[0].image}
            category={technologyData[0].category}
            slug={technologyData[0].slug}
            author={technologyData[0].author}
          />
        </div>
        <div className="col-lg-4">
          <OpinionsLesPlusLues opinions={data1} />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-3 border-end">
          <NewsCard
            image={healthData[32].image}
            imageAlt={healthData[32].slug}
            number="01"
            category={healthData[32].category}
            title={healthData[32].title}
            slug={healthData[32].slug}
            author={healthData[32].author}
          />
        </div>

        <div className="col-lg-3 border-end">
          <NewsCard
            image={healthData[33].image}
            imageAlt={healthData[33].slug}
            number="02"
            category={healthData[33].category}
            title={healthData[33].title  }
            slug={healthData[33].slug}
            author={healthData[33].author}
 
          />
        </div>
        <div className="col-lg-3 border-end">
          <NewsCard
            image={healthData[25].image}
            imageAlt={healthData[25].slug}
            number="03"
            category={healthData[25].category}
            title={healthData[25].title}
            slug={healthData[25].slug}
            author={healthData[25].author}
          />
        </div>
        
        {/* <div className="col-lg-3">
                    <NewsCard
            image="https://media.lesechos.com/api/v1/images/view/684c3a32f88ccf399b024be6/300x300-webp/0150343641194-web-tete.webp"
            imageAlt="President Trump"
            number="03"
            source="ZOOM"
            title="Nucléaire : l'Europe face à un défi industriel et financier colossal "
          />
        </div> */}
      </div>
      <div className="row width-first">
        <div className="col-lg-8">
          <NewsBus
            title={politicsData[6].title}
            shortdescription={politicsData[6].shortdescription ?? ''}
            isPremium={true}
            imageUrl={politicsData[6].image}
            category={politicsData[6].category}
            slug={politicsData[6].slug}
            author={politicsData[6].author}
          />
          <NewsBus
            title={businessData[0].title}
            shortdescription={businessData[0].shortdescription ?? ''}
            isPremium={true}
            imageUrl={businessData[0].image}
            category={businessData[0].category}
            slug={businessData[0].slug}
            author={businessData[0].author}
          />
          {/* test */}
          <NewsBus
            title={politicsData[4].title}
            shortdescription={politicsData[4].shortdescription ?? ''}
            isPremium={true}
            imageUrl={politicsData[4].image}
            category={politicsData[4].category}
            slug={politicsData[4].slug}
            author={politicsData[4].author}
          />
        </div>
        <div className="col-lg-4">
          <OpinionsLesPlusLues opinions={data2} />
          
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-3 border-end">
          <NewsCard
            image={puertoricoData[11].image}
            imageAlt={puertoricoData[11].slug}
            number="01"
            category={puertoricoData[11].category}
            title={puertoricoData[11].title}
            slug={puertoricoData[11].slug}
            author={puertoricoData[11].author}
          />
        </div>

        <div className="col-lg-3 border-end">
          <NewsCard
            image={puertoricoData[12].image}
            imageAlt={puertoricoData[12].slug}
            number="02"
            category={puertoricoData[12].category}
            title={puertoricoData[12].title  }
            slug={puertoricoData[12].slug}
            author={puertoricoData[12].author}

          />
        </div>
        <div className="col-lg-3 border-end">
          <NewsCard
            image={puertoricoData[7].image}
            imageAlt={puertoricoData[7].slug}
            number="03"
            category={puertoricoData[7].category}
            title={puertoricoData[7].title}
            slug={puertoricoData[7].slug}
            author={puertoricoData[7].author}
          />
        </div>
        {/* <div className="col-lg-3">
                    <NewsCard
            image="https://media.lesechos.com/api/v1/images/view/684c3a32f88ccf399b024be6/300x300-webp/0150343641194-web-tete.webp"
            imageAlt="President Trump"
            number="03"
            source="ZOOM"
            title="Nucléaire : l'Europe face à un défi industriel et financier colossal "
          />
        </div> */}
      </div>
      <div className="row width-first">
        <div className="col-lg-8">
          <NewsBus
            title={puertoricoData[15].title}
            shortdescription={puertoricoData[15].shortdescription ?? ''}
            isPremium={true}
            imageUrl={puertoricoData[15].image}
            category={puertoricoData[15].category}
            slug={puertoricoData[15].slug}
            author={puertoricoData[15].author}
          />
          <NewsBus
            title={puertoricoData[10].title}
            shortdescription={puertoricoData[10].shortdescription ?? ''}
            isPremium={true}
            imageUrl={puertoricoData[10].image}
            category={puertoricoData[10].category}
            slug={puertoricoData[10].slug}
            author={puertoricoData[10].author}
          />
          <NewsBus
            title={puertoricoData[14].title}
            shortdescription={puertoricoData[14].shortdescription ?? ''}
            isPremium={true}
            imageUrl={puertoricoData[14].image}
            category={puertoricoData[14].category}
            slug={puertoricoData[14].slug}
            author={puertoricoData[14].author}
          />
          
        </div>
        
      </div>

<div className="row justify-content-center">
  <div className="col-lg-3 border-end">
 <NewsSection 
  sectionTitle="Entertainment"
  mainArticle={{
    image: entertainmentData[0].image,
    imageAlt: entertainmentData[0].slug,
    category: entertainmentData[0].category,
    title: entertainmentData[0].title,
    slug:entertainmentData[0].slug,
    author:entertainmentData[0].author
    
  }}
  
/>
  </div>
    <div className="col-lg-3 border-end">
 <NewsSection 
  sectionTitle="Entertainment"
  mainArticle={{
    image: entertainmentData[1].image,
    imageAlt:entertainmentData[1].slug,
    category:entertainmentData[1].category,
    title: entertainmentData[1].title,
    slug:entertainmentData[1].slug,
    author:entertainmentData[1].author
    
  }}
 
/>
  </div>
    <div className="col-lg-3 border-end">
 <NewsSection 
  sectionTitle="Entertainment"
  mainArticle={{
    image: entertainmentData[2].image,
    imageAlt:entertainmentData[2].slug,
    category: entertainmentData[2].category,
    title: entertainmentData[2].title,
    slug:entertainmentData[2].slug,
    author:entertainmentData[2].author
    
  }}
 
/>
  </div>
</div>

      <div className="row width-first py-5">
        <div className="col-lg-8">
          <NewsBus
            title={businessData[20].title}
           shortdescription={businessData[20].shortdescription ?? ''}
            isPremium={true}
            imageUrl={businessData[20].image}
            category={businessData[20].category}
            slug={businessData[20].slug}
            author={businessData[20].author}
          />
          <NewsBus
            title={businessData[21].title}
           shortdescription={businessData[21].shortdescription ?? ''}
            isPremium={true}
            imageUrl={businessData[21].image}
            category={businessData[21].category}
            slug={businessData[21].slug}
            author={businessData[21].author}

          />
          <NewsBus
            title={technologyData[31].title}
            shortdescription={technologyData[31].shortdescription ?? ''}
            isPremium={true}
            imageUrl={technologyData[31].image}
            category={technologyData[31].category}
            slug={technologyData[31].slug}
            author={technologyData[31].author}

          />
        </div>
        {/* <div className="col-lg-4">
          <OpinionsLesPlusLues />
        </div> */}
      </div>
    <div className="row width-first">
        <div className="col-lg-8">
          <NewsBus
            title={technologyData[19].title}
            shortdescription={technologyData[19].shortdescription ?? ''}
            isPremium={true}
          imageUrl={technologyData[19].image}
          category={technologyData[19].category}
          slug={technologyData[19].slug}
          author={technologyData[19].author}
          />
          <NewsBus
            title={technologyData[20].title}
            shortdescription={technologyData[20].shortdescription ?? ''}
            isPremium={true}
            imageUrl={technologyData[20].image}
            category={technologyData[20].category}
            slug={technologyData[20].slug}
            author={technologyData[20].author}
          />
          <NewsBus
            title={businessData[10].title}
            shortdescription={businessData[10].shortdescription ?? ''}
            isPremium={true}
            imageUrl={businessData[10].image}
            category={businessData[10].category}
            slug={businessData[10].slug}
            author={businessData[10].author}
          />
        </div>

      </div>
            <div className="row justify-content-center">
        <div className="col-lg-3 border-end">
          <NewsCard
            image={politicsData[0].image}
            imageAlt={politicsData[0].slug}
            number="01"
            category={politicsData[0].category}
            title={politicsData[0].title}
            slug={politicsData[0].slug}
            author={politicsData[0].author}
          />
        </div>

        <div className="col-lg-3 border-end">
          <NewsCard
            image={politicsData[5].image}
            imageAlt={politicsData[5].slug}
            number="02"
            category={politicsData[5].category}
            title={politicsData[5].title}
            slug={politicsData[5].slug}
            author={politicsData[5].author}
          />
        </div>
        <div className="col-lg-3 border-end">
          <NewsCard
            image={politicsData[2].image}
            imageAlt={politicsData[2].slug}
            number="03"
           category={politicsData[2].category}
            title={politicsData[2].title}
            slug={politicsData[2].slug}
            author={politicsData[2].author}
          />
        </div>

      </div>
          <div className="row width-first">
        <div className="col-lg-8">
          <NewsBus
            title={sportsData[1].title}
           shortdescription={sportsData[1].shortdescription ?? ''}
            isPremium={true}
            imageUrl={sportsData[1].image}
            category={sportsData[1].category}
            slug={sportsData[1].slug}
            author={sportsData[1].author}
          />
          <NewsBus
            title={sportsData[2].title}
            shortdescription={sportsData[2].shortdescription ?? ''}
            isPremium={true}
            imageUrl={sportsData[2].image}
            category={sportsData[2].category}
            slug={sportsData[2].slug}
            author={sportsData[2].author}

          />
          <NewsBus
            title={sportsData[3].title}
            shortdescription={sportsData[3].shortdescription ?? ''}
            isPremium={true}
            imageUrl={sportsData[3].image}
            category={sportsData[3].category}
            slug={sportsData[3].slug}
            author={sportsData[3].author}
          />
        </div>

      </div>
          <div className="row width-first">
        <div className="col-lg-8">
          <NewsBus
            title={scienceData[4].title}
            shortdescription={scienceData[4].shortdescription ?? ''}
            isPremium={true}
            imageUrl={scienceData[4].image}
            category={scienceData[1].category}
            slug={scienceData[1].slug}
            author={scienceData[1].author}
          />
          {/* <NewsBus
            title="La Suisse bascule dans les taux zéro"
            description="La 55 e édition du Paris Air Show a fait la part belle aux commandes de drones, aux avions militaires d'Embraer et de Saab mais aussi aux appareils civils d'Airbus. Moins rempli que l'an passé, son carnet de commandes se distingue en l'absence de Boeing."
            isPremium={true}
            imageUrl="https://media.lesechos.com/api/v1/images/view/68557cc2c57cdc96c10cf236/300x300-webp/0150563398367-web-tete.webp"
          />
          <NewsBus
            title="Pourquoi le bruit de la censure revient aux oreilles de Bayrou"
            description="Socialistes et RN ont de bonnes raisons de voter la censure du gouvernement Bayrou, les premiers sur les retraites, le second sur la programmation énergétique. La tension est remontée subitement cette semaine."
            isPremium={true}
            imageUrl="https://media.lesechos.com/api/v1/images/view/68557e04d651bc86e50f277d/300x300-webp/0150566675881-web-tete.webp"
          /> */}
        </div>

      </div>
      <div className="row justify-content-center">
  <div className="col-lg-3 border-end">
 <NewsSection 
  sectionTitle="Science"
  mainArticle={{
    image: scienceData[15].image,
    imageAlt: scienceData[15].slug,
    category: scienceData[15].category,
    title: scienceData[15].title,
    slug:scienceData[15].slug,
    author:scienceData[15].author
  
  }}
  
/>
  </div>
    <div className="col-lg-3 border-end">
 <NewsSection 
  sectionTitle="Science"
  mainArticle={{
    image: scienceData[1].image,
    imageAlt:scienceData[1].slug,
    category:scienceData[1].category,
    title:scienceData[1].title,
    slug:scienceData[1].slug,
    author:scienceData[1].author
   
  }}
  
/>
  </div>
    <div className="col-lg-3 border-end">
 <NewsSection 
  sectionTitle="Science"
  mainArticle={{
    image: scienceData[3].image,
    imageAlt: scienceData[3].slug,
    category: scienceData[3].category,
    title: scienceData[3].title,
    slug:scienceData[3].slug,
    author:scienceData[3].author
    
  }}
 
/>
  </div>
</div>
<div className="row justify-content-center">
  <div className="col-lg-3 border-end">
 <NewsSection 
  sectionTitle="Business"
  mainArticle={{
    image: businessData[25].image,
    imageAlt: businessData[25].slug,
    category: businessData[25].category,
    title: businessData[25].title,
    slug:businessData[25].slug,
    author:businessData[25].author
    
  }}

/>
  </div>
    <div className="col-lg-3 border-end">
 <NewsSection 
  sectionTitle="Business"
  mainArticle={{
    image: businessData[26].image,
    imageAlt:businessData[26].slug,
    category:businessData[26].category,
    title: businessData[26].title,
    slug:businessData[26].slug,
    author:businessData[26].author

  }}
  
/> 
  </div>
    <div className="col-lg-3 border-end">
 <NewsSection 
  sectionTitle="Business"
  mainArticle={{
     image: businessData[27].image,
    imageAlt:businessData[27].slug,
    category:businessData[27].category,
    title: businessData[27].title,
    slug:businessData[27].slug,
    author:businessData[27].author
   
  }}

/>
  </div>
</div>
    </div>
    </div>
      </main>
        
  );
}

 