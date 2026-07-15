'use client';
import React from 'react';
import Link from 'next/link';
import { getCategorySlug } from '@/utils/categorySlug';

interface NewsBusProps {
  category?: string;
  title: string;
  isPremium?: boolean;
  shortdescription: string;
  imageUrl: string;
  imageAlt?: string;
  tagText?: string;
  tagLink?: string;
  slug?: string;
  author?: string;
}

const NewsBus: React.FC<NewsBusProps> = ({
  category = 'DÉCRYPTAGE',
  title,
  isPremium = false,
  shortdescription,
  imageUrl,
  imageAlt = 'Article Image',
  slug,
  tagText = 'View',
  tagLink = '#',
  author = '',
}) => {
  return (
    <Link
      href={`/${getCategorySlug(category)}/${slug}`}
      className="text-decoration-none text-reset"
      title={title}
    >
      <div className="SwissZeroRateArticle py-4">
        <div className="row align-items-start">
          {/* Text section */}
          <div className="col-md-9">
            <p className="SwissZeroRateArticle-category text-danger fw-bold small mb-1">
              {category}
            </p>
            <h3 className="SwissZeroRateArticle-title fw-bold d-flex align-items-center flex-wrap gap-2">
              {title}
            </h3>
            <p className="SwissZeroRateArticle-description text-muted mt-2">
              {shortdescription}
            </p>

            {author && (
              <p className="text-secondary small mt-1 mb-0">
                By <span className="fw-semibold">{author}</span>
              </p>
            )}

            <span className="SwissZeroRateArticle-tag btn btn-light border rounded-pill px-3 py-1 mt-3">
              {tagText}
            </span>
          </div>

          {/* Image section */}
          <div className="col-md-3 mt-3 mt-md-0">
            <div className="ratio ratio-1x1">
              <img
                src={imageUrl}
                alt={imageAlt}
                className="SwissZeroRateArticle-image"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsBus;

// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// interface NewsBusProps {
//   category?: string;
//   title: string;
//   isPremium?: boolean;
//   shortdescription: string;
//   imageUrl: string;
//   imageAlt?: string;
//   tagText?: string;
//   tagLink?: string;
//   slug?: string;
//   author?: string; // <-- Added author prop
// }

// const NewsBus: React.FC<NewsBusProps> = ({
//   category = 'DÉCRYPTAGE',
//   title,
//   isPremium = false,
//   shortdescription,
//   imageUrl,
//   imageAlt = 'Article Image',
//   slug,
//   tagText = 'View',
//   tagLink = '#',
//   author = '', // <-- Default empty
// }) => {
//   return (
//     <Link
//       href={`/${category.toLowerCase()}/${slug}`}
//       className="text-decoration-none text-reset"
//       title={title}
//     >
//       <div className="SwissZeroRateArticle py-4">
//         <div className="row align-items-start">
//           {/* Text section */}
//           <div className="col-md-9">
//             <p className="SwissZeroRateArticle-category text-danger fw-bold small mb-1">
//               {category}
//             </p>
//             <h3 className="SwissZeroRateArticle-title fw-bold d-flex align-items-center flex-wrap gap-2">
//               {title}
//             </h3>
//             <p className="SwissZeroRateArticle-description text-muted mt-2">
//               {shortdescription}
//             </p>

//             {/* Author name */}
//             {author && (
//               <p className="text-secondary small mt-1 mb-0">
//                 By <span className="fw-semibold">{author}</span>
//               </p>
//             )}

//             <span className="SwissZeroRateArticle-tag btn btn-light border rounded-pill px-3 py-1 mt-3">
//               {tagText}
//             </span>
//           </div>

//           {/* Image section */}
//           <div className="col-md-3 mt-3 mt-md-0">
//             <div className="ratio ratio-1x1">
//               <img
//                 src={imageUrl}
//                 alt={imageAlt}
//                 className="SwissZeroRateArticle-image"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default NewsBus;
