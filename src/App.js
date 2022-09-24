import Header from "components/Header";
import Home from "containers/Home";
import Whys from "containers/Whys";
import Footer from "components/Footer";
import Gains from "containers/Gains";
import ContactUs from "containers/Contactus";
import Signin from "containers/Signin";
import Terms from "containers/Terms";
import { Fragment } from "react";
import Testimonial from "containers/Testimonial";
// eslint-disable-next-line
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/terms"
          element={
            <Fragment>
              <Header />
              <Terms />
              <Footer />
            </Fragment>
          }
        ></Route>
        <Route
          path="/"
          element={
            <Fragment>
              <Header />
              <Home />
              <Whys />
              <Gains />
              <Testimonial />
              <ContactUs />
              <Footer />
            </Fragment>
          }
        />
      </Routes>
    </Fragment>
  );
}

export default App;
