import React from 'react';

const EditorialPolicyPage: React.FC = () => {
  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-10 col-xl-8">
          <div className="text-center mb-4">
            <h1 className="display-4 fw-bold text-dark mb-4">Our Promise: The Rules We Live By</h1>
            <div className="bg-light p-4 rounded-3 border-start border-primary border-4">
              <p className="mb-3">
                This isn't the fine print. It's not a legal document written by lawyers.
              </p>
              <p className="mb-0 fw-medium text-primary fs-5">
                This is our handshake with you. It's our public promise about how we work and the standards you can—and should—hold us to.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Principles */}
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-9">
          
          {/* Principle 1: Facts */}
          <div className="mb-5">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-primary text-white py-4 border-0">
                <div className="d-flex align-items-center">
                  <span className="display-6 me-3">🎯</span>
                  <h2 className="h3 fw-bold mb-0">We Get the Facts Right.</h2>
                </div>
              </div>
              <div className="card-body p-4">
                <p className="lead text-primary fw-medium mb-3">
                  Our first and most important job is to be accurate. If we fail at that, nothing else matters.
                </p>
                <p className="mb-0">
                  We question everything. We dig for original documents and talk to the people who were actually there. We double-check names, dates, and quotes. Facts without context are just noise, so we're committed to giving you the whole picture.
                </p>
              </div>
            </div>
          </div>

          {/* Principle 2: Independence */}
          <div className="mb-5">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-success text-white py-4 border-0">
                <div className="d-flex align-items-center">
                  <span className="display-6 me-3">🗽</span>
                  <h2 className="h3 fw-bold mb-0">Our Only Agenda is the Truth.</h2>
                </div>
              </div>
              <div className="card-body p-4">
                <p className="lead text-success fw-medium mb-3">
                  NYCREPORT is independent. That's not a buzzword—it means we don't answer to anyone but you.
                </p>
                <div className="bg-light p-3 rounded-3 mb-3">
                  <p className="mb-2 fw-medium">No corporate bosses. No billionaire owners. No political puppet masters pulling the strings.</p>
                </div>
                <p className="mb-0">
                  This freedom means our reporting can be honest and fearless. We believe in fairness, so we always try to reach out to the people we write about and give them a chance to tell their side of the story.
                </p>
              </div>
            </div>
          </div>

          {/* Principle 3: Sources */}
          <div className="mb-5">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-warning text-dark py-4 border-0">
                <div className="d-flex align-items-center">
                  <span className="display-6 me-3">🛡️</span>
                  <h2 className="h3 fw-bold mb-0">We Protect Our Sources & We're Honest with You.</h2>
                </div>
              </div>
              <div className="card-body p-4">
                <p className="lead text-warning fw-medium mb-3">
                  We prefer to put names to our sources. It keeps us all honest.
                </p>
                <p className="mb-3">
                  But we know the world isn't always that simple. Sometimes, telling the truth can get people fired—or worse. If a source is taking a real risk to share something the public needs to know, we will protect them.
                </p>
                <div className="border-start border-warning border-4 ps-4">
                  <p className="mb-0 fw-medium">
                    We don't make this decision lightly. We vet their story from every angle and then we tell you <em>why</em> we're keeping their name secret.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Principle 4: Opinion Labeling */}
          <div className="mb-5">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-info text-white py-4 border-0">
                <div className="d-flex align-items-center">
                  <span className="display-6 me-3">🏷️</span>
                  <h2 className="h3 fw-bold mb-0">We Label Opinion Clearly.</h2>
                </div>
              </div>
              <div className="card-body p-4">
                <p className="lead text-info fw-medium mb-3">
                  We will never try to pass off an opinion as a straight fact.
                </p>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <div className="bg-light p-3 rounded-3 text-center">
                      <p className="fw-bold mb-1">📰 NEWS</p>
                      <p className="small mb-0">Just the facts</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-3 text-center">
                      <p className="fw-bold mb-1 text-primary">💭 OPINION/ANALYSIS</p>
                      <p className="small mb-0">Personal viewpoints, clearly labeled</p>
                    </div>
                  </div>
                </div>
                <p className="mb-0">
                  No tricks, no confusion. You deserve to know the difference.
                </p>
              </div>
            </div>
          </div>

          {/* Principle 5: Mistakes */}
          <div className="mb-5">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-danger text-white py-4 border-0">
                <div className="d-flex align-items-center">
                  <span className="display-6 me-3">🔧</span>
                  <h2 className="h3 fw-bold mb-0">We're Human. We Fix Our Mistakes.</h2>
                </div>
              </div>
              <div className="card-body p-4">
                <p className="lead text-danger fw-medium mb-3">
                  We're going to make mistakes. Everyone does. What matters is what happens next.
                </p>
                <div className="bg-light p-4 rounded-3 mb-3">
                  <p className="mb-2 fw-medium">When we get it wrong, we will tell you.</p>
                  <p className="mb-0">
                    We will correct the error clearly and quickly, right where we made it. We don't hide our corrections at the bottom of the page or hope you won't notice. We believe owning our mistakes makes us stronger and proves we're worthy of your trust.
                  </p>
                </div>
                <p className="mb-0">
                  You can see how we handle this on our{' '}
                  <a href="/corrections" className="text-danger text-decoration-none fw-medium">
                    Corrections Policy page
                  </a>.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-primary text-white p-5 rounded-3">
            <h3 className="h3 fw-bold mb-4">This is our commitment.</h3>
            <p className="lead mb-4">
              If you ever feel we're not living up to it, we need you to call us out.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
              <a 
                href="/contact" 
                className="btn btn-light btn-lg text-primary fw-bold px-4"
              >
                📞 Contact Us
              </a>
              <span className="text-white-50 d-none d-sm-inline">|</span>
              <p className="mb-0 opacity-75 fs-5">We're listening.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EditorialPolicyPage;