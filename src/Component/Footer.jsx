import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
function Footer() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return (
            <div className='relative left-0 bottom-0 h-[10vh] py-5 flex items-center justify-between text-white bg-gray-800 sm:px-20 '>
              
                <div className='text-lg text-red'>
                    Copyright {year} | All rights reserved
                </div>
                <div className='flex items-center justify-center gap-5 text-2xl text-white'>
                    <a className='transition-all duration-300 ease-in-out hover:text-yellow-500'>
                        <BsFacebook />
                    </a>
                    <a className='transition-all duration-300 ease-in-out hover:text-yellow-500'>
                        <BsInstagram />
                    </a>
                    <a className='transition-all duration-300 ease-in-out hover:text-yellow-500'>
                        <BsLinkedin />
                    </a>
                    <a className='transition-all duration-300 ease-in-out hover:text-yellow-500'>
                        <BsTwitter />
                    </a>
                </div>
            </div>
    )
}

export default Footer;