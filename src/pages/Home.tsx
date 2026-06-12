import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Programs from "../components/Programs";
import Coaches from "../components/Coaches";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Programs />
      <Coaches />
      <Testimonials />
      <Footer />
    </>
  );
}