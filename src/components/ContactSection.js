const ContactSection = () => {
  return (
    <section className="bg-background text-foreground py-16 px-8 flex flex-col items-center text-center rounded-lg shadow-lg max-w-5xl mx-auto">
      <h3 className="text-5xl font-bold text-primary mb-6">Get in Touch</h3>
      <p className="text-lg text-accent mb-8">We would love to hear from you! Reach out to us via email, phone, or visit us at our office.</p>
      
      <div className="w-full bg-secondary p-8 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center md:space-x-8">
        <div className="text-center md:text-left">
          <h4 className="text-2xl font-semibold text-highlight">Email</h4>
          <p className="mt-2 text-lg">
            <a href="mailto:info@sigmamanufacturing.com" className="text-accent hover:underline">
              info@sigmamanufacturing.com
            </a>
          </p>
        </div>

        <div className="text-center md:text-left">
          <h4 className="text-2xl font-semibold text-highlight">Phone</h4>
          <p className="mt-2 text-lg">
            <a href="tel:+919876543210" className="text-accent hover:underline">
              +91 98765 43210
            </a>
          </p>
        </div>

        <div className="text-center md:text-left">
          <h4 className="text-2xl font-semibold text-highlight">Address</h4>
          <p className="mt-2 text-lg text-foreground">
            Industrial Area, Mumbai, India
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
