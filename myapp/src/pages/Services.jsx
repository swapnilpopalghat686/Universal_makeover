import React from "react";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Bridal Makeup",
      description:
        "Get flawless bridal makeup for your special day with our expert artists.",
      image:
        "https://img.freepik.com/premium-photo/woman-with-makeup-her-face-is-looking-her-makeup_1064589-204015.jpg?ga=GA1.1.1434670774.1760877737&semt=ais_hybrid&w=740&q=80",
      price: "₹5000 - ₹12000",
      specialties: ["Bridal Look", "Traditional Makeup", "Contouring & Highlighting"],
    },
    {
      id: 2,
      title: "Party Looks",
      description:
        "Glamorous and trendy looks for parties and events to shine bright.",
      image:
        "https://img.freepik.com/free-photo/female-cabaret-performers-getting-ready-backstage-with-make-up_23-2149430901.jpg?ga=GA1.1.1434670774.1760877737&semt=ais_hybrid&w=740&q=80",
      price: "₹2000 - ₹5000",
      specialties: ["Evening Makeup", "Photoshoot Ready", "Long-lasting Finish"],
    },
    {
      id: 3,
      title: "Skin & Hair Care",
      description:
        "Professional skin and hair care treatments to enhance your natural beauty.",
      image:
        "https://img.freepik.com/free-photo/makeup-artist-applying-makeup-by-brush_329181-1926.jpg?ga=GA1.1.1434670774.1760877737&semt=ais_hybrid&w=740&q=80",
      price: "₹1500 - ₹4000",
      specialties: ["Facials", "Hair Treatments", "Detox & Glow"],
    },
    {
      id: 4,
      title: "Bridal Hairstyling",
      description:
        "Perfect hairstyles for brides to complement their makeup and outfit.",
      image:
        "https://img.freepik.com/free-photo/bride-getting-ready_23-2148106134.jpg?ga=GA1.1.1434670774.1760877737&semt=ais_hybrid&w=740&q=80",
      price: "₹3000 - ₹7000",
      specialties: ["Updos", "Braids", "Traditional Hairstyles"],
    },
    {
      id: 5,
      title: "Makeup Tutorials",
      description:
        "Learn professional tips and tricks from our expert makeup artists.",
      image:
        "https://img.freepik.com/premium-photo/woman-is-putting-make-up-front-model_981168-5098.jpg?ga=GA1.1.1434670774.1760877737&semt=ais_hybrid&w=740&q=80",
      price: "₹1000 - ₹3000",
      specialties: ["Beginner to Advanced", "Step-by-step Guidance", "Hands-on Practice"],
    },
    {
      id: 6,
      title: "Event Makeup",
      description:
        "Stylish and long-lasting makeup for all your special events.",
      image:
        "https://img.freepik.com/free-photo/portrait-beautiful-happy-bride-with-wedding-makeup-wedding-hairstyle_8353-5815.jpg?ga=GA1.1.1434670774.1760877737&semt=ais_hybrid&w=740&q=80",
      price: "₹2500 - ₹6000",
      specialties: ["Cocktail Parties", "Festivals", "Long-lasting Glam"],
    },
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-pink-50 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 text-center mb-4">
          Our Services
        </h1>
        <p className="text-center text-gray-700 max-w-2xl mx-auto">
          Explore our wide range of beauty services designed to make you shine on every occasion.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay Info */}
              <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white p-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-2xl font-semibold text-pink-400 mb-2">{service.title}</h3>
                <p className="text-sm mb-2">{service.description}</p>
                <p className="font-semibold mb-2">
                  Price: <span className="text-pink-300">{service.price}</span>
                </p>
                <ul className="text-sm space-y-1">
                  {service.specialties.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-pink-600 py-16 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Look?
        </h2>
        <p className="mb-6 text-lg md:text-xl">
          Book your appointment today and let our experts enhance your beauty.
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
