import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import './PayrollOutsourcing.css';

const pageUrl = 'https://www.nizamnazir.tech/payroll-outsourcing-uae/';

const coverage = [
  {
    number: '01',
    title: 'Monthly payroll processing',
    text: 'Salary calculations based on approved employee data, pay structures, allowances, deductions and monthly changes.'
  },
  {
    number: '02',
    title: 'WPS & salary file preparation',
    text: 'Preparation and coordination of UAE Wage Protection System salary files where the employer and employees are subject to WPS requirements.'
  },
  {
    number: '03',
    title: 'Leave, overtime & final settlements',
    text: 'Support with payroll inputs for leave, overtime, adjustments and end-of-service calculations based on applicable rules and verified records.'
  },
  {
    number: '04',
    title: 'Payslips & employee records',
    text: 'Structured payroll outputs, payslip distribution arrangements and records to help employees and administrators understand their pay.'
  },
  {
    number: '05',
    title: 'Payroll reports & reconciliation',
    text: 'Monthly summaries, variance checks, cost breakdowns and finance-ready payroll reports based on agreed service requirements.'
  },
  {
    number: '06',
    title: 'Multi-location & growing teams',
    text: 'Explore an operating model that can accommodate different locations, departments, business units and changing employee headcount.'
  }
];

const process = [
  { step: '01', title: 'Understand your setup', text: 'Discuss workforce size, current payroll process, frequency and challenges.' },
  { step: '02', title: 'Define the scope', text: 'Identify the calculations, data, approvals, WPS needs and reports required.' },
  { step: '03', title: 'Review the delivery model', text: 'Explore whether in-house payroll, managed payroll or a hybrid approach makes sense.' },
  { step: '04', title: 'Agree next steps', text: 'Discuss suitable service arrangements, responsibilities and potential onboarding.' }
];

const faqs = [
  {
    question: 'What is payroll outsourcing?',
    answer: 'Payroll outsourcing is an arrangement where a business engages an external provider to manage agreed payroll activities, such as salary calculations, payslip preparation, payroll reports or WPS file preparation. The actual scope depends on the service agreement.'
  },
  {
    question: 'Can a UAE company outsource payroll and still retain control?',
    answer: 'Yes. A business can outsource payroll tasks while retaining approval controls, access to reports and oversight of its payroll data. Outsourcing payroll administration does not remove the employer’s legal obligations to employees.'
  },
  {
    question: 'Does outsourced payroll cover WPS in the UAE?',
    answer: 'Some managed payroll arrangements include preparation or coordination of WPS-compliant salary files. Whether WPS applies, and the exact processing responsibilities, must be confirmed for each employer and service provider.'
  },
  {
    question: 'Is payroll outsourcing suitable for a small business?',
    answer: 'It can be, especially when a business wants dependable monthly payroll support without building a large internal payroll function. The right decision depends on headcount, complexity, data security and cost.'
  },
  {
    question: 'How much does managed payroll cost in Dubai?',
    answer: 'Pricing varies by employee count, pay complexity, number of entities, reporting needs and service level. Share your requirements to discuss an appropriate model; no standard price is implied on this page.'
  },
  {
    question: 'Do you already operate a payroll processing bureau?',
    answer: 'This page is a point of contact for payroll outsourcing enquiries, requirements review and discussion of suitable delivery arrangements. The identity, capabilities and terms of any payroll processing provider would be confirmed before a service agreement.'
  }
];

const metadata = [
  ['name', 'description', 'Explore payroll outsourcing services in Dubai and across the UAE: managed payroll, salary processing, WPS file preparation, payslips and payroll reporting. Discuss your requirements.'],
  ['property', 'og:title', 'Payroll Outsourcing Services UAE | Managed Payroll Advisory'],
  ['property', 'og:description', 'Considering outsourced payroll in Dubai or the UAE? Explore monthly payroll, WPS, payslips and reporting, then request a consultation.'],
  ['property', 'og:url', pageUrl],
  ['name', 'twitter:title', 'Payroll Outsourcing Services UAE | Nizam Nazir'],
  ['name', 'twitter:description', 'Explore payroll outsourcing and managed payroll arrangements for UAE businesses.'],
  ['name', 'robots', 'index,follow']
];

