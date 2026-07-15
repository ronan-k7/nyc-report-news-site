import React from 'react';

interface Opinion {
  id: string;
  category: string;
  title: string;
}

interface OpinionsLesPlusLuesProps {
  opinions: Opinion[];
}

const OpinionsLesPlusLues: React.FC<OpinionsLesPlusLuesProps> = ({ opinions }) => {
  return (
    <section className="opinions-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="opinions-title">Most Read Opinions</h2>
{/*             
            <img 
              src="https://media.lesechos.com/api/v1/images/view/6854f2a11c9e0ae9b202b660/300x200-webp/0150537597024-web-tete.webp"
              alt="French National Assembly building"
              className="opinions-hero-image"
            /> */}
            
            <ul className="opinions-list">
              {opinions.map((opinion) => (
                <li key={opinion.id} className="opinions-item">
                  <div className="row align-items-start">
                    <div className="col-2 col-md-1 px-2">
                      <div className="opinions-number">{opinion.id}</div>
                    </div>
                    <div className="col-10 col-md-11 px-4">
                      <div className="opinions-category">{opinion.category}</div>
                      <h3 className="opinions-article-title">{opinion.title}</h3>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpinionsLesPlusLues;
