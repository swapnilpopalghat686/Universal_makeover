import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Final Submit (no OTP required)
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/appointments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);

        // reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          message: "",
        });

        // redirect after 2 sec
        setTimeout(() => navigate("/"), 2000);
      } else {
        alert(data.message || "Failed to book appointment.");
      }
    } catch (err) {
      alert("Server connection error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 flex justify-center items-center py-10 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl animate-fadeIn">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
          💄 Book Your Appointment
        </h2>

        {success && (
          <p className="text-green-600 text-center font-semibold mb-4">
            ✅ Appointment booked successfully!
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 outline-none"
            />
          </div>

          {/* Phone + Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="p-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 outline-none"
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="p-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 outline-none"
            />
          </div>

          {/* Service */}
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full p-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 outline-none"
          >
            <option value="">Select Service</option>
            <option value="Bridal Makeup">Bridal Makeup</option>
            <option value="Party Look">Party Look</option>
            <option value="Skin Care">Skin Care</option>
            <option value="Hair Styling">Hair Styling</option>
          </select>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message (optional)"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 outline-none"
          ></textarea>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-600 hover:bg-pink-700 transition text-white py-3 rounded-lg font-semibold"
          >
            {loading ? "Submitting..." : "Book Appointment"}
          </button>
        </form>
      </div>
    </div>
  );
}
