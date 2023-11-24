import React from 'react'
import { Bar } from 'react-chartjs-2'
import styles from '../../style'
// import { arrowUp } from '../../assets'

const Chart = () => {
  return (
    <section id="datasuara" className="my-[6rem]">
      <div className={`${styles.flexCenter} flex-col`}>
        <h1 className="font-bold xxs:text-center md:text-start xxs:text-[28px] md:text-[32px] text-primary">Hasil Pemungutan Suara</h1>
        <p className='font-semibold xxs:text-center md:text-start text-primary xxs:text-[14px] md:text-[18px] capitalize'>Data akan ditampilkan ketika waktu pemungutan telah habis</p>
      </div>
      <div className='my-[4rem]'>
        <h1 className={`${styles.flexCenter} text-primary font-bold text-center text-[34px]`}>Data Dimari Nanti</h1>
        <button className={`${styles.flexCenter} font-bold bg-primary text-white px-[1.5rem] py-2 rounded-lg mx-auto my-[5rem] hover:scale-110 hover:bg-secondary `}>Unduh Gambar</button>
      </div>
      {/* <div className={`${styles.flexCenter}`> */}
    </section>
  );
}

export default Chart