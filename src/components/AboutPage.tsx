import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-10 col-xl-8">
          <div className="text-center mb-4">
            <h1 className="display-4 fw-bold text-dark mb-4">About NYCREPORT</h1>
            <div className="bg-primary text-white p-4 rounded-3 mb-4">
              <h2 className="h4 fw-bold mb-3">Who decides what news you read?</h2>
              <p className="lead mb-2">
                Is it a boardroom? An algorithm? We think it should be people.
              </p>
              <p className="mb-0 opacity-75">
                People who are curious about the world and who believe the truth is worth fighting for.
              </p>
            </div>
            <div className="bg-light p-4 rounded-3 border-start border-primary border-4">
              <p className="mb-3">
                That's why we exist. We got tired of the noise, the clickbait, and the news that felt disconnected from real life. So we decided to build something different.
              </p>
              <p className="mb-0 fw-medium text-primary">
                NYCREPORT is an online news site started by a collective of independent writers and journalists. We're a small team driven by a big idea: that news is a public service. The name comes from our base in New York, but our beat is the world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-9">
          
          {/* What We Believe Section */}
          <div className="mb-5">
            <h2 className="h3 fw-bold text-primary mb-4 pb-2 border-bottom">
              What We Believe
            </h2>
            
            <div className="row g-4 mb-4">
              <div className="col-lg-6">
                <div className="card border-0 bg-success bg-opacity-10 h-100">
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <span className="display-6">🎯</span>
                    </div>
                    <h3 className="h5 fw-bold text-dark mb-3">Independent Truth</h3>
                    <p className="text-muted mb-0 small">
                      We don't have a corporate headquarters or mysterious investors. That means our only agenda is to find the truth and share it with you. Simple as that.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className="card border-0 bg-info bg-opacity-10 h-100">
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <span className="display-6">📖</span>
                    </div>
                    <h3 className="h5 fw-bold text-dark mb-3">Stories, Not Just Events</h3>
                    <p className="text-muted mb-0 small">
                      We believe in telling stories, not just reporting events. We focus on the <em>why</em> and the <em>how</em>, giving you the context you need to understand what's really going on. We write for you, not for insiders.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-warning bg-opacity-10 p-4 rounded-3 border-start border-warning border-4">
              <h3 className="h5 fw-bold text-dark mb-3">
                🤝 Trust is Everything
              </h3>
              <p className="mb-3">
                "Run by the people" can't mean "anything goes." It means we hold ourselves to an even higher standard because we're accountable directly to our readers. We invite you to check our work.
              </p>
              <div className="row g-3">
                <div className="col-md-6">
                  <a href="/editorial-policy" className="btn btn-outline-warning w-100 fw-medium">
                    📋 Our Editorial Policy
                    <br />
                    <small>explains our rules of the road</small>
                  </a>
                </div>
                <div className="col-md-6">
                  <a href="/corrections" className="btn btn-outline-warning w-100 fw-medium">
                    🔧 Our Corrections Policy
                    <br />
                    <small>our promise to be upfront when we're wrong</small>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Who Are We Section */}
          <div className="mb-5">
            <h2 className="h3 fw-bold text-primary mb-4 pb-2 border-bottom">
              Who Are We?
            </h2>
            
            <div className="bg-light p-4 rounded-3 mb-4">
              <p className="mb-3 fw-medium">
                NYCREPORT isn't an algorithm. We're a team of researchers, photographers, and writers who were frustrated with the status quo.
              </p>
              <p className="mb-3">
                Some of us have been in journalism for decades; others come from different fields but share a passion for digging into the facts.
              </p>
              <p className="mb-0">
                The name on the byline is the person responsible for the work. We stand by what we publish.
              </p>
            </div>

            <div className="text-center">
              <a href="/team" className="btn btn-primary btn-lg px-4">
                👥 Meet Our Team
                <br />
                <small>Get to know the people behind our stories</small>
              </a>
            </div>
          </div>

          {/* This is a Conversation Section */}
          <div className="mb-5">
            <h2 className="h3 fw-bold text-primary mb-4 pb-2 border-bottom">
              This is a Conversation
            </h2>
            
            <div className="bg-primary text-white p-4 rounded-3 mb-4">
              <p className="lead mb-3">
                We don't want to just talk at you. We want to build a community around honest, useful information.
              </p>
              <p className="mb-0 opacity-75">
                Your perspective is crucial.
              </p>
            </div>

            <div className="row g-4">
              {/* Talk to Us */}
              <div className="col-lg-4">
                <div className="card border-0 bg-light h-100">
                  <div className="card-body p-4 text-center">
                    <div className="mb-3">
                      <span className="display-4">💬</span>
                    </div>
                    <h3 className="h5 fw-bold text-dark mb-3">Talk to us</h3>
                    <p className="text-muted mb-3 small">
                      Follow the conversation and share your thoughts
                    </p>
                    <div className="d-grid gap-2">
                      <a href="#" className="btn btn-outline-primary btn-sm">
                        🐦 Twitter/X
                      </a>
                      <a href="#" className="btn btn-outline-primary btn-sm">
                        📘 Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Get the Real Story */}
              <div className="col-lg-4">
                <div className="card border-0 bg-light h-100">
                  <div className="card-body p-4 text-center">
                    <div className="mb-3">
                      <span className="display-4">📧</span>
                    </div>
                    <h3 className="h5 fw-bold text-dark mb-3">Get the real story</h3>
                    <p className="text-muted mb-3 small">
                      Our newsletter delivers our best work straight to you, with no ads and no nonsense
                    </p>
                    <a href="#" className="btn btn-success w-100">
                      Subscribe to Newsletter
                    </a>
                  </div>
                </div>
              </div>

              {/* Share What You Know */}
              <div className="col-lg-4">
                <div className="card border-0 bg-light h-100">
                  <div className="card-body p-4 text-center">
                    <div className="mb-3">
                      <span className="display-4">💡</span>
                    </div>
                    <h3 className="h5 fw-bold text-dark mb-3">Share what you know</h3>
                    <p className="text-muted mb-3 small">
                      If there's a story you think the world needs to hear
                    </p>
                    <a href="/contact" className="btn btn-info w-100">
                      Contact Us - We're listening
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="text-center bg-dark text-white p-5 rounded-3">
            <h3 className="h3 fw-bold mb-3">Thanks for being here.</h3>
            <p className="lead mb-0">
              Let's figure things out, together. 🤝
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;