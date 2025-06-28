import "@/styles/globals.css";
import styles from "@/styles/Layout.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "ZACSON Fitness Club",
  description: "Zacson Fitness Club",
  icons: {
    icon: '/favicon.png',
  },
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${oswald.className} ${styles.body}`}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
