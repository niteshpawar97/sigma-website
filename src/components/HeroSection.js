import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full h-auto flex flex-col justify-center items-center text-center px-6 bg-background text-foreground">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Sigma Manufacturing and Engineering
        </motion.h2>
        <motion.p
          className="mt-6 text-lg md:text-xl max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Established in 2002, we provide high-quality industrial solutions, including CNC Machines,
          Bar Bending Machines, Rebar Cutting Machines, Threading Machines, and Forging Machines.

        </motion.p>
        <motion.div
          className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
            {/* Learn More Button */}
            <Link href="/about">
            <button className="px-6 py-3 bg-primary text-secondary font-semibold rounded-full hover:bg-primary-dark transition duration-300">
              Learn More
            </button>
          </Link>

          {/* Contact Us Button */}
          <Link href="/contact">
            <button className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition duration-300">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
