
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-10 col-xl-8">
          <div className="text-center mb-4">
            <h1 className="display-4 fw-bold text-dark mb-3">Talk to Us</h1>
            <div className="bg-light p-4 rounded-3 border-start border-danger border-4">
              <p className="mb-3">
                This isn't a faceless corporation. We're a team of people, and we believe journalism should be a conversation. Your questions, story ideas, and feedback are what keep us going.
              </p>
              <p className="mb-0 fw-medium text-dark">
                Here's how to reach us. Please direct your message to the right place so we can get back to you as quickly as possible.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Options */}
      <div className="row justify-content-center">
        <div className="col-lg-10">
          
          {/* Contact Methods Grid */}
          <div className="row g-4 mb-5">
            
            {/* General Questions */}
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                      <i className="bi bi-chat-dots text-primary fs-4"></i>
                    </div>
                    <div>
                      <h3 className="h5 fw-bold text-dark mb-2 fst-italic">General Questions & Feedback</h3>
                      <p className="text-muted mb-3 small">
                        For general inquiries, comments, or if you just want to start a conversation. We read every email.
                      </p>
                      <a 
                        href="mailto:hello@nycreport.org" 
                        className="btn btn-danger btn-sm fw-medium"
                      >
                        hello@nycreport.org
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Report a Correction */}
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-warning bg-opacity-10 rounded-circle p-3 me-3">
                      <i className="bi bi-exclamation-triangle text-warning fs-4"></i>
                    </div>
                    <div>
                      <h3 className="h5 fw-bold text-dark mb-2 fst-italic">Report a Correction</h3>
                      <p className="text-muted mb-3 small">
                        See something that doesn't look right? Hold us accountable. We take errors seriously and will act on them quickly.
                      </p>
                      <a 
                        href="mailto:corrections@nycreport.org" 
                        className="btn btn-danger btn-sm fw-medium mb-2"
                      >
                        corrections@nycreport.org
                      </a>
                      <p className="small text-muted mb-0">
                        (Please see our full <a href="/corrections-policy" className="text-primary text-decoration-none">Corrections Policy</a> for more details on our process.)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Tips */}
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-success bg-opacity-10 rounded-circle p-3 me-3">
                      <i className="bi bi-lightbulb text-success fs-4"></i>
                    </div>
                    <div>
                      <h3 className="h5 fw-bold text-dark mb-2 fst-italic">Got a Story or a News Tip?</h3>
                      <p className="text-muted mb-3 small">
                        This is the lifeblood of what we do. If you have information or a story that you believe the public needs to know, we want to hear it. Your privacy and security are our top priority.
                      </p>
                      <div className="mb-2">
                        <span className="small text-muted me-2">For general tips:</span>
                        <a 
                          href="mailto:tips@nycreport.org" 
                          className="btn btn-danger btn-sm fw-medium"
                        >
                          tips@nycreport.org
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Write for Us */}
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-info bg-opacity-10 rounded-circle p-3 me-3">
                      <i className="bi bi-pencil-square text-info fs-4"></i>
                    </div>
                    <div>
                      <h3 className="h5 fw-bold text-dark mb-2 fst-italic">Write for Us</h3>
                      <p className="text-muted mb-3 small">
                        If you are an independent writer or journalist who believes in our mission, we'd love to hear from you.
                      </p>
                      <a 
                        href="mailto:editor@nycreport.org" 
                        className="btn btn-danger btn-sm fw-medium mb-2"
                      >
                        editor@nycreport.org
                      </a>
                      <p className="small text-muted mb-0">
                        (Please send us a brief pitch and a link to some of your previous work.)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Social Media Section */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8">
              <div className="bg-secondary text-white p-4 rounded-3 text-center">
                <h3 className="h4 fw-bold mb-3">Connect on Social Media</h3>
                <p className="mb-4 opacity-75">
                  Join the daily conversation with our community and our writers.
                </p>
                <div className="row g-3">
                  <div className="col-md-4">
                    <a href="#" className="btn btn-light text-danger fw-medium w-100">
                      <i className="bi bi-twitter me-2"></i>
                      Follow us on X (Twitter)
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="#" className="btn btn-light  fw-medium w-100 text-danger">
                      <i className="bi bi-facebook me-2"></i>
                      Follow us on Facebook
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="#" className="btn btn-light text-primary fw-medium w-100 text-danger">
                      <i className="bi bi-instagram me-2"></i>
                      Follow us on Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mailing Address */}
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="text-center bg-light p-4 rounded-3">
                <h3 className="h5 fw-bold text-dark mb-3">
                  <i className="bi bi-envelope text-primary me-2"></i>
                  Mailing Address
                </h3>
                <p className="text-muted mb-3">
                  For official correspondence, you can reach us by mail.
                </p>
                <div className="border-start border-danger border-4 ps-3 text-start d-inline-block">
                  <p className="mb-1 fw-bold text-dark">NYCREPORT.ORG</p>
                  <p className="mb-1">818 Spring Avenue</p>
                  <p className="mb-0">Philadelphia, PA 19145</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;