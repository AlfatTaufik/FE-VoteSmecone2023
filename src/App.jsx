import styles from "./style";
import { Clients, Reminder, Accordion, Footer, Login, Gallery, Chart, Check, Navbar, Step, Hero } from "./components";
// import { dataSuara } from "./constants"; 
import { useState } from "react";
// import FeedbackCard from "./components/FeedbackCard";

const App = () => (
  


  <div className="bg-white w-full m-auto">
    <div className="bg-primary rounded-b-lg fixed top-0 left-0 right-0 p-3 sm:h-[90px] ml:h-[100px] lg:h-[100px] z-9999">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} rounded-b-xxl`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <div className="xxs:flex md:hidden bg-primary">
          <Step />
        </div>
      </div>
    </div>

    <div  className={`xxs:hidden md:flex ${styles.flexCenter} md:relative z-100 xxs:top-[5rem] md:top-[2rem] bg-white `}>
      <Step />
      {/* <Login/> */}
    </div>

    <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <div>
          <Clients />
        </div>
        <Chart />
        <Check />
        <Gallery />
        <Accordion />
        <Reminder />
      </div>
    </div>
    <div className="bg-[#FFFFFF]">
      <Footer />
    </div>
  </div>
);

export default App;
