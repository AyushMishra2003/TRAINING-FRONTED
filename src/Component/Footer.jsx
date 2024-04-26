import React, { useEffect } from 'react'
import {
    BsFacebook,
    BsInstagram,
    BsLinkedin,
    BsTwitter,
    BsWhatsapp
} from 'react-icons/bs'

import { MdKeyboardDoubleArrowRight, MdOutlineSmartphone } from "react-icons/md";
import { CiClock1 } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";

import { Link } from 'react-router-dom'
import { FaLocationDot } from 'react-icons/fa6';
import logo from '../assets/img/LogoFarming.jpeg'



const Footer = () => {

    const listStyle = "text-[0.95rem] hover:pl-2 flex items-center gap-1 hover:bg-clip-text hover:text-transparent hover:bg-[linear-gradient(to_right,#35C8F2,#27B872)] font-semibold  text-slate-300 transition-all duration-300 ease-in-out"
    const contactStyle = "text-[0.95rem] flex items-start sm:items-center lg:items-start gap-1 hover:bg-clip-text hover:text-transparent hover:bg-[linear-gradient(to_right,#35C8F2,#27B872)] font-semibold  text-slate-300 "

    const year = new Date().getFullYear()

    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])

    return (
        <footer className='text-white  bg-[#1F2937]'>
            {/* <img src={footerImg} alt="" className='absolute h-full w-[100vw]' /> */}
            <div className='flex  relative flex-col xl:flex-row p-[2.5rem_1rem] md:p-[2.5_5rem] gap-8 xl:justify-around '>
                <div className='flex flex-col gap-2'>
                    <div className='mb-3'><img className='w-[5rem]' alt="" src={logo} /></div>
                    <p className='leading-6 xl:w-[23rem] w-full'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam aspernatur necessitatibus nulla, deserunt, commodi sapiente numquam quas modi esse nostrum recusandae doloremque dolor consequuntur quidem corrupti nam voluptatibus laboriosam? Doloremque hic, minima rem voluptatum non laborum impedit dolores error ut, assumenda at in necessitatibus sit accusamus animi nihil, facere quasi?y.</p>
                    <div className='flex gap-4 mt-3'>
                        <a href="" className='text-[20px]'><BsLinkedin /></a>
                        <a href="" className='text-[20px]'><BsFacebook /></a>
                        <a href="" className='text-[20px]'><BsWhatsapp /></a>
                        <a href="" className='text-[20px]'><BsInstagram /></a>
                        <a href="" className='text-[20px]'><BsTwitter /></a>
                    </div>
                </div>
                <div className='flex flex-col justify-between gap-8 md:gap-6 md:flex-row'>
                    <div className='flex flex-col w-[80vw] md:w-[60%] gap-8 sm:flex-row sm:justify-between md:gap-6 lg:gap-10'>
                        <div className='w-[80vw] sm:w-[50%] md:w-[14rem]'>
                            <div>
                                <p className='text-[1.09rem] font-[600]'>ABOUT US</p>
                                <p className='w-[80vw] sm:w-[80%] md:w-[12rem] lg:w-[15rem] m-[9px_0] h-[3.4px] bg-[linear-gradient(to_right,#35C8F2,#27B872)] rounded-md'></p>
                            </div>
                            <div className='flex flex-col gap-4 mt-6 '>
                                <Link to={'/'} className={listStyle}><MdKeyboardDoubleArrowRight />Home</Link>
                                <Link to={'/courses'} className={listStyle}><MdKeyboardDoubleArrowRight />Our Courses</Link>
                                <Link to={'/contactFarming'} className={listStyle}><MdKeyboardDoubleArrowRight />Contract Farming</Link>

                                <Link to={'/shop'} className={listStyle}><MdKeyboardDoubleArrowRight />Shop</Link>
                                {/* <Link to={'/coming'} className={listStyle}><MdKeyboardDoubleArrowRight />Contact</Link> */}

                            </div>
                        </div>
                        {/* <div className='w-ful sm:w-[50%] md:w-[14rem] '>
                            <div>
                                <p className='text-[1.09rem] font-[600]'>OUR SERVICES</p>
                                <p className='w-[80vw] sm:w-[80%] lg:w-[15rem] md:w-[12rem] m-[9px_0] h-[3.4px] bg-[linear-gradient(to_right,#35C8F2,#27B872)] rounded-md'></p>
                            </div>
                            <div className='flex flex-col gap-4 mt-6 '>
                                <Link to={'/'} className={listStyle}><MdKeyboardDoubleArrowRight />E Brochure</Link>
                                <Link to={'/'} className={listStyle}><MdKeyboardDoubleArrowRight />Corporate Identity</Link>
                                <Link to={'/'} className={listStyle}><MdKeyboardDoubleArrowRight />Business Card</Link>
                                <Link to={'/'} className={listStyle}><MdKeyboardDoubleArrowRight />Print Media</Link>
                                <Link to={'/'} className={listStyle}><MdKeyboardDoubleArrowRight />Logo Design</Link>


                            </div>
                        </div> */}
                    </div>
                    <div className='md:w-[16rem] w-[80vw]'>
                        <div>
                            <p className='text-[1.09rem] font-[600]'>CONTACT US</p>
                            <p className='w-[80vw] md:w-[16rem] m-[9px_0] h-[3.4px] bg-[linear-gradient(to_right,#35C8F2,#27B872)] rounded-md'></p>
                        </div>
                        <div className='flex flex-col gap-4 mt-6 '>
                            <Link to={'/'} className={`${contactStyle} lg:items-center`}><CiClock1 />10:00AM - 06:00PM</Link>
                            <Link to={'/'} className={`${contactStyle} lg:items-center`}><MdOutlineSmartphone />+91 9090909090</Link>
                            <Link to={'/'} className={`${contactStyle} lg:items-center`}><IoMdMail />info@thefarming.org</Link>
                            <Link to={'/'} className={`${contactStyle} lg:items-center`}><FaLocationDot />BHU, Varanasi, India</Link>
                            <Link to={'/'} className={`${contactStyle} md:items-start`}><FaLocationDot className='md:text-[1.7rem] text-[1rem] items-center' />5th floor CDC Building, BHU Varanasi, Uttar Pradesh 221005</Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className='text-center text-[1.05rem] font-[600] p-3 bg-gradient-to-r from-[#0C1015] via-[#183134] to-[#0C1015] '><span >&#169;</span> {year} | Copyright <span className='bg-clip-text text-transparent bg-[linear-gradient(to_right,#35C8F2,#27B872)]'>The FarmingShip</span> - All Rights Reserved</div>
        </footer >

    )
}

export default Footer