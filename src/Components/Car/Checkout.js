import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';




function Checkout({onPayment, carData, handleRemoveItem, handleAddOrderNote, onClickPayment, offClickPayment }) {
    const [termNote, setTermNote] = useState('');
    const [totalAmount, setTotalAmount] = useState('');
  
    const handleOrderNote = (itemId, value) => {
        handleAddOrderNote(itemId, value);
    };
    
    const handleNoteChange = (itemId, value) => {
        setTermNote((prevNotes) => ({
            ...prevNotes,
            [itemId]: value,
        }));
        handleOrderNote(itemId, value);
    }
    useEffect(() => {
      // Calc total value 
      const calculateTotal = () => {
        return carData.reduce((total, item) => total + item.totalValue, 0);
      };
  
      // Update totalAmount
      setTotalAmount(calculateTotal());
    }, [carData]);

    //click button to payment
    const handleGoPayment = () => {
      onClickPayment();
    };
    const handleOutPayment = () => {
      offClickPayment('checkout')
    }
  
    return (
      <div className={`z-30 container pt-[30px] p-4 bg-gray-dark fixed top-0 bottom-0 right-0 w-[410px] height-[100vh] ${onPayment ? "transition-all right-[410px] " : "transition-all right-0"}`}>
        {onPayment ? (
        <div className='mb-[40px] text-white'>
          <div
          onClick={handleOutPayment}
          className='text-start mb-[20px] text-2xl hover:text-orange'>
              <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div className='flex justify-between items-start'>
              <div>
                  <h2 className="text-3xl mb-[10px]">Your order</h2>
                  {/* Content fixed only for test */}
                  <p className='text-base text-gray-lighter text-start'>Order ID#34562</p>
              </div>
              <button
              onClick={handleOutPayment}
              className='bg-orange text-white px-4 pb-[0.5rem] pt-[0.3rem] text-4xl mt-1 rounded shadow-md'>
                  +
              </button>
          </div>
        </div>
        ) : (
          <div>
            <h2 className="text-2xl mb-[50px] text-white text-start	">Order ID#34562</h2>
          </div>

        )}

        <table className="min-w-full mb-[40px] text-white">
          <thead>
            <tr className="border-b border-gray-light">
              <th className="py-2 w-3/4 pb-[40px] text-start">Item</th>
              <th className="py-2 px-4 w-1/4 pb-[40px]">Qty</th>
              <th className="py-2 px-4 w-1/4 pb-[40px]">Preço</th>
            </tr>
          </thead>
          </table>
          <div className='overflow-auto h-[50vh] w-full'>
            {carData.length === 0 ? (
                <div className="text-center py-4 mt-10 w-full">
                    <h2 className="text-3xl mb-5">Your cart is empty</h2>
                    <p className='text-base	w-[150px] mx-auto'>Add items to create an order</p>
                </div>
            ) : (
              carData.map((item) => (
                <div key={item.id} className='mb-[50px]'>
                  <div className='flex items-start mb-[10px]'>
                    <img src={item.img} alt={item.title} className="mr-[10px] w-[40px]" />
                    <div className='w-[280px] text-start'>
                        <p className="font-bold">{item.title.slice(0, 25)}...</p>
                        <p className='text-gray-lighter'>${item.price.toFixed(2)}</p>
                    </div>
                    <div className="py-2 border border-gray-light bg-gray-medium px-3 mr-[50px] w-[45px] rounded">
                      {item.qty}
                    </div>
                    <p>${item.totalValue.toFixed(2)}</p>
                  </div>
                  <div className='flex'>
                    <input
                      type="text"
                      placeholder="Order Note"
                      value={termNote[item.id] || ''}
                      onChange={(e) => handleNoteChange(item.id, e.target.value)}
                      className="text-white bg-gray-light rounded p-2 w-1/4 text-sm w-[375px] mr-[50px]"
                    ></input>
                    <button
                      onClick={() => {
                        handleRemoveItem(item.id);
                        handleAddOrderNote(item.id, termNote);  
                      }}
                      className="text-orange px-3 py-1 mt-1 rounded border">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>

              ))             
            )}
          </div>
          <div className='absolute right-[10px] left-[10px] bottom-0 pt-[20px] pr-[20px] pb-[50px] bg-gray-dark border-t border-gray-light'>
            <table className='w-full mb-[40px]'>
              {carData.length > 0 ? (
                  <tr>
                    <td className="py-2 w-2/4 text-gray-lighter text-start">Discount:</td>
                    <td className="py-2 w-1/4 text-end">$0</td>
                  </tr>
              ):('')}
              {carData.length > 0 ? (
                  <tr>
                    <td className="py-2 w-2/4 text-gray-lighter text-start">Total:</td>
                    <td className="py-2 w-1/4 text-end">${totalAmount.toFixed(2)}</td>
                  </tr>
              ):('')}
            </table>
          {carData.length > 0 && !onPayment ? (
            <button 
            onClick={handleGoPayment}
            className=' w-[350px] bg-orange border border-orange shadow-md text-white py-3 mt-1 rounded shadow hover:bg-gray-dark hover:border-orange'> 
            Continue to Payment
            </button>
          ):('')}
          </div>
      </div>
    );
}

export default Checkout;
