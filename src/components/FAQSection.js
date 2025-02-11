import { useState } from "react";

const faqs = [
  { question: "What industries do you serve?", answer: "We provide solutions for manufacturing, automation, and more." },
  { question: "Do you offer custom solutions?", answer: "Yes! We tailor solutions to your business needs." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-secondary text-white text-center">
      <h3 className="text-4xl font-bold text-primary">FAQs</h3>
      <div className="mt-8 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="p-4 bg-background rounded-lg shadow-lg mb-4">
            <button className="text-lg font-semibold text-accent" onClick={() => setOpenIndex(index === openIndex ? null : index)}>
              {faq.question}
            </button>
            {index === openIndex && <p className="mt-2 text-gray-300">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
