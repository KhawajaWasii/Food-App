import React from 'react';
import Logo from '../../common/logo/index';

const Footer = () => {
    return (
        <footer className=' px-2  mt-5 flex justify-between items-center py-3 border-t-2  border-[#000]'>
            
            <p className='  font-[500] md:max-w-[650px] max-w-[200px]'> Website is developed by Wasii using React & Tailwindcss and redux @Xenure.co </p>
            <Logo />
        </footer>
    )
}

export default Footer;
