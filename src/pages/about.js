import Head from "next/head";
import Layout from "../components/Layout";
import { FaUsers, FaLightbulb, FaTools } from "react-icons/fa";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About - Sigma Manufacturing and Engineering</title>
        <meta name="description" content="Leading Manufacturer and Engineering Services Provider" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="py-20 px-8 text-center bg-gradient-to-b from-gray-900 to-gray-800 text-white max-w-6xl mx-auto rounded-2xl shadow-xl">
        {/* Main Heading */}
        <h2 className="text-6xl font-extrabold text-primary mb-6 animate-fadeIn">
          About Sigma
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>

        {/* Company Description */}
        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fadeIn">
          <span className="font-semibold text-white">Sigma Manufacturing and Engineering</span> is a global leader in industrial solutions, delivering high-quality manufacturing and precision engineering services. With a deep commitment to innovation and efficiency, we provide tailored solutions that meet the demands of modern industries.
        </p>

        {/* Vision, Values, Services */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg transition-transform transform hover:scale-105">
            <FaLightbulb className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
            <p className="mt-4 text-gray-300">
              To revolutionize the engineering and manufacturing industry with advanced technologies, ensuring sustainability and innovation at every step.
            </p>
          </div>

          <div className="p-6 bg-gray-800 rounded-xl shadow-lg transition-transform transform hover:scale-105">
            <FaUsers className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary">Core Values</h3>
            <p className="mt-4 text-gray-300">
              Excellence, Integrity, Innovation, and Sustainability are at the heart of everything we do, ensuring top-tier services for our clients.
            </p>
          </div>

          <div className="p-6 bg-gray-800 rounded-xl shadow-lg transition-transform transform hover:scale-105">
            <FaTools className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary">Our Services</h3>
            <p className="mt-4 text-gray-300">
              We specialize in high-precision manufacturing, automation, engineering consulting, and industrial solutions that cater to a wide range of industries.
            </p>
          </div>
        </div>

        {/* Meet Our Team */}
        <div className="mt-16">
          <h3 className="text-4xl font-bold text-primary">Meet Our Team</h3>
          <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto leading-relaxed">
            Our team of experienced engineers, designers, and industry professionals is dedicated to delivering the best solutions in the market.
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center hover:scale-105 transition">
              <img src="https://placehold.co/600x400" alt="Team Member" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white">John Doe</h4>
              <p className="text-gray-400">CEO & Founder</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center hover:scale-105 transition">
              <img src="https://placehold.co/600x400" alt="Team Member" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white">Jane Smith</h4>
              <p className="text-gray-400">Head of Engineering</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center hover:scale-105 transition">
              <img src="https://placehold.co/600x400" alt="Team Member" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white">Mark Johnson</h4>
              <p className="text-gray-400">Lead Designer</p>
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <div className="mt-12">
          <button className="px-6 py-3 text-lg font-semibold bg-primary text-white rounded-lg shadow-md transition-transform transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </main>
    </Layout>
  );
}
