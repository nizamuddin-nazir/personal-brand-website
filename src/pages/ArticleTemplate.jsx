import "./ArticleTemplate.css";

function ArticleTemplate() {
  return (
    <section className="article-page">

      <div className="article-container">

        <a href="/articles" className="back-link">
          ← Back to Business Software Buying Guides
        </a>

        <div className="article-cover">
          Article Cover Image
        </div>

        <span className="article-pill">
          HR Software
        </span>

        <h1>
          Article Title
        </h1>

        <p className="article-lead">
          Replace this introduction with the article summary.
        </p>

        <section className="article-section">

          <h2>Section Heading</h2>

          <p>
            Replace this with the article content.
          </p>

          <ul>
            <li>Bullet point</li>
            <li>Bullet point</li>
            <li>Bullet point</li>
          </ul>

        </section>

        <section className="article-cta">

          <h3>
            Planning a software implementation?
          </h3>

          <p>
            Let's discuss your business requirements before you invest.
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

export default ArticleTemplate;