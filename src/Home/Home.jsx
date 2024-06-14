import AboutUsSection from "../Components/AboutUsSection/AboutUsSection";
import Footer from "../Components/Footer/Footer";
import HeroSection from "../Components/HeroSection/HeroSection";
import MenuSection from "../Components/MenuSection/MenuSection";
import Nav from "../Components/Nav/Nav";
import ReviewSection from "../Components/ReviewSection/ReviewSection";
import ServiceSection from "../Components/ServiceSection/ServiceSection";
import TeamSection from "../Components/TeamSection/TeamSection";

const Home = () => {
  return (
    <>
      <Nav />
      <HeroSection />
      <ServiceSection />
      <AboutUsSection />
      <MenuSection />
      <TeamSection />
      <ReviewSection />
      <Footer />
    </>
  );
};

export default Home;
