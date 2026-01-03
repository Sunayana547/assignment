import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      setStatus("Please fill all required fields.");
      return;
    }

    const data = {
      name: name,
      email: email,
      message: message,
    };

    console.log("Form Data:", data);

    setStatus("Thanks! Your message has been sent.");

    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => {
      setStatus("");
    }, 5000);
  };

  return (
    <div className="container content">
      <div className="contact">
        <h1>Contact Me</h1>

        <p style={{ color: "rgba(25,25,25,0.6)", marginBottom: "30px" }}>
          Have a question or just want to say hi? Feel free to reach out.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
            />
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label>Message *</label>
            <textarea
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
            ></textarea>
          </div>

          {status && (
            <p
              style={{
                marginBottom: "20px",
                color: status.includes("sent") ? "var(--accent-color)" : "red",
                fontSize: "14px",
              }}
            >
              {status}
            </p>
          )}

          <button type="submit" className="btn-hero" style={{ border: "none" }}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
