import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const features = [
  "High-Quality Manufacturing",
  "Advanced CNC Technology",
  "Experienced Engineering Team",
  "Reliable Customer Support",
  "Competitive Pricing",
  "Customization Options",
];

const WhyChooseUs = () => {
  return (
    <section className="bg-background text-foreground py-12 px-6">
      <h3 className="text-4xl font-bold text-primary text-center">Why Choose Us?</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-3 bg-secondary p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <CheckCircleIcon className="h-6 w-6 text-accent" />
            <span className="text-lg text-foreground">{feature}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
