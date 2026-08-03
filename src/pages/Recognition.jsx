import "./Recognition.css";
import innovationAward from "../assets/innovation.jpg";
import centuryRecognition from "../assets/CEO recognition.png";
import auicAward from "../assets/AUIC.jpg";
import jumeirahLetter from "../assets/Jumeirah Appreciation.jpeg";
function Recognition() {
  return (
    <section className="advisory-page">

      <div className="advisory-container">

        <p className="advisory-tag">
          Professional Recognition
        </p>

        <h1>
          Recognition Earned Through Results
        </h1>

        <p className="advisory-intro">
          A selection of awards, customer appreciation, and leadership recognition
          received throughout my professional career.
        </p>

      </div>

      <section className="question-section">

<div className="question-container">

<div className="recognition-grid">

    <div className="recognition-card">

      <img
        src={centuryRecognition}
        alt="Century of Platform Deal"
        className="recognition-image portrait"
      />

      <div className="recognition-content">

        <span className="question-topic">
          Bayzat • 2025
        </span>

        <h3>
          Century of Platform Deal
        </h3>

        <p>
          Public recognition for successfully acquiring over 100 new platform customers and consistently driving new business growth.
        </p>

      </div>

    </div>

    <div className="recognition-card">

<img
  src={innovationAward}
  alt="Best Innovation Award 2024"
  className="recognition-image"
/>

      <div className="recognition-content">

  <span className="question-topic">
    Bayzat • 2024
  </span>

  <h3>
    Best Innovation Award
  </h3>

  <p>
    Awarded for creating new business opportunities through innovation, strategic thinking, and delivering measurable business impact.
  </p>

</div>

    </div>

    <div className="recognition-card">

      <img
        src={auicAward}
        alt="Business Development Award"
        className="recognition-image"
      />

      <div className="recognition-content">

        <span className="question-topic">
          AUIC • 2022
        </span>

        <h3>
          Business Development Award
        </h3>

        <p>
          Recognized for outstanding contribution to business development and consistently delivering value through customer engagement and commercial excellence.
        </p>

</div>

    </div>

    <div className="recognition-card">

      <img
        src={jumeirahLetter}
        alt="Jumeirah Pre-Opening HRMS Implementation"
        className="recognition-image portrait"
      />

      <div className="recognition-content">

        <span className="question-topic">
          Jumeirah • 2013
        </span>

        <h3>
          Jumeirah Pre-Opening HRMS Implementation
        </h3>

        <p>
          Recognized for successfully supporting the pre-opening implementation of the OASYS HR System, contributing to the successful launch of Jumeirah Messilah Beach Hotel & Spa, Kuwait.
        </p>

      </div>

      </div>

    </div>

</div>

  </section>

      </section>
  );
}

export default Recognition;