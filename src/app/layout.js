import "@/styles/globals.css";
import styles from "@/styles/Layout.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Zacson Fitnes Club",
  description: "Zacson Fitnes Club",
  icons: {
    icon: '/favicon.png',
  },
};

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
