import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "Sigma Manufacturing has significantly improved our production efficiency. We highly recommend their services!",
    author: "Rahul Sharma, Tata Steel Ltd.",
  },
  {
    text: "Their after-sales support and product quality are truly remarkable. Extremely satisfied!",
    author: "Priya Verma, Larsen & Toubro",
  },
  {
    text: "We've been using Sigma Manufacturing's machines for years, and they continue to deliver outstanding performance!",
    author: "Amit Patel, Reliance Infrastructure",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="p-10 text-center bg-gradient-to-r from-background to-secondary text-foreground rounded-lg shadow-lg max-w-4xl mx-auto h-72 flex flex-col justify-center">
      <h3 className="text-4xl font-bold text-primary mb-6">What Our Clients Say</h3>
      <div className="relative w-full overflow-hidden h-24 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="absolute text-lg italic px-4 w-full text-center"
          >
            &ldquo;{testimonials[index].text}&rdquo;
            <p className="mt-4 font-bold text-accent">{testimonials[index].author}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;
