"use client";
import React, { useState } from "react";
import axios from "axios";
import {
  FaSpinner,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    carName: "",
    carModel: "",
    carPlate: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await axios.post(
        "https://shinecrewbackend.onrender.com/contact",
        formData
      ); // <-- add await
      setStatus("sent");
      setFormData({
        name: "",
        email: "",
        phone: "",
        carName: "",
        carModel: "",
        carPlate: "",
        message: "",
      });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      console.error("Error sending form:", err); // optional for debugging
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };
  

  return (
    <section
      className="flex flex-col md:flex-row w-full min-h-screen"
      id="contact"
    >
      {/* Left Image Section */}
      <div
        className="hidden md:block w-full md:w-[35%] bg-cover bg-center"
        style={{ backgroundImage: "url('/left.png')" }}
      />

      {/* Right Form Section */}
      <div
        className="w-full md:w-[65%] bg-cover bg-center relative flex justify-center items-center p-6"
        style={{ backgroundImage: "url('/right.png')" }}
      >
        <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 md:p-10 w-full max-w-4xl">
          <p className="text-red-600 font-bold uppercase text-sm">
            Why Choose Us
          </p>
          <h2 className="text-3xl font-bold leading-tight mb-6">
            Have Questions? <br />
            Get in <span className="text-red-500 italic">Touch!</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                label="Car Name"
                name="carName"
                value={formData.carName}
                onChange={handleChange}
              />
              <Input
                label="Car Model"
                name="carModel"
                value={formData.carModel}
                onChange={handleChange}
              />
              <Input
                label="Car Plate"
                name="carPlate"
                value={formData.carPlate}
                onChange={handleChange}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
                placeholder="Tell us what you need help with..."
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className={`w-full flex justify-center items-center gap-2 py-3 rounded-md font-medium text-white transition-all
                ${
                  status === "sending"
                    ? "bg-yellow-500"
                    : status === "sent"
                    ? "bg-green-600"
                    : status === "error"
                    ? "bg-red-800"
                    : "bg-red-600 hover:bg-red-700"
                }
              `}
            >
              {status === "sending" && <FaSpinner className="animate-spin" />}
              {status === "sent" && <FaCheckCircle />}
              {status === "error" && <FaExclamationTriangle />}
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                ? "Message Sent!"
                : status === "error"
                ? "Error! Try Again"
                : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Input({ label, name, value, onChange, required = false }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
        placeholder={label}
      />
    </div>
  );
}
