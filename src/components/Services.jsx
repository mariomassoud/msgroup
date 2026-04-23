import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="section-tag">Our Services</p>
          <h2>Comprehensive Business Support</h2>
        </div>

        <div className="cards-grid">
          <div className="service-card">
            <h3>Accounting & Financial Coordination</h3>
            <p>
              Managing financial records, invoicing, and intercompany financial
              coordination.
            </p>
          </div>

          <div className="service-card">
            <h3>Operations Management</h3>
            <p>
              Oversight and coordination of daily business activities and
              workflows.
            </p>
          </div>

          <div className="service-card">
            <h3>Dispatch & Scheduling</h3>
            <p>
              Managing scheduling, job assignments, and real-time dispatch
              coordination.
            </p>
          </div>

          <div className="service-card">
            <h3>Administrative Support</h3>
            <p>
              Documentation, reporting, and internal communication management.
            </p>
          </div>

          <div className="service-card">
            <h3>Facility Management Support</h3>
            <p>
              Supporting facility management operations and coordination.
            </p>
          </div>

          <div className="service-card">
            <h3>Compliance & Documentation</h3>
            <p>
              Maintaining proper records and internal compliance processes.
            </p>
          </div>

          <div className="service-card">
            <h3>Client & Vendor Coordination</h3>
            <p>
              Managing communication between stakeholders and teams.
            </p>
          </div>

          <div className="service-card">
            <h3>Business Process Support</h3>
            <p>
              Improving workflows and operational efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}