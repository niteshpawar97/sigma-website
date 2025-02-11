import Head from "next/head";
import Layout from "../components/Layout";
import  HeroSection  from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import ProductsOverview from "../components/ProductsOverview";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Sigma Manufacturing and Engineering</title>
        <meta name="description" content="Leading Manufacturer and Engineering Services Provider" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HeroSection />
      <WhyChooseUs />
      <ProductsOverview />
      <Testimonials />
      <ContactSection />
    </Layout>
  );
}
