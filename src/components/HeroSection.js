import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 text-white">
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
          className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Established in 2002, we provide high-quality industrial solutions including CNC Machines, 
          Bar Bending Machines, and Rebar Cutting Machines. 
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <button className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-500 transition duration-300">
            Learn More
          </button>
          <button className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition duration-300">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
