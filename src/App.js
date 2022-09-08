import Header from "components/Header"
import Home from "containers/Home"
import Whys from "containers/Whys"
import Footer from "components/Footer"

function App() {
  return (
    <div className="border-red">
     <Header />
     <Home />
     <Whys />
     <Footer />
    </div>
  );
}

export default App;
