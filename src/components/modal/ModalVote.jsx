import React, { useState } from "react";
import Modal from "react-modal";
import { Checklist_vote, Not_vote } from "../../assets";

const ModalVote = ({ success }) => {
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
    width: "90%", // Menggunakan persentase untuk responsivitas
    maxWidth: "30rem", // Batas maksimum lebar modal
    maxHeight: "80%",
    padding: "20px",
    backgroundColor: "#EEF5FF",
    borderRadius: "1rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

  return (
    <div className="flex justify-center items-center">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={openModal}>
        Vote Success or nah
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal" style={customModalStyles}>
        <div className="flex flex-col items-center">
          <h1 className={`text-[25px] uppercase font-bold mb-4 ${success ? "text-primary" : "text-[#E53535]"} py-[1rem]`}>{success ? "Anda berhasil memilih" : "Gagal memilih"}</h1>
          <img src={success ? Checklist_vote : Not_vote} alt="Image" className="w-24 h-24 rounded-full mb-4" />
          <p className="text-center mb-4 text-[16px] text-primary font-semibold py-[1rem]">{success ? "Terimakasih telah menggunakan hak suara anda" : "Silakan coba lagi"}</p>
          <button className="bg-primary hover:bg-secondary uppercase text-[18px] text-white font-bold py-2 px-4 xxs:px-[6rem] sm:px-[8rem] lg:px-[11rem] rounded-lg" onClick={closeModal}>
            Lanjut
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalVote;
