import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import { useAppContext } from "./context/Context";

function App() {
  const { darkMode } = useAppContext();

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="background-blur bg1"></div>
      <div className="background-blur bg2"></div>

      <Navbar />
      <Hero />
      <ContactForm />
    </div>
  );
}

export default App;
