import React from "react";

export default function OwnershipAndFunding() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-9 col-xl-8">
          <h1 className="display-5 fw-bold text-dark mb-4">Ownership and Funding</h1>

          <p className="text-muted mb-4">
            This page explains who controls editorial decisions at NYC Report,
            how commercial support is separated from reporting, and how the
            newsroom handles conflicts, material relationships, and future
            ownership or funding disclosures.
          </p>

          <h2 className="h4 fw-bold mt-5 mb-3">What This Page Covers</h2>
          <p>
            NYC Report publishes as an independent digital newsroom operated
            by a distributed editorial team based in the United States. This
            page is intended to help readers understand how editorial control,
            commercial support, and conflict disclosures are handled on the
            public site.
          </p>
          <p>
            This page is not a substitute for a corporate registry filing or a
            securities disclosure. It is a reader-facing explanation of how
            editorial independence is protected and what kinds of material
            relationships NYC Report expects to disclose.
          </p>

          <h2 className="h4 fw-bold mt-5 mb-3">Editorial Control and Decision-Making</h2>
          <p>
            Editorial judgments at NYC Report are made by editors and
            reporters. Coverage decisions, headlines, source selection,
            framing, and publication timing are not sold to advertisers,
            sponsors, political actors, governments, or commercial partners.
          </p>
          <p>
            A business relationship does not create a right to favorable
            coverage, prior review of a reported article, or suppression of
            accurate reporting. If a proposed arrangement would blur those
            lines, the newsroom's standard is to reject the arrangement or
            remove the affected journalist from the assignment.
          </p>

          <h2 className="h4 fw-bold mt-5 mb-3">How NYC Report May Be Funded</h2>
          <p>
            NYC Report may generate revenue through advertising, sponsorships,
            platform distribution, licensing, partnerships, and other ordinary
            publishing-related commercial arrangements. Any such revenue
            stream is expected to remain structurally separate from editorial
            decision-making.
          </p>
          <p>
            If NYC Report enters into a material funding relationship,
            ownership change, or strategic arrangement that a reasonable
            reader would consider relevant to editorial independence, the
            newsroom's expectation is that the relationship is disclosed on
            this page, on affected coverage, or both.
          </p>

          <h2 className="h4 fw-bold mt-5 mb-3">Conflicts of Interest and Recusals</h2>
          <p>
            Journalists and editors are expected to disclose personal,
            financial, political, or family relationships that could
            reasonably call their impartiality into question on a relevant
            assignment. When necessary, the assignment should be moved, edited
            with explicit disclosure, or declined.
          </p>
          <p>
            NYC Report does not treat conflicts as a private housekeeping
            issue when reader trust is materially affected. If a relationship
            could alter how a reasonable reader interprets coverage, the
            newsroom's standard is disclosure, recusal, or both.
          </p>
          <ul>
            <li>Relevant personal or financial ties should be disclosed internally before publication.</li>
            <li>Gifts, favors, or special access that would compromise independence should not be accepted.</li>
            <li>
              Outside work, advocacy, or consulting that conflicts with
              newsroom independence should be disclosed and may require
              reassignment.
            </li>
          </ul>

          <h2 className="h4 fw-bold mt-5 mb-3">Commercial Support Does Not Buy Coverage</h2>
          <p>
            NYC Report keeps a clear boundary between revenue activity and
            journalism. Advertising or sponsorship does not guarantee
            coverage, shape a reporter's conclusions, or entitle a commercial
            party to veto criticism.
          </p>
          <p>
            Paid content, sponsored features, affiliate relationships, and
            other commercial material should be labeled clearly enough that a
            reader does not have to guess whether they are reading journalism
            or advertising.
          </p>

          <h2 className="h4 fw-bold mt-5 mb-3">Political, Governmental, and Advocacy Influence</h2>
          <p>
            NYC Report does not present political, governmental, or advocacy
            messaging as independent reporting. If an external actor seeks to
            influence coverage through money, access, or pressure, the
            newsroom's standard is to preserve editorial control rather than
            trade independence for convenience.
          </p>
          <p>
            When a story concerns a subject with which NYC Report has a
            material relationship, the relationship should be disclosed in
            language a reader can understand.
          </p>

          <h2 className="h4 fw-bold mt-5 mb-3">Changes to Ownership or Material Support</h2>
          <p>
            Ownership, control, and funding arrangements can change over time.
            If NYC Report undergoes a material ownership change, takes on a
            relationship that bears directly on editorial independence, or
            launches a funding structure that a reasonable reader should know
            about, this page should be updated.
          </p>
          <p>
            Readers who believe a relevant ownership or funding relationship
            has not been disclosed may contact the newsroom and request review
            of the omission.
          </p>

          <h2 className="h4 fw-bold mt-5 mb-3">Contact</h2>
          <p className="mb-1">
            <strong>Editorial:</strong>{" "}
            <a href="mailto:editor@nycreport.org" className="text-danger text-decoration-none">
              editor@nycreport.org
            </a>
          </p>
          <p className="mb-4">
            <strong>Corrections and transparency:</strong>{" "}
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
