import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FaShippingFast } from "react-icons/fa";
import { MdHighQuality } from "react-icons/md";
import { RiFlowerLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import Hero from "./hero";
import Deal from "./deal"
import Shop from "./shop";
import ProductR from "./productR";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Welcome Section */}
      <section id="home" className="bg-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to Store</h2>
          <p className="text-gray-600">We offer high-quality organic products that are perfect for your skin, hair, and overall wellness.</p>
          <div className="mt-8 flex flex-col md:flex-row justify-center gap-8">
            <div className="p-6 bg-green-100 rounded-lg shadow-md">
              <RiFlowerLine size={50} className="mx-auto text-gray-600 hover:text-green-500 transition duration-300" />
              <h3 className="text-2xl font-semibold text-green-700">100% Organic</h3>
              <p className="mt-2 text-gray-600">Natural ingredients for healthy living.</p>
            </div>
            <div className="p-6 bg-green-100 rounded-lg shadow-md">
              <FaShippingFast size={50} className="mx-auto text-gray-600 hover:text-green-500 transition duration-300" />
              <h3 className="text-2xl font-semibold text-green-700">Free Shipping</h3>
              <p className="mt-2 text-gray-600">On all orders over $50.</p>
            </div>
            <div className="p-6 bg-green-100 rounded-lg shadow-md">
              <MdHighQuality size={50} className="mx-auto text-gray-600 hover:text-green-500 transition duration-300" />
              <h3 className="text-2xl font-semibold text-green-700">Quality Products</h3>
              <p className="mt-2 text-gray-600">Hand-picked organic essentials.</p>
            </div>
          </div>
        </div>
      </section>
       {/* Deal of the Day */}
       <Deal/>
      {/* Organic Skin & Hair Section */}
      <section className="bg-green-50 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Best for Your Organic Skin & Hair</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <Image src="/skinCear.jpg" alt="Skin Product" width={800} height={800} />
              <h3 className="text-2xl font-semibold text-gray-700 mt-4">Organic Skin Care</h3>
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300">
                Shop Now
              </button>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <Image src="/hairCare.jpg" alt="Hair Product" width={800} height={800} />
              <h3 className="text-2xl font-semibold text-gray-700 mt-4">Organic Hair Care</h3>
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <Shop />
      <ProductR />

      {/* Blog Section */}
      <section id="blog" className="bg-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">From Our Blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-green-100 p-6 rounded-lg shadow-md">
              <Image src="/blog.jpg" alt="Blog 1" width={300} height={300} className="mx-auto" />
              <h3 className="text-xl font-semibold text-gray-700 mt-4">Benefits of Organic Products</h3>
              <p className="text-gray-600">Learn about the amazing benefits of switching to organic beauty products.</p>
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300">
                Read More
              </button>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow-md">
              <Image src="/BlogCover.png" alt="Blog 2" width={400} height={400} className="mx-auto" />
              <h3 className="text-xl font-semibold text-gray-700 mt-4">Why Choose Organic Products</h3>
              <p className="text-gray-600">Explore the reasons why organic products are safer and healthier for your face, body, and hair.</p>
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-100 py-12">
        <div className="container mx-auto text-center md:text-left grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div id="contact">
            <h4 className="text-xl font-semibold text-green-700 mb-4">Contact Us</h4>
            <p className="text-gray-600">Phone: +123-456-7890</p>
            <p className="text-gray-600">Email: info@organicstore.com</p>
            <p className="text-gray-600">Address: 123 Organic Ave, Green City, Eco Country</p>
          </div>

          {/* Follow Us */}
          <div id="contact">
            <h4 className="text-xl font-semibold text-green-700 mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-700 transition duration-300 text-2xl">
                <FaFacebookF />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-700 transition duration-300 text-2xl">
                <FaInstagram />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-700 transition duration-300 text-2xl">
                <FaLinkedinIn />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-700 transition duration-300 text-2xl">
                <FaTwitter />
              </Link>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-semibold text-green-700 mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-gray-600 mb-4">Get the latest updates on our products and deals.</p>
            <form className="flex">
              <input
                type="email"
                className="px-4 py-2 w-full rounded-l-md border border-gray-300 focus:outline-none"
                placeholder="Enter your email"
              />
              <button className="bg-green-500 text-white px-6 py-2 rounded-r-md hover:bg-green-600 transition duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-8 text-gray-600">
          <p>© 2024 Organic Store. Design By Urooba Siddiqui.</p>
        </div>
      </footer>
    </main>
  );
}

