import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  About,
  Contact,
  Hero,
  Navbar,
  Tech,
  Works,
  HeroSection,
  StarsCanvas,
} from "./components";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <div className="relative z-0 bg-primary">
                  <div className=" bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <div className="relative z-0">
                      <div className="flex flex-row ml-5 mr-5 lg:mb-0 -mb-96">
                      <Hero />
                      <HeroSection/>
                      </div>
                      
                      <StarsCanvas />
                    </div>
                  </div>
                  <Tech />
                  <About />
                  <Works />
                  <div className="relative z-0">
                    <Contact />
                    <StarsCanvas />
                  </div>
                  <Footer />
                </div>
              </>
            }
          /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
