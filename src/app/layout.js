import "@/styles/globals.css";
import styles from "@/styles/Layout.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Oswald } from "next/font/google";
import ScrollToTopBtn from "@/components/ScrollToTopBtn/ScrollToTopBtn";
import RouteLoaderWrapper from "@/components/RouteLoaderWrapper";

const oswald = Oswald({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "ZACSON Fitness Club",
  description: "Zacson Fitness Club",
  icons: {
    icon: "/favicon.png",
  },
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${oswald.className} ${styles.body}`}>
        <Header />
        <RouteLoaderWrapper>
          <main className={styles.main}>{children}</main>
        </RouteLoaderWrapper>
        <Footer />
        <ScrollToTopBtn />
      </body>
    </html>
  );
};

export default Layout;
