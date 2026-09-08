import { Link } from "react-router-dom";
import governanceImage from "../assets/images/governance-leadership.webp";
import registryImage from "../assets/images/legal-registry-archives.webp";
import { aboutContent } from "../data/siteContent";
import Reveal from "./Reveal";

export default function About() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="w-full bg-surface-container-lowest">
        <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop pt-space-2xl pb-space-xl">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-space-sm mb-space-md">
            <Link className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors" to="/">
              Home
            </Link>
            <span className="font-label-sm text-label-sm text-outline-variant">/</span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">About Us</span>
          </nav>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-xl">
            <Reveal as="div" className="max-w-3xl">
              <div className="inline-flex items-center space-x-space-sm bg-surface-container-high px-3 py-1 mb-space-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">About Us</span>
              </div>
              <h1 className="font-display-lg text-display-lg text-primary tracking-tight font-normal">
                Corporate Structure & International Coordination
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-md leading-relaxed">{aboutContent.intro[0]}</p>
            </Reveal>
            <Reveal
              as="div"
              delay={150}
              className="hidden lg:flex flex-col items-end text-right border-l border-outline-variant/30 pl-space-xl py-space-xs"
            >
              <span className="font-headline-lg text-headline-lg text-primary font-light tracking-tight">SAL (Offshore)</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold mt-1">
                Société Anonyme Libanaise
              </span>
              <span className="font-legal-caption text-legal-caption text-on-surface-variant mt-1">
                Registered Domicile • Jbeil, Lebanon
              </span>
            </Reveal>
          </div>
          <div className="w-full h-px bg-outline-variant/30 mt-space-xl relative">
            <div className="w-16 h-px bg-secondary absolute left-0 top-0" />
          </div>
        </div>
      </section>

      {/* Centralized Administration */}
      <section className="w-full bg-surface py-space-3xl">
        <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
            <Reveal as="div" className="lg:col-span-7 space-y-space-lg pr-0 lg:pr-space-xl">
              <div className="space-y-space-xs">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                  Centralized Operational Nexus
                </span>
                <h2 className="font-headline-xl text-headline-xl text-primary font-normal">Centralized Administration & Coordination</h2>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">{aboutContent.intro[1]}</p>
              <div className="bg-surface-container-lowest p-space-lg shadow-sm space-y-space-sm">
                <h3 className="font-headline-sm text-headline-sm text-primary">Operational Alignment Across Jurisdictions</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{aboutContent.intro[2]}</p>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{aboutContent.intro[3]}</p>
            </Reveal>
            <Reveal as="div" delay={150} className="lg:col-span-5">
              <div className="relative bg-surface-container-low p-space-xs shadow-md">
                <img src={governanceImage} alt="Executive coordination suite" className="w-full h-auto object-cover" />
                <div className="bg-primary text-on-primary p-space-md mt-space-xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed-dim block">
                        Executive Chambers
                      </span>
                      <span className="font-body-sm text-body-sm text-on-primary-container">
                        Administrative Coordination Directorate • Lebanon
                      </span>
                    </div>
                    <span className="font-label-md text-label-md text-secondary-fixed-dim font-bold">SAL OFFSHORE</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Affiliates */}
      <section className="w-full bg-surface-container-lowest py-space-2xl">
        <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
          <Reveal className="bg-surface-container-lowest p-space-xl md:p-space-2xl shadow-sm">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-space-sm mb-space-sm">
                <span className="material-symbols-outlined text-secondary text-2xl">hub</span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Affiliates</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary font-normal mb-space-md">
                International Coordination & Shared Support
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg pt-space-xs">
                {aboutContent.affiliates.map((affiliate, index) => (
                  <Reveal
                    key={affiliate.title}
                    delay={index * 100}
                    className="bg-surface-container-high/60 p-space-lg rounded-DEFAULT"
                  >
                    <div className="flex items-center space-x-2 mb-space-xs">
                      <span className="material-symbols-outlined text-secondary text-lg">{affiliate.icon}</span>
                      <h3 className="font-headline-sm text-headline-sm text-primary">{affiliate.title}</h3>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface leading-relaxed">{affiliate.description}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Registered Seat */}
      <section className="w-full bg-surface py-space-3xl">
        <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
          <Reveal className="max-w-3xl mb-space-xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold block mb-space-2xs">
              Statutory Domicile & Registry
            </span>
            <h2 className="font-headline-xl text-headline-xl text-primary font-normal">{aboutContent.registeredSeat.title}</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm leading-relaxed">
              {aboutContent.registeredSeat.intro}
            </p>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
            <Reveal as="div" className="lg:col-span-7 bg-surface-container-lowest p-space-md shadow-md flex flex-col justify-between">
              <div>
                <img src={registryImage} alt="Corporate registry archives" className="w-full aspect-video object-cover" />
                <div className="pt-space-md">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Registered Seat</span>
                  <h3 className="font-headline-md text-headline-md text-primary mt-1">Administrative Seat • Jbeil, Lebanon</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs leading-relaxed">
                    Duly registered as a Société Anonyme Libanaise (SAL) offshore company in Jbeil, providing centralized
                    coordination, accounting, compliance, and dispatch facilities.
                  </p>
                </div>
              </div>
              <div className="mt-space-md pt-space-sm flex flex-wrap items-center gap-space-md bg-surface-container-low/50 p-space-sm">
                <span className="font-legal-caption text-legal-caption uppercase tracking-wider text-primary font-semibold flex items-center">
                  <span className="material-symbols-outlined text-sm mr-1 text-secondary">location_on</span> Jbeil, Lebanon
                </span>
                <span className="font-legal-caption text-legal-caption uppercase tracking-wider text-on-surface-variant">
                  Société Anonyme Libanaise
                </span>
                <span className="font-legal-caption text-legal-caption uppercase tracking-wider text-on-surface-variant">
                  SAL Offshore Status
                </span>
              </div>
            </Reveal>
            <div className="lg:col-span-5 flex flex-col space-y-space-md">
              <Reveal delay={100} className="bg-surface-container-lowest p-space-md shadow-md">
                <div className="pt-space-sm">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Operations Center</span>
                  <h4 className="font-headline-sm text-headline-sm text-primary mt-1">{aboutContent.registeredSeat.operationsCenter.title}</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs leading-relaxed">
                    {aboutContent.registeredSeat.operationsCenter.description}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200} className="bg-primary text-on-primary p-space-lg shadow-md flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed-dim block mb-space-xs">
                    Statutory Mandate
                  </span>
                  <h4 className="font-headline-sm text-headline-sm text-on-primary mb-space-sm">Offshore Regulatory Framework</h4>
                  <ul className="space-y-space-xs font-body-sm text-body-sm text-on-primary-container">
                    {aboutContent.registeredSeat.mandate.map((item) => (
                      <li key={item.label} className="flex items-start space-x-2">
                        <span className="material-symbols-outlined text-secondary-fixed-dim text-sm mt-1">check_circle</span>
                        <span>
                          <strong>{item.label}:</strong> {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-space-md mt-space-md border-t border-on-primary/10">
                  <span className="font-legal-caption text-legal-caption text-on-primary/60 block">
                    Jbeil, Lebanon • Operating within international business frameworks.
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="w-full bg-surface-container-lowest py-space-3xl">
        <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
          <Reveal className="text-center max-w-2xl mx-auto mb-space-3xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold block mb-space-2xs">
              Operating Principles
            </span>
            <h2 className="font-headline-xl text-headline-xl text-primary font-normal">How We Operate</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
              Four foundational standards directing our management, documentation, and coordination across international
              operations.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-sm sm:gap-gutter-desktop">
            {aboutContent.principles.map((principle, index) => {
              const isLast = index === aboutContent.principles.length - 1;
              return (
                <Reveal
                  key={principle.title}
                  delay={(index % 4) * 100}
                  className={`p-space-sm sm:p-space-lg shadow-sm flex flex-col justify-between ${
                    isLast ? "bg-primary text-on-primary" : "bg-surface"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-space-sm">
                      <span className={`font-headline-lg text-headline-lg font-light ${isLast ? "text-secondary-fixed-dim" : "text-secondary"}`}>
                        0{index + 1}
                      </span>
                      <span
                        className={`font-label-sm text-[9px] sm:text-label-sm uppercase px-2 py-0.5 font-bold whitespace-nowrap ${
                          isLast ? "bg-secondary text-on-secondary" : "bg-surface-container-highest text-primary"
                        }`}
                      >
                        {principle.tag}
                      </span>
                    </div>
                    <h3 className={`font-headline-sm text-headline-sm mb-space-xs ${isLast ? "text-on-primary" : "text-primary"}`}>
                      {principle.title}
                    </h3>
                    <p className={`font-body-sm text-body-sm leading-normal ${isLast ? "text-on-primary-container" : "text-on-surface-variant"}`}>
                      {principle.description}
                    </p>
                  </div>
                  <div className={`pt-space-md mt-space-md ${isLast ? "border-t border-on-primary/10" : ""}`}>
                    <span
                      className={`font-legal-caption text-legal-caption uppercase font-semibold block ${
                        isLast ? "text-secondary-fixed-dim" : "text-outline"
                      }`}
                    >
                      {principle.footnote}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-surface-container-lowest py-space-3xl">
        <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
          <Reveal className="bg-surface-container-lowest p-space-xl md:p-space-2xl shadow-sm flex flex-col lg:flex-row items-center justify-between gap-space-xl">
            <div className="max-w-2xl space-y-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Institutional Dialogue</span>
              <h2 className="font-headline-lg text-headline-lg text-primary font-normal">
                Let's discuss how we can support your operations
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Connect with our administration team in Jbeil, Lebanon to explore coordination, dispatch, compliance, and
                back-office services for your affiliated entities.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-space-sm sm:space-y-0 sm:space-x-space-md w-full lg:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider px-space-xl py-3.5 hover:bg-primary-container transition-all duration-150 shadow-sm text-center"
              >
                Contact Us
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent text-primary font-label-md text-label-md uppercase tracking-wider px-space-lg py-3.5 hover:bg-surface-container-high transition-all duration-150 text-center"
              >
                Explore Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
