import React, {useState, useEffect} from 'react';
     

function CardItem(props) {

      const { id, title, price, img, category, qty, totalValue, note, onAddToCart } = props;

    return(
        <li key={id} className="m-[40px] h-[240px] w-[192px] transform rounded-lg bg-gray-dark dark:bg-slate-800 shadow-lg duration-300 hover:scale-105 hover:shadow-lg">
            <img className="pt-[-40px] mt-[-40px] w-[149px] mx-auto inline-block " src={img} alt=" Image" />
            <div className="p-4">
                <h2 className="mb-2 text-sm font-medium text-white">{title}</h2>
                <p className="mr-2 text-sm font-semibold text-white">{price}</p>
                <button onClick= {() => onAddToCart({ id, title, price, img, category, qty, totalValue, note })} className="text-orange flex items-center mx-auto"><span className=' mt-[-6px] text-5xl mr-[10px]'>+</span>
                    <p> Add to order</p> 
                </button>
            </div>
        </li>
    );
}

export default CardItem;