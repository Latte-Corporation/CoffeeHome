"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const mailPayload = {
      subject: "Take contact from " + formData.fullname,
      message: `Email: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`,
    };

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mailPayload),
      });

      if (!response.ok) throw new Error("Failed to send email");
      setSuccess(true);
      setFormData({ fullname: "", email: "", phone: "", message: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="space-y-12 max-w-xl ms-10 xl:ms-0">
      <div className="space-y-4">
        <h1 className="text-primary text-6xl ">Let&apos;s work together!</h1>
      </div>

      <form className="space-y-12">
        <div className="space-y-1">
          <label className="text-primary text-2xl ">
            What&apos;s your name?
          </label>
          <input
            type="text"
            name="fullname"
            placeholder="Type your full name"
            value={formData.fullname}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-primary py-2 text-primary placeholder-primary/60 focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="space-y-1">
          <label className="text-primary text-2xl ">
            What&apos;s your email address?
          </label>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-primary py-2 text-primary placeholder-primary/60 focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="space-y-1">
          <label className="text-primary text-2xl ">
            What&apos;s your phone number?
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="+33 06 66 66 66 66"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-primary py-2 text-primary placeholder-primary/60 focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="space-y-1">
          <label className="text-primary text-2xl ">
            What&apos;s your request?
          </label>
          <textarea
            rows={4}
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-primary py-2 text-primary placeholder-primary/60 focus:outline-none focus:border-primary transition-colors resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
          disabled={loading}
          onClick={handleSubmit}
        >
          {loading ? "Sending..." : "Send Email"}
        </button>
      </form>
      {success && (
        <p className="text-green-500 mt-2">Email sent successfully!</p>
      )}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}
