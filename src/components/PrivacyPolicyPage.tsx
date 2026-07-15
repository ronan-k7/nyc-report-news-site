import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-10 col-xl-8">
          <div className="text-center mb-4">
            <h1 className="display-4 fw-bold text-dark mb-3">Our Privacy Policy</h1>
            <div className="bg-secondary text-white p-4 rounded-3">
              <h2 className="h4 fw-bold mb-3">Our Promise to You</h2>
              <p className="mb-3">
                We believe your privacy is a right, not a product. Our policy is simple:
              </p>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  <strong>We never sell your data.</strong> Period.
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  <strong>We only collect what's necessary</strong> for our site to work and improve.
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  <strong>You are always in control</strong> of your information.
                </li>
              </ul>
            </div>
            <p className="lead text-muted mt-4 mb-0">
              Here's what that looks like in practice.
            </p>
          </div>
        </div>
      </div>

      {/* Last Updated */}
      <div className="row justify-content-center mb-4">
        <div className="col-lg-10 col-xl-8">
          <div className="alert alert-info border-0 bg-light">
            <p className="mb-0 fw-medium">
              <i className="bi bi-calendar3 me-2"></i>
              <strong>Last Updated:</strong> August 04, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-8">
          
          {/* The Basics Section */}
          <div className="mb-5">
            <h2 className="h3 fw-bold  mb-4 pb-2 fst-italic border-bottom border-black">
              The Basics: What We Collect & Why
            </h2>
            
            <div className="row g-4">
              {/* Comments & Accounts */}
              <div className="col-12">
                <div className="card border-0 bg-light h-100">
                  <div className="card-body p-4">
                    <h3 className="h5 fw-bold text-dark mb-3">
                      <i className="bi bi-chat-dots text-primary me-2"></i>
                      Comments & Accounts
                    </h3>
                    <p className="text-muted mb-0">
                      When you comment or create an account, we collect the info you provide (name, email) to display your comment and prevent spam. We use the Gravatar service for profile pictures, which you can learn about{' '}
                      <a href="#" className="text-primary text-decoration-none fw-medium">here</a>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cookies */}
              <div className="col-12">
                <div className="card border-0 bg-light h-100">
                  <div className="card-body p-4">
                    <h3 className="h5 fw-bold text-dark mb-3">
                      <i className="bi bi-cookie text-primary me-2"></i>
                      Cookies
                    </h3>
                    <p className="text-muted mb-0">
                      We use cookies for basic site functions: to remember your details if you comment and to keep you logged in if you have an account. You can clear these in your browser at any time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Analytics */}
              <div className="col-12">
                <div className="card border-0 bg-light h-100">
                  <div className="card-body p-4">
                    <h3 className="h5 fw-bold text-dark mb-3">
                      <i className="bi bi-graph-up text-primary me-2"></i>
                      Analytics
                    </h3>
                    <p className="text-muted mb-0">
                      We use anonymous analytics to see which stories are popular. This helps us do better journalism. We cannot see who you are, only that <em>someone</em> visited a page.
                    </p>
                  </div>
                </div>
              </div>

              {/* Embedded Content */}
              <div className="col-12">
                <div className="card border-0 bg-light h-100">
                  <div className="card-body p-4">
                    <h3 className="h5 fw-bold text-dark mb-3">
                      <i className="bi bi-play-btn text-primary me-2"></i>
                      Embedded Content
                    </h3>
                    <p className="text-muted mb-0">
                      Some articles may include embedded content (like a YouTube video). This content behaves as if you visited the other site directly and may collect data according to their own policies. We don't control this.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Special Note for Sources */}
          <div className="mb-5">
            <div className="alert alert-warning border-0 bg-warning bg-opacity-10 border-start border-danger border-4">
              <h3 className="h5 fw-bold text-warning mb-2">
                <i className="bi bi-shield-check me-2"></i>
                A Special Note for Sources
              </h3>
              <p className="mb-0 fw-medium text-dark">
                This is a news organization. We protect our sources.
              </p>
            </div>
          </div>

          {/* Your Rights & Control */}
          <div className="mb-5">
            <h2 className="h3 fw-bold fst-italic mb-4 pb-2 border-bottom">
              Your Rights & Control
            </h2>
            
            <div className="bg-light p-4 rounded-3 mb-4">
              <p className="fw-medium mb-3">
                You have the right to see, edit, or delete your personal data at any time.
              </p>
              <ul className="mb-0">
                <li className="mb-2">You can request a copy of your data (like comments or your user profile).</li>
                <li className="mb-0">You can ask us to erase your data.</li>
              </ul>
            </div>

            <div className="border-start border-danger border-4 ps-4 ">
              <p className="text-muted mb-3">
                We keep comments on the site to maintain the context of conversations, but we will happily delete yours upon request. We cannot delete information we're legally required to keep.
              </p>
              <p className="mb-0">
                To make a request, please contact us at{' '}
                <a href="mailto:privacy@nycreport.org" className="text-primary text-decoration-none fw-bold">
                  privacy@nycreport.org
                </a>
              </p>
            </div>
          </div>

          {/* Contact Us */}
          <div className="text-center bg-secondary text-white p-5 rounded-3">
            <h2 className="h4 fw-bold mb-3">Contact Us</h2>
            <p className="mb-4">
              For any questions about this policy, please email us at:
            </p>
            <a 
              href="mailto:privacy@nycreport.org" 
              className="btn btn-light btn-lg text-danger fw-bold"
            >
              privacy@nycreport.org
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;