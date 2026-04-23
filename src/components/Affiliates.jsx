import "./Affiliates.css";

export default function Affiliates() {
  return (
    <section id="affiliates" className="section light-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-tag">Affiliates</p>
          <h2>Affiliated Entities</h2>
        </div>

        <div className="affiliates-grid">
          <div className="affiliate-card">
            <h3>International Affiliations</h3>
            <p>
              Management Services Group SAL (Offshore) operates within an
              international structure and provides support to affiliated
              entities across multiple jurisdictions.
            </p>
          </div>

          <div className="affiliate-card">
            <h3>Operational Coordination</h3>
            <p>
              The company facilitates coordination, administrative alignment,
              and structured support between associated entities to ensure
              efficient and consistent operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}