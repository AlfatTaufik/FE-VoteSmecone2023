import { clients } from "../constants";
import styles from "../style";
import Button from "./Button";

const Clients = () => (
  <div>
    <section className={`flex flex-col items-center ${styles.flexCenter} xxs:mt-[48rem] sm:mt-[53rem] md:mt-[17rem]`}>
      <div className={`title flex flex-col items-center md:${styles.flexCenter} text-primary xxs:mb-[2rem] md:mb-[4rem]`}>
        <h1 id="kandidat" className="font-poppins font-bold xxs:text-[30px] text-[34px] uppercase leading-normal">
          Daftar Kandidat
        </h1>
        <p className={`font-poppins font-semibold xxs:text-[15px] md:text-[18px] text-center`}>Pelajari Visi Misi Serta Program Kerja Mereka</p>
      </div>
      <div className={`${styles.flexCenter} flex-wrap w-full mt-1 md:mx-[1rem]`}>
        {clients.map((client) => (
          <div className="relative xxs:mx-auto md:mx-none h-[24.5rem] my-5">
            <div key={client.id} className={`relative flex-1 flex-col justify-around ${styles.flexCenter} xxs:min-w-[292px] min-w-[120px] mx-[.5rem] my-1 px-6 py-[2rem] rounded-lg border-b-4 shadow-pit border-blue-900 bg-[#FFFFFF]`}>
              <div className="flex flex-col bg-primary">
                <img src={client.logo} alt="client_logo" className="xxs:w-[192px] object-contain border-lg bg-white" />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center"></div>
              </div>
              <div className="flex flex-col items-center mt-3">
                <h3 className="font-poppins text-[18px] font-bold text-primary mt-2" key={client.id}>
                  {client.name}
                </h3>
                <p className="font-poppins text-[15px] font-semibold text-primary" key={client.id}>
                  {client.class}
                </p>
              </div>
              {/* <Button /> */}
            </div>
            <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 font-semibold text-[#FFFFFF] text-[20px] uppercase mt-[6rem] bg-primary px-6 py-1 rounded-lg hover:scale-110 hover:bg-secondary">Detail</button>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Clients;
