import React from 'react';
import Logo from '../../common/logo';
import bannerImg from './banner.png';
import {FaLongArrowAltRight} from 'react-icons/fa';

const Banner = ({handleScrollMenu}) => {
    return (
        <div>
            <header className='grid grid-cols-2 pt-[8px] h-screen '>
                <div id='header-content' className='flex  flex-col'>
                    <Logo/>

                    <div id='content-main' className=' flex flex-col flex-1 justify-center'>
                        <h1 className='md:text-[3rem] md:mb-[1.5rem] font-bold md:leading-[3.5rem] text-[1.2rem] mb-[1rem]'>Delicious food for your cravings</h1>
                        <p className='md:font-[500] text-[13px] md:text-[16px]'>We made fresh and healthy meals with different recipes</p>
                        <button onClick={handleScrollMenu}  className='bg-[#000] text-[#fff] w-[150px] md:w-[200px] flex justify-between items-center  md:py-[1rem] md:px-[1.5rem] py-[0.5rem] px-[1rem] outline-none border-none text-[0.8rem] md:text-[1rem] rounded-tr-[25px]  rounded-bl-[25px] rounded-tl-[25px] mt-[1.5rem] md:mt-[2.5rem]'>View Menu <FaLongArrowAltRight className='text-2xl '/></button>
                    </div>

                </div>
                <img id='header-img' src={bannerImg} alt='banner' style={{alignSelf:'center'}} className='w-full '/>
            </header>
        </div>
    )
}

export default Banner;
