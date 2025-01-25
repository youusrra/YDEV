import { BrowserRouter } from "react-router";

import { Navbar, Hero, Contact, About, Projects } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>

      <About />
      <Projects />
      <Contact />
    </BrowserRouter>
  );
};

export default App;
