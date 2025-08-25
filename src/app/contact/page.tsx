"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_wyop6sl",
        "template_ad0pyho",
        formData,
        "fh4QfXRBOT4FwcMAQ"
      )
      .then(
        () => alert("Message sent successfully!"),
        (error) => alert("Failed to send message: " + error.text)
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-lg w-full bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name"
            value={formData.name} onChange={handleChange} required
            className="w-full p-3 border rounded-md dark:bg-neutral-700 dark:text-white" />
          <input type="email" name="email" placeholder="Your Email"
            value={formData.email} onChange={handleChange} required
            className="w-full p-3 border rounded-md dark:bg-neutral-700 dark:text-white" />
          <textarea name="message" placeholder="Your Message" rows={4}
            value={formData.message} onChange={handleChange} required
            className="w-full p-3 border rounded-md dark:bg-neutral-700 dark:text-white" />
          <button type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}