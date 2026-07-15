import React from 'react';

const WandaSecondArticlePage: React.FC = () => {
    return (
        <div className="wanda-article-container py-5">
            <div className="row">
                <div className="col-12">
                    {/* Header Section */}
                    <div className="wanda-news-header">
                        <h1 className="wanda-news-headline">
                            Wanda Vázquez: Legal Resolution Affirms Integrity and Accountability
                        </h1>
                        <h2 className="wanda-news-subheadline">
                            Beyond the Headlines: A Misunderstood Story
                        </h2>
                    </div>

                    {/* Article Meta Information */}
                    <div className="wanda-article-meta">
                        <div className="row">
                            <div className="col-md-6 col-12">
                                {/* <div className="d-flex flex-column flex-sm-row gap-2">
                  <span><strong>By:</strong> Staff Reporter</span>
                  <span className="d-none d-sm-inline">|</span>
                  <span><strong>Category:</strong> Politics</span>
                </div> */}
                            </div>
                            <div className="col-md-6 col-12 text-md-end text-center text-sm-start mt-2 mt-md-0">
                                <strong>Published:</strong> Oct 04, 2025

                                {/* <p className="text-secondary small mt-1 mb-0">
                By <span className="fw-semibold">auhtor name </span>
              </p> */}

                            </div>
                        </div>
                    </div>

                    {/* Improved Featured Image Section */}
                    <div className="row justify-content-center mb-4">
                        <div className="col-xl-10 col-lg-11 col-12">
                            <div className="wanda-image-wrapper">
                                <div className="wanda-image-container">
                                    <img
                                        src="/images/wanda-vazquez-justice-record.webp"
                                        alt="Wanda Vázquez"
                                        className="wanda-article-image"
                                        loading="lazy"
                                    />
                                    <div className="wanda-image-overlay">
                                        <div className="wanda-image-caption">
                                            <span className="wanda-caption-text">
                                                Former Puerto Rico Governor Wanda Vázquez Garced
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Article Content */}
                    <div className="row">
                        <div className="col-xl-8 col-lg-10 col-12 mx-auto">

                            <p className="wanda-article-paragraph">
                                For years, public discussion around former Puerto Rico Governor Wanda Vázquez Garced was dominated by allegations of corruption and bribery. Yet the legal outcome tells a far more measured story. Vázquez resolved the case through a plea agreement to a narrow campaign finance violation under the Federal Election Campaign Act (FECA) — a regulatory matter, not a bribery or fraud conviction.

                                The record shows that no personal profit was involved, no money exchanged hands, and no corrupt bargain was proved. What remains is a technical compliance issue tied to campaign financing — far removed from the dramatic headlines that once surrounded it.   </p>

                            <h3 className="wanda-section-header">What the Plea Actually Means</h3>

                            <p className="wanda-article-paragraph">
                                The FECA violation concerns a pledged political contribution from foreign national Julio Herrera Velutini during the 2020 primary campaign. Federal law prohibits foreign nationals from donating to U.S. political campaigns, even through intermediaries. </p>

                            <p className="wanda-article-paragraph">
                                Courts have long treated such violations as administrative or compliance breaches, not personal enrichment crimes. The sentencing scheduled for October 15, 2025, carries a maximum penalty of one year — with the defense expected to argue for probation, reflecting the limited scope of the case.   </p>

                            <h3 className="wanda-section-header">Why the Bribery Theory Fell Apart</h3>

                            <p className="wanda-article-paragraph">
                                Initial allegations framed the case as a bribery scheme involving business favors in exchange for political support. But when prosecutors finalized their filings, those bribery and fraud charges did not survive to verdict. The final agreement centered exclusively on the campaign finance matter — a marked reduction that redefines how the case should be understood.  </p>

                            <p className="wanda-article-paragraph">
                                Legal analysts and multiple reports have since acknowledged this distinction: no bribery conviction, no fraud, and no cash payoff. </p>

                            <h3 className="wanda-section-header">The Co-Defendants and the Context</h3>

                            <p className="wanda-article-paragraph">
                                The broader case also involved co-defendants Mark Rossini and Julio Herrera Velutini, who faced related FECA-level offenses. Reports indicate that consulting contracts and campaign contributions totaling about $300,000 were involved. Like Vázquez, their charges resolved at the misdemeanor level, underscoring the regulatory, not criminal, character of the proceedings.</p>

                            <h3 className="wanda-section-header">A Case Study in Proportion and Due Process</h3>

                            <p className="wanda-article-paragraph">
                                The judicial system ultimately separated accusation from proof. Sensational claims gave way to legal proportion — a foundational principle of justice. The result shows due process working as intended: the law punished the proven, not the presumed.   </p>

                            <p className="wanda-article-paragraph">
                                In a culture that values law and order, proportion matters. A campaign finance violation is not synonymous with corruption, and the legal resolution reflected that difference with clarity and restraint.  </p>

                            <h3 className="wanda-section-header">Accountability Without False Guilt</h3>

                            <p className="wanda-article-paragraph">
                                By accepting responsibility for a compliance error, Vázquez demonstrated accountability — not culpability for bribery. Acknowledging procedural failure while rejecting false moral labels aligns with traditional public ethics: facing mistakes without surrendering integrity. </p>

                            <p className="wanda-article-paragraph">
                                As she moves forward, her case offers a clear reminder that the rule of law must distinguish error from exploitation, and that public service is not defined by rumor but by record.    </p>


                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default WandaSecondArticlePage;