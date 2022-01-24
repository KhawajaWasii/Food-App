import React from 'react'
import Logo from '../../components/common/logo';
import Menu from '../../components/home/menu';
// import { menuItemsData } from '../../components/home/menu/data';
import Footer from '../../components/home/footer/index';
import EmptyCart from '../../components/cart/emptyCart/EmptyCart';
import { selectCartItems, selectCartItemsCount, selectCartTotal } from '../../redux/cart/cart.selector';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'

const Cart = ({ cartCount,cartList,cartTotal}) => {
    
    return (
        <div>
            <div className='pt-[0.5rem]'>
                <Logo/>
                </div>
                {
                    cartCount===0?
                    (<EmptyCart/>):
                    (<div id='orders' className='mt-[2rem]  min-h-[calc(100vh-15rem)]'>
                    <h1 className='w-full max-w-[600px] border-b-2 border-[#000] mb-[5.5rem] pb-4 text-2xl font-bold'>Order Summary</h1>
                    <div id='order-menu'>
                        <Menu list={cartList}/>
    
                    </div>
                    <h3 className='w-full max-w-[600px] border-t-2 border-[#000] text-right ml-auto mt-14 py-2 font-bold '>Total Payment : ${cartTotal}</h3>
                </div>)
                }
                
            
            
            <Footer/>

        </div>
    )
}

const mapStateToProps=createStructuredSelector({
    cartCount:selectCartItemsCount,
    cartList:selectCartItems,
    cartTotal:selectCartTotal,

})

export default connect(mapStateToProps)(Cart);
