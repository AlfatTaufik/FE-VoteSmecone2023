import React from "react";
import styles from "../../style";

const Check = () => {
  return (
    <section className="w-full bg-[#FFFFFF] my-[5rem] rounded-lg shadow-lit">
      <h1 className={`${styles.flexCenter} xxs:pt-[3rem] md:pt-[4rem] font-bold xxs:text-[26px] text-[30px] text-primary uppercase`}>Cek Data Pemilih</h1>
      <div className="px-[2rem] xxs:py-[2rem] md:py-[4rem] ">
        <div className={`${styles.flexCenter} relative`}>
          <form action="">
            <input
              className={`${styles.flexCenter} flex xxs:w-[280px] lg:w-[1150px] bg-white shadow-pit rounded-lg mx-auto xxs:text-center md:text-start md:px-[3rem] border-2 border-dimwhite text-[18px] py-[1rem] `}
              type="text"
              placeholder="Masukan NIS"
              id="cekNIS"
            />
            {/* <label htmlFor="cekNIS">Masukan NIS</label> */}
            <button type="submit" className="xxs:flex xxs:mx-auto xxs:mt-3 lg:mt-0 md:mx-none lg:absolute font-semibold bg-primary text-white rounded-lg px-[2.5rem] xxs:py-[10px] md:py-[10px] z-10 md:mr-none lg:mr-[1rem] hover:bg-secondary transition delay-200 lg:top-2 left-62 right-44 bottom-2">
              CEK
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Check;
