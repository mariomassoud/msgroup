import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo/msg-logo-navbar.svg";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-surface-container-lowest border-b transition-shadow duration-300 ${
        scrolled ? "border-outline-variant/40 shadow-md" : "border-transparent shadow-none"
      }`}
    >
      <div className="h-20 max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between">
        <NavLink to="/" className="flex items-center group shrink-0 min-w-0" onClick={() => setOpen(false)}>
          <img src={logo} alt="Management Services Group SAL (Offshore)" className="h-7 sm:h-9 lg:h-10 w-auto object-contain max-w-[220px] sm:max-w-none" />
        </NavLink>
        <div className="flex items-center space-x-space-sm lg:space-x-space-lg">
          <nav className="hidden lg:flex items-center space-x-space-lg">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `relative font-label-lg text-label-lg uppercase py-2 transition-colors duration-200 active:scale-95 after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-px after:h-0.5 after:bg-secondary after:transition-transform after:duration-300 after:origin-left ${
                    isActive
                      ? "text-primary font-bold after:scale-x-100"
                      : "text-on-surface-variant hover:text-primary after:scale-x-0 hover:after:scale-x-100"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center space-x-space-md lg:pl-space-md lg:border-l border-outline-variant/40">
            <NavLink
              to="/contact"
              className="hidden lg:inline-flex items-center justify-center whitespace-nowrap bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider px-space-lg py-2.5 rounded-DEFAULT border border-primary hover:bg-primary-container hover:border-primary-container hover:shadow-md active:scale-95 transition-all duration-150 shadow-sm"
            >
              Contact Us
            </NavLink>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((prev) => !prev)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-DEFAULT border border-outline-variant/40 text-primary hover:bg-surface-container-low hover:border-secondary/50 active:scale-90 transition-all duration-150"
            >
              <span className="material-symbols-outlined text-[24px]">{open ? "close" : "menu"}</span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[1.5px] bg-outline-variant/30 relative">
        <div className="w-24 h-[1.5px] bg-secondary-fixed-dim absolute left-1/2 -translate-x-1/2" />
      </div>

      {open && (
        <nav className="lg:hidden bg-surface-container-lowest border-b border-outline-variant/40 shadow-md">
          <div className="px-margin-mobile py-space-sm flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-label-lg text-label-lg uppercase py-space-md px-space-sm -mx-space-sm rounded-DEFAULT border-b border-outline-variant/30 last:border-b-0 transition-colors duration-150 active:scale-[0.98] ${
                    isActive
                      ? "text-primary font-bold bg-surface-container-low"
                      : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-space-md inline-flex items-center justify-center bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider px-space-lg py-3 rounded-DEFAULT hover:bg-primary-container active:scale-95 transition-all duration-150"
            >
              Contact Us
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
}
