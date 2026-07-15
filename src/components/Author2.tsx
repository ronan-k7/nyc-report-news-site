import React from 'react';

const Author2: React.FC = () => {
  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-10 col-xl-8">
          <div className="text-center mb-4">
            <div className="mb-4">
              <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center" 
                   style={{width: '120px', height: '120px'}}>
                <span className="display-3">👩‍💼</span>
              </div>
            </div>
            <h1 className="display-4 fw-bold text-dark mb-2">Lisa F. Keith</h1>
            <p className="lead text-primary fw-medium mb-4">Culture & Society Correspondent</p>
            
            <div className="bg-success text-white p-4 rounded-3">
              <p className="lead mb-0">
                "You can't understand the world without first understanding the people in it."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="row justify-content-center">
        <div className="col-lg-10">
          
          {/* About Section */}
          <div className="row g-4 mb-5">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-header bg-light border-0 py-3">
                  <h2 className="h4 fw-bold text-dark mb-0">
                    📋 About Lisa
                  </h2>
                </div>
                <div className="card-body p-4">
                  <p className="mb-3">
                    Lisa F. Keith is our correspondent for Culture & Society. She believes you can't understand the world without first understanding the people in it, and her work reflects that philosophy.
                  </p>
                  <p className="mb-3">
                    While others cover institutions, Lisa focuses on the individuals living in their shadow. She is the one on the ground, finding the single human story that makes a complex issue feel real and urgent.
                  </p>
                  <p className="mb-0">
                    Her reporting gives a voice to those who are often unheard, reminding us that every major trend has a personal impact.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-header bg-info bg-opacity-10 border-0 py-3">
                  <h3 className="h5 fw-bold text-dark mb-0">
                    🎯 Areas of Expertise
                  </h3>
                </div>
                <div className="card-body p-4">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <span className="text-info me-2">•</span>
                      Human-Interest Storytelling
                    </li>
                    <li className="mb-2">
                      <span className="text-info me-2">•</span>
                      Community Journalism
                    </li>
                    <li className="mb-2">
                      <span className="text-info me-2">•</span>
                      Cultural & Social Trends
                    </li>
                    <li className="mb-0">
                      <span className="text-info me-2">•</span>
                      Narrative Reporting
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Social Section */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-6">
              <div className="bg-success text-white p-4 rounded-3 text-center">
                <h3 className="h4 fw-bold mb-4">📞 Contact & Socials</h3>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <a 
                      href="mailto:lisa.k@nycreport.org" 
                      className="btn btn-light text-success fw-medium w-100 d-flex align-items-center justify-content-center"
                    >
                      <span className="me-2">✉️</span>
                      lisa.k@nycreport.org
                    </a>
                  </div>
                  <div className="col-sm-6">
                    <a 
                      href="https://twitter.com/LisaFKeith" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-light text-success fw-medium w-100 d-flex align-items-center justify-content-center"
                    >
                      <span className="me-2">🐦</span>
                      @LisaFKeith
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Articles Section */}
          {/* <div className="mb-5">
            <div className="text-center mb-4">
              <h2 className="h3 fw-bold text-success mb-2">
                📰 Articles by Lisa F. Keith
              </h2>
              <p className="text-muted">
                Human stories that illuminate cultural and social issues
              </p>
            </div> */}

            {/* Sample Article Cards - Replace with dynamic content */}
            {/* <div className="row g-4"> */}
              {/* Article 1 */}
              {/* <div className="col-lg-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <span className="badge bg-success">Human Interest</span>
                      <small className="text-muted">Coming Soon</small>
                    </div>
                    <h3 className="h5 fw-bold text-dark mb-2">
                      Sample Human Interest Story
                    </h3>
                    <p className="text-muted mb-3 small">
                      This is where Lisa's compelling human-interest stories will appear, focusing on individuals whose experiences illuminate broader social issues.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">By Lisa F. Keith</small>
                      <a href="#" className="btn btn-outline-success btn-sm">Read More</a>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Article 2 */}
              {/* <div className="col-lg-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <span className="badge bg-info">Cultural Trends</span>
                      <small className="text-muted">Coming Soon</small>
                    </div>
                    <h3 className="h5 fw-bold text-dark mb-2">
                      Sample Cultural Analysis
                    </h3>
                    <p className="text-muted mb-3 small">
                      Lisa's reporting on cultural and social trends, told through the lens of personal experiences and community stories.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">By Lisa F. Keith</small>
                      <a href="#" className="btn btn-outline-info btn-sm">Read More</a>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Article 3 */}
              {/* <div className="col-lg-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <span className="badge bg-warning">Community Story</span>
                      <small className="text-muted">Coming Soon</small>
                    </div>
                    <h3 className="h5 fw-bold text-dark mb-2">
                      Sample Community Report
                    </h3>
                    <p className="text-muted mb-3 small">
                      Lisa's community journalism brings local voices to the forefront, showing how national issues affect real people.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">By Lisa F. Keith</small>
                      <a href="#" className="btn btn-outline-warning btn-sm">Read More</a>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Article 4 */}
              {/* <div className="col-lg-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <span className="badge bg-purple" style={{backgroundColor: '#6f42c1'}}>Narrative Feature</span>
                      <small className="text-muted">Coming Soon</small>
                    </div>
                    <h3 className="h5 fw-bold text-dark mb-2">
                      Sample Narrative Report
                    </h3>
                    <p className="text-muted mb-3 small">
                      Lisa's narrative reporting style transforms complex social issues into compelling, accessible stories.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">By Lisa F. Keith</small>
                      <a href="#" className="btn btn-outline-dark btn-sm">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Load More Articles */}
            {/* <div className="text-center mt-4">
              <a href="#" className="btn btn-success btn-lg px-4">
                Load More Articles
              </a>
            </div>
          </div> */}

          {/* Back to Team */}
          <div className="text-center">
            <a href="/team" className="btn btn-outline-success">
              ← Back to Our Team
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Author2;