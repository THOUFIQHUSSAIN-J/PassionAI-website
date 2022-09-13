import Header from "components/Header";
import Home from "containers/Home";
import Whys from "containers/Whys";
import Footer from "components/Footer";
import Gains from "containers/Gains";
import ContactUs from "containers/Contactus";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <Home />
      <Whys />
      <Gains />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
