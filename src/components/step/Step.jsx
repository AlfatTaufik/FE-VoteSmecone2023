import { step } from "../../constants";
import styles from "../../style";

const Stats = () => (
  <section
    className={`${styles.flexCenter} xxs:w-[350px] xs:w-[450px] md:w-[950px] lg:w-[1350px] flex mx-auto absolute xxs:right-1 left-1 xxs:mt-[4rem] md:right-1 left-1 md:mt-0 none border-2 xxs:bg-[#FFFFFF] md:bg-white border-2 shadow-sit drop-shadow-xl rounded-xxl px-[5rem] mx-auto`}
  >
    <div className=" md:flex-col mx-auto">
      <h1 className="xxs:hidden md:flex font-bold font-poppins text-start text-primary md:text-[35px] lg:text-[40px] ">4 Langkah Mudah Untuk Memilih</h1>
      <p className="xxs:hidden md:flex font-poppins text-start text-primary xss:text-[18px] md:text-[14px] lg:text-[18px] pt-2 mr-1">Melakukan pemilihan online dengan mudah dan efisien, hanya disini.</p>
    </div>
    <div className=" md:flex-col p-5">
      <h1 className="xxs:flex md:hidden font-bold font-poppins text-center text-primary text-[30px] pr-1">4 Langkah Mudah Untuk Memilih</h1>
      <p className="xxs:flex md:hidden font-poppins text-center text-primary xss:text-[15px] md:text-[18px] py-2">Melakukan pemilihan online dengan mudah dan efisien, hanya disini.</p>

      <div className="grid xxs:grid-cols:1 md:grid-cols-2 gap-4 xxs:mx-auto md:mx-none my-[1rem] ">
        {step.map((stat) => (
          <div
            key={stat.id}
            className={`xxs:w-[300px] xs:w-[380px] md:w-[150px] lg:w-[280px] flex-1 flex justify-start items-center flex-row m-3 mx-auto border-2 border-dimwhite shadow-lit rounded-md xxs:mx-auto md:mx-3 my-1 xxs:px-1 py-1 md:px-none lg:px-1 xxs:py-3 md:py-1`}
          >
            <h4 className="font-poppins font-bold xss:text-[40.89px] xs:text-[35px] md:text-[25px] lg:text-[38.89px] text-primary xxs:mx-[1rem] md:mx-1 lg:mx-[1rem]">{stat.title}</h4>
            <p className="font-poppins font-semibold xss:text-[20.45px] xs:text-[23px] md:text-[12px] lg:text-[18px]  text-primary ml-3 px-2">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
