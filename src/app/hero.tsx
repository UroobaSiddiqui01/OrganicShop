// components/Hero.tsx
import Image from "next/image";
export default function Hero() {
    return (
      <section className="bg-green-100 py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
          {/* Left Content */}
          <div className="max-w-lg md:mr-6">
            <h1 className="text-4xl font-bold px-20 text-green-700 leading-tight">
              Organic Store
            </h1>
            <p className="mt-4 text-gray-700">
              Discover the best organic products for your skin and hair, made with natural ingredients to keep you glowing and healthy.
            </p>
            <button className="mt-6  bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300">
              Shop Now
            </button>
          </div>
  
          {/* Product Image */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between px-14 md:mt-0">
            <Image
              src="/facewash.png" 
              alt="Organic Product"
              className=" bg-green-100 "
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
    );
  }
  