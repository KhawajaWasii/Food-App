import React, { forwardRef } from 'react'
import { menuItemsData } from './data';
import MenuItem from './MenuItem';
import './style.css'

const Menu = forwardRef(({list},ref) => {
    return (
        <main ref={ref}>
            {
                list?.map((item)=>{
                    return(
                       <MenuItem key={item.id} item={item}/>
                    )
                })
            }
        </main>
    );
});

export default Menu;
