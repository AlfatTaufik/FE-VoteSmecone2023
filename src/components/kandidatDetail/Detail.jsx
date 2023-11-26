import React from "react";
import { vision } from "../../constants";
import { Navbar, Footer } from "../index";
import styles from "../../style";
import { arrowleft } from "../../assets";

const Detail = () => {
  return (
    <div className="bg-white w-full m-auto ">
      <div className="bg-primary rounded-b-lg fixed top-0 left-0 right-0 p-3 sm:h-[90px] ml:h-[100px] lg:h-[100px] z-9999 ">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} `}>
            <Navbar />
          </div>
        </div>
      </div>
      <div className="py-[10rem] xxs:mx-[2rem] md:mx-[13rem]">
        {vision.map((person, index) => (
          <div key={index} className="flex xxs:flex-col md:flex-row gap-6 mb-9 ">
            <button className="xxs:hidden md:flex flex relative bg-primary flex flex-end w-16 h-14 p-5 justify-center items-center gap-6 flex-shrink-0 rounded-lg mt-[1rem] hover:bg-secondary">
              <a href="">
                <img src={arrowleft} alt="" className="text-white" />
              </a>
            </button>
            <div className="bg-[#FFFFFF] rounded-lg  xxs:mr-none md:mr-[1rem] shadow-pit">
              <h1 className="text-lg font-bold text-primary xxs:text-[34px] md:text-[30px] xxs:py-[3rem] md:py-[1.55rem] uppercase my-auto text-center">{person.name}</h1>
              <img src={person.image} alt={person.name} className="w-full shadow-pit rounded-md" style={{ maxWidth: "100%" }} />
            </div>
            <div className="grid grid-cols gap-[2rem]  xxs:mt-[1rem] md:mt-[6rem] xxs:mr-none md:mr-[1rem]" style={{ maxWidth: "100%" }}>
              <div className="bg-[#FFFFFF] rounded-lg p-4 flex-1 shadow-pit">
                <h3 className="text-lg text-primary font-bold sm:text-[30px] text-[24px] mb-3">Visi</h3>
                <p className="text-semibold sm:text-[18px]  text-primary">{person.visi}</p>
              </div>
              <div className="bg-[#FFFFFF] rounded-lg p-4 flex-1 shadow-pit">
                <h3 className="text-lg text-primary font-bold sm:text-[30px] text-[24px] mb-3">Proker</h3>
                <p className="text-semibold sm:text-[18px]  text-primary">{person.proker}</p>
              </div>
            </div>
            <div className="bg-[#FFFFFF] rounded-lg p-4 flex-1 xxs:mt-[1rem] md:mt-[6rem] shadow-pit">
              <h3 className="text-lg text-primary font-bold sm:text-[30px] text-[24px] mb-3">Misi</h3>
              <p className="text-semibold sm:text-[18px]  text-primary">{person.misi}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#FFFFFF]">
        <Footer />
      </div>
    </div>
  );
};

export default Detail;
