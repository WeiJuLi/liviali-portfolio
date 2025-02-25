import "../styles/Contact.css";

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-card">
          <a href="mailto:liviali.dev@gmail.com" className="contact-item">
            <div className="contact-info">
              <h3>Email</h3>
              <p>liviali.dev@gmail.com</p>
            </div>
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-item">
            <div className="contact-info">
              <h3>Phone</h3>
              <div className="phone-numbers">
                <div className="phone-region">
                  <p className="region-label">If you live in Taiwan:</p>
                  <p className="phone-number">(+886) 0988-378-036</p>
                </div>
                <div className="phone-region">
                  <p className="region-label">If you live in the USA:</p>
                  <p className="phone-number">(+1) 571-277-7792</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-card">
          <a
            href="https://www.linkedin.com/in/livia-li-209891142/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <div className="contact-info">
              <h3>LinkedIn</h3>
              <p>Connect with me</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
