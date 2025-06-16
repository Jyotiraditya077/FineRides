import React from 'react';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p>Last updated: March 14, 2025</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to Finerides. Your privacy is important to us, and we are committed to protecting your personal information.
          This Privacy Policy outlines how we collect, use, and protect your data.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <p>We collect the following types of information when you use our services:</p>
        <ul>
          <li><strong>Personal Information:</strong> Name, email address, phone number, and pickup/dropoff location.</li>
          <li><strong>Payment Information:</strong> We process payments securely, but do not store your credit card details.</li>
          <li><strong>Usage Data:</strong> Information about your interactions with our platform, including vehicle bookings and browsing activity.</li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <p>We use the collected information for the following purposes:</p>
        <ul>
          <li>To provide and improve our vehicle rental services.</li>
          <li>To process bookings and send confirmation details.</li>
          <li>To communicate with you about offers, promotions, and service updates.</li>
          <li>To ensure platform security and prevent misuse or fraud.</li>
        </ul>
      </section>

      <section>
        <h2>4. Data Security</h2>
        <p>
          We implement appropriate security measures to safeguard your personal information from unauthorized access, disclosure, or alteration.
          However, please note that no method of transmission over the internet is completely secure.
        </p>
      </section>

      <section>
        <h2>5. Third-Party Services</h2>
        <p>
          We may use third-party services for payment processing, analytics, and communication. These providers are required to handle your data securely and in accordance with this policy.
        </p>
      </section>

      <section>
        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access, update, or request deletion of your personal information.</li>
          <li>Opt-out of marketing or promotional messages.</li>
          <li>Request details on how your data is collected and used.</li>
        </ul>
      </section>

      <section>
        <h2>7. Changes to this Policy</h2>
        <p>
          We may periodically update this Privacy Policy. Any changes will be reflected on this page with a new "Last updated" date.
        </p>
      </section>

      <section>
        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, feel free to reach out to us:
        </p>
        <p>Email: support@finerides.com</p>
      </section>
    </div>
  );
}

export default Privacy;
