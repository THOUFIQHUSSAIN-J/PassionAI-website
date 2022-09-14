import Header from "components/Header";
import Home from "containers/Home";
import Whys from "containers/Whys";
import Footer from "components/Footer";
import Gains from "containers/Gains";
import ContactUs from "containers/Contactus";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <Whys />
      <Gains />
      {/* <ContactUs /> */}
      <Footer />
    </Fragment>
  );
}

export default App;
