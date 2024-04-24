import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// import useClientData from '../Hooks/useClientData';
import HomeDescCard from '../HomeDescCard';

const responsive = {
    0: { items: 1 }
};

const useHomeData = ['WELCOME TO THE FARMING', 'Explore All Courses', 'Shop with us']


const items = useHomeData.map((val, ind) => {
    return (
        <div key={ind + 1} className=''>
            <HomeDescCard data={val} />
        </div>
    )
})

const HomeDes = () => (
    <div className='md:w-[45rem] w-[98vw] mt-3 flex flex-col gap-1 items-center justify-center'>

        <AliceCarousel
            mouseTracking
            autoPlayInterval={2200}
            animationDuration={1800}
            infinite
            disableButtonsControls
            disableDotsControls
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
            autoPlay
        />
    </div>
);


export default HomeDes