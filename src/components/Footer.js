const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left mt-auto w-full shadow-lg">
      <p className="text-lg font-semibold">
        &copy; {new Date().getFullYear()} Sigma Manufacturing and Engineering. All Rights Reserved.
      </p>
      <div className="mt-4 md:mt-0 flex space-x-6">
        <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
        <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
        <a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a>
      </div>
    </footer>
  );
};

export default Footer;
