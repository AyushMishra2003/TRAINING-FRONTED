import React from 'react'
import HomeLayout from '../../Layout/HomeLayout'

const Form = () => {
    const inputStyle = ' min-w-[19rem] w-[80vw] sm:w-[24rem] rounded-[3px] border h-full border-[#2d3a4b] p-2 focus:border-red outline-none  text-[0.95rem] tracking-wide resize-none bg-white text-black'
    const labelStyle = "text-[0.85rem] tracking-wide text-[#cfcfdb]"
  return (
    <HomeLayout>
    <div className='pt-[1rem] text-black  gap-2   md:gap-1 bg-[#DEE4FA] min-h-[90vh]  lg:gap-[2rem] flex  items-center justify-center  w-[100vw] pb-4'>
           <form  className='flex flex-col items-start justify-center gap-4 w-fit  bg-[#1a1a2b92] p-3 py-4 sm:p-4 rounded-md shadow-sm shadow-light'>

         <input className={inputStyle} type="text" placeholder='Enter name...' name='fullName' 
             />
           <input className={inputStyle} type="email" placeholder='Enter email...' name='email'  />
<input className={inputStyle} type="number" placeholder='Enter number...' name='phoneNumber' />
<input className={inputStyle} type="text" placeholder='Enter your problem...' name='businessName'  />

<div className="flex flex-col items-start justify-center gap-[0.5px]">
    <label htmlFor='category' className={labelStyle}>
         Category
    </label>

    <select className={inputStyle}
        name='category' >
        <option name="category" value="" >Select</option>
        <option name="category" value="Sole Proprietorship" >product1</option>
        <option name="category" value="Limited Liability Partnerships">product2</option>
        <option name="category" value="Limited Liability Company" >product3</option>
        <option name="category" value="Farmer Producer Company">product4</option>
        <option name="category" value="Corporation" >product5</option>

    </select>
</div>

<div className="flex flex-col items-start justify-center gap-[0.5px]">
    <label htmlFor="recruitment"
        className={labelStyle}
    ><span className='mr-1 text-red'>*</span>
        About your Land
    </label>
    <textarea type="text" required
        className={`${inputStyle} p-[5px] h-[10rem] resize-none`}
        name='recruitment'
        id='recruitment'
        placeholder='Enter Land...' />
</div>

</form>
    </div>
 </HomeLayout>   
  )
}

export default Form
