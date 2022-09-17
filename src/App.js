import Header from "components/Header";
import Home from "containers/Home";
import Whys from "containers/Whys";
import Footer from "components/Footer";
import Gains from "containers/Gains";
import ContactUs from "containers/Contactus";
import { Fragment } from "react";
import Testimonial from "containers/Testimonial";

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <Whys />
      <Gains />
      <Testimonial />
      <ContactUs />
      <Footer />
    </Fragment>
  );
}

export default App;
