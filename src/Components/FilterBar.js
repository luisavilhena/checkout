import React, { useState } from 'react';


function FilterBar(props){
    const [active, setActive] = useState(null)
    const handleCategoriaChange = (newCategory) => {
        props.onFilterBar(newCategory);
        setActive(newCategory);
        // console.log(newCategory)
        console.log(active)
    };


    return (
    <div>
      <div className='ml-[40px] mb-[20px] flex align-start border-b border-gray-light py-5'>
        <button 
        onClick={() => handleCategoriaChange('Hot Dishes')}
        className={`pr-[40px] font-bold text-xs hover:text-orange relative ${active === 'Hot Dishes' ? 'text-orange after:absolute after:w-[40px] after:h-[2px] after:left-0 after:top-[53px] after:bg-orange' : 'text-white'}`}>
          Hot Dishes
        </button>
        <button
        onClick={() => handleCategoriaChange('Soup')}
        className={`pr-[40px] font-bold py-2 text-xs hover:text-orange relative ${active === 'Soup' ? 'text-orange after:absolute after:w-[40px] after:h-[2px] after:left-0 after:top-[53px] after:bg-orange' : 'text-white'}`}>
          Soup
        </button>

        <button
        onClick={() => handleCategoriaChange('Grill')}
        className={`pr-[40px] font-bold py-2 text-xs hover:text-orange relative ${active === 'Grill' ? 'text-orange after:absolute after:w-[40px] after:h-[2px] after:left-0 after:top-[53px] after:bg-orange' : 'text-white'}`}>
          Grill
        </button>

        <button
        onClick={() => handleCategoriaChange('Appetizer')}
        className={`pr-[40px] font-bold py-2 text-xs hover:text-orange relative ${active === 'Appetizer' ? 'text-orange after:absolute after:w-[40px] after:h-[2px] after:left-0 after:top-[53px] after:bg-orange' : 'text-white'}`}>
          Appetizer
        </button>

        <button
        onClick={() => handleCategoriaChange('Dessert')}
        className={`pr-[40px] font-bold py-2 text-xs hover:text-orange relative ${active === 'Dessert' ? 'text-orange after:absolute after:w-[40px] after:h-[2px] after:left-0 after:top-[53px] after:bg-orange' : 'text-white'}`}>
          Dessert
        </button>

        <button
        onClick={() => handleCategoriaChange('')}
        className={`pr-[40px] font-bold py-2 text-xs hover:text-orange relative ${active === '' ? 'text-orange after:absolute after:w-[40px] after:h-[2px] after:left-0 after:top-[53px] after:bg-orange' : 'text-white'}`}>
          Todos
        </button>

      </div>
    </div>
  );
};

export default FilterBar;
