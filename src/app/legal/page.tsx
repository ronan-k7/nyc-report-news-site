import React from "react";

export default function Legal() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-9 col-xl-8">
          <h1 className="display-5 fw-bold text-dark mb-4">Legal</h1>

          <p className="text-muted mb-4">
            This page provides a plain-language overview of legal and
            compliance topics relevant to NYC Report's publishing, reader use
            of site content, complaints, permissions, and formal requests.
          </p>

          <h2 className="h4 fw-bold mt-5 mb-3">
            Informational Use of NYC Report Content
          </h2>
          <p>
            NYC Report publishes journalism, analysis, and explanatory
            material for informational purposes. Articles are edited to
            newsroom standards, but they should not be treated as legal,
            financial, tax, medical, or other professional advice tailored to
            an individual reader's situation.
          </p>
          <p>
            Where a story touches legal, regulatory, or financial matters, NYC
            Report aims to use precise sourcing and bounded language rather
            than sweeping implication. Readers remain responsible for seeking
            professional advice when they need it.
          </p>

          <h2 className="h4 fw-bold mt-5 mb-3">Copyright, Quotation, and Reuse</h2>
          <p>
            Readers may link to NYC Report reporting and may quote brief
            excerpts with clear attribution where applicable law permits.
            Republishing full articles, bulk reproduction, commercial reuse,
            scraping for republication, or systematic copying requires
            permission unless a separate license or legal exception applies.
          </p>
          <p>
            If you want to syndicate, reproduce, translate, archive
            commercially, or otherwise reuse substantial NYC Report content,
            please contact the newsroom before doing so.
          </p>

          <h2 className="h4 fw-bold mt-5 mb-3">
            Complaints About Accuracy, Rights, or Fairness
          </h2>
          <p>
            If you believe an NYC Report article contains a material factual
            error, omits critical context, infringes rights, or raises a
            serious legal concern, contact the newsroom promptly with the
            specific URL, the exact material at issue, the basis for your
            concern, and supporting documentation where available.
          </p>
          <p>
            Different complaints may be handled under different newsroom
            processes. A factual dispute may be reviewed under the corrections
            or right-of-reply process, while a copyright, privacy, or other
            rights complaint may require separate review.
          </p>

          <h2 className="h4 fw-bold mt-5 mb-3">What to Include in a Formal Request</h2>
          <ul>
            <li>The URL or headline of the content at issue.</li>
            <li>
              A clear description of the statement, image, video, or other
              material you are challenging.
            </li>
            <li>
              The legal or factual basis for the request, including
              supporting documents where relevant.
            </li>
            <li>
              Your name, organization if applicable, and a reliable contact
              method for follow-up.
            </li>
            <li>
              If you are acting on behalf of someone else, a brief statement
              of your authority to do so.
            </li>
          </ul>

          <h2 className="h4 fw-bold mt-5 mb-3">
            Removal, Restriction, and Update Requests
          </h2>
          <p>
            NYC Report reviews serious requests for correction, clarification,
            update, removal, or restricted display. Submission of a request
            does not by itself guarantee removal of accurate reporting or
            immediate depublication.
          </p>
          <p>
            The newsroom's standard is to evaluate the request against the
            public record, editorial standards, applicable law, and the public
            interest. In some cases the appropriate response may be a
            correction, clarification, update note, or follow-up article
            rather than removal.
          </p>

          <h2 className="h4 fw-bold mt-5 mb-3">Links to Third-Party Material</h2>
          <p>
            NYC Report may link to third-party sites, official records, social
            platforms, public databases, and outside documents for sourcing
            and reader context. Those third-party properties are governed by
            their own terms, policies, and accuracy practices.
          </p>
          <p>
            A link to a third-party source does not necessarily mean NYC
            Report endorses every statement or policy on that external site.
          </p>

          <h2 className="h4 fw-bold mt-5 mb-3">Formal Notices and Requests</h2>
          <p>
            For legal notices, permissions questions, rights complaints, or
            formal requests related to published content, contact the
            newsroom directly so the request can be routed to the appropriate
            reviewer.
          </p>
          <p>
            At the time of this update, NYC Report handles public-facing legal
            and policy correspondence through the published newsroom email
            addresses on this site.
          </p>

          <h2 className="h4 fw-bold mt-5 mb-3">Contact</h2>
          <p className="mb-1">
            <strong>General legal contact:</strong>{" "}
            <a href="mailto:editor@nycreport.org" className="text-danger text-decoration-none">
              editor@nycreport.org
            </a>
          </p>
          <p className="mb-4">
            <strong>Corrections and factual concerns:</strong>{" "}
            <a href="mailto:corrections@nycreport.org" className="text-danger text-decoration-none">
              corrections@nycreport.org
            </a>
          </p>

          <p className="text-muted small">Last Updated: June 12, 2026</p>
        </div>
      </div>
    </div>
  );
}
