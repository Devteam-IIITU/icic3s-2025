import ConferenceBanner from "../components/Banner";
import Features from "../components/Features";
import TeamSection from "../components/Teams";

const Home = () => {
  return (
    <h1 className="">
      <ConferenceBanner />
      <Features/>
      <TeamSection/>
    </h1>
  );
};

export default Home;
