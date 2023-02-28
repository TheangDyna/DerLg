import Header from "../components/places/header";
import Footer from "../components/places/footer";
import Head from "next/head";

export default function placeFormat({ children }) {
  return (
    <div>
      <Head>
        <title>Provinces</title>
      </Head>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
}
