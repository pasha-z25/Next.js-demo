import Header from "../sections/Header";
import Footer from "../sections/Footer";

export function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
