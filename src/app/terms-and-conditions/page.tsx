import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-9 col-xl-8">
          <h1 className="display-5 fw-bold text-dark mb-4">Terms &amp; Conditions</h1>

          <p className="mb-4">
            By accessing NYC Report, you agree to the following terms. We aim
            to keep these straightforward and transparent so readers
            understand how our journalism may be used.
          </p>

          <h2 className="h4 fw-bold mt-5 mb-3">Using Our Content</h2>
          <p>
            All original content published by NYC Report is protected by
            copyright. Readers may share links and quote brief excerpts with
            proper attribution. Republishing full articles without permission
            is not permitted.
          </p>
          <p>
            For permissions or republication inquiries, contact:{" "}
            <a href="mailto:editor@nycreport.org" className="text-danger text-decoration-none">
              editor@nycreport.org
            </a>
          </p>

          <h2 className="h4 fw-bold mt-5 mb-3">Accuracy and Updates</h2>
          <p>
            We strive for accuracy and timely updates, but news evolves.
            Information may change after publication. Errors are corrected
            transparently in accordance with our{" "}
            <a href="/corrections-policy" className="text-danger text-decoration-none">
              Corrections Policy
            </a>
            .
          </p>

          <h2 className="h4 fw-bold mt-5 mb-3">Opinion and Analysis</h2>
          <p>
            Opinion and analysis articles are clearly labeled and reflect the
            views of the author, not necessarily those of NYC Report as a
            whole.
          </p>

          <h2 className="h4 fw-bold mt-5 mb-3">External Links</h2>
          <p>
            Our reporting may include links to external websites for
            reference. We are not responsible for the content or privacy
            practices of third-party sites.
          </p>

          <h2 className="h4 fw-bold mt-5 mb-3">Limitation of Responsibility</h2>
          <p>
            NYC Report provides journalism for general informational purposes.
            Content should not be considered legal, medical, or financial
            advice.
          </p>

          <h2 className="h4 fw-bold mt-5 mb-3">Reader Contributions</h2>
          <p>
            If reader comments or submissions are enabled, participants are
            expected to engage respectfully. Content that violates laws or
            community standards may be removed.
          </p>

          <h2 className="h4 fw-bold mt-5 mb-3">Updates to These Terms</h2>
          <p>
            These Terms may be updated periodically. Changes will be posted on
            this page with a revised effective date.
          </p>

          <h2 className="h4 fw-bold mt-5 mb-3">Questions?</h2>
          <p className="mb-4">
            If you have questions about these Terms, contact us at{" "}
            <a href="mailto:editor@nycreport.org" className="text-danger text-decoration-none">
              editor@nycreport.org
            </a>
            . NYC Report encourages responsible sharing, proper attribution,
            and informed readership.
          </p>

          <p className="text-muted small">Last Updated: June 12, 2026</p>
        </div>
      </div>
    </div>
  );
}
