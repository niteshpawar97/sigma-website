const Footer = () => {
  return (
    <footer className="bg-secondary text-foreground py-6 px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left rounded-t-lg shadow-lg">
      <p className="text-lg font-semibold">&copy; 2025 Sigma Manufacturing and Engineering. All Rights Reserved.</p>
      <div className="mt-4 md:mt-0 flex space-x-6">
        <a href="#" className="text-accent hover:underline">Privacy Policy</a>
        <a href="#" className="text-accent hover:underline">Terms of Service</a>
        <a href="#" className="text-accent hover:underline">Contact Us</a>
      </div>
    </footer>
  );
};

export default Footer;
