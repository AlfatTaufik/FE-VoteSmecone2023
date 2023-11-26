import styles from "../../style";
import { Rembutton } from "..";
import { ilustrated } from "../../assets";

const Reminder = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-[#FFFFFF] rounded-[20px] shadow-sit mx-auto mt-[2rem]`}>
    <img src={ilustrated} className="flex xxs:flex-col md:flex-row xxs:w-[150px] md:w-[360px]" alt="" />
    <div className=" max-w-[800px] flex-1 flex flex-col font-bold justify-center xxs:text-center md:text-center">
      <h2 className={`${styles.heading2} text-primary font-bold xxs:text-[26px] md:text-[30px] lg:text-[35px]`}>
        Sudah siap <br></br>untuk memilih pemimpin <br></br>masa depan?
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 mx-auto text-primary`}>Jangan sia-siakan hak suaramu, pilih sekarang dan tentukan pemimpin masa depanmu!</p>

      <div className={`${styles.flexStart} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Rembutton />
      </div>
    </div>
  </section>
);

export default Reminder;
