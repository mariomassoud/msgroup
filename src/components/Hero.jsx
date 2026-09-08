import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero-headquarters.webp";
import boardroomImage from "../assets/images/boardroom.webp";
import { companyInfo, heroStats, whyUs, services, industries, faqs, contactInfo } from "../data/siteContent";
import Reveal from "./Reveal";

export default function Hero() {
  const featuredServices = services.slice(0, 6);
  const previewFaqs = faqs.slice(0, 4);

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-surface-container-lowest">
        <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-3xl lg:py-space-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
            <Reveal as="div" className="lg:col-span-7 flex flex-col space-y-space-lg">
              <div className="flex items-center space-x-space-sm">
                <span className="w-2.5 h-[1.5px] bg-secondary" />
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                  {companyInfo.tagline}
                </span>
              </div>
              <h1 className="font-headline-xl lg:font-display-lg text-headline-xl lg:text-display-lg text-primary tracking-tight leading-tight">
                {companyInfo.heroHeadline}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                {companyInfo.heroDescription}
              </p>
              <div className="pt-space-sm flex flex-col sm:flex-row items-stretch sm:items-center space-y-space-sm sm:space-y-0 sm:space-x-space-md">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-primary text-on-primary font-label-lg text-label-lg uppercase tracking-wider px-space-xl py-3.5 rounded-DEFAULT hover:bg-primary-container transition-colors shadow-sm"
                >
                  Contact Us
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center bg-surface-container-low text-primary font-label-lg text-label-lg uppercase tracking-wider px-space-xl py-3.5 rounded-DEFAULT border border-secondary/40 hover:border-secondary hover:bg-surface-container transition-colors"
                >
                  Our Services
                </Link>
              </div>
              <div className="pt-space-md flex items-center space-x-space-md text-on-surface-variant/80">
                <span className="material-symbols-outlined text-secondary text-[20px]">verified_user</span>
                <span className="font-legal-caption text-legal-caption uppercase tracking-wider">
                  {companyInfo.badge}
                </span>
              </div>
            </Reveal>
            <Reveal as="div" delay={150} className="lg:col-span-5 relative mt-space-xl lg:mt-0">
              <div className="relative rounded-DEFAULT overflow-hidden shadow-xl bg-surface-container">
                <img
                  src={heroImage}
                  alt="Executive headquarters in Jbeil Byblos Lebanon"
                  className="w-full aspect-4/3 sm:aspect-16/11 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-space-lg text-on-primary space-y-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed-dim">
                      {companyInfo.heroImageCaption.kicker}
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-DEFAULT bg-secondary-fixed-dim/20 text-secondary-fixed-dim font-legal-caption text-legal-caption uppercase tracking-widest">
                      {companyInfo.heroImageCaption.badge}
                    </span>
                  </div>
                  <p className="font-headline-sm text-headline-sm text-on-primary">
                    {companyInfo.heroImageCaption.title}
                  </p>
                  <div className="h-[1px] w-full bg-on-primary/20 my-space-2xs" />
                  <p className="font-legal-caption text-legal-caption text-on-primary/75 tracking-wider">
                    {companyInfo.heroImageCaption.text}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Institutional Metrics Strip */}
      <section className="w-full bg-primary text-on-primary py-space-xl">
        <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-gutter-desktop items-center">
            {heroStats.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={index * 90}
                className="flex flex-col min-w-0 space-y-space-2xs border-l-2 border-secondary-fixed-dim pl-space-md"
              >
                <span className="font-display-lg text-headline-md sm:text-headline-xl text-secondary-fixed-dim font-light tracking-tight break-words">
                  {stat.value}
                </span>
                <span className="font-label-md text-label-md uppercase tracking-widest text-on-primary">{stat.label}</span>
                <span className="font-legal-caption text-legal-caption text-on-primary-container">{stat.caption}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="w-full bg-surface py-space-3xl lg:py-space-4xl">
        <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between pb-space-2xl border-b border-outline-variant/40 gap-space-md">
            <div className="space-y-space-xs max-w-2xl">
              <div className="flex items-center space-x-space-sm">
                <span className="w-2.5 h-[1.5px] bg-secondary" />
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">What We Do</span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-primary">Core Services</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A structured range of management, financial, administrative, and technical services, built to support affiliated and international companies.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center space-x-space-xs font-label-md text-label-md uppercase tracking-wider text-primary hover:text-secondary transition-colors group"
            >
              <span>View All Services</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-space-sm sm:gap-gutter-desktop mt-space-2xl">
            {featuredServices.map((service, index) => (
              <Reveal
                key={service.id}
                delay={(index % 3) * 100}
                className="flex flex-col bg-surface-container-lowest rounded-DEFAULT p-space-sm sm:p-space-lg border border-outline-variant/30 hover:border-secondary shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-DEFAULT bg-primary text-secondary-fixed-dim flex items-center justify-center mb-space-sm sm:mb-space-md">
                  <span className="material-symbols-outlined text-[16px] sm:text-[20px]">{service.icon}</span>
                </div>
                <h3 className="font-headline-sm text-[14px] sm:text-headline-sm text-primary mb-space-xs">{service.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant flex-grow leading-relaxed mb-space-md line-clamp-3 sm:line-clamp-none">
                  {service.description}
                </p>
                <div className="pt-space-xs border-t border-outline-variant/30">
                  <Link
                    to="/services"
                    className="inline-flex items-center space-x-1 font-label-md text-label-md uppercase tracking-wider text-primary group-hover:text-secondary transition-colors"
                  >
                    <span>Learn More</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Operations Feature & Why Us */}
      <section className="w-full bg-surface-container-lowest py-space-3xl lg:py-space-4xl">
        <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
            <Reveal as="div" className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-DEFAULT overflow-hidden shadow-lg bg-surface-container">
                <img src={boardroomImage} alt="Executive boardroom" className="w-full aspect-4/3 sm:aspect-16/11 object-cover" />
                <div className="absolute inset-0 bg-primary/10" />
                <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/95 backdrop-blur-sm p-space-md rounded-DEFAULT border-l-2 border-secondary">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold block">
                    Precision Logistics & Real-Time Scheduling
                  </span>
                  <p className="font-legal-caption text-legal-caption text-on-surface-variant">
                    24/7 Dispatch and coordination functions keeping communications, schedules, and operations strictly aligned.
                  </p>
                </div>
              </div>
            </Reveal>
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-space-lg">
              <Reveal className="space-y-space-xs">
                <div className="flex items-center space-x-space-sm">
                  <span className="w-2.5 h-[1.5px] bg-secondary" />
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                    Why Management Services Group
                  </span>
                </div>
                <h2 className="font-headline-xl text-headline-xl text-primary">Built for Structured, Reliable Coordination</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Every engagement is bounded by four foundational operational tenets designed for seamless execution.
                </p>
              </Reveal>
              <div className="space-y-space-sm">
                {whyUs.map((item, index) => (
                  <Reveal
                    key={item.title}
                    delay={index * 90}
                    className="flex items-start space-x-space-md bg-surface-container-lowest p-space-md rounded-DEFAULT border border-outline-variant/30"
                  >
                    <div className="w-9 h-9 rounded-DEFAULT bg-primary text-secondary-fixed-dim flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-headline-sm text-headline-sm text-primary text-[16px]">{item.title}</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">{item.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="w-full bg-surface py-space-3xl border-b border-outline-variant/40">
        <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
          <Reveal className="bg-surface-container-lowest p-space-xl lg:p-space-2xl rounded-DEFAULT border border-outline-variant/40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
              <div className="lg:col-span-8 space-y-space-md">
                <div className="flex items-center space-x-space-sm">
                  <span className="w-2.5 h-[1.5px] bg-secondary" />
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                    About Management Services Group
                  </span>
                </div>
                <h3 className="font-headline-xl text-headline-lg lg:text-headline-xl text-primary">A Centralized Coordination Partner</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Management Services Group SAL (Offshore) is a Lebanon-registered offshore company that centralizes management,
                  accounting, dispatch, and administrative work for affiliated and international companies, so their teams can
                  focus on running the business rather than the back office. Every engagement is built on discretion, structure,
                  and consistent coordination between affiliated entities and external stakeholders.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-space-xs bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider px-space-xl py-3.5 rounded-DEFAULT hover:bg-primary-container transition-colors"
                >
                  <span>Learn More About Us</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sectors */}
      <section className="w-full bg-primary-container text-on-primary py-space-3xl border-y border-secondary/30">
        <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
          <Reveal className="text-center max-w-2xl mx-auto space-y-space-xs mb-space-2xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed-dim font-bold">
              Target Domains
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-primary">Sectors We Support</h2>
            <p className="font-body-md text-body-md text-on-primary-container">
              Delivering specialized administrative infrastructure across key commercial sectors.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-space-md text-center">
            {industries.map((industry, index) => (
              <Reveal
                key={industry.name}
                delay={(index % 7) * 60}
                className={`bg-primary/60 p-space-md rounded-DEFAULT border border-on-primary/10 flex flex-col items-center justify-center space-y-space-xs ${
                  index === industries.length - 1 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <span className="material-symbols-outlined text-secondary-fixed-dim text-[28px]">{industry.icon}</span>
                <span className="font-label-md text-label-sm uppercase text-on-primary font-semibold">{industry.name}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="w-full bg-surface py-space-3xl lg:py-space-4xl">
        <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between pb-space-xl border-b border-outline-variant/40 gap-space-md">
            <div className="space-y-space-xs max-w-2xl">
              <div className="flex items-center space-x-space-sm">
                <span className="w-2.5 h-[1.5px] bg-secondary" />
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Common Questions</span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-primary">Frequently Asked Questions</h2>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-space-xs font-label-md text-label-md uppercase tracking-wider text-primary hover:text-secondary transition-colors group"
            >
              <span>View All FAQs</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg mt-space-2xl">
            {previewFaqs.map((faq, index) => (
              <Reveal
                key={faq.question}
                delay={(index % 2) * 100}
                className="p-space-lg bg-surface-container-lowest rounded-DEFAULT border border-outline-variant/30 space-y-space-xs"
              >
                <h4 className="font-headline-sm text-headline-sm text-primary text-[16px]">{faq.question}</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{faq.answer}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full bg-surface-container-lowest py-space-3xl lg:py-space-4xl">
        <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
          <Reveal className="bg-surface-container p-space-xl lg:p-space-2xl rounded-DEFAULT border border-outline-variant/50 relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 pointer-events-none flex items-center justify-end pr-space-xl">
              <span className="material-symbols-outlined text-[280px] text-primary">assured_workload</span>
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
              <div className="lg:col-span-8 space-y-space-sm">
                <div className="flex items-center space-x-space-sm">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                    Operational Engagement
                  </span>
                </div>
                <h2 className="font-headline-xl text-headline-xl text-primary">Let's discuss how we can support your operations</h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
                  Connect directly with our management team to structure a tailored coordination and administrative support plan
                  for your organization.
                </p>
                <div className="flex flex-wrap gap-space-md pt-space-xs font-legal-caption text-legal-caption uppercase tracking-wider text-on-surface-variant/80">
                  {["Structured Onboarding", "Multi-Timezone Support", "Strict Discretion"].map((item) => (
                    <span key={item} className="flex items-center space-x-1">
                      <span className="material-symbols-outlined text-[14px] text-secondary">check</span>
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center space-y-space-sm sm:space-y-0 sm:space-x-space-md lg:space-x-0 lg:space-y-space-md w-full">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto lg:w-full inline-flex items-center justify-center bg-primary text-on-primary font-label-lg text-label-lg uppercase tracking-wider px-space-xl py-3.5 rounded-DEFAULT hover:bg-primary-container transition-colors shadow-sm text-center"
                >
                  Contact Us
                </Link>
                <div className="text-right w-full hidden lg:block">
                  <span className="font-legal-caption text-legal-caption text-on-surface-variant block uppercase tracking-wider">
                    Direct Inquiries Line
                  </span>
                  <span className="font-label-md text-label-md text-primary font-semibold">{contactInfo.phones[0].number}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
