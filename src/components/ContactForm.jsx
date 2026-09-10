import React, { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "5e250373-194c-4b5f-a0fd-c67cd436aea3");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        alert("Success! Your message has been sent.");
        e.target.reset();
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-wrapper">
      {/* <h2 className="contact-title">
        Get In <span className="highlight-orange">Touch</span>
      </h2> */}
      <p className="contact-subtitle">
        Have an exciting venture or a challenging build ahead? Reach out today
        to schedule a consulting slot.
      </p>

      <div className="contact-card-container">
        <form
          id="contact-form"
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="form-row">
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>

          <input type="text" name="subject" placeholder="Subject" required />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message Here..."
            required
          ></textarea>

          <button type="submit" className="contact-btn" disabled={isSubmitting}>
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send Message <i className="ph-fill ph-paper-plane-tilt"></i>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
