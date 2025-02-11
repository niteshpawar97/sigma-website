import Head from "next/head";
import Layout from "../components/Layout";
import { FaCogs, FaIndustry, FaTools, FaDraftingCompass } from "react-icons/fa";

const services = [
  {
    id: 1,
    name: "Precision Manufacturing",
    description: "High-quality, accurate, and durable manufacturing solutions.",
    icon: <FaCogs className="text-5xl text-primary" />,
  },
  {
    id: 2,
    name: "Industrial Automation",
    description: "Advanced automation solutions for industrial processes.",
    icon: <FaIndustry className="text-5xl text-primary" />,
  },
  {
    id: 3,
    name: "Engineering Consultation",
    description: "Expert guidance for your engineering and design needs.",
    icon: <FaDraftingCompass className="text-5xl text-primary" />,
  },
  {
    id: 4,
    name: "Maintenance & Support",
    description: "Reliable maintenance and technical support services.",
    icon: <FaTools className="text-5xl text-primary" />,
  },
];

export default function Services() {
  return (
    <Layout>
      <Head>
        <title>Services - Sigma Manufacturing and Engineering</title>
        <meta name="description" content="Discover our high-quality engineering and manufacturing services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="py-20 px-8 text-center bg-gradient-to-b from-gray-900 to-gray-800 text-white max-w-6xl mx-auto rounded-2xl shadow-xl">
        <h2 className="text-5xl font-extrabold text-primary mb-6">Our Services</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          We provide top-notch engineering and manufacturing services tailored to your needs.
        </p>

        {/* Services Grid */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold text-primary mt-4">{service.name}</h3>
              <p className="text-gray-300 mt-2">{service.description}</p>
              <button className="mt-4 px-6 py-2 bg-primary text-white rounded-lg shadow-md transition-transform transform hover:scale-105">
                Get a Quote
              </button>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
