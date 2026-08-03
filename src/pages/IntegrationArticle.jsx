import { Link } from "react-router-dom";
import "./ArticleTemplate.css";
import softwareIntegration from "../assets/SoftwareIntegration.png";

function IntegrationArticle() {
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
    src={softwareIntegration}
    alt="Why ERP and HR Software Should Never Be Planned Separately"
    className="article-cover-image"
  />
</div>

        <span className="article-pill">
          Software Integration
        </span>

        <h1>
          Why ERP and HR Software Should Never Be Planned Separately
        </h1>

        <p className="article-reading-time">
          4 min read
        </p>

        <p className="article-lead">
          HR, Payroll and ERP systems exchange critical business data every day. Planning them independently often leads to duplicate work, inconsistent reporting and expensive integrations later.
        </p>

        <section className="article-section">

          <h2>Think About Integration Before You Buy</h2>

          <p>
            Businesses often select HR and ERP software separately without considering how employee, payroll and finance data will flow between systems.
          </p>

          <ul>
            <li>Map your data flow.</li>
            <li>Identify integration requirements.</li>
            <li>Avoid duplicate data entry.</li>
            <li>Plan for future business growth.</li>
          </ul>

        </section>

        <section className="article-section">

          <h2>Build One Digital Ecosystem</h2>

          <p>
            A connected software ecosystem improves reporting accuracy, reduces manual effort and creates a better experience for employees, managers and finance teams.
          </p>

        </section>

        <section className="article-cta">

          <h3>
            Planning multiple business systems?
          </h3>

          <p>
            Let's design the right software strategy before you invest.
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

export default IntegrationArticle;