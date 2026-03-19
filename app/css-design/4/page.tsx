// import styles from "./styles.module.css";
import "./4.css";
import { ProgressBar } from "./parts/ProgressBar";
import { NavDialog } from "./parts/NavDialog";
import { Header } from "./parts/Header";
import { Hero } from "./parts/Hero";
import { AboutSection } from "./parts/AboutSection";
import { CollectionSection } from "./parts/CollectionSection";
import { MarqueeSection } from "./parts/MarqueeSection";
import { VisitSection } from "./parts/VisitSection";
import { Footer } from "./parts/Footer";

const Page = () => {
  return (
    <>
      <ProgressBar />
      <NavDialog />
      <Header />
      <Hero />
      <AboutSection />
      <CollectionSection />
      <MarqueeSection />
      <VisitSection />
      <Footer />
    </>
  );
};

export default Page;
