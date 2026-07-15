import React from 'react';

interface ArticleHeroProps {
  title: string;
  description: string;
  category: string;
  image?: string;
  author?:string;
}

const ArticleHero: React.FC<ArticleHeroProps> = ({ title, description, category, image ,author}) => {
  return (
    <article className="articleHero-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Header Section */}
            <header className="articleHero-header mb-4">
              {/* Category Badge */}
              <div className="articleHero-category-wrapper mb-3">
                <span className="articleHero-category badge bg-primary text-uppercase fw-semibold px-3 py-2">
                  {category}
                </span>
              </div>

              {/* Title */}
              <h1 className="articleHero-title display-4 fw-bold mb-4 lh-1">
                {title}
              </h1>
              {author && (
              <p className="text-secondary small mt-1 mb-0">
                By <span className="fw-semibold">{author}</span>
              </p>
            )}

               {/* Featured Image */}
            {image && (
              <figure className="articleHero-image-wrapper mb-5">
                <div className="articleHero-image-container position-relative">
                  <img
                    src={image}
                    alt={title}
                    className="articleHero-img img-fluid w-100 rounded shadow-sm"
                  />
                  <div className="articleHero-image-overlay"></div>
                </div>
              </figure>
            )}

              {/* Subtitle/Description */}
              <p className="articleHero-subtitle lead text-muted mb-4 fs-5">
                {description}
              </p>

              {/* Divider */}
              <div className="articleHero-divider mb-4"></div>
            </header>

           

            {/* Article Meta Info */}
            <div className="articleHero-meta d-flex align-items-center flex-wrap gap-3 mb-5">
              <div className="articleHero-meta-item d-flex align-items-center">
                <i className="bi bi-calendar3 me-2 text-muted"></i>
                <span className="text-muted small">Published Today</span>
              </div>
              <div className="articleHero-meta-divider"></div>
              <div className="articleHero-meta-item d-flex align-items-center">
                <i className="bi bi-clock me-2 text-muted"></i>
                <span className="text-muted small">5 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleHero;



