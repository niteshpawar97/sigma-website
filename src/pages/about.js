import Head from "next/head";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
    <Head>
      <title>Sigma Manufacturing and Engineering</title>
      <meta name="description" content="Leading Manufacturer and Engineering Services Provider" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
      <main className="p-10 text-center">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="mt-4 text-lg">Sigma Manufacturing and Engineering is a leading provider of industrial solutions.</p>
      </main>
      </Layout>
  );
}
