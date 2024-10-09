// pages/shop.tsx
import Link from 'next/link';
import Image from 'next/image';
const products = [
  { id: 1, name: 'Organic Face Cream', price: '$19.99', image: '/images (5).jpeg' },
  { id: 2, name: 'Herbal Shampoo', price: '$15.99', image: '/herbalshampoo.jpeg' },
  { id: 3, name: 'Aloe Vera Gel', price: '$12.99', image: '/20230119_212611.webp' },
  { id: 4, name: 'Green Tea Lotion', price: '$18.99', image: '/loction.jpeg' },
  { id: 5, name: 'Lavender Body Wash', price: '$14.99', image: '/lavendarBode.jpeg' },
  { id: 6, name: 'Coconut Hair Oil', price: '$10.99', image: '/coconut (6).jpeg' },
  { id: 7, name: 'Charcoal Face Mask', price: '$9.99', image: '/charcoalMask_.jpg' },
  { id: 8, name: 'Shea Butter Lotion', price: '$16.99', image: '/images (7).jpeg' },

  // Add more products as needed
];

export default function Shop() {
  return (
    <div id='shop' className="container mx-auto px-6 py-12">
      
      <h1 className="text-3xl font-bold text-center mb-10">Our Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover object-center mb-4"
              width={400}
              height={400}
            />
            <h2 className="text-xl font-semibold text-gray-700">{product.name}</h2>
            <p className="text-gray-500">{product.price}</p>
            <Link href={`/product/${product.id}`}
               className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300">
                View Details
              
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}