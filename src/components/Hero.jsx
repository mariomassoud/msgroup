import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="eyebrow">Management Services Group</p>

          <h1>
            International Management & Administrative Support for Business
            Operations
          </h1>

          <p className="hero-description">
            Management Services Group SAL (Offshore) provides structured
            management, accounting, dispatching, and administrative support
            services to affiliated and international companies.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Contact Us
            </a>
            <a href="#services" className="btn btn-secondary">
              Our Services
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-inner">
            <h3>Operational Support</h3>
            <p>
              Supporting companies with day-to-day operations, coordination,
              and structured workflows.
            </p>

            <div className="stats">
              <div className="stat-box">
                <h2>International</h2>
                <p>Operations</p>
              </div>

              <div className="stat-box">
                <h2>24/7</h2>
                <p>Dispatch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}