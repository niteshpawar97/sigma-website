import Head from "next/head";
import Layout from "../components/Layout";

export default function Services() {
  return (
    <Layout>
    <Head>
      <title>Sigma Manufacturing and Engineering</title>
      <meta name="description" content="Leading Manufacturer and Engineering Services Provider" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
      <main className="p-10 text-center">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="mt-4 text-lg">We provide top-notch engineering and manufacturing services.</p>
      </main>
      </Layout>
  );
}
