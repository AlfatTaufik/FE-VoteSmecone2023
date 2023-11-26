import React, { useState } from "react";
import { Navbar, Footer } from "../index";
import styles from "../../style";
import { clients } from "../../constants";

const Vote = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleCandidateSelect = (clientId) => {
    // Tambahkan logika di sini
    if (selectedCandidate === clientId) {
      setSelectedCandidate(null); // Reset ke kondisi awal jika kandidat yang dipilih sudah dipilih sebelumnya
    } else {
      setSelectedCandidate(clientId);
    }
  };

  return (
    <div className="bg-white w-full m-auto">
      <div className="bg-primary rounded-b-lg fixed top-0 left-0 right-0 p-3 sm:h-[90px] ml:h-[100px] lg:h-[100px] z-9999">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} `}>
            <Navbar />
          </div>
        </div>
      </div>

      <div>
        <section className={`flex flex-col items-center ${styles.flexCenter} xxs:mt-[48rem] sm:mt-[53rem] md:mt-[6rem]`}>
          <div className={`title flex flex-col items-center md:${styles.flexCenter} text-primary xxs:mb-[2rem] md:mb-[4rem]`}>
            <h1 id="kandidat" className="font-poppins font-bold xxs:text-[30px] text-[34px] uppercase leading-normal mt-[5rem]">
              Daftar Kandidat
            </h1>
            <p className={`font-poppins font-semibold xxs:text-[15px] md:text-[18px] text-center`}>Pelajari Visi Misi Serta Program Kerja Mereka</p>
          </div>
          <div className={`${styles.flexCenter} flex-wrap w-full mt-none md:mx-[1rem]`}>
            {clients.map((client) => (
              <div className="relative xxs:mx-auto md:mx-none h-[24.5rem] my-5" key={client.id}>
                <div className={`relative flex-1 flex-col justify-around ${styles.flexCenter} xxs:min-w-[292px] min-w-[120px] mx-[.5rem] my-1 px-6 py-[1.5rem] rounded-lg border-b-4 shadow-pit border-blue-900 bg-[#FFFFFF]`}>
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
                  <div className="relative">
                    <form action="">
                      <input
                        type="radio"
                        id={`radio_${client.id}`}
                        name="candidate"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 sr-only"
                        checked={selectedCandidate === client.id}
                        onChange={() => handleCandidateSelect(client.id)}
                      />
                      <label htmlFor={`radio_${client.id}`} className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-12 cursor-pointer">
                        <span
                          className={`inline-block w-10 h-8 border-4 rounded-full bg-white border-primary transition-all duration-300 ${selectedCandidate === client.id ? "bg-blue-900 border-blue-900" : ""}`}
                          style={{
                            marginTop: "9rem", // Atur nilai marginTop agar setengah button berada di dalam card
                            zIndex: 1, // Tambahkan zIndex agar tetap berada di atas card
                          }}
                        />
                      </label>
                    </form>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              className={`mt-3 px-[2rem] py-3 rounded-lg font-bold text-[20px] uppercase bg-primary text-[#FFFFFF] transition-colors duration-300 ${selectedCandidate ? "bg-secondary text-primary" : ""}`}
              onClick={() => handleCandidateSelect("ID_Candidate")}
            >
              Pilih
            </button>
          </div>
        </section>
      </div>

      <div className="bg-[#FFFFFF]">
        <Footer />
      </div>
    </div>
  );
};

export default Vote;
