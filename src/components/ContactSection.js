import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="bg-background text-foreground py-16 px-8 flex flex-col items-center text-center rounded-lg shadow-lg max-w-5xl mx-auto">
      {/* Heading */}
      <motion.h3
        className="text-5xl font-bold text-primary mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.h3>

      {/* Description */}
      <motion.p
        className="text-lg text-accent mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        We would love to hear from you! Reach out to us via email, phone, or visit us at our office.
      </motion.p>

      {/* Contact Info Grid */}
      <div className="w-full bg-secondary p-8 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center md:space-x-8">
        {/* Email Section */}
        <motion.div
          className="text-center md:text-left flex flex-col items-center md:items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <FaEnvelope className="text-4xl text-highlight mb-2" />
          <h4 className="text-2xl font-semibold text-highlight">Email</h4>
          <p className="mt-2 text-lg">
            <a href="mailto:info@sigmamanufacturing.com" className="text-accent hover:underline">
              info@sigmamanufacturing.com
            </a>
          </p>
        </motion.div>

        {/* Phone Section */}
        <motion.div
          className="text-center md:text-left flex flex-col items-center md:items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <FaPhoneAlt className="text-4xl text-highlight mb-2" />
          <h4 className="text-2xl font-semibold text-highlight">Phone</h4>
          <p className="mt-2 text-lg">
            <a href="tel:+919876543210" className="text-accent hover:underline">
              +91 98765 43210
            </a>
          </p>
        </motion.div>

        {/* Address Section */}
        <motion.div
          className="text-center md:text-left flex flex-col items-center md:items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <FaMapMarkerAlt className="text-4xl text-highlight mb-2" />
          <h4 className="text-2xl font-semibold text-highlight">Address</h4>
          <p className="mt-2 text-lg text-foreground">
            Industrial Area, Mumbai, India
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
