import React from 'react'
import { GrCertificate } from "react-icons/gr";

function ServiceCard({icon,text,content}) {
    console.log(icon);
    console.log(text);
  return (
    <div className=' w-[20rem] p-2 flex flex-col  py-6 rounded-md hover:bg-[#6a11cb] ease-in-out duration-500 hover:text-white cursor-pointer items-center justify-center shadow-[3px_5px_7px_#6a11cb]'>
    
            <img src={icon} alt=""  className='w-[10rem] h-[8rem] rounded-[50%]'/>
        <p className='text-[1.5rem] group-hover:text-white'>{text}</p>
        <p className='w-[20rem] text-center '>{content}</p>
      
    </div>
  )
}

export default ServiceCard