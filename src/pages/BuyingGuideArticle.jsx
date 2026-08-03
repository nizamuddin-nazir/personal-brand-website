import { Link } from "react-router-dom";
import "./ArticleTemplate.css";
import tenQuestions from "../assets/10questions.png";

function BuyingGuideArticle() {
  return (
    <section className="article-page">

      <div className="article-container">

        <Link
          to="/articles"
          className="back-link"
        >
          ← Back to Articles
        </Link>

<div className="article-cover">
  <img
    src={tenQuestions}
    alt="10 Questions to Ask Before Buying Business Software"
    className="article-cover-image"
  />
</div>
        <span className="article-pill">
          Buying Guide
        </span>

        <h1>
          10 Questions to Ask Before Buying Business Software
        </h1>

        <p className="article-reading-time">
          6 min read
        </p>

        <p className="article-lead">
          Purchasing business software is a long-term investment. Asking the right questions before selecting a solution helps reduce project risk, control costs and improve long-term business value.
        </p>

        <section className="article-section">

          <h2>Ask the Right Questions First</h2>

          <p>
            Before evaluating vendors, ensure your organization understands its business needs and future objectives.
          </p>

<ul>
  <li>What business problem are we trying to solve?</li>
  <li>Which departments and stakeholders will use the system?</li>
  <li>Will the software support our business as we grow?</li>
  <li>Does it integrate with our existing ERP, Payroll, CRM or other business systems?</li>
  <li>What is the total cost of ownership, including implementation, support and future upgrades?</li>
  <li>Can the software be configured without extensive customization?</li>
  <li>How easy is it for employees and managers to use?</li>
  <li>What reporting and dashboard capabilities are available?</li>
  <li>What implementation methodology and post-go-live support does the vendor provide?</li>
  <li>Why is this solution a better fit for our business than the alternatives?</li>
</ul>

        </section>

        <section className="article-section">

          <h2>Buy for the Future, Not Just Today</h2>

          <p>
            Selecting software based only on today's requirements often leads to expensive replacements later. Consider long-term business growth, reporting, automation and user adoption before making a final decision.
          </p>

        </section>

        <section className="article-cta">

          <h3>
            Need help evaluating business software?
          </h3>

          <p>
            Let's review your options before you make an investment.
          </p>

          <a
            href="https://calendar.app.google/V6DMvWaMWdj8NPwd8"
            target="_blank"
            rel="noopener noreferrer"
            className="advisory-button"
          >
            Book Strategy Session
          </a>

        </section>

      </div>

    </section>
  );
}

export default BuyingGuideArticle;