import { Link } from "react-router-dom";
import serviceAccounting from "../assets/images/service-accounting.webp";
import serviceOperations from "../assets/images/service-operations.webp";
import serviceDispatch from "../assets/images/service-dispatch.webp";
import serviceAdmin from "../assets/images/service-admin.webp";
import serviceFacility from "../assets/images/service-facility.webp";
import serviceCompliance from "../assets/images/service-compliance.webp";
import serviceVendorCoordination from "../assets/images/service-vendor-coordination.webp";
import serviceBusinessProcess from "../assets/images/service-business-process.webp";
import serviceSoftwareDev from "../assets/images/service-software-dev.webp";
import { services, processSteps, industries, faqs } from "../data/siteContent";

const serviceImages = {
  accounting: serviceAccounting,
  operations: serviceOperations,
  dispatch: serviceDispatch,
  admin: serviceAdmin,
  facility: serviceFacility,
  compliance: serviceCompliance,
  coordination: serviceVendorCoordination,
  process: serviceBusinessProcess,
  software: serviceSoftwareDev,
};

const embeddedFaqs = faqs.slice(1, 4);

export default function Services() {
  return (
    <div className="flex flex-col w-full">
      {/* Editorial Header */}
      <section className="w-full bg-surface-container-lowest py-space-2xl md:py-space-3xl">
        <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
          <div className="flex items-center space-x-space-xs text-on-surface-variant font-label-md text-label-md uppercase tracking-wider mb-space-md">
            <Link className="hover:text-primary transition-colors" to="/">Home</Link>
            <span className="text-outline">/</span>
            <span className="text-primary font-bold">Our Services</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-end">
            <div className="lg:col-span-8 space-y-space-md">
              <div className="inline-flex items-center space-x-2 bg-surface-container px-3 py-1 rounded-DEFAULT">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                  Our Services • Operational & Technical Support
                </span>
              </div>
              <h1 className="font-headline-xl text-headline-xl md:font-display-lg md:text-display-lg text-primary tracking-tight">
                Comprehensive Business Support
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                Management Services Group SAL (Offshore) provides a structured range of management, financial, administrative,
                and technical services to affiliated and international companies. Each service is designed to reduce the
                operational burden on affiliated businesses so their teams can focus on their core activities.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-end space-y-space-md bg-surface-container-lowest p-space-lg rounded-DEFAULT shadow-sm">
              <div className="flex items-center justify-between pb-2">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Service Scope</span>
                <span className="font-label-sm text-label-sm uppercase text-secondary font-bold">9 Core Pillars</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Delivery Model</span>
                <span className="font-body-sm text-body-sm font-semibold text-primary">Individual or Full Package</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Headquarters</span>
                <span className="font-body-sm text-body-sm font-semibold text-primary">Jbeil, Lebanon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Jump */}
      <section className="w-full bg-surface-container py-space-sm shadow-sm sticky top-20 z-40">
        <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between overflow-x-auto">
          <div className="flex items-center space-x-space-md whitespace-nowrap py-1">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Quick Jump:</span>
            {services.map((service, index) => (
              <span key={service.id} className="flex items-center space-x-space-md">
                {index > 0 && <span className="text-outline-variant/60">•</span>}
                <a
                  className="font-label-md text-label-md uppercase text-primary hover:text-secondary font-semibold transition-colors"
                  href={`#service-${service.number}`}
                >
                  {service.number} {service.title.split(" ")[0]}
                </a>
              </span>
            ))}
          </div>
          <div className="hidden lg:flex items-center space-x-2 text-on-surface-variant font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-sm">verified_user</span>
            <span>Turnkey Operational Infrastructure</span>
          </div>
        </div>
      </section>

      {/* Service Articles */}
      <section className="w-full bg-background py-space-3xl">
        <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop space-y-space-4xl">
          {services.map((service, index) => {
            const imageFirst = index % 2 !== 0;
            return (
              <article
                key={service.id}
                id={`service-${service.number}`}
                className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-stretch"
              >
                <div
                  className={`lg:col-span-6 flex flex-col justify-between bg-surface-container-lowest p-space-xl md:p-space-2xl rounded-DEFAULT shadow-sm ${
                    imageFirst ? "order-2 lg:order-2" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-space-sm">
                      <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                        Service {service.number} • {service.eyebrow}
                      </span>
                      <span className="bg-surface-container-high text-on-surface font-label-sm text-label-sm px-2.5 py-0.5 rounded-DEFAULT">
                        {service.category}
                      </span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-primary mb-space-md">{service.title}</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md bg-surface-container-low p-space-md rounded-DEFAULT mb-space-lg">
                      {service.features.map((feature) => (
                        <div key={feature.title} className="space-y-1">
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold block">
                            {feature.title}
                          </span>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-space-md">
                    <span className="font-legal-caption text-legal-caption text-outline uppercase tracking-wider">
                      {service.footnote}
                    </span>
                    <Link
                      to="/contact"
                      className="inline-flex items-center space-x-2 text-primary font-label-md text-label-md uppercase tracking-wider hover:text-secondary transition-colors font-semibold"
                    >
                      <span>{service.ctaLabel}</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
                <div
                  className={`lg:col-span-6 relative overflow-hidden rounded-DEFAULT shadow-sm aspect-4/3 sm:aspect-16/10 lg:aspect-auto lg:min-h-full ${
                    imageFirst ? "order-1 lg:order-1" : ""
                  }`}
                >
                  <img src={serviceImages[service.id]} alt={service.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-space-lg">
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">
                      {service.captionKicker}
                    </span>
                    <span className="font-body-sm text-body-sm text-inverse-on-surface">{service.captionText}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="w-full bg-surface-container-lowest py-space-3xl">
        <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
          <div className="max-w-2xl mb-space-2xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold block mb-space-xs">
              Our Process
            </span>
            <h2 className="font-headline-xl text-headline-xl text-primary tracking-tight mb-space-sm">How We Work</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Every engagement follows the same structured path, from initial consultation through to ongoing coordination and
              review, so affiliated entities know what to expect at each stage.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-sm sm:gap-gutter-desktop">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-surface-container-lowest p-space-sm sm:p-space-lg rounded-DEFAULT shadow-sm flex flex-col justify-between relative overflow-hidden"
              >
                <div className="space-y-space-sm sm:space-y-space-md">
                  <div className="flex items-center justify-between">
                    <span className="font-display-lg text-headline-lg sm:text-display-lg text-secondary-fixed-dim/40 font-bold">{step.step}</span>
                    <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">{step.icon}</span>
                  </div>
                  <h3 className="font-headline-sm text-[14px] sm:text-headline-sm text-primary">{step.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed line-clamp-3 sm:line-clamp-none">{step.description}</p>
                </div>
                <div className="pt-space-sm sm:pt-space-md mt-space-sm sm:mt-space-md bg-surface-container-low p-2 sm:p-2.5 rounded-DEFAULT">
                  <span className="font-label-sm text-[9px] sm:text-label-sm uppercase tracking-wider text-primary block font-bold">Focus Area</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">{step.focusArea}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries + FAQ */}
      <section className="w-full bg-background py-space-3xl">
        <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop space-y-space-3xl">
          <div className="bg-surface-container-lowest p-space-xl md:p-space-2xl rounded-DEFAULT shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md pb-space-lg border-b border-outline-variant/40 mb-space-xl">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold block mb-space-xs">
                  Industries We Support
                </span>
                <h3 className="font-headline-lg text-headline-lg text-primary">Sectors We Work With</h3>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-DEFAULT">
                Multi-Sector Administrative Infrastructure
              </span>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed mb-space-xl">
              Our services are adaptable across a range of industries, giving affiliated companies in the following sectors
              access to the same structured administrative and operational support.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-sm sm:gap-space-md">
              {industries.map((industry, index) => (
                <div
                  key={industry.name}
                  className={`bg-surface-container-low p-space-sm sm:p-space-md rounded-DEFAULT border-l-2 border-secondary ${
                    index === industries.length - 1 ? "col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-center space-x-2 text-primary font-headline-sm text-[14px] sm:text-headline-sm mb-1">
                    <span className="material-symbols-outlined text-secondary text-lg sm:text-xl shrink-0">{industry.icon}</span>
                    <span>{industry.name}</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 sm:line-clamp-none">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface-container-lowest p-space-xl md:p-space-2xl rounded-DEFAULT shadow-sm">
            <div className="mb-space-xl">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold block mb-space-xs">
                Clarifications
              </span>
              <h3 className="font-headline-lg text-headline-lg text-primary">Questions About Our Services</h3>
            </div>
            <div className="space-y-space-md">
              {embeddedFaqs.map((faq) => (
                <div key={faq.question} className="bg-surface-container-low p-space-lg rounded-DEFAULT">
                  <h4 className="font-headline-sm text-headline-sm text-primary mb-space-xs flex items-center space-x-2">
                    <span className="material-symbols-outlined text-secondary text-lg">help_outline</span>
                    <span>{faq.question}</span>
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-primary-container text-on-primary py-space-3xl relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
            <div className="lg:col-span-8 space-y-space-md">
              <div className="inline-flex items-center space-x-2 bg-on-primary/10 px-3 py-1 rounded-DEFAULT">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed" />
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">
                  Operational Partnership
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl md:font-display-lg md:text-display-lg text-on-primary">
                Let's discuss how we can support your operations
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl leading-relaxed">
                Connect with our team to explore tailored dispatch, accounting, administrative, facility, and software
                development services for your organization.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center space-y-space-md sm:space-y-0 sm:space-x-space-md lg:space-x-0 lg:space-y-space-md">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-secondary-container text-on-secondary-container hover:bg-secondary hover:text-on-secondary font-label-md text-label-md uppercase tracking-widest px-space-xl py-4 rounded-DEFAULT transition-all duration-200 shadow-md w-full sm:w-auto text-center font-bold"
              >
                Contact Us
              </Link>
              <div className="text-left lg:text-right">
                <span className="font-legal-caption text-legal-caption text-on-primary-container uppercase tracking-wider block">
                  Direct Operational Liaison
                </span>
                <span className="font-body-sm text-body-sm text-on-primary/70">Prompt consultation and custom proposal delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
