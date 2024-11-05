// components/Header.tsx
'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { GoSearch } from 'react-icons/go';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false); // New search modal state
  const [searchQuery, setSearchQuery] = useState(''); // Track search input
  const [cartItems, setCartItems] = useState<string[]>([]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleAddToCart = () => {
    setCartItems([...cartItems, "Sample Product"]);
    setIsCartModalOpen(true);
  };

  const handleLoginModalToggle = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const handleSearchModalToggle = () => {
    setIsSearchModalOpen(!isSearchModalOpen);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery); // For now, log the query. Replace with actual search logic if needed.
    setIsSearchModalOpen(false); // Close the modal after search
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo Section */}
          <Link href="/" className="text-2xl font-bold text-green-700">
            Organic
          </Link>

          {/* Hamburger Icon for mobile */}
          <div className="md:hidden">
            <button
              className="text-gray-700 hover:text-green-500 transition duration-300"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <IoClose size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Navigation Links */}
          <nav
            className={`${
              isMobileMenuOpen ? 'block' : 'hidden'
            } md:flex space-x-8 text-gray-700 absolute md:relative top-16 left-0 md:top-0 w-full md:w-auto bg-white md:bg-transparent md:flex-row flex-col items-center z-20 md:space-y-0 space-y-4 md:space-x-8`}
          >
            <Link
              href="/#shop"
              className="py-2 md:py-0 text-center hover:text-green-500 transition duration-300"
              onClick={toggleMobileMenu}
            >
              Shop
            </Link>
            <Link
              href="/#deal"
              className="py-2 md:py-0 text-center hover:text-green-500 transition duration-300"
              onClick={toggleMobileMenu}
            >
              Deals
            </Link>
            <Link
              href="/#blog"
              className="py-2 md:py-0 text-center hover:text-green-500 transition duration-300"
              onClick={toggleMobileMenu}
            >
              Blog
            </Link>
            <Link
              href="/#contact"
              className="py-2 md:py-0 text-center hover:text-green-500 transition duration-300"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </nav>

          {/* Icons (Search, Cart, Account) */}
          <div className="flex space-x-6 items-center">
            <button onClick={handleSearchModalToggle} className="text-gray-600 hover:text-green-500 transition duration-300">
              <GoSearch size={24} />
            </button>
            <button onClick={handleAddToCart} className="text-gray-600 hover:text-green-500 transition duration-300">
              <AiOutlineShoppingCart size={24} />
            </button>
            <button onClick={handleLoginModalToggle} className="text-gray-600 hover:text-green-500 transition duration-300">
              <MdOutlineAccountCircle size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Cart Modal */}
      {isCartModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
            <h2 className="text-lg font-bold mb-4">Cart</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <p key={index} className="text-gray-700">{item}</p>
              ))
            ) : (
              <p className="text-gray-700">Your cart is empty</p>
            )}
            <button
              className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-500 transition"
              onClick={() => setIsCartModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
            <h2 className="text-lg font-bold mb-4">Sign In</h2>
            <form>
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 p-2 border border-gray-300 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 p-2 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-500 transition"
              >
                Login
              </button>
            </form>
            <button
              className="mt-4 w-full text-gray-500 hover:text-gray-700 transition"
              onClick={() => setIsLoginModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {isSearchModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
            <h2 className="text-lg font-bold mb-4">Search</h2>
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type to search..."
                className="w-full p-2 mb-4 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-500 transition"
              >
                Search
              </button>
            </form>
            <button
              className="mt-4 w-full text-gray-500 hover:text-gray-700 transition"
              onClick={() => setIsSearchModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;





