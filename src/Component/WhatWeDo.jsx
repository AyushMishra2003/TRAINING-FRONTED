import React from 'react'
import WhatWeData from '../Hook/WhatWeData.jsX'
import WhatWeCard from './WhatWeCard'
const WhatWeDo = () => {
  return (
    <div className='bg-white flex flex-col items-center justify-center pt-[5rem] gap-6'>
        <div className='flex items-start justify-between gap-[10rem]'>
        <div>
            <p className='text-[#2B225D] font-semibold'>What We do </p>
            <h1 className='text-[#2B225D] text-5xl font-bold'>How it works?</h1>
        </div> 
        <div className='lg:w-[40rem]'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos officiis quia tenetur consequatur fuga labore fugit molestiae, eaque autem, ut beatae est sit quidem commodi laudantium alias sapiente nam ducimus recusandae ratione, debitis iure! Inventore.</p>
        </div>
        </div>
        <div>
            {WhatWeData.map((val)=><WhatWeCard icons={val.icon} heading={val.heading} para={val.para}/>)}
        </div>
    </div>
  )
}

export default WhatWeDo