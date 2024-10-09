"use client";

import Image from "next/image";

const bestSellerProducts = [
  { id: 1, name: "Organic Tanning Creem", price: "$05.49", image: "/p1.jpg", rating: 4.5 },
  { id: 2, name: "Organic Glow serum", price: "$08.49", image: "/p2.png", rating: 4.5 },
  { id: 3, name: "Organic Neam Essention Oil", price: "$08.49", image: "/p3.jpg", rating: 4.5 },
];

const topRatedProducts = [
  { id: 1, name: "Ultra Radiant Creem", price: "$10.49", image: "/p4.jpg", rating: 5 },
  { id: 2, name: "Bright Glow BB Creem", price: "$09.49", image: "/p5.jpeg", rating: 5 },
  { id: 3, name: "Organic Baby Ubtan Powder", price: "$15.49", image: "/p6.jpg", rating: 5 },
];

const onSaleProducts = [
  { id: 1, name: "Golden Glow Saffron Kit", price: "$22.49", image: "/p7.jpg", rating: 4 },
  { id: 2, name: "Hydrating Face Mist", price: "$15.49", image: "/p8.jpg", rating: 4 },
  { id: 3, name: "Shimmer Shine Lotion", price: "$20.49", image: "/p9.jpg", rating: 4 },
];


export default function ProductR() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Best Seller Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Best Seller</h2>
          <div className="space-y-4">
            {bestSellerProducts.map((product) => (
              <div key={product.id} className="flex items-center space-x-4 p-4 border rounded-lg shadow-sm">
                <Image src={product.image} alt={product.name} width={80} height={80} className="rounded-lg" />
                <div>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-green-600 font-bold">{product.price}</p>
                  <p className="text-yellow-400">★ {product.rating}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Rated Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Top Rated</h2>
          <div className="space-y-4">
            {topRatedProducts.map((product) => (
              <div key={product.id} className="flex items-center space-x-4 p-4 border rounded-lg shadow-sm">
                <Image src={product.image} alt={product.name} width={80} height={80} className="rounded-lg" />
                <div>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-green-600 font-bold">{product.price}</p>
                  <p className="text-yellow-400">★ {product.rating}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* On Sale Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">On Sale</h2>
          <div className="space-y-4">
            {onSaleProducts.map((product) => (
              <div key={product.id} className="flex items-center space-x-4 p-4 border rounded-lg shadow-sm">
                <Image src={product.image} alt={product.name} width={80} height={80} className="rounded-lg" />
                <div>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-green-600 font-bold">{product.price}</p>
                  <p className="text-yellow-400">★ {product.rating}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
