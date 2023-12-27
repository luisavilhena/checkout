import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faMoneyBill } from '@fortawesome/free-solid-svg-icons';


const Payment = (props) => {
    const [cardholderName, setCardholderName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [tableNo, setTableNo] = useState('');
  
    const handlePayment = () => {
        console.log('Payment ok');
    };
    return (
    <div className={`z-30 container pt-[80px] px-[30px] fixed w-[410px] top-0 bottom-0 text-white text-start bg-gray-dark border-l border-gray-light overflow-hidden ${props.onPayment ? "transition-all right-0 " : "transition-all right-[-410px]"}`}>
        <div>
            <h2 className="text-3xl mb-[10px]">Payment</h2>
            {/* Content fixed only for test */}
            <p className='text-base text-gray-lighter'>3 payment method available</p>
        </div>
        <h3 className='text-2xl mt-[50px] mb-[20px]'>Payment Method</h3>
        <ul className='flex mb-[20px]'>
            <li className='px-3 py-3 mr-[10px] w-[110px] flex flex-col items-center rounded border border-gray-lighter hover:text-orange hover:border-orange' >
                <FontAwesomeIcon className='mb-[5px]' icon={faCreditCard} />
                Credit Card
            </li>
            <li className='px-3 py-3 w-[110px] flex flex-col items-center rounded border border-gray-lighter hover:text-orange hover:border-orange'>
                <FontAwesomeIcon className='mb-[5px]' icon={faMoneyBill} />
                Cash
            </li>
        </ul>
        <label className='flex flex-col items-start mb-[20px]'>
            Cardholder Name
            <input
                className="mt-[5px] text-white bg-gray-light rounded p-2 text-sm w-full"
                type="text"
                value={cardholderName}
                onChange={(e) => setCardholderName(e.target.value)}
            />
        </label>
        <label className='flex flex-col items-start mb-[20px]'>
            Card Number
            <input
                className="mt-[5px] bg-gray-light rounded p-2 text-sm w-full"
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
            />
        </label>
        <div className='flex justify-between'>
            <label className='flex flex-col w-1/2 items-start mb-[20px] mr-[15px]'>
            Expiration Date
            <input
                className="mt-[5px] bg-gray-light rounded p-2 text-sm w-full"
                type="date"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
            />
            </label>
            <label className='flex flex-col w-1/2 items-start mb-[20px]'>
            CVV:
            <input
                className="mt-[5px] bg-gray-light rounded p-2 text-sm w-full"
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
            />
            </label>
        </div>
        <div>
            <label className='flex flex-col items-start mb-[20px]'>
            Table no.
            <input
                className="mt-[5px] bg-gray-light rounded p-2 text-sm"
                type="text"
                value={tableNo}
                onChange={(e) => setTableNo(e.target.value)}
            />
            </label>
        </div>
        <div className='flex mt-[50px]'>
            <button 
            className='w-1/2 mr-[15px] border border-orange shadow-md text-white py-3 mt-1 rounded shadow hover:bg-gray-dark hover:border-orange'
            onClick={handlePayment}>
                Cancel
            </button>
            <button 
            className='w-1/2 bg-orange border border-orange shadow-md text-white py-3 mt-1 rounded shadow hover:bg-gray-dark hover:border-orange'
            onClick={handlePayment}>
                Confirm Payment
            </button>

        </div>
    </div>
  );
};

export default Payment;