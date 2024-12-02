import React, { useState } from "react";
import { Button } from "react-bootstrap";
import emailjs from "emailjs-com"; // Import emailjs library

function EmailSender({ invoiceData, userId, serviceId, templateId, publicKey }) {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  // Function to send email using emailjs service
  const sendEmail = () => {
    setSending(true);
    setStatus("Sending...");

    // Email parameters to be sent (you can customize this as needed)
    const templateParams = {
      user_id: userId, // User ID or email recipient
      invoice_number: invoiceData.invoiceNumber,
      customer_name: invoiceData.customerName,
      product_details: JSON.stringify(invoiceData.products),
      subtotal: invoiceData.totals.subtotal,
      discount: invoiceData.totals.totalDiscount,
      grand_total: invoiceData.totals.grandTotal,
    };

    // Use emailjs to send the email
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(
        (response) => {
          setStatus("Invoice sent successfully!");
          setSending(false);
          console.log("Email sent successfully:", response);
        },
        (error) => {
          setStatus(`Failed to send email: ${error.text}`);
          setSending(false);
        }
      );
  };

  return (
    <div>
      <Button variant="success" onClick={sendEmail} disabled={sending}>
        {sending ? "Sending..." : "Send Invoice to Owner"}
      </Button>
      {status && <p>{status}</p>}
    </div>
  );
}

export default EmailSender;
