import { useState } from "react";
import "./Contact.css";

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDataSubmit = (e) => {
    e.preventDefault();
    alert("Data Received");
    console.log(contact);
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleDataSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            placeholder="Enter your name"
            value={contact.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={contact.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            className="form-textarea"
            placeholder="Enter your message"
            value={contact.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="form-group">
          <button type="submit" className="form-button">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
