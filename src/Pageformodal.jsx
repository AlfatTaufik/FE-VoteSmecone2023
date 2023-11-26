import React from 'react'
import { ModalVote, ModalUnduh, ModalCek } from './components'


const Pageformodal = () => {
    const successOperation = true;
    const falseOperation = false;
    // Misalkan data dummy untuk check apakah sudah memilih atauu beluum ya
    const isDone = true;
    const nama = "Akhtar Muh. Arif";
    const NIS = "123456";
    const kelas = "XI-PPLG-1";
  return (
    <div className="h-screen">
      {" "}
      <ModalVote success={falseOperation} />
      <ModalUnduh done={successOperation} />
      {/* Ada kondisi undefined */}
      {/* <ModalCek done={falseOperation} /> */}
      <div>
        {/* Komponen ModalUnduh digunakan di sini */}
        <ModalCek done={isDone} nama={nama} NIS={NIS} kelas={kelas} />
      </div>
    </div>
  );
}

export default Pageformodal