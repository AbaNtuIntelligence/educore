import { useEffect, useState } from "react";
import { getProducts } from "../services/googleSheets";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.SKU} className="border rounded-xl p-4 shadow-sm">
            <img
              src={product["Cloud URL"]}
              alt={product["Product Name"]}
              className="w-full h-48 object-contain"
            />

            <h2 className="font-semibold mt-4">{product["Product Name"]}</h2>
            <p className="text-sm text-gray-500">{product.Category}</p>
            <p className="font-bold mt-2">{product.Price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}