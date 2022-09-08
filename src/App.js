import Header from "components/Header";
import Home from "containers/Home";
import Whys from "containers/Whys";
import Footer from "components/Footer";
import Gains from "containers/Gains";

function App() {
  return (
    <div className="border-red">
      <Header />
      <Home />
      <Whys />
      <Gains />
      <Footer />
    </div>
  );
}

export default App;
