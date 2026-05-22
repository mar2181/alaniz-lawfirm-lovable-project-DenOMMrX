import Header from './components/Header';
import MobileBottomNav from './components/MobileBottomNav';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero id="home" />
      <About />
      <Services />
      <WhyChooseUs />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
      <MobileBottomNav />
    </div>
  );
}