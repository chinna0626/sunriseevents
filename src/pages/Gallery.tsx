
import { motion } from "framer-motion";

const Gallery = () => {
  const images = [
    "/lovable-uploads/3d8ce9bd-09fc-4705-9a4b-bffbda926f7f.png",
    "/lovable-uploads/2a552d65-3b3f-43c3-af4a-d2e70a6ad35a.png",
    "/lovable-uploads/0d19332c-5fc8-48b1-8010-a3807462a92f.png",
    "/lovable-uploads/8ca4ee82-509d-45de-95d1-1f7323c88587.png",
    "/lovable-uploads/9871001c-f0f7-477e-9dac-daf4415f8f9d.png",
    "/lovable-uploads/bcec5f95-dea0-459f-9a5a-ae9e5f86f69f.png",
    "/lovable-uploads/6f1fa905-ed82-435c-9caf-2936a836672e.png",
    "/lovable-uploads/3207f81d-3c36-4ca2-a14c-bc0adbf5faa4.png",
    "/lovable-uploads/92c557a9-50cc-4eb5-9f5a-2e31d39ad464.png",
    "/lovable-uploads/f846d181-496e-449e-82c1-2ce155ea0531.png",
    "/lovable-uploads/41b7b32b-76fc-4b2a-9881-28cc9c4aa229.png",
    "/lovable-uploads/e6ba18c9-d0c1-4316-b7c6-8927b4e9b305.png",
    "/lovable-uploads/8e5a6e98-0649-4bf6-b928-30d29b472555.png",
    "/lovable-uploads/7f5237fe-be88-4553-b210-e800f5b93c6b.png",
    "/lovable-uploads/02703083-6cc7-481f-baf7-755a852a31eb.png",
    "/lovable-uploads/0a4b5631-2be7-44be-adcb-efecf9ca444c.png",
    "/lovable-uploads/0c373bd2-3da9-488c-a86e-24617fcf9785.png"
  ];

  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-playfair text-gray-900 mb-4">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of stunning birthday celebrations, themed events, and creative balloon decorations that showcase our dedication to creating magical moments.
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