function PayrollOutsourcing() {
  useEffect(() => {
    const previousTitle = document.title;
    const previous = [];
    document.title = 'Payroll Outsourcing Services UAE | Managed Payroll Solutions in Dubai';

    for (const [attr, name, content] of metadata) {
      let tag = document.head.querySelector(`meta[${attr}="${name}"]`);
      const created = !tag;
      const oldContent = tag?.getAttribute('content');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      previous.push({ tag, created, oldContent });
      tag.setAttribute('content', content);
    }

    let canonical = document.head.querySelector('link[rel="canonical"]');
    const createdCanonical = !canonical;
    const previousCanonical = canonical?.getAttribute('href');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageUrl);

    const structuredData = document.createElement('script');
    structuredData.id = 'payroll-outsourcing-schema';
    structuredData.type = 'application/ld+json';
    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Payroll Outsourcing Services in UAE',
      url: pageUrl,
      description: 'Information and consultation for businesses exploring managed payroll services in the United Arab Emirates.',
      about: ['Payroll outsourcing UAE', 'Managed payroll services', 'UAE Wage Protection System', 'Payroll processing Dubai'],
      mainEntity: {
        '@type': 'FAQPage',
        mainEntity: faqs.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer }
        }))
      }
    });
    document.head.appendChild(structuredData);

    return () => {
      document.title = previousTitle;
      previous.forEach(({ tag, created, oldContent }) => {
        if (created) tag.remove();
        else if (oldContent !== null && oldContent !== undefined) tag.setAttribute('content', oldContent);
      });
      if (createdCanonical) canonical.remove();
      else if (previousCanonical) canonical.setAttribute('href', previousCanonical);
      structuredData.remove();
    };
  }, []);

  return (
    <main className="payroll-page">
      <section className="payroll-hero">
        <div className="payroll-hero-inner">
          <div className="payroll-hero-text">
            <div className="payroll-eyebrow">UAE • MANAGED PAYROLL SOLUTIONS</div>
            <h1>Payroll outsourcing for businesses that want more time to focus on growth.</h1>
            <p>
              Exploring payroll outsourcing in Dubai or elsewhere in the UAE?
              Understand your options for monthly salary processing, WPS, payslips,
              reporting and ongoing payroll administration.
            </p>
            <div className="payroll-hero-actions">
              <a className="payroll-primary-btn" href="#contact">Discuss Payroll Requirements <span aria-hidden="true">↗</span></a>
              <a className="payroll-secondary-btn" href="#payroll-services">Explore Services <span aria-hidden="true">↓</span></a>
            </div>
            <p className="payroll-hero-note">Independent enquiry and requirements discussion. Service availability and provider arrangements are confirmed before engagement.</p>
          </div>
          <div className="payroll-hero-panel" aria-label="Payroll workflow overview">
            <div className="payroll-panel-heading"><span className="payroll-panel-dot" /> A clearer payroll process</div>
            <div className="payroll-panel-row"><span className="payroll-panel-icon">01</span><div><strong>Employee data & payroll inputs</strong><span>Accurate records and approved changes</span></div></div>
            <div className="payroll-panel-connector" />
            <div className="payroll-panel-row"><span className="payroll-panel-icon">02</span><div><strong>Calculation & validation</strong><span>Allowances, deductions, leave and overtime</span></div></div>
            <div className="payroll-panel-connector" />
            <div className="payroll-panel-row"><span className="payroll-panel-icon">03</span><div><strong>WPS & payroll outputs</strong><span>Payslips, salary files and finance reports</span></div></div>
            <div className="payroll-panel-footer">Built around your team, approvals and reporting needs</div>
          </div>
        </div>
      </section>

      <section className="payroll-intro payroll-section">
        <div className="payroll-container payroll-intro-grid">
          <div>
            <span className="payroll-label">THE RIGHT OPERATING MODEL</span>
            <h2>Outsource the payroll workload. Keep business oversight.</h2>
          </div>
          <div className="payroll-copy">
            <p>Running payroll involves much more than generating a salary sheet. Every month, HR and finance teams bring together attendance records, leave, overtime, employee changes, allowances and deductions before salaries can be finalized.</p>
            <p>For some organizations, managed payroll services reduce repetitive administration and make responsibilities clearer. For others, a well-configured in-house payroll system remains the better choice.</p>
            <p>The right starting point is understanding your workforce, your current process and which tasks you actually want managed externally.</p>
          </div>
        </div>
      </section>

      <section className="payroll-section payroll-services" id="payroll-services">
        <div className="payroll-container">
          <div className="payroll-section-heading">
            <span className="payroll-label">WHAT MANAGED PAYROLL CAN INCLUDE</span>
            <h2>Payroll support across the monthly cycle</h2>
            <p>These are common service components to consider when defining a payroll outsourcing arrangement in the UAE. The final coverage depends on the provider and agreed scope.</p>
          </div>
          <div className="payroll-service-grid">
            {coverage.map(({ number, title, text }) => (
              <article className="payroll-service-card" key={number}>
                <span className="payroll-card-number">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="payroll-section payroll-benefits">
        <div className="payroll-container payroll-benefits-grid">
          <div>
            <span className="payroll-label">WHO IT MAY SUIT</span>
            <h2>Designed around business complexity, not just employee count.</h2>
            <p>Outsourcing may be worth considering when payroll grows beyond a simple monthly task.</p>
            <a href="#contact" className="payroll-inline-link">Explore your options <span aria-hidden="true">→</span></a>
          </div>
          <div className="payroll-fit-list">
            <div><span className="payroll-check">✓</span><span><strong>SMEs without a dedicated payroll team</strong> looking to simplify recurring administration.</span></div>
            <div><span className="payroll-check">✓</span><span><strong>Project-based and shift-driven businesses</strong> managing variable hours, allowances and multiple cost centres.</span></div>
            <div><span className="payroll-check">✓</span><span><strong>Growing and multi-entity organizations</strong> requiring a consistent process and clearer reporting.</span></div>
            <div><span className="payroll-check">✓</span><span><strong>Finance and HR teams</strong> looking to spend less time on routine payroll preparation.</span></div>
          </div>
        </div>
      </section>

      <section className="payroll-section payroll-process">
        <div className="payroll-container">
          <div className="payroll-section-heading">
            <span className="payroll-label">A PRACTICAL APPROACH</span>
            <h2>Start with a conversation, not a complicated proposal.</h2>
            <p>A focused review makes it easier to decide which payroll activities should remain internal and which could be managed by a specialist.</p>
          </div>
          <div className="payroll-process-grid">
            {process.map(({ step, title, text }) => (
              <div className="payroll-process-step" key={step}>
                <span>{step}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="payroll-section payroll-questions">
        <div className="payroll-container payroll-questions-inner">
          <div className="payroll-section-heading">
            <span className="payroll-label">COMMON QUESTIONS</span>
            <h2>Payroll outsourcing in the UAE: FAQs</h2>
          </div>
          <div className="payroll-faqs">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="payroll-faq">
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
          <p className="payroll-source-note">For official information on wage payment obligations, visit the <a href="https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector/payment-of-wages" target="_blank" rel="noopener noreferrer">UAE Government WPS guidance</a>.</p>
        </div>
      </section>

      <section className="payroll-contact-wrap">
        <div className="payroll-container payroll-contact-top">
          <span className="payroll-label">READY TO DISCUSS YOUR REQUIREMENTS?</span>
          <h2>Let's find a practical approach to your payroll needs.</h2>
          <p>Send your enquiry below. <strong>Payroll Outsourcing</strong> is preselected, so your message arrives clearly labelled.</p>
        </div>
        <Contact defaultService="Payroll Outsourcing" />
        <div className="payroll-container payroll-disclaimer">
          Information on this page is general guidance, not a representation that a named payroll service provider is engaged or that legal or regulatory duties transfer from an employer. The final service scope, provider, responsibilities and data-handling arrangements must be agreed before any processing begins.
          <span> · </span><Link to="/services">View all services</Link>
        </div>
      </section>
    </main>
  );
}

export default PayrollOutsourcing;
