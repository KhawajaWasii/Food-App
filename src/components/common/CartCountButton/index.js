import React from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { selectCartItemsCount } from '../../../redux/cart/cart.selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const CartCountButton = ({cartCount}) => {
    const Navigate=useNavigate();
    return (
        <div className='w-[50px] h-[50px] bg-[#000] text-[#fff] rounded-[15px] rotate-45	flex justify-center items-center fixed top-[1.5rem] cursor-pointer right-4' onClick={()=>Navigate('/cart')}>
            
            <div className='absolute bg-red-500 -top-[8px] -left-[9px] -rotate-45 rounded-[50%] w-[20px] h-[20px] text-[0.6rem] flex justify-center items-center font-medium'>{cartCount >=100? "99+":cartCount}</div>
            <FaShoppingCart className='text-xl -rotate-45'/>
        </div>
    )
}
const mapStateToProps=createStructuredSelector({
    cartCount:selectCartItemsCount

});
export default connect(mapStateToProps)(CartCountButton);
