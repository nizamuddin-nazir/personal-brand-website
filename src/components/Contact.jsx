import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

  const form = useRef();

  const [loading, setLoading] = useState(false);

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

        alert("Thank you! Your inquiry has been submitted successfully.");

        form.current.reset();

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

          <h2>Let's discuss your technology requirements</h2>

          <p>
            Whether you're evaluating new business software,
            planning a digital transformation initiative,
            or simply need an independent technology advisor,
            I'd be happy to hear from you.
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

<input
  type="text"
  name="job_title"
  placeholder="Job Title (Optional)"
/>

<textarea
  name="message"
  rows="6"
  placeholder="Tell me about your requirements..."
  required
></textarea>

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