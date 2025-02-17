
import { motion } from "framer-motion";

const Gallery = () => {
  const images = [
    "/lovable-uploads/bfa69b1e-e72e-4838-97ca-4be8483a2c0a.png",
    "/lovable-uploads/ba6a5b82-21e6-4c8a-ba26-228ed167a58f.png",
    "/lovable-uploads/353e7571-b6ea-4f92-9b1e-77c88d12d195.png",
    "/lovable-uploads/0b37e406-ad06-42bd-896d-d6386df99e28.png",
    "/lovable-uploads/88871474-0f2a-4023-89ab-6854ae8544ad.png",
    "/lovable-uploads/24324590-8d2c-493f-b95b-bbc298e81b0b.png",
    "/lovable-uploads/3f8ce3dc-d345-4ebf-8003-02270d8e0537.png",
    "/lovable-uploads/68fd9b3f-eda9-49ff-9b96-e0558ba883cd.png",
    "/lovable-uploads/62c4f3b2-e605-495c-b524-8cbdeda860b0.png",
  ];

  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-playfair text-gray-900 mb-4">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of stunning event decorations and setups that showcase our dedication to creating magical moments.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:shadow-xl"
            >
              <img
                src={image}
                alt="Event decoration"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
