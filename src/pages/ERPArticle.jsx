import { Link } from "react-router-dom";
import "./ArticleTemplate.css";

function ERPArticle() {
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
          Article Cover Image
        </div>

        <span className="article-pill">
          ERP Strategy
        </span>

        <h1>
          Why Most ERP & HR Software Projects Fail Before Implementation Begins
        </h1>

        <p className="article-reading-time">
          5 min read
        </p>

        <p className="article-lead">
          Successful ERP implementations begin long before vendor demonstrations. Most project failures occur because organizations start evaluating software before defining business requirements and implementation objectives.
        </p>

        <section className="article-section">

          <h2>Planning Comes Before Software</h2>

          <p>
            Before comparing vendors, organizations should clearly understand their current processes, reporting requirements, approval workflows, integrations and future business goals.
          </p>

          <ul>
            <li>Define project objectives.</li>
            <li>Document existing business processes.</li>
            <li>Identify reporting requirements.</li>
            <li>Involve all business stakeholders.</li>
          </ul>

        </section>

        <section className="article-section">

          <h2>Choose a Solution, Not Just Features</h2>

          <p>
            The best ERP is not necessarily the one with the longest feature list. The right solution is the one that supports your business today while remaining flexible for future growth.
          </p>

        </section>

        <section className="article-cta">

          <h3>
            Planning an ERP project?
          </h3>

          <p>
            Let's review your business requirements before you invest.
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

export default ERPArticle;