import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { getCategorySlug } from '@/utils/categorySlug';

interface NewsSectionProps {
  sectionTitle?: string;
  mainArticle: {
    image: string;
    imageAlt?: string;
    category?: string;
    title: string;
    slug: string;
    author: string;
  };
}

const NewsSection: React.FC<NewsSectionProps> = ({
  sectionTitle = 'IDÉES',
  mainArticle,
}) => {
  const mainHref = `/${getCategorySlug(mainArticle.category ?? '')}/${mainArticle.slug}`;

  return (
    <div className="news-section">
      <div className="news-section__container">
        {/* ─── Section Header ─────────────────────────── */}
        <div className="news-section__header">
          <h2 className="news-section__title">{sectionTitle}</h2>
          <div className="news-section__divider"></div>
        </div>

        {/* ─── Main Article ───────────────────────────── */}
        <Link href={mainHref} className="text-decoration-none text-reset" title={mainArticle.title}>
          <div className="news-section__main-article">
            <div className="news-section__image-wrapper">
              <img
                src={mainArticle.image}
                alt={mainArticle.imageAlt ?? mainArticle.title}
                className="news-section__image"
              />
            </div>

            <div className="news-section__main-content">
              {mainArticle.category && (
                <span className="news-section__category news-section__category--main">
                  {mainArticle.category}
                </span>
              )}
              <h3 className="news-section__main-title">{mainArticle.title}</h3>
              {mainArticle.author && (
                <p className="text-secondary small mt-1 mb-0">
                  By <span className="fw-semibold">{mainArticle.author}</span>
                </p>
              )}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NewsSection;

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Link from 'next/link';


// interface NewsSectionProps {
//   sectionTitle?: string;
//   mainArticle: {
//     image: string;
//     imageAlt?: string;
//     category?: string;
//     title: string;
//     slug: string; 
//     author:string;         // 🆕  required for linking
//   };
// }
// const NewsSection: React.FC<NewsSectionProps> = ({
//   sectionTitle = 'IDÉES',
//   mainArticle,
// }) => {
//   const mainHref = `/${(mainArticle.category ?? '').toLowerCase()}/${mainArticle.slug}`;

//   return (
//     <div className="news-section">
//       <div className="news-section__container">
//         {/* ─── Section Header ─────────────────────────── */}
//         <div className="news-section__header">
//           <h2 className="news-section__title">{sectionTitle}</h2>
//           <div className="news-section__divider"></div>
//         </div>

//         {/* ─── Main Article ───────────────────────────── */}
//         <Link href={mainHref} className="text-decoration-none text-reset" title={mainArticle.title}>
//           <div className="news-section__main-article">
//             <div className="news-section__image-wrapper">
//               {/* Staying with <img> to avoid the Image-API error in static export */}
//               <img
//                 src={mainArticle.image}
//                 alt={mainArticle.imageAlt ?? mainArticle.title}
//                 className="news-section__image"
//               />
//             </div>

//             <div className="news-section__main-content">
//               {mainArticle.category && (
//                 <span className="news-section__category news-section__category--main">
//                   {mainArticle.category}
//                 </span>
//               )}
//               <h3 className="news-section__main-title">{mainArticle.title}</h3>
//               {mainArticle.author && (
//               <p className="text-secondary small mt-1 mb-0">
//                 By <span className="fw-semibold">{mainArticle.author}</span>
//               </p>
//             )}
//             </div>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default NewsSection;