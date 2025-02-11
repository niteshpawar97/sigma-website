import Head from "next/head";
import Layout from "../components/Layout";

const products = [
  {
    id: 1,
    name: "High-Precision Gears",
    description: "Manufactured with advanced engineering for industrial applications.",
    image: "/images/1.jpeg",
  },
  {
    id: 2,
    name: "Industrial Motors",
    description: "Reliable and efficient motors for various engineering needs.",
    image: "/images/2.jpeg",
  },
  {
    id: 3,
    name: "Hydraulic Pumps",
    description: "High-performance hydraulic pumps designed for durability.",
    image: "/images/3.jpeg",
  },
  {
    id: 4,
    name: "Automation Components",
    description: "State-of-the-art components for industrial automation.",
    image: "/images/1.jpeg",
  },
];

export default function Products() {
  return (
    <Layout>
      <Head>
        <title>Products - Sigma Manufacturing and Engineering</title>
        <meta name="description" content="Explore our range of high-quality engineering products." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="py-20 px-8 text-center bg-gradient-to-b from-gray-900 to-gray-800 text-white max-w-6xl mx-auto rounded-2xl shadow-xl">
        <h2 className="text-5xl font-extrabold text-primary mb-6">Our Products</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Explore our range of high-quality engineering products designed for durability and efficiency.
        </p>

        {/* Products Grid */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-primary">{product.name}</h3>
              <p className="text-gray-300 mt-2">{product.description}</p>
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
