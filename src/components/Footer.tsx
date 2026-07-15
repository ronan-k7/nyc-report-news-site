// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Footer = () => {
//   return (
//     <footer className=" footer bg-dark text-light pt-5 pb-3 mt-5">
//       <div className="container">
//         <div className="row">
//           {/* Brand & Social */}
//           <div className="col-lg-3 mb-4">
//             <p className="mb-3">NYC REPORT</p>
//             <p className="small">
//               Your trusted source for news across business, technology, sports,
//               health, science, and politics.
//             </p>
 
//             {/* Social Icons */}
//             <div className="d-flex gap-3 mt-3">
//               {/* <a
//                 href="/"
//                 className="text-light"
//                 title="linkedin"
//                 aria-label="LinkedIn"
//               >
//                 <i className="bi bi-linkedin fs-5"></i>
//               </a> */}
//               {/* <a
//                 href="/"
//                 className="text-light"
//                 title="youtube"
//                 aria-label="YouTube"
//               >
//                 <i className="bi bi-youtube fs-5"></i>
//               </a> */}
//               <a
//                 href="https://x.com/nycreport_"
//                 className="text-light"
//                 title="twitter"
//                 aria-label="Twitter"
//               >
//                 <i className="bi bi-twitter fs-5"></i>
//               </a>
//               <a
//                 href="https://www.instagram.com/nycreport_/"
//                 className="text-light"
//                 title="instagram"
//                 aria-label="Instagram"
//               >
//                 <i className="bi bi-instagram fs-5"></i>
//               </a>
//             </div>
//           </div>

//           {/* Categories */}
//           <div className="col-lg-9">
//             <div className="row">
//               {/* Business */}
//               <div className="col-md-3 mb-3">
//                 <p>Business</p>
//                 <ul className="list-unstyled small">
//                   <li>
//                     <a
//                       href="/"
//                       title="market-trend"
//                       className="text-light text-decoration-none"
//                     >
//                       Market Trends
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/"
//                       title="finance"
//                       className="text-light text-decoration-none"
//                     >
//                       Finance
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/"
//                       title="startup"
//                       className="text-light text-decoration-none"
//                     >
//                       Startups
//                     </a>
//                   </li>
//                 </ul>
//               </div>

//               {/* Technology */}
//               <div className="col-md-3 mb-3">
//                 <p>Technology</p>
//                 <ul className="list-unstyled small">
//                   <li>
//                     <a
//                       href="/"
//                       title="ai"
//                       className="text-light text-decoration-none"
//                     >
//                       AI & Innovation
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/"
//                       title="software"
//                       className="text-light text-decoration-none"
//                     >
//                       Software & Apps
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/"
//                       title="gadget"
//                       className="text-light text-decoration-none"
//                     >
//                       Gadgets
//                     </a>
//                   </li>
//                 </ul>
//               </div>

//               {/* Sports */}
//               <div className="col-md-3 mb-3">
//                 <p>Sports</p>
//                 <ul className="list-unstyled small">
//                   <li>
//                     <a
//                       href="/"
//                       title="latest"
//                       className="text-light text-decoration-none"
//                     >
//                       Latest News
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/"
//                       title="events"
//                       className="text-light text-decoration-none"
//                     >
//                       Events
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/"
//                       title="scores"
//                       className="text-light text-decoration-none"
//                     >
//                       Scores
//                     </a>
//                   </li>
//                 </ul>
//               </div>

//               <div className="col-md-3 mb-3">
//                 <p>
//                   <a href="/about" className="text-decoration-none text-white">
//                     About
//                   </a>
//                 </p>
//                 <ul className="list-unstyled small">
//                   <li>
//                     <a
//                       href="/team"
//                       title="us"
//                       className="text-light text-decoration-none"
//                     >
//                       Our Team
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/privacy-policy"
//                       title="global"
//                       className="text-light text-decoration-none"
//                     >
//                       Privacy Policy
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/contact"
//                       title="contact"
//                       className="text-light text-decoration-none"
//                     >
//                       Contact
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/corrections-policy"
//                       title="corrections-policy"
//                       className="text-light text-decoration-none"
//                     >
//                       Corrections Policy
//                     </a>
//                   </li>

//                   <li>
//                     <a
//                       href="/editorial-policy"
//                       title="editorial-policy"
//                       className="text-light text-decoration-none"
//                     >
//                       Editorial Policy
//                     </a>
//                   </li>
//                 </ul>
//               </div>

//               {/* Health */}
//               <div className="col-md-3 mb-3">
//                 <p>Health</p>
//                 <ul className="list-unstyled small">
//                   <li>
//                     <a
//                       href="/"
//                       title="wellness"
//                       className="text-light text-decoration-none"
//                     >
//                       Wellness
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/"
//                       title="nutrition"
//                       className="text-light text-decoration-none"
//                     >
//                       Nutrition
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/"
//                       title="medical"
//                       className="text-light text-decoration-none"
//                     >
//                       Medical News
//                     </a>
//                   </li>
//                 </ul>
//               </div>

//               {/* Science */}
//               <div className="col-md-3 mb-3">
//                 <p>Science</p>
//                 <ul className="list-unstyled small">
//                   <li>
//                     <a
//                       href="/"
//                       title="space"
//                       className="text-light text-decoration-none"
//                     >
//                       Space
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/"
//                       title="discoveries"
//                       className="text-light text-decoration-none"
//                     >
//                       Discoveries
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/"
//                       title="research"
//                       className="text-light text-decoration-none"
//                     >
//                       Research
//                     </a>
//                   </li>
//                 </ul>
//               </div>

