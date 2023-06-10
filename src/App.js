import About from "./About";
import "./App.css";
import ContactUs from "./Contact Us";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import Services from "./Services";

function App() {
  return (
    <div className="App">
      <Portfolio />
      <About />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
