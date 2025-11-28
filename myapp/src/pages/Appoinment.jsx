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

  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const API = import.meta.env.VITE_API_URL;


  // ✅ Step 1: Send OTP
  const handleSendOtp = async () => {
    if (!formData.email) return alert("Please enter email first!");
    try {
      const res = await fetch(`${API}/api/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }),
      });

      const data = await res.json();
      if (data.success) {
        setOtpSent(true);
        setOtpError("");
      } else {
        setOtpError("Failed to send OTP. Try again.");
      }
    } catch (err) {
      setOtpError("Error sending OTP. Check server connection.");
    }
  };

  // ✅ Step 2: Verify OTP
  const handleVerifyOtp = async () => {
    try {
      const res = await fetch(`${API}/api/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, otp }),
      });

      const data = await res.json();
      if (data.success) {
        setOtpVerified(true);
        setOtpError("");
      } else {
        setOtpVerified(false);
        setOtpError("❌ Invalid OTP! Please try again.");
      }
    } catch (err) {
      setOtpError("Error verifying OTP");
    }
  };

  // ✅ Step 3: Submit Form (only if OTP verified)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otpVerified) {
      setOtpError("⚠ Please verify OTP before booking!");
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch(`${API}/api/appointments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          message: "",
        });
        setOtp("");
        setOtpSent(false);
        setOtpVerified(false);
        setTimeout(() => navigate("/"), 2000);
      } else {
        setOtpError("Failed to save appointment!");
      }
    } catch (err) {
      setOtpError("Error connecting to server");
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

          {/* OTP Section */}
          <div className="space-y-3">
            {!otpSent ? (
              <button
                type="button"
                onClick={handleSendOtp}
                className="w-full bg-blue-500 hover:bg-blue-600 transition text-white py-2 rounded-lg"
              >
                Send OTP
              </button>
            ) : (
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="flex-1 p-3 border border-pink-200 rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={handleVerifyOtp}
                    className="bg-green-500 hover:bg-green-600 transition text-white px-4 rounded-lg"
                  >
                    Verify OTP
                  </button>
                </div>

                {otpVerified && (
                  <p className="text-green-600 font-semibold text-sm">
                    ✔ OTP verified successfully!
                  </p>
                )}
                {otpError && (
                  <p className="text-red-600 font-semibold text-sm">{otpError}</p>
                )}
              </div>
            )}
          </div>

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
