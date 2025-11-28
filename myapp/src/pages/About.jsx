import React, { useState, useEffect } from "react";
import ownerImg from "../assets/owner.jpeg";



export default function About() {
  const feedbacks = [
    {
      name: "Aarti Sharma",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      feedback:
        "Nandini’s Makeover transformed me completely for my wedding! The team is professional, friendly, and extremely talented.",
    },
    {
      name: "Priya Deshmukh",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      feedback:
        "I loved my party look! The makeup lasted all night and the hairstyle was perfect. Highly recommended.",
    },
    {
      name: "Sneha Patil",
      image: "https://randomuser.me/api/portraits/women/71.jpg",
      feedback:
        "Fantastic experience! The staff is so helpful and creative. My friends couldn’t stop complimenting my festival look.",
    },
    {
      name: "Riya Kulkarni",
      image: "https://randomuser.me/api/portraits/women/72.jpg",
      feedback:
        "I attended a bridal makeup workshop here. The tutorials were clear, and the hands-on guidance was excellent!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [feedbacks.length]);

  return (
    <div className="pt-20">
      {/* About Section with Owner Info */}
      <section className="bg-pink-50 py-16 px-4 md:px-16">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-8 text-center md:text-left">
          About Nandini’s Makeover
        </h1>

        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* Owner Text */}
          <div className="md:w-1/2 space-y-4">
            <p className="text-gray-700 text-lg md:text-xl">
             <b>Miss. Nandini Kadam, founder of Nandini’s Makeover</b>,She's from Bhosari
              and has dedicated her life to enhancing natural beauty. With <b>5 + years </b>
               of experience in bridal, party, and festival makeup, she ensures
              every client feels confident and radiant. Nandini is known for her
              warmth, attention to detail, and personalized approach to each client.
            </p>
            <p className="text-gray-700 text-lg md:text-xl">
              She treats her staff like family, giving them guidance, support,
              and creative freedom, which reflects in the exceptional services
              delivered to clients. Nandini’s Makeover combines professional
              skill with genuine care, making every experience memorable.
            </p>
          </div>

          {/* Owner Image - Slightly Bigger */}
          <div className="md:w-1/3 flex justify-center md:justify-end items-center">
  <img
    src={ownerImg}
    alt="Owner Nandini Kadam"
    className="rounded-2xl w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover shadow-lg"
  />
</div>

        </div>
      </section>

      {/* Feedback Carousel - Full Width */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-8 text-center">
          What Our Clients Say
        </h2>
        <div className="relative">
          {feedbacks.map((fb, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl shadow-lg transition-all duration-700 transform mx-auto max-w-md ${
                index === currentIndex
                  ? "opacity-100 scale-100 relative"
                  : "opacity-0 scale-95 absolute left-0 right-0"
              } bg-pink-50`}
            >
              <div className="flex items-center mb-4">
                <img
                  src={fb.image}
                  alt={fb.name}
                  className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-pink-400"
                />
                <h3 className="text-xl font-semibold text-pink-600">{fb.name}</h3>
              </div>
              <p className="text-gray-700 text-lg">{fb.feedback}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-pink-600 py-16 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Inspired by Our Work?
        </h2>
        <p className="mb-6 text-lg md:text-xl">
          Book your appointment today and let our experts create your dream look!
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
