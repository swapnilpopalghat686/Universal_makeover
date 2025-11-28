import React from "react";

export default function Home() {
  const services = [
    {
      title: "Bridal Makeup",
      description: "Flawless makeup for your big day.",
      photo: "https://t4.ftcdn.net/jpg/13/49/16/11/360_F_1349161120_patlKork1XFnrU41QLi2Yfp9Z78HDqMu.jpg",
    },
    {
      title: "Party Looks",
      description: "Glamorous looks for every occasion.",
      photo: "https://t3.ftcdn.net/jpg/06/71/42/14/360_F_671421499_DsbnCRmnQMlJUi86lVDYFKJCt94Q8SnW.jpg",
    },
    {
      title: "Skin & Hair Care",
      description: "Professional treatments to enhance beauty.",
      photo: "https://plus.unsplash.com/premium_photo-1663040200187-af646778fbd0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJlYXV0eSUyMHNob3B8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
    },
  ];

  const galleryPhotos = [
    "https://img.freepik.com/free-photo/professional-artist-put-make-up-powder-model-eyelids_231208-3596.jpg?semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/free-photo/makeup-artist-applying-makeup-by-brush_329181-1926.jpg?semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/premium-photo/shadow-artist_1195898-271.jpg?semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/premium-photo/makeup-artist-apply-makeup_114963-241.jpg?semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/premium-photo/elegant-woman-receiving-professional-makeup-events-weddings-photoshoots_776674-1111363.jpg?semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/premium-photo/indian-bride-makeup-session-with-professional-artist-makeup-artist-touching-up-indian-bride_1284935-3661.jpg?semt=ais_hybrid&w=740&q=80",
  ];

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section
        className="w-full h-[90vh] bg-cover bg-center relative flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhdXR5JTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-white">
          {/* Left Content */}
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nandini’s Makeover
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Enhance your natural beauty with our professional services.
            </p>
            <a
              href="/appointment"
              className="bg-pink-600 hover:bg-pink-700 transition duration-300 px-6 py-3 rounded-lg font-semibold shadow-lg"
            >
              Book Appointment
            </a>
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src="https://img.freepik.com/premium-photo/process-making-makeup-make-up-artist-working-with-brush-model-face-portrait-young-woman-beauty-saloon-interior_104603-5948.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Makeover"
              className="rounded-2xl shadow-2xl w-full max-w-md transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <img
            src="https://plus.unsplash.com/premium_photo-1663047609863-c0f4682d0ef7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGJlYXV0eSUyMHNob3B8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000"
            alt="About"
            className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-pink-600 mb-4">
            About Us
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            At Nandini’s Makeover, we specialize in enhancing your natural beauty. Our expert team provides makeup, skincare, and haircare services tailored to your needs.
          </p>
          <p className="text-gray-700 text-lg">
            Whether it’s bridal, party, or daily looks, we ensure you feel confident and beautiful every time.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-pink-50 py-20">
        <h2 className="text-3xl font-bold text-pink-600 mb-12 text-center">
          Our Services
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-500 transform hover:-translate-y-2"
            >
              <img
                src={service.photo}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-pink-600 mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-pink-600 mb-12 text-center">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryPhotos.map((photo, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition duration-500"
            >
              <img
                src={photo}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-pink-600 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2025 Nandini’s Makeover. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-200">Facebook</a>
            <a href="#" className="hover:text-gray-200">Instagram</a>
            <a href="#" className="hover:text-gray-200">WhatsApp</a>
          </div>
        </div>
      </footer> */}

      <section className="bg-pink-600 py-20 text-center text-white relative overflow-hidden">
  {/* Decorative circles for animation */}
  <div className="absolute top-0 left-0 w-40 h-40 bg-pink-400 rounded-full opacity-30 animate-ping"></div>
  <div className="absolute bottom-0 right-0 w-60 h-60 bg-pink-500 rounded-full opacity-20 animate-pulse"></div>

  <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
    Ready to Book Your Appointment?
  </h2>
  <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-sm">
    Reach out today and get your personalized beauty session with Nandini’s Makeover. 
    Let us create a look that will make you shine on any occasion!
  </p>
  <a
    href="/appointment"
    className="inline-block bg-white text-pink-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition duration-300 shadow-lg"
  >
    Book Appointment
  </a>
</section>
    </div>
  );
}
