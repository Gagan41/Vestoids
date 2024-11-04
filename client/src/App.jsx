import { About, Contact, Navbar, Home, Projects, Services, Quota } from "./components";

const App = () => {
  return (
    <div className="min-h-screen gradient-bg-home">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      {/* About Section */}
      <div id="about">
        <About />
      </div>
      {/* Quota Section */}
      <div> 
        <Quota />
      </div>
      {/* Services Section */}
      <div id="services">
        <Services />
      </div>
      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;