//               {/* Politics */}
//               <div className="col-md-3 mb-3">
//                 <p>Politics</p>
//                 <ul className="list-unstyled small">
//                   <li>
//                     <a
//                       href="/"
//                       title="us"
//                       className="text-light text-decoration-none"
//                     >
//                       US Politics
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/"
//                       title="global"
//                       className="text-light text-decoration-none"
//                     >
//                       Global Affairs
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/"
//                       title="policy"
//                       className="text-light text-decoration-none"
//                     >
//                       Policy
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="col-md-3 mb-3">

//               </div>
//             </div>
//           </div>
//         </div>

//         <hr className="border-secondary my-4" />

//         <div className="text-center small">
//           &copy; {new Date().getFullYear()} <strong>NYC REPORT</strong>. All
//           rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className=" footer bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* Brand & Social */}
          <div className="col-lg-3 mb-4">
            <p className="mb-3">NYC REPORT</p>
            <p className="small">
              Your trusted source for news across business, technology, sports,
              health, science, and politics.
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-3 mt-3">
              <a
                href="https://x.com/nycreport_"
                className="text-light"
                title="twitter"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a
                href="https://www.instagram.com/nycreport_/"
                className="text-light"
                title="instagram"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram fs-5"></i>
              </a>
            </div>
          </div>

          {/* Categories */}
          <div className="col-lg-9">
            <div className="row">
              {/* Categories list */}
              <div className="col-md-3 mb-3">
                <p>Categories</p>
                <ul className="list-unstyled small">
                  <li>
                    <a
                      href="/business/"
                      title="business"
                      className="text-light text-decoration-none"
                    >
                      Business
                    </a>
                  </li>
                  <li>
                    <a
                      href="/technology/"
                      title="technology"
                      className="text-light text-decoration-none"
                    >
                      Technology
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sports/"
                      title="sports"
                      className="text-light text-decoration-none"
                    >
                      Sports
                    </a>
                  </li>
                  <li>
                    <a
                      href="/health/"
                      title="health"
                      className="text-light text-decoration-none"
                    >
                      Health
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 mb-3">
                <p className="invisible d-none d-md-block">&nbsp;</p>
                <ul className="list-unstyled small">
                  <li>
                    <a
                      href="/science/"
                      title="science"
                      className="text-light text-decoration-none"
                    >
                      Science
                    </a>
                  </li>
                  <li>
                    <a
                      href="/politics/"
                      title="politics"
                      className="text-light text-decoration-none"
                    >
                      Politics
                    </a>
                  </li>
                  <li>
                    <a
                      href="/entertainment/"
                      title="entertainment"
                      className="text-light text-decoration-none"
                    >
                      Entertainment
                    </a>
                  </li>
                  <li>
                    <a
                      href="/education/"
                      title="education"
                      className="text-light text-decoration-none"
                    >
                      Education
                    </a>
                  </li>
                  <li>
                    <a
                      href="/puerto-rico/"
                      title="puerto-rico"
                      className="text-light text-decoration-none"
                    >
                      Puerto Rico
                    </a>
                  </li>
                </ul>
              </div>

              {/* About */}
              <div className="col-md-3 mb-3">
                <p>
                  <a href="/about" className="text-decoration-none text-white">
                    About
                  </a>
                </p>
                <ul className="list-unstyled small">
                  <li>
                    <a
                      href="/about"
                      title="about-us"
                      className="text-light text-decoration-none"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/our-team"
                      title="our-team"
                      className="text-light text-decoration-none"
                    >
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      title="contact-us"
                      className="text-light text-decoration-none"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/editorial-policy"
                      title="editorial-policy"
                      className="text-light text-decoration-none"
                    >
                      Editorial Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/corrections-policy/"
                      title="corrections-policy"
                      className="text-light text-decoration-none"
                    >
                      Corrections Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/source-methodology"
                      title="source-methodology"
                      className="text-light text-decoration-none"
                    >
                      Source Methodology
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal & Policies */}
              <div className="col-md-3 mb-3">
                <p>Legal &amp; Policies</p>
                <ul className="list-unstyled small">
                  <li>
                    <a
                      href="/ownership-and-funding"
                      title="ownership-and-funding"
                      className="text-light text-decoration-none"
                    >
                      Ownership &amp; Funding
                    </a>
                  </li>
                  <li>
                    <a
                      href="/advertising-and-sponsored-content-policy"
                      title="advertising-policy"
                      className="text-light text-decoration-none"
                    >
                      Advertising Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/right-of-reply-policy"
                      title="right-of-reply-policy"
                      className="text-light text-decoration-none"
                    >
                      Right of Reply
                    </a>
                  </li>
                  <li>
                    <a
                      href="/legal"
                      title="legal"
                      className="text-light text-decoration-none"
                    >
                      Legal
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy-policy"
                      title="privacy-policy"
                      className="text-light text-decoration-none"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms-and-conditions"
                      title="terms-and-conditions"
                      className="text-light text-decoration-none"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="text-center small">
          &copy; {new Date().getFullYear()} <strong>NYC REPORT</strong>. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;