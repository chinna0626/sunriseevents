
import { motion } from "framer-motion";

const Gallery = () => {
  // Placeholder for gallery items - to be replaced with actual images
  const items = Array(9).fill(null);

  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-playfair text-gray-900 mb-4">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of stunning event decorations and setups.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="aspect-square bg-gray-100 rounded-lg overflow-hidden"
            >
              <div className="w-full h-full bg-gray-200 animate-pulse" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
