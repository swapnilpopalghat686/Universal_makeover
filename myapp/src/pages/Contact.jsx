import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-pink-50 py-16 px-4 md:px-16">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4 text-center">
          Contact Us
        </h1>
        <p className="text-center text-gray-700 max-w-2xl mx-auto">
          We’d love to hear from you! Send us a message, book your appointment, or get in touch for any queries.
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 py-20 flex flex-col md:flex-row gap-10">
        {/* Contact Form */}
        <div className="md:w-1/2 bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-500">
          {submitted && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg animate-pulse">
              Your message has been sent!
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="peer w-full border-b-2 border-gray-300 focus:border-pink-500 outline-none py-2 placeholder-transparent transition duration-300"
                placeholder="Your Name"
              />
              <label className="absolute left-0 -top-3 text-gray-500 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all duration-300">
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="peer w-full border-b-2 border-gray-300 focus:border-pink-500 outline-none py-2 placeholder-transparent transition duration-300"
                placeholder="Your Email"
              />
              <label className="absolute left-0 -top-3 text-gray-500 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all duration-300">
                Your Email
              </label>
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="peer w-full border-b-2 border-gray-300 focus:border-pink-500 outline-none py-2 placeholder-transparent transition duration-300 resize-none"
                placeholder="Your Message"
              ></textarea>
              <label className="absolute left-0 -top-3 text-gray-500 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all duration-300">
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transform hover:scale-105 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="md:w-1/2 space-y-6 flex flex-col justify-center">
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-500 flex items-center gap-4">
            <span className="text-pink-600 text-2xl">📞</span>
            <div>
              <h4 className="font-semibold text-pink-600">Phone</h4>
              <p className="text-gray-700">+91 98765 43210</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-500 flex items-center gap-4">
            <span className="text-pink-600 text-2xl">📧</span>
            <div>
              <h4 className="font-semibold text-pink-600">Email</h4>
              <p className="text-gray-700">nandinismakeover@gmail.com</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-500 flex items-center gap-4">
            <span className="text-pink-600 text-2xl">📍</span>
            <div>
              <h4 className="font-semibold text-pink-600">Address</h4>
              <p className="text-gray-700">
                Near Ganesh Temple , Bhosari , Pune-39
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-pink-600 py-16 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Want to Book Your Appointment?
        </h2>
        <p className="mb-6 text-lg md:text-xl">
          Reach out to us today and get your personalized beauty session!
        </p>
        <a
          href="/appointment"
          className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
        >
          Book Appointment
        </a>
      </section>
    </div>
  );
}
