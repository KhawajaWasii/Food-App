import React from 'react';
import logoImg from './logo.png';

const Logo = () => {
    return (
        <div className='min-w-fit	'>
        <div className='flex items-center'>
            <img src={logoImg} alt="logo" className='w-[1.5rem] mr-[0.4rem]'/>
            <span>
                <b>Taste</b>
            </span>
        </div>
        
            <p className='text-[0.5rem] font-bold'>Restaurant & BBQ</p>
       
        </div>
    )
}

export default Logo;
