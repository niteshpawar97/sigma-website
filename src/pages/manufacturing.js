import Head from "next/head";
import Layout from "../components/Layout";
import { FaIndustry, FaCogs, FaWrench } from "react-icons/fa";
import Link from "next/link";

export default function Manufacturing() {
  return (
    <Layout>
      <Head>
        <title>In-House Manufacturing - SIGMA</title>
        <meta
          name="description"
          content="SIGMA Manufacturing specializes in advanced upset cold forging and rebar threading machines with state-of-the-art in-house production."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="py-20 px-8 text-center bg-gradient-to-b from-gray-900 to-gray-800 text-white max-w-7xl mx-auto rounded-2xl shadow-xl">
        {/* Main Heading */}
        <h2 className="text-6xl font-extrabold text-primary mb-6 animate-fadeIn">
          In-House Manufacturing Excellence
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>

        {/* Manufacturing Overview */}
        <p className="mt-6 text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fadeIn">
          At <span className="font-semibold text-white">SIGMA MANUFACTURING AND ENGINEERING CONSTRUCTION COMPANY</span>, we take pride in our **state-of-the-art in-house manufacturing facility**. We specialize in **advanced upset cold forging machines** for rebar sizes ranging from **12mm to 50mm**.
        </p>

        <p className="mt-6 text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Our cutting-edge production capabilities ensure **precision, durability, and efficiency**, making our machines a preferred choice in the **construction and infrastructure** industries.
        </p>

        {/* Manufacturing Highlights */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaIndustry className="text-5xl text-primary mx-auto mb-4" />,
              title: "Advanced Manufacturing",
              description: "Equipped with high-tech machinery ensuring top-quality rebar processing solutions.",
            },
            {
              icon: <FaWrench className="text-5xl text-primary mx-auto mb-4" />,
              title: "Upset Cold Forging Machines",
              description: "Precision-engineered machines for rebar sizes 12mm to 50mm, designed for maximum efficiency.",
            },
            {
              icon: <FaCogs className="text-5xl text-primary mx-auto mb-4" />,
              title: "India’s First In-House Rebar Threading Machines",
              description: "Pioneering in rebar threading technology with a diverse range of models catering to industry needs.",
            },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-xl shadow-lg transition-transform transform hover:scale-105">
              {item.icon}
              <h3 className="text-2xl font-bold text-primary">{item.title}</h3>
              <p className="mt-4 text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Why SIGMA Manufacturing */}
        <div className="mt-16">
          <h3 className="text-4xl font-bold text-primary">Why Choose SIGMA?</h3>
          <p className="text-lg text-gray-300 mt-4 max-w-4xl mx-auto leading-relaxed">
            Our commitment to **Make in India** drives us to **innovate and deliver high-quality, cost-effective solutions** that enhance productivity on construction sites.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { title: "100% In-House Manufacturing", desc: "Ensuring superior quality control from production to final delivery." },
              { title: "Cost-Effective & Durable Machines", desc: "Designed for long-term reliability and efficiency in construction projects." },
              { title: "Continuous Innovation", desc: "Revolutionizing rebar processing technology with cutting-edge advancements." },
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg text-center hover:scale-105 transition">
                <h4 className="text-xl font-semibold text-primary">{feature.title}</h4>
                <p className="text-gray-300 mt-2">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Manufacturing Process Image Section */}
        <div className="mt-16">
          <h3 className="text-4xl font-bold text-primary">Our Manufacturing Process</h3>
          <p className="text-lg text-gray-300 mt-4 max-w-4xl mx-auto leading-relaxed">
            From raw material selection to the final product, our **precision-driven process ensures top-notch quality** in every machine we produce.
          </p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <img src="https://placehold.co/600x400" alt="Manufacturing Facility" className="rounded-lg shadow-lg hover:scale-105 transition" />
            <img src="https://placehold.co/600x400" alt="Rebar Processing Machines" className="rounded-lg shadow-lg hover:scale-105 transition" />
          </div>
        </div>

        {/* Contact Button */}
        <div className="mt-12">
            <Link href="/contact">
          <button className="px-6 py-3 text-lg font-semibold bg-primary text-white rounded-lg shadow-md transition-transform transform hover:scale-105">
            Contact Us
          </button>
            </Link>
        </div>
      </main>
    </Layout>
  );
}
