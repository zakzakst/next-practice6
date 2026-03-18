// import styles from "./styles.module.css";
import "./4.css";
import { ProgressBar } from "./parts/ProgressBar";
import { Header } from "./parts/Header";
import { Hero } from "./parts/Hero";
import { AboutSection } from "./parts/AboutSection";
import { CollectionSection } from "./parts/CollectionSection";
import { Footer } from "./parts/Footer";

const Page = () => {
  return (
    <>
      <ProgressBar />
      <Header />
      <Hero />
      <AboutSection />
      <CollectionSection />
      <Footer />
    </>
  );
};

export default Page;
