import React from 'react';

const Author3: React.FC = () => {
  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-10 col-xl-8">
          <div className="text-center mb-4">
            <div className="mb-4">
              <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center" 
                   style={{width: '120px', height: '120px'}}>
                <span className="display-3">👨‍🎓</span>
              </div>
            </div>
            <h1 className="display-4 fw-bold text-dark mb-2">Edwin V. Christopher</h1>
            <p className="lead text-warning fw-medium mb-4">Founder & Editor-in-Chief</p>
            
            <div className="bg-warning text-dark p-4 rounded-3">
              <p className="lead mb-0 fw-bold">
                "The name on a publication should be a promise."
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
                    📋 About Edwin
                  </h2>
                </div>
                <div className="card-body p-4">
                  <p className="mb-3">
                    As the founder and Editor-in-Chief, Edwin V. Christopher is the editorial conscience of NYCREPORT. He guides our newsroom with a singular focus: ensuring every story we publish is accurate, fair, and fiercely independent.
                  </p>
                  <p className="mb-3">
                    Edwin's guiding principle is simple: the name on a publication should be a promise. This conviction was forged during his career as an investigative reporter and senior editor, where he learned firsthand what it takes to hold power to account.
                  </p>
                  <p className="mb-0">
                    He started NYCREPORT to do journalism the right way, and he is the one who keeps us honest.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-header bg-warning bg-opacity-10 border-0 py-3">
                  <h3 className="h5 fw-bold text-dark mb-0">
                    🎯 Areas of Expertise
                  </h3>
                </div>
                <div className="card-body p-4">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <span className="text-warning me-2">•</span>
                      Journalistic Ethics & Standards
                    </li>
                    <li className="mb-2">
                      <span className="text-warning me-2">•</span>
                      Editorial Management
                    </li>
                    <li className="mb-2">
                      <span className="text-warning me-2">•</span>
                      Investigative Reporting
                    </li>
                    <li className="mb-0">
                      <span className="text-warning me-2">•</span>
                      Media Law
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Banner */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10">
              <div className="bg-dark text-white p-4 rounded-3 text-center">
                <h3 className="h4 fw-bold mb-3">🏛️ Editorial Leadership</h3>
                <p className="lead mb-2">
                  As Editor-in-Chief, Edwin oversees all editorial content and maintains our commitment to journalistic excellence.
                </p>
                <p className="mb-0 opacity-75">
                  His experience in investigative journalism and editorial management ensures NYCREPORT's standards remain uncompromised.
                </p>
              </div>
            </div>
          </div>

          {/* Contact & Social Section */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-6">
              <div className="bg-warning text-dark p-4 rounded-3 text-center">
                <h3 className="h4 fw-bold mb-4">📞 Contact & Socials</h3>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <a 
                      href="mailto:edwin.c@nycreport.org" 
                      className="btn btn-dark text-white fw-medium w-100 d-flex align-items-center justify-content-center"
                    >
                      <span className="me-2">✉️</span>
                      edwin.c@nycreport.org
                    </a>
                  </div>
                  <div className="col-sm-6">
                    <a 
                      href="https://twitter.com/Edwin_v_christ" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-dark text-white fw-medium w-100 d-flex align-items-center justify-content-center"
                    >
                      <span className="me-2">🐦</span>
                      @Edwin_v_christ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Articles Section */}
          {/* <div className="mb-5">
            <div className="text-center mb-4">
              <h2 className="h3 fw-bold text-warning mb-2">
                📰 Articles by Edwin V. Christopher
              </h2>
              <p className="text-muted">
                Editorial leadership, investigative reporting, and journalistic standards
              </p>
            </div> */}

            {/* Sample Article Cards - Replace with dynamic content */}
            {/* <div className="row g-4"> */}
              {/* Article 1 */}
              {/* <div className="col-lg-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <span className="badge bg-warning text-dark">Editorial</span>
                      <small className="text-muted">Coming Soon</small>
                    </div>
                    <h3 className="h5 fw-bold text-dark mb-2">
                      Sample Editorial Piece
                    </h3>
                    <p className="text-muted mb-3 small">
                      Edwin's editorial leadership pieces that outline NYCREPORT's standards and approach to important issues.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">By Edwin V. Christopher</small>
                      <a href="#" className="btn btn-outline-warning btn-sm">Read More</a>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Article 2 */}
              {/* <div className="col-lg-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <span className="badge bg-danger">Investigation</span>
                      <small className="text-muted">Coming Soon</small>
                    </div>
                    <h3 className="h5 fw-bold text-dark mb-2">
                      Sample Investigative Report
                    </h3>
                    <p className="text-muted mb-3 small">
                      Edwin's investigative reporting skills, honed through years of holding power accountable and uncovering important stories.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">By Edwin V. Christopher</small>
                      <a href="#" className="btn btn-outline-danger btn-sm">Read More</a>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Article 3 */}
              {/* <div className="col-lg-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <span className="badge bg-info">Media Ethics</span>
                      <small className="text-muted">Coming Soon</small>
                    </div>
                    <h3 className="h5 fw-bold text-dark mb-2">
                      Sample Ethics Analysis
                    </h3>
                    <p className="text-muted mb-3 small">
                      Edwin's expertise in journalistic ethics and standards, exploring important questions about media responsibility.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">By Edwin V. Christopher</small>
                      <a href="#" className="btn btn-outline-info btn-sm">Read More</a>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Article 4 */}
              {/* <div className="col-lg-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <span className="badge bg-secondary">Industry Analysis</span>
                      <small className="text-muted">Coming Soon</small>
                    </div>
                    <h3 className="h5 fw-bold text-dark mb-2">
                      Sample Industry Report
                    </h3>
                    <p className="text-muted mb-3 small">
                      Edwin's insights into the media industry, journalism trends, and the future of independent news.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">By Edwin V. Christopher</small>
                      <a href="#" className="btn btn-outline-secondary btn-sm">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Load More Articles */}
            {/* <div className="text-center mt-4">
              <a href="#" className="btn btn-warning btn-lg px-4 text-dark fw-bold">
                Load More Articles
              </a>
            </div>
          </div> */}

          {/* Back to Team */}
          <div className="text-center">
            <a href="/team" className="btn btn-outline-warning">
              ← Back to Our Team
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Author3;