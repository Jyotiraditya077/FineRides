import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, ChevronLeft, Loader2, CheckCircle, Phone } from "lucide-react";
import "./ContactUs.css";

const ContactUs = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const data = {
        access_key: import.meta.env.VITE_ACCESS_KEY,
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to submit form. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <button onClick={() => navigate("/")} className="back-btn" aria-label="Back to home">
          <ChevronLeft size={24} />
        </button>

        <div className="contact-header">
          <h1>Contact FineRides</h1>
          <p>Have questions or need support with your booking? We’re here to help!</p>
        </div>

        {error && <div className="error-msg">{error}</div>}
        {isSuccess && (
          <div className="success-msg">
            <CheckCircle size={20} /> Message sent successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <div className="input-group">
            <Mail className="icon" size={20} />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <div className="input-group">
            <Phone className="icon" size={20} />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <textarea
            name="message"
            placeholder="Let us know how we can assist with your rental."
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
            disabled={isLoading}
          ></textarea>

          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? (
              <div className="flex items-center gap-2">
                <Loader2 className="loading-icon" size={20} />
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
