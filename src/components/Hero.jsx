import './Hero.css';
import nizamImage from '../assets/nizam.png';
import { FaLinkedin, FaBriefcase, FaRocket } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SiGooglemeet } from "react-icons/si";

function Hero() {
return (
  <>
    <section className="hero">

      <div className="hero-content">
<p className="hero-tagline">
  Business Systems Advisory • Automation • Digital Transformation
</p>

<p className="hero-name">
  Nizamuddin Ahamed Nazir
</p>

<h1>
  Helping Organizations Make Better Business Software Decisions
</h1>
<div className="hero-description">

  <p>I help organizations:</p>

<ul className="hero-list">
  <li>Choose the right business solutions</li>
  <li>Avoid costly implementation mistakes</li>
  <li>Make confident investment decisions</li>
</ul>
</div>

<div className="hero-highlights">
  <span className="hero-pill">15+ Years UAE Experience</span>
  <span className="hero-pill">200+ Projects Sold & Delivered</span>
  <span className="hero-pill">Based in Dubai</span>
</div>

      <div className="hero-buttons">

<a
  href="https://calendar.app.google/V6DMvWaMWdj8NPwd8"
  target="_blank"
  rel="noopener noreferrer"
  className="primary-btn"
>
<SiGooglemeet />
<span>Book Strategy Session</span>
</a>

<a
  href="https://www.linkedin.com/in/nizamuddin-nazir-99519a11a/"
  target="_blank"
  rel="noopener noreferrer"
  className="secondary-btn"
>
  <FaLinkedin />
  <span>View My Experience</span>
</a>

</div>

            </div>

      <div className="hero-image">
        <img
          src={nizamImage}
          alt="Nizamuddin Ahamed Nazir"
        />
      </div>

    </section>

    <div className="section-divider"></div>
  </>
  );
}

export default Hero;