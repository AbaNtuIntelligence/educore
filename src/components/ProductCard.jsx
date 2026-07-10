export default function ProductCard({ product }) {
  return (
    <div className="border rounded-xl p-4 shadow-sm bg-white">
      <img
        src={product["Cloud URL"]}
        alt={product["Product Name"]}
        className="w-full h-48 object-contain"
      />

      <h3 className="font-semibold mt-4 text-gray-900">
        {product["Product Name"]}
      </h3>

      <p className="text-sm text-gray-500">{product.Category}</p>

      <p className="font-bold mt-2">{product.Price}</p>
    </div>
  );
}