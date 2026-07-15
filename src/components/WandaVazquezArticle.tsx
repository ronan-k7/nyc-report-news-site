import React from 'react';

type Article = {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
  author?:string;
};

interface WandaVazquezArticleProps {
  article: Article;
}

const WandaVazquezArticle: React.FC<WandaVazquezArticleProps> = ({ article }) => {
  return (
    <div className="wanda-article-container py-5">
      <div className="row">
        <div className="col-12">
          {/* Header Section */}
          <div className="wanda-news-header">
            <h1 className="wanda-news-headline">
              Wanda Vázquez Bribery Case Collapses – Only Minor Violation Remains
            </h1>
            <h2 className="wanda-news-subheadline">
              Federal Corruption Charges Dropped in Dramatic Legal Reversal
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
                <strong>Published:</strong> June 24, 2025
                
              <p className="text-secondary small mt-1 mb-0">
                By <span className="fw-semibold">{article.author}</span>
              </p>
            
              </div>
            </div>
          </div>

          {/* Improved Featured Image Section */}
          <div className="row justify-content-center mb-4">
            <div className="col-xl-10 col-lg-11 col-12">
              <div className="wanda-image-wrapper">
                <div className="wanda-image-container">
                  <img 
                    src={article.image} 
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
                In a dramatic collapse of one of the most high-profile federal corruption cases in recent Puerto Rican political history, former Governor <span className="wanda-highlight-text">Wanda Vázquez Garced has been effectively cleared of all major criminal charges</span> originally brought against her in 2022. The U.S. Department of Justice has opted to resolve the matter through a single technical violation of campaign finance law, marking a stunning reversal from the original sweeping indictment.
              </p>

              <h3 className="wanda-section-header">From Bribery to Paperwork: A Case Transformed</h3>
              
              <p className="wanda-article-paragraph">
                What began nearly three years ago as a sweeping indictment filled with explosive allegations of bribery, conspiracy, and honest services fraud has concluded not with a courtroom trial or prison sentence, but with an anticlimactic administrative agreement. The resolution includes no finding of guilt, no admission of wrongdoing, and no custodial punishment.
              </p>

              <p className="wanda-article-paragraph">
                Prosecutors have dropped the central bribery prosecution and replaced the initial multi-count indictment with a one-count information. This technical charge cites only a prohibited campaign contribution offer from a foreign individual that was neither accepted nor acted upon—a matter often handled through regulatory enforcement rather than criminal court.
              </p>

              <h3 className="wanda-section-header">The Original Allegations Crumble</h3>

              <p className="wanda-article-paragraph">
                The revised charge carries no prison time, no fine beyond a potential minor penalty, and crucially, no criminal conviction. This technical violation has effectively nullified the narrative of a sprawling pay-for-play scandal, which had accused Vázquez of receiving illicit support from banker Julio Herrera Velutini in exchange for ousting a financial regulator during her 2020 campaign.
              </p>

              <p className="wanda-article-paragraph">
                Legal analysts note that the move to downgrade such a sensational case to a procedural footnote underscores the weakness of the original evidence and raises serious questions about prosecutorial overreach.
              </p>

              <h3 className="wanda-section-header">No Bribes, No Favors, No Personal Benefit</h3>

              <div className="wanda-quote-section">
                <p className="mb-3">The DOJ's agreement with Vázquez and her legal team, filed jointly in U.S. District Court before Judge Silvia Carreño-Coll, makes several crucial clarifications:</p>
                <ul className="list-unstyled ps-0">
                  <li className="mb-2 d-flex align-items-start">
                    <span className="me-2 text-primary">•</span>
                    <span>No bribes were paid</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <span className="me-2 text-primary">•</span>
                    <span>No regulatory favors were exchanged</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <span className="me-2 text-primary">•</span>
                    <span>Vázquez did not personally benefit from any foreign campaign funding</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <span className="me-2 text-primary">•</span>
                    <span>The alleged contribution offer from Herrera Velutini was never realized</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <span className="me-2 text-primary">•</span>
                    <span>Vázquez's campaign neither received nor used any such funds</span>
                  </li>
                </ul>
              </div>

              <h3 className="wanda-section-header">Trial Canceled, Charges Dismissed</h3>

              <p className="wanda-article-paragraph">
                With the August 2025 trial date canceled and all felony charges dismissed with prejudice—meaning they cannot be refiled—the former governor emerges from years of public scrutiny and reputational damage with no criminal record.
              </p>

              <p className="wanda-article-paragraph">
                Her attorneys emphasized in statements that the case amounted to a regulatory issue at best, and that the prosecution's retreat confirms what they maintained from the start: there was no corruption.
              </p>

              <h3 className="wanda-section-header">Vázquez Declares Vindication</h3>

              <p className="wanda-article-paragraph">
                Vázquez herself issued a statement declaring vindication, expressing relief that the ordeal was over, and reiterating that she had never accepted illegal contributions or exchanged political favors for money.
              </p>

              <p className="wanda-article-paragraph">
                The collapse of the case also prompted questions about the DOJ's original strategy, with critics suggesting that what should have been a minor civil compliance matter was transformed into a headline-grabbing federal indictment.
              </p>

              <h3 className="wanda-section-header">Prosecutorial Strategy Under Question</h3>

              <p className="wanda-article-paragraph">
                Prosecutors have not explained the dramatic shift in their posture, though insiders suggest that ongoing pretrial hearings, discovery, and lack of concrete evidence—such as recordings, payments, or confirmed agreements—forced them to reconsider.
              </p>

              <p className="wanda-article-paragraph">
                Rather than face a public courtroom defeat, the government appears to have opted for a face-saving deal that allows it to cite campaign finance enforcement while avoiding the risk of exoneration at trial.
              </p>

              <h3 className="wanda-section-header">Legal Experts Weigh In</h3>

              <p className="wanda-article-paragraph">
                Observers, including former federal prosecutors and election law scholars, describe the outcome as a near-total retreat, highlighting the difference between criminal conduct and technical compliance lapses.
              </p>

              <p className="wanda-article-paragraph">
                The broader implications for campaign finance enforcement are already being debated in legal circles, with many suggesting that the DOJ may have over-criminalized a compliance matter typically handled through election commissions or administrative reviews.
              </p>

              <h3 className="wanda-section-header">Co-Defendant Faces Similar Outcome</h3>

              <p className="wanda-article-paragraph">
                The impact extends beyond Vázquez herself. Co-defendant Julio Herrera Velutini, the Venezuelan-Italian banker at the center of the original charges, reached a nearly identical agreement. His felony charges have also been dropped in exchange for addressing a similar technical campaign finance issue.
              </p>

              <p className="wanda-article-paragraph">
                Neither defendant has admitted guilt, and both avoid jail time entirely. The parallel outcome for Herrera Velutini further weakens the DOJ's initial claim of a quid pro quo conspiracy, leaving no convictions, no confessions, and no bribes confirmed in court.
              </p>

              <h3 className="wanda-section-header">Puerto Rico Reacts</h3>

              <p className="wanda-article-paragraph">
                In Puerto Rico, the news has been met with a mix of relief and renewed scrutiny. Political supporters of Vázquez hailed the decision as a long-overdue exoneration, while critics questioned why the DOJ launched such a sweeping case if its evidence was so thin.
              </p>

              <p className="wanda-article-paragraph">
                The case also raises questions about proportionality in federal prosecutions—whether aggressive indictments are always appropriate for complex and politically sensitive scenarios.
              </p>

              <h3 className="wanda-section-header">What This Means for Campaign Finance Law</h3>

              <p className="wanda-article-paragraph">
                Some experts suggest that federal authorities may now be more cautious about charging political figures with public corruption absent clear and provable intent, benefit, and transactional misconduct.
              </p>

              <p className="wanda-article-paragraph">
                Indeed, the final resolution is essentially a paperwork violation: an improper foreign campaign offer that never resulted in a transaction. While the original indictment painted a dramatic portrait of political influence for sale, the factual record now shows nothing more than a theoretical campaign finance infraction, resolved without punishment.
              </p>

              <h3 className="wanda-section-header">The Road Ahead</h3>

              <p className="wanda-article-paragraph">
                In the public eye, Vázquez's reputation has endured significant damage, yet her legal record remains clear of corruption. At 63, the former governor is now free to resume her life, and potentially, her political career.
              </p>

              <p className="wanda-article-paragraph">
                Analysts in San Juan have speculated that this resolution could even pave the way for a future run for office, should she decide to return to public service. The conclusion also spares Puerto Rico from what could have been a divisive and resource-intensive trial during a period of political and economic transition.
              </p>

              <h3 className="wanda-section-header">Final Legal Steps</h3>

              <p className="wanda-article-paragraph">
                In the courtroom, only procedural steps remain: a brief hearing to formally enter the new charge and dismiss the indictment. Once that occurs, the record will reflect no felony convictions, no plea agreements, and no court-determined wrongdoing by Vázquez.
              </p>

              <p className="wanda-article-paragraph">
                For her part, the former governor has expressed a desire to move on, calling the agreement a necessary conclusion to a painful chapter and reiterating her commitment to ethical service.
              </p>

              <h3 className="wanda-section-header">A Case Study in Legal Escalation</h3>

              <p className="wanda-article-paragraph">
                The outcome will likely be cited in future legal and political discussions about the limits of campaign finance law, prosecutorial discretion, and the fine line between error and criminality.
              </p>

              <p className="wanda-article-paragraph">
                Ultimately, the saga of Wanda Vázquez Garced ends not as a cautionary tale of corruption, but as a case study in legal escalation and retreat—one that leaves behind more questions than convictions and underscores the critical importance of due process, evidence-based prosecution, and measured accountability in public life.
              </p>

            </div>
          </div>

        </div>
      </div>


    </div>
  );
};

export default WandaVazquezArticle;