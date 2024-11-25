import Header from "@/components/Header";
import "../styles/globals.css";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer></Footer>
    </>
  );
}

export default MyApp;

