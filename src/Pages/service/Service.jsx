import React from 'react'
import useServiceData from '../../Hook/OurService'
import ServiceCard from '../../Component/ServiceCard'

const Service = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-3 mt-4 '>
        <p className='font-semibold text-[1.5rem]'>Our Service</p>
        <div className='flex flex-wrap items-center justify-center gap-2 '>
          {useServiceData.map((val,ind)=><ServiceCard icon={val.icon} text={val.text} content={val.content} key={ind+1}/>)}
        </div>
    </div>
  )
}

export default Service
