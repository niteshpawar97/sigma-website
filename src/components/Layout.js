import Header from "./Header";
import Footer from "./Footer";
import "../styles/globals.css"; // Ensure global styles are applied

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
