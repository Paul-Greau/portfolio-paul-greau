/* eslint-disable tailwindcss/no-custom-classname */
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Loader from "./components/Loader/Loader";

function App() {
  return (
    <div className="bg-secondary">
      <div className="bg-header-pattern bg-cover bg-center bg-no-repeat">
        <NavBar />
        <Header />
      </div>
      <About />
      {/* <div>
        <Loader />
      </div> */}
      <Projects />
      <Experiences />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
