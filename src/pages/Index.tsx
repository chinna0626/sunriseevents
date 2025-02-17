
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Wedding Decoration",
    description: "Transform your special day with our elegant wedding decorations.",
    icon: Heart,
  },
  {
    title: "Reception Setup",
    description: "Create memorable moments with our stunning reception setups.",
    icon: Users,
  },
  {
    title: "Event Planning",
    description: "Let us handle the details while you enjoy your celebration.",
    icon: Calendar,
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/wedding1.jpg",
    "/reception1.jpg",
    "/sangeet1.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide})`,
              }}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-playfair text-white mb-6"
            >
              Creating Unforgettable Moments
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 mb-8"
            >
              Transform your special occasions into magical experiences with our expert event planning and decoration services
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to="/booking"
                className="inline-flex items-center px-8 py-3 bg-gold hover:bg-gold-dark text-white rounded-full transition-colors"
              >
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair text-gray-900 mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <service.icon className="w-12 h-12 text-gold mb-6" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-gold hover:text-gold-dark"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gold-light/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair text-gray-900 mb-6">
            Ready to Create Your Dream Event?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's work together to bring your vision to life
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-gold hover:bg-gold-dark text-white rounded-full transition-colors"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
