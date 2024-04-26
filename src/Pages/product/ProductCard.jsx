import React from 'react'

const ProductCard = ({image,productName}) => {
  return (
    <div className='flex flex-col items-center justify-center  shadow-[3px_5px_7px_#6a11cb] cursor-pointer rounded-md h-fit'>
      <img src={image} alt=""  className='w-[14rem] h-[13rem] object-cover'/>
      <p>{productName}</p>
      <div className='flex items-center gap-[0.6rem]'>
        <p className='text-[1.2rem] font-bold'>Rs 560</p>
        <p className='line-through'>699</p>
        <p>Ayush</p>
      </div>
    </div>
  )
}

export default ProductCard
