import "@/styles/globals.css";
import styles from "@/styles/Layout.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className={styles.body}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
