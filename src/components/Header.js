import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-header-gradient text-white p-5 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide text-primary">
          Sigma Manufacturing
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <Link href="/" className="hover:text-accent transition duration-300">Home</Link>
          <Link href="/about" className="hover:text-accent transition duration-300">About</Link>
          <Link href="/services" className="hover:text-accent transition duration-300">Services</Link>
          <Link href="/products" className="hover:text-accent transition duration-300">Products</Link>
          <Link href="/contact" className="hover:text-accent transition duration-300">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-95 flex flex-col items-center space-y-6 pt-20 transition-transform duration-300 ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <button
          className="absolute top-5 right-5 text-white"
          onClick={() => setIsOpen(false)}
        >
          <XMarkIcon className="h-8 w-8" />
        </button>

        <Link href="/" className="text-xl hover:text-accent transition duration-300" onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="/about" className="text-xl hover:text-accent transition duration-300" onClick={() => setIsOpen(false)}>About</Link>
        <Link href="/services" className="text-xl hover:text-accent transition duration-300" onClick={() => setIsOpen(false)}>Services</Link>
        <Link href="/products" className="text-xl hover:text-accent transition duration-300" onClick={() => setIsOpen(false)}>Products</Link>
        <Link href="/contact" className="text-xl hover:text-accent transition duration-300" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
    </header>
  );
};

export default Header;
