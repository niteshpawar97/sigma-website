import { FaCogs, FaIndustry, FaTools } from "react-icons/fa";

const services = [
  { id: 1, name: "Precision Manufacturing", icon: <FaCogs />, description: "High-quality, accurate, and durable solutions." },
  { id: 2, name: "Industrial Automation", icon: <FaIndustry />, description: "Advanced automation solutions for industries." },
  { id: 3, name: "Maintenance & Support", icon: <FaTools />, description: "Reliable maintenance and technical support." },
];

const ServicesOverview = () => {
  return (
    <section className="py-16 bg-secondary text-white text-center">
      <h3 className="text-4xl font-bold text-primary">Our Services</h3>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {services.map((service) => (
          <div key={service.id} className="p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="text-5xl text-primary mb-4">{service.icon}</div>
            <h4 className="text-xl font-semibold">{service.name}</h4>
            <p className="mt-2 text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOverview;
