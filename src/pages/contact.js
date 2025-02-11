import Head from "next/head";
import Layout from "../components/Layout";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact - Sigma Manufacturing and Engineering</title>
        <meta name="description" content="Get in touch with Sigma Manufacturing and Engineering" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="py-20 px-8 text-center bg-gradient-to-b from-gray-900 to-gray-800 text-white max-w-5xl mx-auto rounded-2xl shadow-xl">
        <h2 className="text-5xl font-extrabold text-primary mb-6">Contact Us</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
        We&apos;d love to hear from you! Reach out for inquiries, collaborations, or any questions.
        </p>

        {/* Contact Details */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-gray-300">
          <div className="flex flex-col items-center">
            <FaPhoneAlt className="text-3xl text-primary mb-3" />
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="mt-2">+91 98765 43210</p>
          </div>

          <div className="flex flex-col items-center">
            <FaEnvelope className="text-3xl text-primary mb-3" />
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="mt-2">contact@sigmamanufacturing.com</p>
          </div>

          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-3xl text-primary mb-3" />
            <h3 className="text-xl font-semibold">Address</h3>
            <p className="mt-2">123 Sigma Street, Industrial Area, Mumbai</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12 bg-gray-800 p-6 rounded-xl shadow-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-primary">Send Us a Message</h3>
          <form className="mt-6 flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="p-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-primary" required />
            <input type="email" placeholder="Your Email" className="p-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-primary" required />
            <textarea placeholder="Your Message" rows="4" className="p-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-primary" required></textarea>
            <button type="submit" className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105">
              Send Message
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="mt-10 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-primary transition">
            <FaFacebook size={28} />
          </a>
          <a href="#" className="text-gray-400 hover:text-primary transition">
            <FaLinkedin size={28} />
          </a>
          <a href="#" className="text-gray-400 hover:text-primary transition">
            <FaTwitter size={28} />
          </a>
        </div>
      </main>
    </Layout>
  );
}
