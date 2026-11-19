import "./Contact.css";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact({ defaultService = "" }) {

  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [serviceInterest, setServiceInterest] = useState(defaultService);
  const [message, setMessage] = useState("");
  const isPayrollPage = defaultService === "Payroll Outsourcing";

  useEffect(() => {
    const selectedService = new URLSearchParams(
      window.location.search
    ).get("service");

    if (!defaultService && selectedService) {
      setServiceInterest(selectedService);
    }
  }, [defaultService]);

  const sendEmail = (e) => {

    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_c5ad5cq",
        "template_06hbvrb",
        form.current,
        "Ya65Q_XDOjBaGQS9I"
      )
      .then(() => {

        // Google Ads conversion - successful contact form submission
        if (typeof window.gtag === "function") {
          window.gtag("event", "conversion", {
            send_to: "AW-733744140/UT1oCLaU8-McElyY8N0C",
          });
        }

        alert("Thank you! Your inquiry has been submitted successfully.");

        form.current.reset();
        setServiceInterest(defaultService);
        setMessage("");

        setLoading(false);

      })
      .catch(() => {

        alert("Something went wrong. Please try again.");

        setLoading(false);

      });
  };

  return (
    <section id="contact" className="contact">

      <div className="contact-container">

        <div className="contact-heading">
          <p className="contact-tag">Get in Touch</p>

          <h2>{isPayrollPage ? "Discuss your payroll outsourcing requirements" : "Let's discuss your technology requirements"}</h2>

          <p>
            {isPayrollPage
              ? "Share your workforce size, payroll requirements and questions. I'll get back to you to discuss suitable options and next steps."
              : "Whether you're evaluating new business software, planning a digital transformation initiative, or simply need an independent technology advisor, I'd be happy to hear from you."}
          </p>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >

          <div className="form-row">
            <input
              type="text"
              name="from_name"
              placeholder="Full Name *"
              required
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name *"
              required
            />
          </div>

          <div className="form-row">
            <input
              type="email"
              name="reply_to"
              placeholder="Work Email *"
              required
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number *"
              required
            />
          </div>

          <select
            name="service_interest"
            value={serviceInterest}
            onChange={(e) => setServiceInterest(e.target.value)}
            required
          >
            <option value="" disabled>
              What would you like to discuss? *
            </option>

            <option value="Payroll Outsourcing">
              Payroll Outsourcing
            </option>

            <option value="Software Consulting & Selection">
              Software Consulting & Selection
            </option>

            <option value="Custom Software & Application Development">
              Custom Software & Application Development
            </option>

            <option value="Website Development">
              Website Development
            </option>

            <option value="Google Ads Setup & Support">
              Google Ads Setup & Support
            </option>

            <option value="SEO & Online Marketing">
              SEO & Online Marketing
            </option>

            <option value="YouTube Content Preparation">
              YouTube Content Preparation
            </option>

            <option value="Part-Time or Long-Term Opportunity">
              Part-Time or Long-Term Opportunity
            </option>

            <option value="Other">
              Other
            </option>
          </select>

          {isPayrollPage ? (
            <>
              {/* The existing EmailJS template already receives `message`.
                  Include the lead category there, even if the template
                  does not yet display `service_interest` or `subject`. */}
              <input type="hidden" name="subject" value="Payroll Outsourcing Enquiry - NizamNazir.tech" />
              <input type="hidden" name="lead_source" value="Payroll Outsourcing Landing Page" />
              <input
                type="hidden"
                name="message"
                value={`Lead category: Payroll Outsourcing\nSource: Payroll Outsourcing Landing Page\nSelected service: ${serviceInterest}\n\nCustomer enquiry:\n${message}`}
              />
              <textarea
                name="message_details"
                rows="6"
                placeholder="Tell me about your payroll requirements, approximate number of employees, and any questions..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </>
          ) : (
            <textarea
              name="message"
              rows="6"
              placeholder="Tell me about your requirements..."
              required
            ></textarea>
          )}

          <button
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit Inquiry"}
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;