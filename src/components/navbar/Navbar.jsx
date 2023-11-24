import { useState } from "react";

import { close, logo, menu } from "../../assets";
import { navLinks } from "../../constants";
import Button from "../Button";

const Navbar = () => {
  const [active, setActive] = useState("Beranda");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center navbar p-3 py-4 z-100">
      <a href="https://smkn1purwokerto.sch.id/ " target="_blank">
        <img src={logo} alt="smecone" className="w-[210px] xxs:w-[180px] ml:w-h[200px] sm:w-[200px] md:w-[200px] cursor-pointer" />
      </a>

      <ul className="list-none lg:mt-1 md:flex justify-center  hidden items-center flex-1 ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins  font-medium cursor-pointer text-[20px] ${active === nav.title ? "text-white" : "text-dimWhite"} mr-8 hover:scale-110 hover:text-white hover:border-b-2 transition-all duration-300 ease-in`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="md:flex hidden">
        <Button className="hidden flex-1 md:hidden"></Button>
      </div>

      <div className="md:hidden flex flex-1 justify-end  items-center">
        <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => setToggle(!toggle)} />

        <div className={`${!toggle ? "hidden" : "flex"} mt-2 p-6 mx-auto  bg-primary border-4 absolute rounded-[20px] top-20  mw-[280px] rounded-xl sidebar z-100`}>
          <ul className="list-none flex justify-end items-center flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"} ${index === navLinks.length - 1 ? "mb-4" : "mb-4"} z-50`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
                {/* <a href=""><Button></Button></a> */}
              </li>
              // console.log(`{nav.id}`)
            ))}
            <Button className="mt-4"></Button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
