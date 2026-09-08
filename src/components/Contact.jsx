import { useState } from "react";
import { Link } from "react-router-dom";
import contactImage from "../assets/images/contact-office.webp";
import { contactInfo, services, faqs } from "../data/siteContent";
import Reveal from "./Reveal";

const metrics = [
  { label: "Response Turnaround", value: "1–2 Days", caption: "Business Days" },
  { label: "Confidentiality", value: "Full NDA", caption: "Internal Compliance" },
  { label: "Headquarters", value: "Jbeil, Lebanon", caption: "Mount Lebanon" },
  { label: "Scope Adaptability", value: "9 Core Areas", caption: "Modular or Full" },
];

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");
    const form = event.target;
    try {
      const response = await fetch(contactInfo.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="w-full bg-surface-container-lowest py-space-2xl md:py-space-3xl px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <div className="max-w-[1360px] mx-auto">
          <div className="flex flex-col space-y-space-md">
            <Reveal className="flex flex-wrap items-center justify-between gap-space-sm">
              <div className="flex items-center space-x-space-xs font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                <Link className="hover:text-primary transition-colors" to="/">Home</Link>
                <span className="material-symbols-outlined text-[12px] text-outline">chevron_right</span>
                <span className="text-secondary font-bold">Contact Us</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-surface-container px-space-md py-1 rounded-DEFAULT text-on-surface">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                  Institutional Client Engagement
                </span>
              </div>
            </Reveal>
            <Reveal delay={80} className="space-y-space-sm max-w-4xl">
              <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight">Get in touch</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Whether you need ongoing administrative support or have a specific project in mind, our team is ready to
                discuss how we can help. Reach out directly or send us a message and we'll get back to you.
              </p>
            </Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-gutter-mobile md:gap-gutter-desktop pt-space-md">
              {metrics.map((metric, index) => (
                <Reveal
                  key={metric.label}
                  delay={160 + index * 80}
                  className="bg-surface-container-low p-space-md rounded-DEFAULT space-y-1"
                >
                  <span className="block font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                    {metric.label}
                  </span>
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">{metric.value}</span>
                  <span className="block font-legal-caption text-legal-caption text-secondary">{metric.caption}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info + Form */}
      <section className="w-full py-space-3xl px-margin-mobile md:px-margin-tablet lg:px-margin-desktop bg-surface">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
          {/* Left: office info */}
          <div className="lg:col-span-5 space-y-space-2xl">
            <Reveal className="bg-surface-container-lowest p-space-xl rounded-DEFAULT shadow-sm space-y-space-lg">
              <div className="space-y-space-xs">
                <span className="inline-flex items-center space-x-1.5 font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold bg-surface-container px-space-sm py-1 rounded-DEFAULT">
                  <span className="material-symbols-outlined text-[14px]">location_on</span>
                  <span>Office & Contact</span>
                </span>
                <h2 className="font-headline-md text-headline-md text-primary pt-2">
                  Management Services Group SAL (Offshore)
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Centralized administrative headquarters, operational dispatch, and statutory records located in Jbeil
                  (Byblos), Lebanon.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-DEFAULT aspect-[16/10] shadow-sm border border-outline-variant/30">
                <img src={contactImage} alt="Management Services Group offices" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent p-space-sm text-on-primary">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider block text-secondary-fixed-dim">
                    Jbeil (Byblos), Lebanon
                  </span>
                  <span className="font-legal-caption text-legal-caption text-on-primary-container">Operational Headquarters</span>
                </div>
              </div>
              <div className="space-y-space-sm bg-surface-container-low p-space-md rounded-DEFAULT">
                <div className="flex items-start space-x-space-sm">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">apartment</span>
                  <div>
                    <span className="font-label-md text-label-md uppercase tracking-wide text-primary block">Registered Office</span>
                    <p className="font-body-sm text-body-sm text-on-surface">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-space-sm">
                <div className="flex items-start space-x-space-sm">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">call</span>
                  <div className="w-full space-y-2">
                    <span className="font-label-md text-label-md uppercase tracking-wide text-primary block">Direct Telephony Lines</span>
                    <div className="space-y-1.5">
                      {contactInfo.phones.map((phone) => (
                        <div key={phone.number} className="bg-surface-container px-space-sm py-1.5 rounded-DEFAULT flex items-center justify-between">
                          <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">{phone.label}</span>
                          <a
                            className="font-body-md text-body-md text-primary font-bold hover:text-secondary transition-colors"
                            href={`tel:${phone.number.replace(/\s+/g, "")}`}
                          >
                            {phone.number}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-space-sm">
                <div className="flex items-start space-x-space-sm">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">alternate_email</span>
                  <div className="w-full">
                    <span className="font-label-md text-label-md uppercase tracking-wide text-primary block">Official Electronic Mail</span>
                    <div className="mt-1 flex items-center justify-between bg-surface-container px-space-md py-2 rounded-DEFAULT">
                      <a
                        className="font-body-md text-body-md text-primary font-bold hover:text-secondary transition-colors"
                        href={`mailto:${contactInfo.email}`}
                      >
                        {contactInfo.email}
                      </a>
                      <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Primary Inquiries</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7 space-y-space-xl" id="direct-inquiry">
            <Reveal delay={150} className="bg-surface-container-lowest p-space-xl md:p-space-2xl rounded-DEFAULT shadow-sm">
              <div className="pb-space-lg mb-space-lg space-y-space-xs bg-surface-container-low -mx-space-xl md:-mx-space-2xl -mt-space-xl md:-mt-space-2xl p-space-xl md:p-space-2xl rounded-t-DEFAULT">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">mail</span>
                  Direct Communication Channel
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary">Direct Inquiry Form</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Complete the inquiry form below. All operational, commercial, and financial details submitted to our
                  management desk remain strictly confidential under institutional compliance standards.
                </p>
              </div>

              {status === "success" ? (
                <div className="bg-surface-container p-space-lg rounded-DEFAULT space-y-space-sm border-l-4 border-secondary">
                  <div className="flex items-center space-x-2 text-secondary">
                    <span className="material-symbols-outlined text-[24px]">task_alt</span>
                    <span className="font-headline-sm text-headline-sm font-bold text-primary">Inquiry Submitted Successfully</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface">
                    Thank you for contacting Management Services Group SAL (Offshore). Your inquiry has been logged and
                    assigned to our management desk. We will get back to you within one to two business days.
                  </p>
                  <div className="font-legal-caption text-legal-caption text-on-surface-variant pt-space-xs flex items-center gap-2">
                    <span>For urgent operational matters, reach our switchboard directly:</span>
                    <a className="font-bold text-primary hover:text-secondary underline" href={`tel:${contactInfo.phones[0].number.replace(/\s+/g, "")}`}>
                      {contactInfo.phones[0].number}
                    </a>
                  </div>
                </div>
              ) : (
                <form className="space-y-space-lg" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="space-y-1.5">
                      <label className="block font-label-md text-label-md uppercase tracking-wider text-primary" htmlFor="fullName">
                        Full Name <span className="text-error">*</span>
                      </label>
                      <input
                        className="w-full bg-surface text-on-surface font-body-md text-body-md px-space-md py-2.5 rounded-DEFAULT shadow-sm focus:outline-none focus:bg-surface-container-lowest transition-all"
                        id="fullName"
                        name="name"
                        placeholder="Your full name"
                        required
                        type="text"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block font-label-md text-label-md uppercase tracking-wider text-primary" htmlFor="email">
                        Email Address <span className="text-error">*</span>
                      </label>
                      <input
                        className="w-full bg-surface text-on-surface font-body-md text-body-md px-space-md py-2.5 rounded-DEFAULT shadow-sm focus:outline-none focus:bg-surface-container-lowest transition-all"
                        id="email"
                        name="email"
                        placeholder="you@company.com"
                        required
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="space-y-1.5">
                      <label className="block font-label-md text-label-md uppercase tracking-wider text-primary" htmlFor="company">
                        Company / Affiliation
                      </label>
                      <input
                        className="w-full bg-surface text-on-surface font-body-md text-body-md px-space-md py-2.5 rounded-DEFAULT shadow-sm focus:outline-none focus:bg-surface-container-lowest transition-all"
                        id="company"
                        name="company"
                        placeholder="Company or affiliated group name"
                        type="text"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block font-label-md text-label-md uppercase tracking-wider text-primary" htmlFor="service">
                        Subject / Inquired Service <span className="text-error">*</span>
                      </label>
                      <div className="relative">
                        <select
                          className="w-full bg-surface text-on-surface font-body-md text-body-md px-space-md py-2.5 rounded-DEFAULT shadow-sm focus:outline-none focus:bg-surface-container-lowest transition-all appearance-none pr-10"
                          id="service"
                          name="service"
                          required
                          defaultValue=""
                        >
                          <option disabled value="">
                            Select an inquired service...
                          </option>
                          {services.map((service) => (
                            <option key={service.id} value={service.title}>
                              {service.number}. {service.title}
                            </option>
                          ))}
                          <option value="comprehensive-package">Comprehensive Turnkey Support Package</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-2.5 pointer-events-none text-outline">
                          expand_more
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="block font-label-md text-label-md uppercase tracking-wider text-primary" htmlFor="message">
                      Detailed Message / Requirements <span className="text-error">*</span>
                    </label>
                    <textarea
                      className="w-full bg-surface text-on-surface font-body-md text-body-md p-space-md rounded-DEFAULT shadow-sm focus:outline-none focus:bg-surface-container-lowest transition-all"
                      id="message"
                      name="message"
                      placeholder="Describe your business needs, project scope, operational jurisdictions, current systems, or specific timelines..."
                      required
                      rows={6}
                    />
                  </div>
                  <div className="bg-surface-container-low p-space-md rounded-DEFAULT space-y-space-xs">
                    <label className="flex items-start space-x-space-sm cursor-pointer select-none">
                      <input className="mt-1 w-4 h-4 rounded-DEFAULT bg-surface text-primary focus:ring-0 cursor-pointer" required type="checkbox" />
                      <span className="font-body-sm text-body-sm text-on-surface leading-snug">
                        <strong className="font-semibold text-primary">Confidentiality Affirmation:</strong> I acknowledge that all
                        corporate and operational details transmitted via this form will be handled under strict institutional
                        confidentiality and internal compliance protocols.
                      </span>
                    </label>
                  </div>
                  {status === "error" && (
                    <p className="font-body-sm text-body-sm text-error">
                      Something went wrong sending your inquiry. Please try again, or reach us directly by phone or email.
                    </p>
                  )}
                  <div className="pt-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-md">
                    <button
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-space-sm bg-primary text-on-primary font-label-lg text-label-lg uppercase tracking-wider px-space-2xl py-3.5 rounded-DEFAULT shadow-sm hover:bg-primary-container transition-all disabled:opacity-60"
                      type="submit"
                      disabled={status === "submitting"}
                    >
                      <span>{status === "submitting" ? "Submitting..." : "Submit Inquiry"}</span>
                      <span className="material-symbols-outlined text-[18px] text-secondary-fixed-dim">arrow_forward</span>
                    </button>
                    <div className="flex items-center space-x-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-[18px] text-secondary">verified_user</span>
                      <span className="font-legal-caption text-legal-caption uppercase tracking-wider">
                        Typical Response Time: 1 to 2 Business Days
                      </span>
                    </div>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-surface-container-lowest py-space-3xl px-margin-mobile md:px-margin-tablet lg:px-margin-desktop border-t border-outline-variant/30">
        <div className="max-w-[1360px] mx-auto space-y-space-2xl">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="space-y-space-xs max-w-2xl">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold block">
                Frequently Asked Questions
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">Common Questions</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Answers regarding our engagement models, operational coverage, digital capabilities, and offshore corporate
                structure.
              </p>
            </div>
            <div className="flex items-center space-x-2 bg-surface-container-lowest px-space-md py-2 rounded-DEFAULT shadow-sm">
              <span className="material-symbols-outlined text-secondary text-[20px]">help_outline</span>
              <span className="font-label-md text-label-md text-primary font-semibold">{faqs.length} Guidance Topics</span>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            {faqs.map((faq, index) => (
              <Reveal
                key={faq.question}
                delay={(index % 2) * 100}
                className="bg-surface-container-lowest p-space-xl rounded-DEFAULT shadow-sm space-y-space-xs border-t-2 border-primary"
              >
                <div className="flex items-start space-x-space-sm">
                  <span className="material-symbols-outlined text-secondary text-[22px] mt-0.5 shrink-0">{faq.icon}</span>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold">{faq.question}</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
