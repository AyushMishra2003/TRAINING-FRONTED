import React from 'react';
import knowledge from '../assets/hero/knowledge.webp'
const Knowledge= () =>{
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
          <img
             src={knowledge}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className=" flex flex-col gap-3  w-full lg:w-1/2 xl:w-1/2 p-6">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          We Share Knowledge Among The World
          </h2>
          <div className='flex flex-col gap-10'>

          <p className="mt-4 text-lg text-gray-500 sm:text-xl">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh. Donec quis ac lectus. Proin eget tortor risus. Sed porttitor lectus nibh. Praesent sapien massa, convallis risus. Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh. Donec
          </p>
          <p className="mt-4 text-lg text-gray-500 sm:text-xl">
          Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Sed porttitor lectus nibh. Praesent sapien massa. Quisque velit nisi, pretium ut lacinia in elementum id enim non nulla sit amet nisl tempus convallis quis ac lectus proin eget.
          </p>
         
          </div>
          <div>
          <p className='font-bold'>Lance Altman</p>
          <p>Founder, CEO</p>
          </div>
      
        </div>
      </div>
    </section>
  );
}

export default Knowledge;