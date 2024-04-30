import React from 'react'
import HomeLayout from '../Layout/HomeLayout'

const Opportunity = () => {
    const inputStyle = ' min-w-[19rem] w-[80vw] sm:w-[24rem] rounded-[3px] border h-full border-[#2d3a4b] p-2 focus:border-red outline-none  text-[0.95rem] tracking-wide resize-none bg-white text-black'
    const labelStyle = "text-[0.85rem] tracking-wide text-[#cfcfdb]"
  return (
    // const inputStyle = 'min-w-[19rem] w-[80vw] sm:w-[24rem] rounded-[3px] border h-full border-[#2d3a4b] p-2 focus:border-red outline-none  text-[0.95rem] tracking-wide resize-none bg-white text-black'
    // const labelStyle = "text-[0.85rem] tracking-wide text-[#cfcfdb]"
    <HomeLayout>

        <div className='min-h-[90vh]  flex flex-col gap-3 items-center justify-center pt-[2rem] pb-[1rem] '>
            <div className='flex '>
                <div className='flex flex-col gap-3'>
                <h1 className='text-[1.5rem] text-red-500'>Employment</h1>
                <p className='w-[27rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dicta debitis voluptas laborum veritatis facilis optio maiores enim omnis tenetur, nulla aperiam in repudiandae eaque placeat eligendi sequi! Illum, earum reiciendis placeat numquam quos cum magni corrupti cumque suscipit blanditiis nisi architecto iure fuga sapiente eaque tempora exercitationem molestias. Aperiam officiis atque magnam amet, cupiditate minus temporibus dicta! Aspernatur, neque?</p>
                <button className='px-[3rem] p-[0.2rem] border-none bg-blue-800 w-fit text-white'>Apply</button>
                </div>
                <form  className='flex flex-col items-start justify-center gap-4 w-fit  bg-[#1a1a2b92] p-3 py-4 sm:p-4 rounded-md shadow-sm shadow-light z-50'>

<input className={inputStyle} type="text" placeholder='Enter name...' name='fullName' 
    />
  <input className={inputStyle} type="email" placeholder='Enter email...' name='email'  />
<input className={inputStyle} type="number" placeholder='Enter number...' name='phoneNumber' />
<input className={inputStyle} type="text" placeholder='Enter yourself..' name='businessName'  />

<div className="flex flex-col items-start justify-center gap-[0.5px]">
<label htmlFor='category' className={labelStyle}>
Category
</label>

<select className={inputStyle}
name='category' >
<option name="category" value="" >Select</option>
<option name="category" value="Sole Proprietorship" >skill 1</option>
<option name="category" value="Limited Liability Partnerships">skill 2</option>
<option name="category" value="Limited Liability Company" >skill 3</option>
<option name="category" value="Farmer Producer Company">skill 4</option>
<option name="category" value="Corporation" >skill 5</option>

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
            <div>
            <div className='flex'>
                <div className='flex flex-col gap-2'>
                <h1 className='text-[1.5rem] text-red-500'>Enterpreneurship</h1>
                <p className='w-[27rem]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit ex illum ratione tenetur suscipit. Fuga consequatur nihil, aut aspernatur voluptas voluptatum eos aliquam temporibus iste, unde sint itaque, velit ipsum delectus repudiandae. Temporibus, nam aliquam ipsam, aspernatur officia suscipit nihil vitae fuga obcaecati optio in facilis labore. Nobis optio tempora quibusdam animi molestiae in laudantium incidunt, unde consequuntur facilis accusamus..</p>
                <button className='px-[3rem] p-[0.2rem] border-none bg-blue-800 w-fit text-white'>Apply</button>
                </div>
                <form  className='flex flex-col items-start justify-center gap-4 w-fit  bg-[#1a1a2b92] p-3 py-4 sm:p-4 rounded-md shadow-sm shadow-light z-50'>

<input className={inputStyle} type="text" placeholder='Enter name...' name='fullName' 
    />
  <input className={inputStyle} type="email" placeholder='Enter email...' name='email'  />
<input className={inputStyle} type="number" placeholder='Enter number...' name='phoneNumber' />
<input className={inputStyle} type="text" placeholder='Enter yourself...' name='businessName'  />

<div className="flex flex-col items-start justify-center gap-[0.5px]">
<label htmlFor='category' className={labelStyle}>
Category
</label>

<select className={inputStyle}
name='category' >
<option name="category" value="" >Select</option>
<option name="category" value="Sole Proprietorship" >skill 1</option>
<option name="category" value="Limited Liability Partnerships">skill 2</option>
<option name="category" value="Limited Liability Company" >skill 3</option>
<option name="category" value="Farmer Producer Company">skill 4</option>
<option name="category" value="Corporation" >skill 5</option>

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
            </div>
        </div>
    </HomeLayout>
  )
}

export default Opportunity
