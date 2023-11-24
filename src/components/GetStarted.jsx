import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexCenter} bg-white p-[2px] rounded-[20px] cursor-pointer w-full mt-4 shadow-xl`}>
    <div className={`${styles.flexStart} flex-row bg-white rounded-[20px] w-[17rem] hover:scale-110 transition-all duration-300 ease-in-out`}>
      <div className={`${styles.flexStart} flex`}>
        <p className="font-poppins font-semibold text-[16px] leading-[23.4px] p-2">
          <span className=" tracking-wide text-primary">LOGIN UNTUK MEMILIH</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[20px] h-auto mt-3 ml-2 " />
      </div>
    </div>
  </div>
);

export default GetStarted;
