import { Link } from "react-router-dom";
import logo from "../assets/Logo/msg-logo-navbar-dark.svg";
import { contactInfo, footerInfo } from "../data/siteContent";

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-on-primary border-t-2 border-secondary-fixed-dim">
      <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop pt-space-3xl pb-space-2xl">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-space-md gap-y-space-xl sm:gap-gutter-desktop pb-space-2xl border-b border-on-primary/10">
          <div className="col-span-2 lg:col-span-4 space-y-space-md">
            <img src={logo} alt="Management Services Group SAL (Offshore)" className="h-9 sm:h-10 w-auto object-contain" />
            <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed max-w-sm">
              {footerInfo.description}
            </p>
            <div className="pt-space-xs flex items-center space-x-space-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-secondary-fixed-dim" />
              <span className="font-legal-caption text-legal-caption uppercase tracking-widest text-secondary-fixed-dim">
                Lebanese Offshore Company
              </span>
            </div>
          </div>
          <div className="lg:col-span-3 space-y-space-md">
            <h3 className="font-label-md text-[11px] sm:text-label-md uppercase tracking-widest text-secondary-fixed-dim font-bold">
              Quick Navigation
            </h3>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-on-primary-container">
              <li><Link className="hover:text-on-primary transition-colors" to="/">Home</Link></li>
              <li><Link className="hover:text-on-primary transition-colors" to="/about">About Us</Link></li>
              <li><Link className="hover:text-on-primary transition-colors" to="/services">Our Services</Link></li>
              <li><Link className="hover:text-on-primary transition-colors" to="/contact">Contact & Inquiries</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-2 space-y-space-md">
            <h3 className="font-label-md text-[11px] sm:text-label-md uppercase tracking-widest text-secondary-fixed-dim font-bold">
              Key Sectors
            </h3>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-on-primary-container">
              <li>Shipping & Maritime</li>
              <li>Logistics & Dispatch</li>
              <li>Trading & Commerce</li>
              <li>Real Estate & Facilities</li>
              <li>Technology & Software</li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-3 space-y-space-md">
            <h3 className="font-label-md text-[11px] sm:text-label-md uppercase tracking-widest text-secondary-fixed-dim font-bold">
              Office & Contact
            </h3>
            <div className="font-body-sm text-body-sm text-on-primary-container space-y-space-xs">
              <p>{contactInfo.address}</p>
              <p className="pt-space-xs">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed-dim block">
                  Email Inquiries
                </span>
                <a className="hover:text-on-primary transition-colors" href={`mailto:${contactInfo.email}`}>
                  {contactInfo.email}
                </a>
              </p>
              <p className="pt-space-xs">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed-dim block">
                  Telephone Lines
                </span>
                {contactInfo.phones.map((phone) => (
                  <a
                    key={phone.number}
                    className="block hover:text-on-primary transition-colors"
                    href={`tel:${phone.number.replace(/\s+/g, "")}`}
                  >
                    {phone.number}
                  </a>
                ))}
              </p>
            </div>
          </div>
        </div>
        <div className="pt-space-lg flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-space-md lg:space-y-0">
          <p className="font-legal-caption text-legal-caption uppercase tracking-wider text-on-primary-container">
            {footerInfo.copyright}
          </p>
          <div className="flex space-x-space-md">
            <Link
              className="font-legal-caption text-legal-caption uppercase tracking-wider text-on-primary-container hover:text-secondary-fixed-dim transition-colors"
              to="/about"
            >
              Corporate Disclosures
            </Link>
            <span className="text-on-primary/20">•</span>
            <Link
              className="font-legal-caption text-legal-caption uppercase tracking-wider text-on-primary-container hover:text-secondary-fixed-dim transition-colors"
              to="/contact"
            >
              Confidentiality & Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
