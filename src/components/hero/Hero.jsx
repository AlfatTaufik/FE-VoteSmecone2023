import styles from "../../style";
import { icon, kertas, awan, awanbottom, awancenter, kertasvertical } from "../../assets";
import GetStarted from "../GetStarted";
// import Step  from "../step/Step";

const Hero = () => {
  return (
    <section id="beranda" className={`flex md:flex-row flex-col md:mt-0 xxs:mt-[3rem] rounded-b-xxl`}>
      <div className={`'${styles.FlexStart}' md:mt-[4.2rem] xxs:mt-0`}>
        <img src={awan} alt="awancilik" />
      </div>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 md:ml-[1rem] `}>
        <div className={` flex xxs:w-[18.2rem] flex-row items-center md:mx-0 mx-auto py-[6px] px-[1.3rem] bg-discount-gradient rounded-[10px] mb-2 `}>
          <div className="flex items-center mx-auto ">
            <img src={icon} alt="iconsmec" className="w-[40px] h-auto " />
            <p className={`${styles.paragraph} ml-1`}>
              <span className="text-white">SMK </span>Bisa! <span className="text-white">SMK </span> Hebat!
            </p>
          </div>
          {/* </div> */}
        </div>

        <div className="flex flex-row justify-between items-center w-full ">
          <h1 className="flex-1 font-poppins font-bold xxs:text-[32px] md:text-[45px] lg:text-[70px] text-white  xxs:text-center md:text-left mt-6">
            SELAMAT DATANG
            <br className="sm:block hidden " /> <span className="mt-0 text-white">PARA PEMILIH</span>{" "}
          </h1>
        </div>

        <div className="mt-[5rem] absolute ml-[10rem] xxs:max-sm:hidden ">
          <img src={awancenter} alt="awancent" />
        </div>
        {/* <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">Pilketos 2023</h1> */}
        <p className={`${styles.paragraph} max-w-[470px] xxs:text-[18px] md:text-[20px] lg:text-[23px] md:text-start mt-2 xxs:text-center lg:mx-0 xxs:mx-auto md:mx-0`}>
          Pilih kandidat sesuai dengan keyakinan anda. Boleh beda pilihan, asal tetap jaga persatuan!
        </p>
        <div className="ss:flex md:mr-4 mr-0 mt-3 xxs:mx-auto md:mx-0 z-10">
          <GetStarted />
        </div>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 relative overflow-hidden `}>
        <img src={kertas} alt="kertas" className="hidden md:block w-[120%] relative mr-1 z-[5] " />
        <img src={kertasvertical} alt="kertasver" className="block md:hidden w-[90%] h-[80%] relative z-[5] mx-3 mt-6" />

        {/* gradient start */}
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" /> */}
        {/* <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
        {/* gradient end */}
      </div>
      <div className={`flex md:hidden absolute bottom-0 right-0`}>
        <img src={awanbottom} alt="awanbot" />
      </div>

      <div className={`${styles.flexStart} absolute bottom-0 mt-[34rem] rounded-bl-3xl`}>
        <img src={awanbottom} alt="awanbot" />
      </div>

      <div className={`${styles.flexCenter} mx-auto`}>
        {/* <Step/> */}
      </div>
    </section>
  );
};

export default Hero;
