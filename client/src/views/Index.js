/*!

=========================================================
* Event Organization web Design System using React - v1
=========================================================

*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components
import DemoNavbar from "../components/Navbars/DemoNavbar.js";

// index page sections
import Hero from "./IndexSections/Hero.js";
import Typography from "./IndexSections/Events.js";
import Carousel from "./IndexSections/Gallary.js";
import Download from "./IndexSections/Download.js";
import SimpleFooter from "../components/Footers/SimpleFooter.js";

class Index extends React.Component {
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <Hero />
          <section className="section section-components">
            <Container>
              <Typography />
            </Container>
          </section>
          <Carousel />
          <Download />
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Index;
