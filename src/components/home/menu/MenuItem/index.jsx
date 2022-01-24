import React from 'react';
// import { cartAddItem,cartRemoveItem } from '../../../../redux/cart/cart.action';
import AddRemoveButton from '../../../common/AddRemoveButton';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { selectCartItems, selectCartItemsCount } from '../../../../redux/cart/cart.selector';
//
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  cartAddItem,
  cartRemoveItem,
} from '../../../../redux/cart/cart.action';
import {
  selectCartItems,
  selectCartItemsCount,
} from '../../../../redux/cart/cart.selector';

const MenuItem = ({item, cartCount,cartList,cartAddItem,cartRemoveItem}) => {
    const {id,name,img, info,price,}=item;

    const handleQuantity = () => {
        let quantity = 0;
        if (cartCount !== 0) {
          const foundItemInCart = cartList.find((item) => item.id === id);
          if (foundItemInCart) {
            quantity = foundItemInCart.quantity;
          }
        }
        return quantity;
      };
    return (
        <div id="item-container" className='w-[150px] pt-0 pb-[0.8rem] pr-2 pl-[0.8rem] flex flex-col  justify-center rounded-[30px] bg-[#fff] text-center'>
            <img src={img} alt='item-image' className='-mt-[3.5rem] h-[130px] object-contain	'/>
            <div className='flex flex-col flex-1 mt-[1rem] mb-[0.5rem] text-left'>
            <p className='m-0 mb-[0.5rem] font-semibold text-[0.9rem] capitalize flex-1'>{name}</p>
            <p className='text-[0.8rem] text-[#a0a0a0a0]'>{info}</p>
             </div>

             <div className='flex justify-between items-center'>
                 <span className='font-bold'>${price}</span>
                 <AddRemoveButton quantity={handleQuantity()} 
                  handleRemoveItem={() => cartRemoveItem(item)}
                  handleAddItem={() => cartAddItem(item)}
                 />
             </div>
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    cartCount: selectCartItemsCount,
    cartList: selectCartItems,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    cartAddItem: (item) => dispatch(cartAddItem(item)),
    cartRemoveItem: (item) => dispatch(cartRemoveItem(item)),
  });

export default connect(mapStateToProps,mapDispatchToProps)(MenuItem);
