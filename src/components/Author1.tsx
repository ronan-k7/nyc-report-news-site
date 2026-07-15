import React from 'react';

const Author1: React.FC = () => {
  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-10 col-xl-8">
          <div className="text-center mb-4">
            <div className="mb-4">
              <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center" 
                   style={{width: '120px', height: '120px'}}>
                <span className="display-3">👨‍💼</span>
              </div>
            </div>
            <h1 className="display-4 fw-bold text-dark mb-2">Roy J. Miles</h1>
            <p className="lead text-primary fw-medium mb-4">Lead Political & Financial Reporter</p>
            
            <div className="bg-primary text-white p-4 rounded-3">
              <p className="lead mb-0">
                "The real story is usually hidden in the budget."
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
                    📋 About Roy
                  </h2>
                </div>
                <div className="card-body p-4">
                  <p className="mb-3">
                    Roy J. Miles is our lead reporter covering the intersection of politics and finance. He operates on a simple principle: the real story is usually hidden in the budget.
                  </p>
                  <p className="mb-0">
                    With a healthy skepticism for official statements, Roy digs into the fine print that others overlook. He reads the complex reports and follows the money so you don't have to, connecting the dots between decisions made in Washington and on Wall Street and their impact on the real world.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-header bg-success bg-opacity-10 border-0 py-3">
                  <h3 className="h5 fw-bold text-dark mb-0">
                    🎯 Areas of Expertise
                  </h3>
                </div>
                <div className="card-body p-4">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <span className="text-success me-2">•</span>
                      Political & Financial Reporting
                    </li>
                    <li className="mb-2">
                      <span className="text-success me-2">•</span>
                      Budgetary Analysis
                    </li>
                    <li className="mb-2">
                      <span className="text-success me-2">•</span>
                      Public Policy
                    </li>
                    <li className="mb-0">
                      <span className="text-success me-2">•</span>
                      Data Journalism
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Social Section */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-6">
              <div className="bg-primary text-white p-4 rounded-3 text-center">
                <h3 className="h4 fw-bold mb-4">📞 Contact & Socials</h3>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <a 
                      href="mailto:roy.m@nycreport.org" 
                      className="btn btn-light text-primary fw-medium w-100 d-flex align-items-center justify-content-center"
                    >
                      <span className="me-2">✉️</span>
                      roy.m@nycreport.org
                    </a>
                  </div>
                  <div className="col-sm-6">
                    <a 
                      href="https://twitter.com/Roy_Milez" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-light text-primary fw-medium w-100 d-flex align-items-center justify-content-center"
                    >
                      <span className="me-2">🐦</span>
                      @Roy_Milez
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Articles Section */}
          {/* <div className="mb-5">
            <div className="text-center mb-4">
              <h2 className="h3 fw-bold text-primary mb-2">
                📰 Articles by Roy J. Miles
              </h2>
              <p className="text-muted">
                In-depth reporting on politics, finance, and policy
              </p>
            </div> */}

            {/* Sample Article Cards - Replace with dynamic content */}
            {/* <div className="row g-4"> */}
              {/* Article 1 */}
              {/* <div className="col-lg-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <span className="badge bg-primary">Political Analysis</span>
                      <small className="text-muted">Coming Soon</small>
                    </div>
                    <h3 className="h5 fw-bold text-dark mb-2">
                      Sample Article Title
                    </h3>
                    <p className="text-muted mb-3 small">
                      This is where Roy's latest political and financial reporting will appear. Check back soon for his in-depth analysis.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">By Roy J. Miles</small>
                      <a href="#" className="btn btn-outline-primary btn-sm">Read More</a>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Article 2 */}
              {/* <div className="col-lg-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <span className="badge bg-success">Financial Report</span>
                      <small className="text-muted">Coming Soon</small>
                    </div>
                    <h3 className="h5 fw-bold text-dark mb-2">
                      Sample Financial Analysis
                    </h3>
                    <p className="text-muted mb-3 small">
                      Roy's expertise in following the money and reading the fine print will be showcased in articles like this.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">By Roy J. Miles</small>
                      <a href="#" className="btn btn-outline-success btn-sm">Read More</a>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Article 3 */}
              {/* <div className="col-lg-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <span className="badge bg-info">Data Story</span>
                      <small className="text-muted">Coming Soon</small>
                    </div>
                    <h3 className="h5 fw-bold text-dark mb-2">
                      Sample Data Journalism
                    </h3>
                    <p className="text-muted mb-3 small">
                      Roy's data journalism skills help uncover stories hidden in complex reports and budget documents.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">By Roy J. Miles</small>
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
                      <span className="badge bg-warning">Policy Analysis</span>
                      <small className="text-muted">Coming Soon</small>
                    </div>
                    <h3 className="h5 fw-bold text-dark mb-2">
                      Sample Policy Report
                    </h3>
                    <p className="text-muted mb-3 small">
                      Roy's policy expertise helps readers understand the real-world impact of governmental decisions.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">By Roy J. Miles</small>
                      <a href="#" className="btn btn-outline-warning btn-sm">Read More</a>
                    </div>
                  </div>
                </div>
              </div> */}
            {/* </div> */}

            {/* Load More Articles */}
            {/* <div className="text-center mt-4">
              <a href="#" className="btn btn-primary btn-lg px-4">
                Load More Articles
              </a>
            </div>
          </div> */}

          {/* Back to Team */}
          <div className="text-center">
            <a href="/team" className="btn btn-outline-primary">
              ← Back to Our Team
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Author1;