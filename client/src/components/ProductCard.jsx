export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      
      <img
        src={product.image}
        alt={product.name}
          loading="lazy"
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="font-bold text-lg mb-1">
          {product.name}
        </h2>

        <p className="text-gray-600 text-sm mb-2">
          {product.brand}
        </p>

        <p className="text-blue-600 font-bold text-xl">
          ${product.price}
        </p>

        <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
}