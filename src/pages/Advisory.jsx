import { Link } from "react-router-dom";
import "./Advisory.css";

function Advisory() {
  return (
    <section className="advisory-page">

      <div className="advisory-container">

<p className="advisory-tag">
  Independent Business Systems Advisory
</p>

<h1>
  How do you know you're choosing the right business system?
</h1>

<p className="advisory-intro">
  Every vendor recommends their own solution.
  An independent advisor helps you choose the right one.
</p>


        <a
          href="https://calendar.app.google/V6DMvWaMWdj8NPwd8"
          target="_blank"
          rel="noopener noreferrer"
          className="advisory-button"
        >
          Book a Free 30-Minute Discovery Call
        </a>

      </div>


      <section className="question-section">

        <div className="question-container">

          <p className="thinking-pill">
            Technology Evaluation
          </p>

          <h2>
            Questions Worth Asking Before You Decide
          </h2>

          <p className="question-intro">
            The right technology decision isn't about choosing the software with
            the longest feature list. It's about asking the right questions before
            making an investment.
          </p>

          <div className="question-grid">

  <div className="question-card">

    <span className="question-topic">
      HRMS
    </span>

    <h3>
      Will the HRMS you're evaluating still support your business three years from now?
    </h3>

    <p>
      Choosing an HRMS isn't just about features. It's about ensuring the system can support your business as it grows.
    </p>

    <Link to="/#contact">
      Let's evaluate your requirements →
    </Link>

  </div>

  <div className="question-card">

    <span className="question-topic">
      Payroll
    </span>

    <h3>
      Should payroll be managed internally or outsourced?
    </h3>

    <p>
      The answer depends on your business model, compliance needs, and long-term operational goals—not just cost.
    </p>

    <Link to="/#contact">
      Let's compare both approaches →
    </Link>

  </div>

  <div className="question-card">

    <span className="question-topic">
      CRM
    </span>

    <h3>
      Will your CRM improve customer relationships or become another database?
    </h3>

    <p>
      A CRM should support the way your teams work—not force them into unnecessary complexity.
    </p>

    <Link to="/#contact">
      Let's explore the right fit →
    </Link>

  </div>

  <div className="question-card">

    <span className="question-topic">
      Attendance
    </span>

    <h3>
      Does your workforce need biometric, facial recognition, or something simpler?
    </h3>

    <p>
      The right attendance system depends on how your employees actually work—not what's trending.
    </p>

    <Link to="/#contact">
      Discuss your requirements →
    </Link>

  </div>

  <div className="question-card">

    <span className="question-topic">
      ERP
    </span>

    <h3>
      Are you buying capabilities your business needs—or features you'll never use?
    </h3>

    <p>
      A larger system isn't always a better investment. The right fit matters more than the biggest feature list.
    </p>

    <Link to="/#contact">
      Discuss your requirements →
    </Link>

  </div>

  <div className="question-card">

    <span className="question-topic">
      AI & Automation
    </span>

    <h3>
      Is your business ready for AI, or should you optimize your processes first?
    </h3>

    <p>
      Automation delivers the greatest value when your processes are already well understood.
    </p>

    <Link to="/#contact">
      Discuss your requirements →
    </Link>

  </div>

</div>

</div>

</section>

    </section>
  );
}

export default Advisory;