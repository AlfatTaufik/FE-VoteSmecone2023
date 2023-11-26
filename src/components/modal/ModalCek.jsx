import React, { useState } from "react";
import Modal from "react-modal";
import { Checklist_Hijau, Not_vote, Undefined } from "../../assets";

const ModalCek = ({ done, nama, NIS, kelas }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const customModalStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "90%",
      maxWidth: "30rem",
      maxHeight: "80%",
      padding: "20px",
      backgroundColor: "#EEF5FF",
      borderRadius: "1rem",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <div className="flex justify-center items-center mt-[4rem]">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={openModal}>
        Modal Cek Wis, urung, Undefined
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal" style={customModalStyles}>
        <div className="flex flex-col items-center">
          <h1 className={`text-[25px] uppercase font-bold mb-4 ${done ? "text-[#05A660]" : "text-[#E53535]"} py-[1rem]`}>{done === undefined ? "Data tidak ditemukan" : done ? "Sudah Memilih" : "Belum Memilih"}</h1>
          <img src={done ? Checklist_Hijau : done === false ? Not_vote : Undefined} alt="Image" className="w-24 h-24 rounded-full mb-4" />
          <p className="text-center mb-4 text-[16px] text-primary font-semibold pt-[1rem]">{done === undefined ? "Data yang Anda cari tidak ditemukan" : done ? `${nama}` : "Anda Belum Dapat Menlihat Data Suara Sekarang"}</p>
          <p className="text-center mb-4 text-[16px] text-primary font-semibold py-[1rem]">{done === undefined ? "" : done ? `${NIS}` : "Anda Belum Dapat Menlihat Data Suara Sekarang"}</p>
          <p className="text-center mb-4 text-[16px] text-primary font-semibold">{done === undefined ? "" : done ? `${kelas}` : "Anda Belum Dapat Menlihat Data Suara Sekarang"}</p>
          <button className="bg-primary hover:bg-secondary uppercase text-[18px] text-white font-bold py-2 px-4 xxs:px-[6rem] sm:px-[8rem] lg:px-[11rem] rounded-lg" onClick={closeModal}>
            Lanjut
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalCek;
