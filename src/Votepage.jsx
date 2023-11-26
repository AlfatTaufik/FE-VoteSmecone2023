import React from 'react'
import {Votemodal} from './components/index';
import Backdrop from './components/backdrop/Backdrop';

const Votepage = () => {
  return (
    <div className="flex w-full h-full items-center justify-center hover:scale-110">
        <Votemodal />
      <div className="flex items-center justify-center">
        <button className="border-2 bg-primary text-white px-[10px] py-[12px]">Modal Iman</button>
      </div>
    </div>
  );
}

export default Votepage