import "./Articles.css";
import { Link } from "react-router-dom";

import hrSoftware from "../assets/HRSoftware.png";
import erpFail from "../assets/ERPfail.png";
import softwareIntegration from "../assets/SoftwareIntegration.png";
import tenQuestions from "../assets/10questions.png";

function Articles() {
  return (
    <section className="advisory-page">

      <div className="advisory-container">

        <p className="advisory-tag">
          Business Software Buying Guides
        </p>

        <h1>
          Make Better Business Software Decisions
        </h1>

        <p className="advisory-intro">
          Independent, practical guides to help organizations choose the right business software,
          avoid costly implementation mistakes, and make confident investment decisions.
        </p>

      </div>

      <section className="question-section">

        <div className="question-container">

          <div className="question-grid">

<div
  className="question-card article-card"
>

  <img
    src={hrSoftware}
    alt="How to Choose the Right HRMS for Your Business"
    className="article-image-placeholder"
  />

  <div className="article-content">

    <span className="question-topic">
      HR Software
    </span>

    <h3>
      How to Choose the Right HRMS for Your Business
    </h3>

    <p>
      Learn how to evaluate HR software based on your business processes, future growth, reporting needs, and user adoption—not just product demonstrations.
    </p>

    <Link to="/articles/how-to-choose-the-right-hrms">
      5 min read • Read Guide →
    </Link>

  </div>

</div>


            <div
              className="question-card article-card"
              role="button"
              tabIndex={0}
            >

<img
  src={erpFail}
  alt="Why Most ERP & HR Software Projects Fail Before Implementation Begins"
  className="article-image-placeholder"
/>

              <div className="article-content">

                <span className="question-topic">
                  ERP Strategy
                </span>

                <h3>
                  Why Most ERP & HR Software Projects Fail Before Implementation Begins
                </h3>

                <p>
                  Discover the planning mistakes that lead to failed software implementations and how involving the right stakeholders early improves project success.
                </p>

<Link to="/articles/why-erp-projects-fail">
  5 min read • Read Guide →
</Link>

              </div>

            </div>

            <div
              className="question-card article-card"
              role="button"
              tabIndex={0}
            >

<img
  src={softwareIntegration}
  alt="Why ERP and HR Software Should Never Be Planned Separately"
  className="article-image-placeholder"
/>

              <div className="article-content">

                <span className="question-topic">
                  Software Integration
                </span>

                <h3>
                  Why ERP and HR Software Should Never Be Planned Separately
                </h3>

                <p>
                  Learn why integrating your HR and ERP strategy before purchasing software reduces manual work, improves reporting, and supports future growth.
                </p>

<Link to="/articles/erp-and-hr-software">
  4 min read • Read Guide →
</Link>

              </div>

            </div>

            <div
              className="question-card article-card"
              role="button"
              tabIndex={0}
            >

<img
  src={tenQuestions}
  alt="10 Questions to Ask Before Buying Business Software"
  className="article-image-placeholder"
/>
              <div className="article-content">

                <span className="question-topic">
                  Buying Guide
                </span>

                <h3>
                  10 Questions to Ask Before Buying Business Software
                </h3>

                <p>
                  Before investing in any HRMS, ERP, CRM, or Payroll solution, ask these essential questions to avoid expensive mistakes and choose the right software.
                </p>

<Link to="/articles/10-questions-before-buying-business-software">
  6 min read • Read Guide →
</Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </section>
  );
}

export default Articles;