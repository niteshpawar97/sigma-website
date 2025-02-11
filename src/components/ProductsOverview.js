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
      <section>
        <h3 className="text-4xl">Our Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {products.map((product, index) => (
            <div key={index} className="p-4 bg-gray-800 rounded-lg text-center">
              <p className="text-lg">{product}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ProductsOverview;
  