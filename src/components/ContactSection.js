const ContactSection = () => {
    return (
      <section className="bg-gray-900 text-center">
        <h3 className="text-4xl">Contact Us</h3>
        <p className="mt-4 text-lg">Have questions? Reach out to us!</p>
        <div className="mt-4 space-y-2">
          <p>Email: <a href="mailto:info@sigmamanufacturing.com" className="text-blue-400 hover:underline">info@sigmamanufacturing.com</a></p>
          <p>Phone: <a href="tel:+919876543210" className="text-blue-400 hover:underline">+91 98765 43210</a></p>
          <p>Address: Industrial Area, Mumbai, India</p>
        </div>
      </section>
    );
  };
  
  export default ContactSection;
  