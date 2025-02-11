import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-header-gradient text-foreground p-5 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold tracking-wide text-primary">Sigma Manufacturing and Engineering</h1>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <Link href="/" className="hover:text-accent transition duration-300">Home</Link>
          <Link href="/about" className="hover:text-accent transition duration-300">About</Link>
          <Link href="/services" className="hover:text-accent transition duration-300">Services</Link>
          <Link href="/products" className="hover:text-accent transition duration-300">Products</Link>
          <Link href="/contact" className="hover:text-accent transition duration-300">Contact</Link>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-header-gradient py-4">
          <nav className="flex flex-col space-y-4 items-center">
            <Link href="/" className="hover:text-accent transition duration-300">Home</Link>
            <Link href="/about" className="hover:text-accent transition duration-300">About</Link>
            <Link href="/services" className="hover:text-accent transition duration-300">Services</Link>
            <Link href="/products" className="hover:text-accent transition duration-300">Products</Link>
            <Link href="/contact" className="hover:text-accent transition duration-300">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
