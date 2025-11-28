import React from "react";

export default function Gallery() {
  const gallery = [
    {
      category: "Bridal",
      images: [
        "https://img.freepik.com/premium-photo/woman-makeup-looks-into-mirror-is-applying-makeup_1021867-61060.jpg?ga=GA1.1.1434670774.1760877737&semt=ais_hybrid&w=740&q=80",
        "https://img.freepik.com/premium-photo/makeup-artist-applying-elegant-bridal-makeup_1297251-7471.jpg?ga=GA1.1.1434670774.1760877737&semt=ais_hybrid&w=740&q=80",
        "https://img.freepik.com/premium-photo/bride-with-traditional-makeup_981168-5098.jpg",
      ],
    },
    {
      category: "Party",
      images: [
        "https://img.freepik.com/free-photo/female-cabaret-performers-getting-ready-backstage-with-make-up_23-2149430921.jpg?ga=GA1.1.1434670774.1760877737&semt=ais_hybrid&w=740&q=80",
        "https://img.freepik.com/free-photo/female-cabaret-performers-getting-ready-backstage-with-make-up_23-2149430901.jpg",
        "https://img.freepik.com/free-photo/beautiful-girl-black-clothes-posing-with-studio-lights_158538-8421.jpg?ga=GA1.1.1434670774.1760877737&semt=ais_hybrid&w=740&q=80",
      ],
    },
    {
      category: "Festival ",
      images: [
        "https://img.freepik.com/free-photo/beautiful-young-woman-wearing-sari_23-2149502957.jpg?ga=GA1.1.1434670774.1760877737&semt=ais_hybrid&w=740&q=80",
        "https://img.freepik.com/premium-photo/woman-applying-makeup-front-mirror_981168-15713.jpg?ga=GA1.1.1434670774.1760877737&semt=ais_hybrid&w=740&q=80",
        "https://img.freepik.com/premium-photo/image-makeup-artist-doing-bridal-woman-elegant-makeup_1021867-35657.jpg?ga=GA1.1.1434670774.1760877737&semt=ais_hybrid&w=740&q=80",
      ],
    },
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-pink-50 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 text-center mb-4">
          Our Gallery
        </h1>
        <p className="text-center text-gray-700 max-w-2xl mx-auto">
          Explore our stunning looks and transformations for every occasion.
        </p>
      </section>

      {/* Gallery Sections */}
      <section className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {gallery.map((section, idx) => (
          <div key={idx}>
            <h2 className="text-3xl font-bold text-pink-600 mb-6">
              {section.category} Looks
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {section.images.map((img, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
                >
                  <img
                    src={img}
                    alt={`${section.category} ${i + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">
                      {section.category} Look
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="bg-pink-600 py-16 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Inspired by Our Looks?
        </h2>
        <p className="mb-6 text-lg md:text-xl">
          Book your appointment and let us create your perfect look!
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
