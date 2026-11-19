import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

import softwareConsultingImage from "../assets/software consulting service.png";
import customSoftwareImage from "../assets/custom software service.png";
import websiteImage from "../assets/website sme service.png";
import googleAdsImage from "../assets/google ads service.png";
import seoImage from "../assets/seo service.png";
import contentImage from "../assets/content service.png";

const services = [
  {
    category: "Software Advisory",
    title: "Software Consulting & Selection",
    description:
      "Get independent guidance to define business requirements, prepare tailored RFI or RFP documents, evaluate HRMS, ERP, CRM, payroll and other solutions, and avoid costly technology decisions. Where existing products are unsuitable, a custom software approach can also be explored.",
    image: softwareConsultingImage,
    alt: "Software consulting and business software selection support in Dubai",
    value: "Software Consulting & Selection",
  },
  {
    category: "Payroll Advisory",
    title: "Payroll Outsourcing Services in UAE",
    description:
      "Explore managed payroll options for UAE businesses, from monthly salary processing and WPS files to payslips, final settlements and payroll reporting. Discuss your requirements and suitable delivery arrangements.",
    image: softwareConsultingImage,
    alt: "Payroll outsourcing and processing advisory for UAE businesses",
    value: "Payroll Outsourcing",
    page: "/payroll-outsourcing-uae/",
  },
  {
    category: "Custom Technology",
    title: "Custom Software & Application Development",
    description:
      "Develop practical software based on your specific requirements—from integration tools and workflow applications to web applications, mobile applications, payroll solutions, reporting tools and other purpose-built business systems.",
    image: customSoftwareImage,
    alt: "Custom software, web application and mobile application development",
    value: "Custom Software & Application Development",
  },
  {
    category: "Web Development",
    title: "Websites for Small Businesses",
    description:
      "Create a modern, mobile-compatible and SEO-enabled website for your business, or modernize an existing outdated website. Both static and dynamic websites can be developed with a professional design that is easy to navigate and manage.",
    image: websiteImage,
    alt: "Modern mobile-compatible website development for small businesses",
    value: "Website Development",
  },
  {
    category: "Online Advertising",
    title: "Google Ads Setup & Support",
    description:
      "Reach potential customers who are actively searching for your products or services. Get support with keyword planning, campaign setup, audience targeting, conversion tracking and ongoing Google Ads management.",
    image: googleAdsImage,
    alt: "Google Ads campaign setup, tracking and optimization support",
    value: "Google Ads Setup & Support",
  },
  {
    category: "Digital Visibility",
    title: "SEO & Online Marketing",
    description:
      "Build and maintain your online visibility through website management, SEO configuration, metadata optimization, analytics, email campaigns and practical online marketing support.",
    image: seoImage,
    alt: "SEO, website management and online marketing support",
    value: "SEO & Online Marketing",
  },
  {
    category: "Video Content",
    title: "YouTube Content Preparation",
    description:
      "Create professional YouTube content for your business, including video topics, scripts, presentation material and structured content that clearly communicates your products, services and expertise.",
    image: contentImage,
    alt: "YouTube content planning and video presentation preparation for businesses",
    value: "YouTube Content Preparation",
  },
];

function setMetaTag(attribute, key, content) {
  let tag = document.head.querySelector(
    `meta[${attribute}="${key}"]`
  );

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function Services() {
  useEffect(() => {
    const homeTitle =
      "Nizamuddin Nazir | Business Automation Advisor | HRMS, ERP & Digital Transformation";

    const homeDescription =
      "Independent Business Automation Advisor in Dubai helping organizations select HRMS, ERP, Payroll and Business Software with confidence. Avoid costly technology mistakes through vendor-neutral consulting.";

    document.title =
      "Software Consultant, Website Developer & Digital Marketing Specialist in Dubai | Nizam Nazir";

    setMetaTag(
      "name",
      "description",
      "Dubai-based support for software consulting, custom applications, small-business websites, Google Ads, SEO, online marketing and YouTube content preparation."
    );

    setMetaTag(
      "property",
      "og:title",
      "Software, Website & Digital Marketing Services | Nizam Nazir"
    );

    setMetaTag(
      "property",
      "og:description",
      "Software consulting, custom applications, small-business websites, Google Ads, SEO and YouTube content support in Dubai."
    );

    setMetaTag(
      "property",
      "og:url",
      "https://www.nizamnazir.tech/services"
    );

    setMetaTag(
      "name",
      "twitter:title",
      "Software, Website & Digital Marketing Services | Nizam Nazir"
    );

    setMetaTag(
      "name",
      "twitter:description",
      "Dubai-based support for software consulting, websites, Google Ads, SEO and YouTube content preparation."
    );

    let canonical = document.head.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      "https://www.nizamnazir.tech/services"
    );

    const existingStructuredData = document.getElementById(
      "services-structured-data"
    );

    if (existingStructuredData) {
      existingStructuredData.remove();
    }

    const structuredData = document.createElement("script");

    structuredData.type = "application/ld+json";
    structuredData.id = "services-structured-data";

    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      name: "Technology and Digital Services",
      url: "https://www.nizamnazir.tech/services",
      description:
        "Software consulting, custom applications, website development, Google Ads, SEO, online marketing and YouTube content preparation in Dubai.",
      mainEntity: {
        "@type": "Person",
        name: "Nizamuddin Ahamed Nazir",
        url: "https://www.nizamnazir.tech",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dubai",
          addressCountry: "AE",
        },
        knowsAbout: [
          "Software Consulting",
          "Business Software Selection",
          "Custom Software Development",
          "Website Development",
          "Google Ads",
          "Search Engine Optimization",
          "Online Marketing",
          "YouTube Content Preparation",
        ],
      },
    });

    document.head.appendChild(structuredData);

    return () => {
      document.title = homeTitle;

      setMetaTag(
        "name",
        "description",
        homeDescription
      );

      canonical?.setAttribute(
        "href",
        "https://www.nizamnazir.tech/"
      );

      document
        .getElementById("services-structured-data")
        ?.remove();
    };
  }, []);

  return (
    <main className="services-page">
      <section className="services-intro">
        <div className="services-intro-container">
          <p className="services-tag">
            Technology & Digital Services
          </p>

          <h1>Services I Can Support You With</h1>

          <p className="services-intro-text">
            Based in Dubai, I support small and growing businesses
            with software consulting, custom applications, website
            development, Google Ads, SEO, online marketing and
            YouTube content. I am also open to part-time,
            project-based and long-term opportunities.
          </p>
        </div>
      </section>

      <section className="services-list-section">
        <div className="services-list">
          {services.map((service) => (
            <article
              className="service-card"
              key={service.title}
            >
              <img
                src={service.image}
                alt={service.alt}
                className="service-card-image"
              />

              <div className="service-card-content">
                <span className="service-category">
                  {service.category}
                </span>

                <h2>{service.title}</h2>

                <p>{service.description}</p>

                <Link
                  to={service.page || `/?service=${encodeURIComponent(service.value)}#contact`}
                  className="service-connect-link"
                >
                  {service.page ? "Explore Payroll Outsourcing →" : "Connect With Me →"}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-cta">
        <div className="services-cta-container">
          <h2>Have a Project or Opportunity in Mind?</h2>

          <p>
            Let&apos;s discuss how I can support your software,
            website or digital marketing requirements.
          </p>

          <Link
            to="/#contact"
            className="services-cta-button"
          >
            Connect With Me
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Services;