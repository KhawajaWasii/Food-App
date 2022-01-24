import React, { useRef } from 'react'
import CartCountButton from '../../components/common/CartCountButton';
import Banner from '../../components/home/banner';
import Footer from '../../components/home/footer';
import Menu from '../../components/home/menu';
import { menuItemsData } from '../../components/home/menu/data';

const Home = () => {
   
const menuRef=useRef();
    const handlScrollMenu=()=>menuRef.current.scrollIntoView({behavior:'smooth'})
    return (
        <div>
            {/* Banner */}
            <Banner handleScrollMenu={handlScrollMenu}/>
            {/* Menu */}
            <Menu list={menuItemsData} ref={menuRef}/>
            {/* Footer */}
            <Footer/>
            {/* Cart Count Button */}
            <CartCountButton/>
        </div>
    )
}

export default Home;
