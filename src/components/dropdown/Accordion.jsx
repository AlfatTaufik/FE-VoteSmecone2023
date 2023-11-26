import { React, useState } from "react";
// import { useState } from "react";
import styles from "../../style";
import { accordion } from "../../constants";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  return (
    <section id="faq" className="mt-[6rem]">
      <h1 className={`text-primary xxs:text-center md:text-start xxs:text-[25px] md:text-[28px] lg:text-[33px] font-bold ${styles.flexCenter} uppercase`}>Pertanyaan yang sering ditanyakan</h1>
      <div className="grid xxs:grid-cols-1 md:grid-cols-2 gap-4  mt-[2rem]">
        {accordion.map((accord, i) => (
          <div key={accord.id} className="flex-col flex-wrap bg-[#FFFFFF] shadow-lit mx-3 my-4 mb-2 py-6 px-6 rounded-lg">
            <div className="title flex justify-between items-center cursor-pointer" onClick={() => toggle(i)}>
              <h4 className="text-primary font-bold xxs:text-[16px] sm:text-[18px] md:text-[20px] py-[10px] px-2">{accord.title}</h4>
              <span className="text-primary text-[18px] font-bold transition-transform duration-300 transform ">{selected === i ? "-" : "+"}</span>
            </div>
            <p className={`text-primary font-normal text-[15px] mt-2 mx-2 transition-transform duration-900 ease-in-out ${selected === i ? "flex" : "hidden"}`}>{accord.link}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;
