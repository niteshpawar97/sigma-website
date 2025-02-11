const products = [
  "CNC Steel Rebar Stirrup Bending Machine",
  "Roller Screed Paver",
  "Bar Bending Machine",
  "Rebar Cold Forging Machine",
  "Rebar Decoiling Machine",
  "Concrete Cutter",
];

const ProductsOverview = () => {
  return (
    <section className="bg-background text-foreground py-12 px-6">
      <h3 className="text-4xl font-bold text-primary text-center">Our Products</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative p-6 bg-secondary rounded-lg text-center shadow-md border border-primary transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
          >
            {/* Background Animation Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary opacity-0 hover:opacity-10 transition duration-300 rounded-lg"></div>

            {/* Product Name */}
            <p className="text-lg text-foreground font-semibold relative z-10">{product}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsOverview;