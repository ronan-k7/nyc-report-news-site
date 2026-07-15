import React from 'react';

const CorrectionsPolicyPage: React.FC = () => {
  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-10 col-xl-8">
          <div className="text-center mb-4">
            <h1 className="display-4 fw-bold text-dark mb-4">Our Corrections Policy: A Commitment to Accuracy</h1>
            <div className="bg-secondary text-white p-4 rounded-3 mb-4">
              <p className="lead mb-0 fst-italic">
                We believe trust is built not just on getting things right, but on how you handle it when you get things wrong.
              </p>
            </div>
            <div className="bg-light p-4 rounded-3 border-start border-danger border-4">
              <p className="mb-3">
                We are human. Our writers are human, and our editors are human. Mistakes will happen. When they do, our promise is to be transparent, to act quickly, and to value the truth more than our pride.
              </p>
              <p className="mb-0 fw-medium text-dark">
                This page explains how we correct our errors and how you can help us stay accurate.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-8">
          
          {/* See a Mistake Section */}
          <div className="mb-5">
            <h2 className="h3 fw-bold text-dark fst-italic mb-4 pb-2 border-bottom">
              See a Mistake? Tell Us.
            </h2>
            
            <div className="bg-warning bg-opacity-10 p-4 rounded-3 border-start border-warning border-4 mb-4">
              <p className="fw-medium mb-3 text-dark">
                ⭐ You are our best editor. If you see something that doesn't look right, we want you to call us out. It makes us better.
              </p>
              <p className="mb-3">
                The best way is to send a quick email to:
              </p>
              <div className="text-center mb-4">
                
                <a
                
                  href="mailto:corrections@nycreport.org" 
                  className="btn btn-warning btn-lg fw-bold"
                >
                  corrections@nycreport.org
                </a>
              </div>
              
              <div className="bg-white p-3 rounded-2">
                <p className="fw-medium mb-2">Just tell us two things:</p>
                <ul className="mb-3">
                  <li className="mb-1">The link to the article.</li>
                  <li className="mb-0">What you think is wrong.</li>
                </ul>
                <p className="small text-muted mb-0">
                  (If you have a source for the right info, even better. It helps us fix things faster.)
                </p>
              </div>
            </div>
          </div>

          {/* What Happens Next Section */}
          <div className="mb-5">
            <h2 className="h3 fw-bold text-dark mb-4 pb-2 border-bottom">
              What Happens Next
            </h2>
            
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card border-0 bg-light h-100">
                  <div className="card-body p-4 text-center">
                    <div className="mb-3">
                      <span className="display-1">📧</span>
                    </div>
                    <h3 className="h5 fw-bold mb-2">Your Email</h3>
                    <p className="text-muted small">
                      Goes straight to an editor. There's no automated system or ticket number.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="card border-0 bg-light h-100">
                  <div className="card-body p-4 text-center">
                    <div className="mb-3">
                      <span className="display-1">👤</span>
                    </div>
                    <h3 className="h5 fw-bold mb-2">Real Person</h3>
                    <p className="text-muted small">
                      A real person reads it, opens the article, and investigates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <div className="bg-secondary text-white p-3 rounded-3 d-inline-block">
                <p className="mb-0 fw-bold fs-5">
                  ✅ If we messed up, we fix it. Period.
                </p>
              </div>
            </div>
          </div>

          {/* How We Make It Right Section */}
          <div className="mb-5">
            <h2 className="h3 fw-bold text-dark mb-4 pb-2 border-bottom">
              How We Make It Right
            </h2>
            
            <p className="lead text-muted mb-4">
              We have two ways of handling corrections, and it all comes down to honesty.
            </p>

            {/* Small Stuff */}
            <div className="mb-4">
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-info bg-opacity-10 border-0 py-3">
                  <h3 className="h5 fw-bold text-dark mb-0">
                    🔧 For the small stuff...
                  </h3>
                </div>
                <div className="card-body p-4">
                  <p className="mb-0">
                    Like a typo or a grammatical error, we'll just fix it in the story. We won't add a big note because it clutters the article and doesn't change the story's meaning.
                  </p>
                </div>
              </div>
            </div>

            {/* Factual Errors */}
            <div className="mb-4">
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-danger bg-opacity-10 border-0 py-3">
                  <h3 className="h5 fw-bold text-dark mb-0">
                    🚨 For factual errors...
                  </h3>
                </div>
                <div className="card-body p-4">
                  <p className="mb-3 fw-medium">
                    This is a big deal. If we got a name, a date, a statistic, or any fact wrong, we do two things:
                  </p>
                  <ol className="mb-0">
                    <li className="mb-2">We fix the mistake in the article.</li>
                    <li className="mb-0">We add a <strong>Correction Note</strong> at the bottom. No fine print. Just a clear, simple explanation of what was wrong and that we've fixed it.</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Fundamentally Flawed */}
            <div className="alert alert-warning border-0 bg-warning bg-opacity-10 border-start border-danger border-4">
              <h4 className="h6 fw-bold text-warning mb-2">
                ⚠️ And if a story is fundamentally flawed?
              </h4>
              <p className="mb-0">
                If the whole premise is bad? We'll pull it down and post an editor's note explaining exactly why.
              </p>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="text-center bg-secondary text-white p-5 rounded-3">
            <h3 className="h4 fw-bold mb-3">Our Promise</h3>
            <p className="lead mb-4">
              That's it. No excuses. Just a commitment to being honest with you.
            </p>
            <p className="mb-0 fs-5">
              Thanks for keeping us that way. 🙏
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CorrectionsPolicyPage;