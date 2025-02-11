const products = [
  "CNC Steel Rebar Stirrup Bending Machine",
  "Roller Screed Paver",
  "Bar Bending Machine",
  "Rebar Cold Forging Machine",
  "Rebar Decoiling Machine",
  "Suspended Wire Rope Platform",
  "Concrete Cutter",
  "Automatic Stirrup Bending Machine",
];

const ProductsOverview = () => {
  return (
    <section className="bg-background text-foreground py-12 px-6">
      <h3 className="text-4xl font-bold text-primary text-center">Our Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="p-6 bg-secondary rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-primary"
          >
            <p className="text-lg text-foreground font-semibold">{product}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsOverview;