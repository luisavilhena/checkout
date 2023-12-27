import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function SearchBar (props) {
  const [termSearch, setTermSearch] = useState('');
  const [loading, setLoading] = useState(false);



  const handleInputChange = (e) => {
    setTermSearch(e.target.value);
    setLoading(true);

    // Simula um atraso de 1 segundo antes de exibir os resultados
    setTimeout(() => {
      setLoading(false);
      props.onInputForm(e.target.value);
    }, 1000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    //Child to parent component, Form to Home
    props.onInputForm(termSearch);

  };

  return (
    <form onSubmit={handleFormSubmit} className='bg-gray-light relative'>
      <button type="submit" className='absolute top-[10px] left-[10px] text-white mr-2'>        
        <FontAwesomeIcon icon="search" />
      </button>
      <input
        type="text"
        placeholder="Search for food, coffe, etc"
        value={termSearch}
        onChange={handleInputChange}
        className='pl-[100px]text-white bg-gray-light pl-[50px] pr-3 pt-3 pb-3 text-sm w-[300px]'
      />
    {loading && 
    <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500 border-b-2 border-gray-500"></div>
    </div>}

    </form>
  );
};



export default SearchBar;