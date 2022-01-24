import React from 'react';
import {FaLongArrowAltLeft} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const EmptyCart = () => {
    const Navigate=useNavigate();
    return (
        <div className='h-[calc(100vh-13.7rem)] flex justify-center items-center flex-col'>
            <img src='https://merchlist.co/assets/emptycart.png' alt='émpty' className='w-full h-full object-contain max-w-[150px]'/>
            <button onClick={()=>Navigate("/")} className='bg-[#000] text-[#fff] w-[150px] md:w-[200px] flex justify-between items-center  md:py-[1rem] md:px-[1.5rem] py-[0.5rem] px-[1rem] outline-none border-none text-[0.8rem] md:text-[1rem] rounded-br-[25px]  rounded-tr-[25px] rounded-tl-[25px] mt-[1.5rem] md:mt-[2.5rem] '><FaLongArrowAltLeft className='text-2xl '/> Shop Now</button>


        </div>
    )
}

export default EmptyCart;
