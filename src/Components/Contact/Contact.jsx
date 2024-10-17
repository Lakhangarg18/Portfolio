import React, { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); 

    setIsSubmitted(true);

    // Refresh the page after a brief delay (e.g., 2 seconds)
    setTimeout(() => {
      window.location.reload(); // This refreshes the page
    }, 2000);
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      
      {/* Display success message after form submission */}
      {isSubmitted ? (
        <p>Form is submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} method="post">
          <div className="formGroup">
            <label htmlFor="name" hidden>
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="email" hidden>
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="message" hidden>
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              required></textarea>
          </div>
          <input className="hover btn" type="submit" value="Submit" />
        </form>
      )}
    </section>
  );
}

export default Contact;
