import React from "react";
import styles from "../../style";
import { kertaslogin, arrowleft } from "../../assets";
import { Footer, Navbar } from "../index";

const Login = () => {
  return (
    <div className="bg-white w-full m-auto">
      <div className="bg-primary rounded-b-lg fixed top-0 left-0 right-0 p-3 sm:h-[90px] ml:h-[100px] lg:h-[100px] z-9999">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} `}>
            <Navbar />
          </div>
        </div>
      </div>

      <div className={` bg-white flex flex-row`}>
        <div className="">
          <button className="xxs:hidden md:flex flex md:ml-[2rem] lg:ml-[5rem] relative bg-primary flex flex-end w-16 h-14 p-5 justify-center items-center gap-6 flex-shrink-0 rounded-lg mt-[11rem] hover:bg-secondary">
            <a href="">
              <img src={arrowleft} alt="" className="text-white" />
            </a>
          </button>
        </div>
        <div className=" shadow-lit flex bg-[#FFFFFF] xxs:mt-[11rem] md:mt-[8rem] lg:mt-[11rem] rounded-lg py-[1rem] px-[1rem] xxs:mx-auto md:mx-auto lg:mx-auto">
          <button className="xxs:flex md:hidden flex  absolute bg-primary flex flex-end w-19 h-14 p-5 justify-center items-center gap-6 flex-shrink-0 rounded-lg hover:bg-secondary">
            <a href="">
              <img src={arrowleft} alt="" className="text-white" />
            </a>
          </button>
          <div className="xxs:hidden md:flex flex-col relative bg-gradient px-[7rem] overflow-hidden rounded-lg">
            <div className=" w-[320px] mx-auto">
              <p className="text-white text-[14px] pt-[3rem] font-semibold text-center uppercase">Pesta Demokrasi</p>
              <h4 className="text-white text-[25px] font-bold text-center uppercase  pb-[2rem]">lOGIN untuk gunakan hak suara anda</h4>
            </div>
            <img src={kertaslogin} alt="test" className="relative mx-auto rounded-md" />
            {/* <p className="relative left-34 bottom-0">by VoteSmecone</p> */}
          </div>
          {/* <img src={awanlogin} alt="" className="absolute bottom-15 left-24" /> */}
          <div className="flex flex-col">
            <h1 className="text-primary mx-auto uppercase xxs:text-[25px] md:text-[30px] text-center pt-4 pb-[4rem] font-bold">Login</h1>
            <form action="" className="xxs:px-[1rem] md:px-[3rem] lg:px-[4rem]">
              {/* <input type="text" placeholder="Masukan Nama" className="lg:w-[450px] flex text-primary font-semibold border-2 shadow-pit xxs:px-4 md:px-6 py-3 rounded-md mb-[40px]" /> */}
              <input type="number" placeholder="Masukan NIS" className="lg:w-[450px] flex text-primary font-semibold border-2 shadow-pit xxs:px-4 md:px-6 py-3 rounded-md mb-[40px]" />
              <input type="" placeholder="Masukan Email" className="lg:w-[450px] flex text-primary font-semibold border-2 shadow-pit xxs:px-4 md:px-6 py-3 rounded-md" />
              <button type="submit" className="mt-[4rem] uppercase text-white font-bold text-[18px] border-2 bg-primary xxs:w-[265px] md:w-[270px] lg:w-[450px] md:px-none md:px-[1rem] py-[1rem] rounded-xxl mx-auto hover:bg-secondary hover:scale-110">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>

    
      <div className="bg-[#FFFFFF]">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
