import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-box">
        <div>
          <p className="section-tag">Contact Us</p>
          <h2>Get in touch</h2>

          <p>
            Management Services Group SAL (Offshore)
            <br />
            Beirut, Lebanon
            <br />
            Email: info@msgrouplb.com
            <br />
            Phone: +961 3 528 335
            <br />
            Phone: +961 76 561 550
            <br />
            Phone: +961 70 515 288
          </p>
        </div>

        <form
          className="contact-form"
          action="https://formspree.io/f/xqewgvzy"
          method="POST"
        >
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="company" placeholder="Company Name" />
          <textarea name="message" rows="5" placeholder="Message" required></textarea>

          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}