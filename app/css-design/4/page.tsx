// import styles from "./styles.module.css";
import "./4.css";
import { ProgressBar } from "./parts/ProgressBar";
import { Header } from "./parts/Header";
import { Hero } from "./parts/Hero";

const Page = () => {
  return (
    <>
      <ProgressBar />
      <Header />
      <Hero />
      <div style={{ height: "100vh" }}></div>
    </>
  );
};

export default Page;
