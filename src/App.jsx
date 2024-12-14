import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturedSection from "./components/FeaturedSection";
import HowSection from "./components/HowSection";
import MealSection from "./components/MealSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuSection from "./components/MenuSection";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <FeaturedSection />
              <HowSection />
              <MealSection />
              <TestimonialsSection />
              <PricingSection />
            </>
          }
        />
        <Route path="/meals" element={<MenuSection />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
