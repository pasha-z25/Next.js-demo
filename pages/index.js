import Head from "next/head";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>
      <section className="py-4">
        <div className="container mx-auto">
          <h1>Home Page</h1>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
