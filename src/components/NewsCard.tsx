'use client';

import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getCategorySlug } from '@/utils/categorySlug';

interface NewsCardProps {
  image?: string;
  imageAlt?: string;
  number?: string;
  category: string;
  title: string;
  slug: string;
  author: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  image = 'https://media.lesechos.com/api/v1/images/view/684fd62a9a5dae85400c19b4/300x200-webp/0150348530599-web-tete.webp',
  imageAlt = 'News image',
  number = '01',
  category,
  title,
  slug,
  author,
}) => {
  return (
    <Link
      href={`/${getCategorySlug(category)}/${slug}`}
      className="text-decoration-none text-dark"
      title={title}
    >
      <div className="news-card">
        <div className="news-card__container">
          {/* Image Section */}
          <div className="news-card__image-wrapper">
            <img
              src={image}
              alt={imageAlt}
              className="news-card__image"
            />
          </div>

          {/* Content Section */}
          <div className="news-card__content">
            <div className="news-card__header d-flex align-items-center">
              <span className="news-card__number">{number}</span>
              <div className="news-card__source-wrapper d-flex align-items-center">
                <div className="news-card__source-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M13 16h-1v-4h1v4zm0-6h-1V8h1v2z" fill="currentColor" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <span className="news-card__source">{category}</span>
              </div>
            </div>

            <h3 className="news-card__title">{title}</h3>

            {author && (
              <p className="text-secondary small mt-1 mb-0">
                By <span className="fw-semibold">{author}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;

// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import 'bootstrap/dist/css/bootstrap.min.css';

// interface NewsCardProps {
//   image?: string;
//   imageAlt?: string;
//   number?: string;
//   category: string;
//   title: string;
//   slug: string;
//   author:string;
// }

// const NewsCard: React.FC<NewsCardProps> = ({
//   image = "https://media.lesechos.com/api/v1/images/view/684fd62a9a5dae85400c19b4/300x200-webp/0150348530599-web-tete.webp",
//   imageAlt = "News image",
//   number = "01",
//   category,
//   title,
//   slug,
//   author
// }) => {
//   return (
//     <Link href={`/${category.toLowerCase()}/${slug}`} className="text-decoration-none text-dark"   title={title}>
    
//       <div className="news-card">
//         <div className="news-card__container">
//           {/* Image Section */}
//           <div className="news-card__image-wrapper">
//             <img 
//               src={image} 
//               alt={imageAlt}
//               className="news-card__image"
//             />
//           </div>
          
//           {/* Content Section */}
//           <div className="news-card__content">
//             <div className="news-card__header d-flex align-items-center">
//               <span className="news-card__number">{number}</span>
//               <div className="news-card__source-wrapper d-flex align-items-center">
//                 <div className="news-card__source-icon">
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//                     <path d="M13 16h-1v-4h1v4zm0-6h-1V8h1v2z" fill="currentColor"/>
//                     <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
//                   </svg>
//                 </div>
//                 <span className="news-card__source">{category}</span>
//               </div>
//             </div>
            
//             <h3 className="news-card__title">
//               {title}
//             </h3>
//             {author && (
//               <p className="text-secondary small mt-1 mb-0">
//                 By <span className="fw-semibold">{author}</span>
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default NewsCard;
