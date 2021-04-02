import Head from "next/head";

import Nav from "./Nav";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Page({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Nav />

      <main>
        {children}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
