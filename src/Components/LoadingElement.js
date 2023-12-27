import React from 'react';
	 
function Loading(props) {
	return(
        <div className="absolute z-20 inset-0 flex justify-center bg-white bg-opacity-20 left-[40px] top-[20px]">
            <div className="animate-spin rounded-full h-8 w-8 mt-[150px] border-t-2 border-blue-500 border-b-2 border-gray-500"></div>
        </div>
	);
}

export default Loading;
