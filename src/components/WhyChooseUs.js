import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const features = [
  "High-Quality Engineering",
  "Cutting-Edge Technology",
  "Industry Expertise",
  "Customer-Centric Approach",
  "Reliable & On-Time Delivery",
  "24/7 Support & Maintenance",
];

const WhyChooseUs = () => {
  return (
    <section className="bg-background text-foreground py-12 px-6">
      <h3 className="text-4xl font-bold text-primary text-center">Why Choose Us?</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-3 bg-secondary p-5 rounded-lg shadow-md border border-primary transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <CheckCircleIcon className="h-8 w-8 text-accent" />
            <span className="text-lg text-foreground font-semibold">{feature}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
