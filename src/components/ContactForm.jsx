import { useState } from "react";
import { useAppContext } from "../context/Context";

function ContactForm() {
  const { formData, updateFormData, resetForm } = useAppContext();
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    resetForm();
  };

  return (
    <>
      <section className="form-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact Us</h2>

          <p className="form-subtitle">
            Fill out the form and experience a clean Context API setup.
          </p>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={updateFormData}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={updateFormData}
            required
          />

          <textarea
            name="message"
            placeholder="Write your message"
            rows="5"
            value={formData.message}
            onChange={updateFormData}
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </section>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-card">
            <div className="popup-icon">✓</div>

            <h3>Message Sent!</h3>

            <p>
              Thank you for contacting us. Your message has been submitted
              successfully.
            </p>

            <button
              className="popup-btn"
              onClick={() => setShowPopup(false)}
            >
              Awesome 🚀
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactForm;