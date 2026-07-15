import React from 'react';

const NewsListComponent = ({ 
  mainTitle = "Israël-Iran : cette cyberguerre où tous les coups sont permis",
  newsItems = [
    {
      title: "Septième nuit de bombardements, un hôpital israélien touché",
      hasRedDot: true
    },
    {
      title: "Pour les habitants de Téhéran, l'angoisse du lendemain",
      category: "RÉCIT",
      hasRedDot: true
    },
    {
      title: "Iran-Israël : la peur du vide en cas de chute du régime des mollahs",
      hasRedDot: true
    }
  ],
  image = "https://media.lesechos.com/api/v1/images/view/6853e021f534a230ba07edf5/300x300-webp/0150529817155-web-tete.webp",
  tags = ["Afrique & Moyen-Orient"],
  showBookmark = true
}) => {

  return (
    <>


      <div className="newslist-container">
        <div className="row col-lg-12">
       
          {/* Main content */}
          <div className="col-md-9">
            <a href="#" title={mainTitle} className="newslist-main-title">
              {mainTitle}
            </a>
            
            {newsItems.map((item, index) => (
              <div key={index} className="newslist-item">
                {item.category && (
                  <span className="newslist-category">
                    {item.category}
                  </span>
                )}
                <a href="#" title={item.title} className="newslist-item-title">
                  {item.hasRedDot && <span className="newslist-red-dot"></span>}
                  {item.title}
                </a>
              </div>
            ))}
          </div>
          
          {/* Image */}
          <div className="col-md-3" >
            <img 
              src={image} 
              alt="News" 
              className="newslist-image"
            />
          </div>
        </div>
        
        {/* Footer */}
        <div className="newslist-footer">
          {showBookmark && (
            <div className="newslist-bookmark">
              <span className="newslist-bookmark-icon">📑</span>
            </div>
          )}
          {tags.map((tag, index) => (
            <a key={index} href="#" title={tag} className="newslist-tag">
              {tag}
            </a>
            
          ))}
        </div>
      </div>

      
    </>
  );
};

export default NewsListComponent;