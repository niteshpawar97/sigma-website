import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 text-white p-5 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold tracking-wide text-yellow-300">Sigma Manufacturing and Engineering</h1>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <Link href="/" className="hover:text-yellow-300 transition duration-300">Home</Link>
          <Link href="/about" className="hover:text-cyan-300 transition duration-300">About</Link>
          <Link href="/services" className="hover:text-green-300 transition duration-300">Services</Link>
          <Link href="/products" className="hover:text-red-300 transition duration-300">Products</Link>
          <Link href="/contact" className="hover:text-purple-300 transition duration-300">Contact</Link>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 py-4">
          <nav className="flex flex-col space-y-4 items-center">
            <Link href="/" className="hover:text-yellow-300 transition duration-300">Home</Link>
            <Link href="/about" className="hover:text-cyan-300 transition duration-300">About</Link>
            <Link href="/services" className="hover:text-green-300 transition duration-300">Services</Link>
            <Link href="/products" className="hover:text-red-300 transition duration-300">Products</Link>
            <Link href="/contact" className="hover:text-purple-300 transition duration-300">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
