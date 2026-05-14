export default function Home() {
  const products = [
    {
      id: 1,
      name: "Banana Organic",
      upc: "4011",
      aisle: "Produce",
      side: "Left",
    },
    {
      id: 2,
      name: "Milk 2%",
      upc: "123456",
      aisle: "Dairy",
      side: "Right",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">
        TagFinder
      </h1>

      <input
        type="text"
        placeholder="Buscar producto..."
        className="w-full p-3 rounded-xl border mb-4"
      />

      <div className="space-y-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl p-4 shadow"
          >
            <h2 className="text-xl font-semibold">
              {product.name}
            </h2>

            <p>UPC: {product.upc}</p>
            <p>Section: {product.aisle}</p>
            <p>Side: {product.side}</p>
          </div>
        ))}
      </div>
    </main>
  );
}