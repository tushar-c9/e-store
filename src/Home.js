import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const data = {
    name: "E-store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
