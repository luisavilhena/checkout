import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function SearchBar (props) {
	const [termSearch, setTermSearch] = useState('');

	const handleInputChange = (e) => {
		setTermSearch(e.target.value);
		props.onInputForm(e.target.value);
	};


	return (
		<form onSubmit={handleInputChange} className='bg-gray-light relative'>
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
			
		</form>
	);
};



export default SearchBar;