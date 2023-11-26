import styles from "../../style";
import { logofooter } from "../../assets";
import { footerLinks } from "../../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} flex-col mt-[5rem] pt-[4rem] justify-center items-center`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full px-[6rem]`}>
      <div className="flex-[1] flex flex-col justify-start">
        <img src={logofooter} alt="hoobank" className="w-[266px] h-[72.14px] object-contain" />
        <p className={`${styles.paragraph} mt-4 max-w-[352px] text-primary font-semibold text-[17px] mb-4`}>Website voting SMK Negeri 1 Purwokerto. Dengan teknologi, Jayakan negeri</p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 text-primary py-6">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px] `}>
            <h4 className="font-poppins text-[20px] leading-[27px] font-bold primary">{footerlink.title}</h4>
            <ul className="list-none mt-4 text-primary">
              {footerlink.links.map((link, index) => (
                <li key={link.name} className={`font-poppins font-semibold text-[16px] leading-[24px] text-primary hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"}`}>
                  <a target="_blank" href={`${link.link}`}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between md:flex-row flex-col border-t-2 border-t-primary px-[4rem] shadow-lit "></div>
    <p className="font-poppins font-semibold text-center text-[18px] text-primary mx-auto my-[2rem]">Copyright Ⓒ 2023 VoteSmecone ft XI PPLG.</p>
  </section>
);

export default Footer;
