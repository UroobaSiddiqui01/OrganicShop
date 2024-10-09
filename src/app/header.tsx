// components/Header.tsx
'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
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
          <Link href="/search" className="text-gray-600 hover:text-green-500 transition duration-300">
            <GoSearch size={24} />
          </Link>
          <button className="text-gray-600 hover:text-green-500 transition duration-300">
            <AiOutlineShoppingCart size={24} />
          </button>
          <button className="text-gray-600 hover:text-green-500 transition duration-300">
            <MdOutlineAccountCircle size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;



