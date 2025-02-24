import Head from "next/head";
import Layout from "../components/Layout";
import { FaIndustry, FaLightbulb, FaTools } from "react-icons/fa";
import Link from "next/link";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About - SIGMA Manufacturing and Engineering</title>
        <meta name="description" content="Leading Manufacturer and Engineering Solutions Provider for Rebar Processing Machines" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="py-20 px-8 text-center bg-gradient-to-b from-gray-900 to-gray-800 text-white max-w-7xl mx-auto rounded-2xl shadow-xl">
        {/* Main Heading */}
        <h2 className="text-6xl font-extrabold text-primary mb-6 animate-fadeIn">
          About SIGMA
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>

        {/* Company Overview */}
        <p className="mt-6 text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fadeIn">
          <span className="font-semibold text-white">SIGMA MANUFACTURING AND ENGINEERING CONSTRUCTION COMPANY</span> has been a trusted name in the **rebar processing industry in India** for over a decade. As a **leading manufacturer and importer** of high-quality rebar processing machines, we are committed to **delivering innovative, reliable, and efficient solutions** for the construction and infrastructure sectors.
        </p>

        <p className="mt-6 text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
          With a focus on **precision engineering and advanced technology**, our comprehensive range of machinery is designed to **enhance productivity, ensure superior performance, and reduce costs** for businesses. Our dedication to **quality, customer satisfaction, and continuous improvement** has established SIGMA as a strong and reputable brand in the industry.
        </p>

        {/* Vision, Values, Services */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaLightbulb className="text-5xl text-primary mx-auto mb-4" />,
              title: "Our Vision",
              description: "To revolutionize the rebar processing industry with advanced machinery, ensuring durability, efficiency, and cost-effectiveness in every project.",
            },
            {
              icon: <FaIndustry className="text-5xl text-primary mx-auto mb-4" />,
              title: "Why Choose Us?",
              description: "We provide cutting-edge rebar processing solutions backed by precision engineering, advanced automation, and dedicated customer support.",
            },
            {
              icon: <FaTools className="text-5xl text-primary mx-auto mb-4" />,
              title: "Our Services",
              description: "We specialize in high-precision rebar processing, automation, and industrial machinery solutions catering to a wide range of infrastructure projects.",
            },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-xl shadow-lg transition-transform transform hover:scale-105">
              {item.icon}
              <h3 className="text-2xl font-bold text-primary">{item.title}</h3>
              <p className="mt-4 text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Meet Our Team
        <div className="mt-16">
          <h3 className="text-4xl font-bold text-primary">Meet Our Leadership</h3>
          <p className="text-lg text-gray-300 mt-4 max-w-4xl mx-auto leading-relaxed">
            Our leadership team is composed of experienced industry professionals dedicated to **driving innovation and delivering excellence** in rebar processing solutions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {[
              { name: "Rahul Sharma", role: "Founder & CEO" },
              { name: "Amit Verma", role: "Head of Engineering" },
              { name: "Priya Gupta", role: "Operations Director" },
            ].map((member, index) => (
              <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg text-center hover:scale-105 transition">
                <img src={`https://placehold.co/600x400?text=${member.name}`} alt={member.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white">{member.name}</h4>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Why SIGMA Section */}
        <div className="mt-16">
          <h3 className="text-4xl font-bold text-primary">Why SIGMA?</h3>
          <p className="text-lg text-gray-300 mt-4 max-w-4xl mx-auto leading-relaxed">
            At SIGMA, we take pride in **delivering state-of-the-art rebar processing machinery** that enhances efficiency and reduces operational costs. Our core strengths include:
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { title: "High-Quality Machinery", desc: "Designed for durability, precision, and long-lasting performance." },
              { title: "Customer-Centric Approach", desc: "We provide 24/7 support and personalized service to our clients." },
              { title: "Innovation & Automation", desc: "We integrate the latest technology to optimize construction processes." },
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg text-center hover:scale-105 transition">
                <h4 className="text-xl font-semibold text-primary">{feature.title}</h4>
                <p className="text-gray-300 mt-2">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Button */}
        <div className="mt-12">
          <Link href="/contact">
          <button className="px-6 py-3 text-lg font-semibold bg-primary text-white rounded-lg shadow-md transition-transform transform hover:scale-105">
            Contact Us
          </button>
        </  Link>
        </div>
      </main>
    </Layout>
  );
}
