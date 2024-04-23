import React from 'react'
import HomeLayout from '../../Layout/HomeLayout'
import useProductData from '../../Hook/OurProduct'
import ProductCard from './ProductCard'
const Product = () => {
  return (
    <HomeLayout>
       <div className='pt-[3rem] text-black  gap-2   md:gap-1 bg-[#DEE4FA] min-h-[90vh]  lg:gap-[2rem] flex  items-center justify-center  w-[100vw] pb-4'>
           <div className='flex flex-wrap items-center justify-center gap-3'>
             {useProductData.map((val,ind)=><ProductCard image={val.img} productName={val.productName}/>)}
           </div>
       </div>

    </HomeLayout>
  )
}

export default Product
