import React from 'react';
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai';


const AddRemoveButton = ({quantity,handleAddItem,handleRemoveItem}) => {
    return (
        <div className='flex justify-center items-center w-[55px] rounded-[100px] p-[0.2rem] cursor-pointer text-[0.8rem] bg-[#000] text-[#fff]'>
            {quantity!==0 ?(
                <div id='btnAddRemove-positive' className='flex justify-between items-center w-full'>
                    <AiOutlineMinus onClick={handleRemoveItem}/>
                    <span>{quantity}</span>
                    <AiOutlinePlus onClick={handleAddItem}/>
                </div>
            ):(<div id='btnAddRemove-negative' className='flex justify-between items-center w-full ' onClick={handleAddItem}>
                <span>ADD</span>
                <AiOutlinePlus />


            </div>)}
            
        </div>
    )
}

export default AddRemoveButton;
