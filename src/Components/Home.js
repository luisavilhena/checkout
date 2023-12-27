import React, { useState } from 'react';
import CardItem from './CardItem';
import SearchBar from './SearchBar';
import imagens from '../ImgHelper';
import FilterBar from './FilterBar';
import Checkout from './Car/Checkout';
import Payment from './Car/Payment';
import Menu from './Menu';

function Home() {
    const DATA =[
        {
            id: 1,
            title:"Spicy seasoned seafood noodles" ,
            price: 2.29,
            totalValue: 2.29,
            img: imagens.dish1,
            category: "Hot Dishes",
            qty: 1,
            note:"",
        },
        {
            id: 2,
            title:"Salted Pasta with mushroom sauce" ,
            price: 2.69,
            totalValue: 2.69,
            img: imagens.dish2,
            category: "Hot Dishes",
            qty: 1,
            note:"",
        },
        {
            id: 3,
            title:"Beef dumpling in hot and sour soup" ,
            price: 2.99,
            totalValue: 2.99,
            img: imagens.dish3,
            category: "Soup",
            qty: 1,
            note:"",
        },
        {
            id: 4,
            title:"Healthy noodle with spinach leaf" ,
            price: 3.29,
            totalValue: 3.29,
            img: imagens.dish4,
            category: "Grill",
            qty: 1,
            note:"",
        },
        {
            id: 5,
            title:"Hot spicy fried rice with omelet" ,
            price: 3.49,
            totalValue: 3.49,
            img: imagens.dish5,
            category: "Appetizer",
            qty: 1,
            note:"",
        },
        {
            id: 6,
            title:"Spicy instant noodle with special omelette" ,
            price: 3.59,
            totalValue: 3.59,
            img: imagens.dish6,
            category: "Dessert",
            qty: 1,
            note:"",
        },
    ]

    const [termSearch, setTermSearch] = useState('')
    const [carData, setCarData] = useState([]);
    const [showPayment, setShowPayment] = useState(false);

    //add new Data for Car
    const handleAddToCart = (item) => {
        //if the item exists
        const foodExistIndex = carData.findIndex((el) => el.id === item.id);
        if(foodExistIndex !== -1) {
            const newCar = [...carData];
            //add new item
            newCar[foodExistIndex].qty += 1;
            //multiply the price
            newCar[foodExistIndex].totalValue = newCar[foodExistIndex].price * newCar[foodExistIndex].qty
            setCarData(newCar);
        } /*if there isn't*/ else {
            setCarData((prevCar) => [...prevCar,{ ...item}]);
        }
    };
    //remove item for Car
    const handleRemoveItem = (itemId) => {
        setCarData((prevCar) => {
            return prevCar.map((item) => {
            if (item.id === itemId) {
                if (item.qty > 1) {
                    return { ...item, qty: item.qty - 1, totalValue: item.totalValue - item.price };
                } else {
                    return null; // Remove if qty= 1
                }
            }
            return item;
          }).filter(Boolean); // Filter for remover null items
        });
    };
    const handleAddOrderNote = (itemId, orderNote) => {
        setCarData((prevCar) => {
            return prevCar.map((item) => {
                if (item.id === itemId) {
                    return { ...item, note: orderNote };
                }
            return item;
            });
        });
    };

    //click payment
    const handlePayment = (info) => {
        console.log(info);
        setShowPayment(true)
        console.log(showPayment)
    };
    const handleOffPayment = (e) => {
        setShowPayment(false)
    }
    //inputForm is from file SearchBar
    const inputForm = (enteredSearch) => {
        setTermSearch(enteredSearch)
    }
    //filterBar is from file FilterBar
    const filterBar =(newButton) => {
        setTermSearch(newButton)
    }
    //filter category or title from SearchBar
    const itemFilter = termSearch
    ? DATA.filter(item => item.category.toLowerCase().includes(termSearch.toLowerCase()) ||
     item.title.toLowerCase().includes(termSearch.toLowerCase())|| item.category.includes(termSearch))
    : DATA;

    return (
        <div className='h-full relative'>
            <Menu/>
            <div className='bg-gray-medium p-[30px] flex w-full overflow-x-hidden relative text-white'>
                <div className='w-3/5 ml-[100px]'>
                    <div className='flex justify-between items-start ml-[40px] mb-[20px]'>
                        <div>
                            {/* Fixed content only for test */}
                            <h2 className='text-start text-3xl mb-[10px]'>Jaegar Resto</h2>
                            <p className='text-start text-gray-lighter'>Tuesday 2 Feb, 2021</p>

                        </div>
                        <SearchBar
                            onInputForm={inputForm}
                        />
                    </div>
                    <FilterBar
                        onFilterBar={filterBar}
                    />
                    <h3 className='text-xl text-start ml-[40px] mb-[40px]'>Choose Dishes</h3>
                    <ul className='flex h-screen flex-wrap content-start justify-start'>
                    {itemFilter.length === 0 ? (
                        <li className="text-white text-center w-full mb-4">
                            <p>No results found.</p>
                        </li>
                    ) : (
                        itemFilter.map((e) => (
                            <CardItem
                                {...e}
                                onAddToCart={handleAddToCart}
                                key={e.id}
                                title={e.title}
                                price={e.price}
                                img={e.img}
                                alt={e.title}
                                category={e.category}
                                totalValue={e.totalValue}
                                note={e.note}
                            />
                        ))
                    )}
                    </ul>
                </div>
                <div>
                    <Checkout
                    carData={carData}
                    handleRemoveItem={handleRemoveItem}
                    handleAddOrderNote={handleAddOrderNote}
                    onClickPayment={handlePayment}
                    offClickPayment={handleOffPayment}
                    onPayment={showPayment}
                    />
                </div>
                <Payment 
                onPayment={showPayment}/>
                
            </div>
            {
               showPayment ? (
                <span className='absolute top-0 bottom-0 right-0 left-0 bg-gray-dark opacity-80 z-20'></span>
               ):('') 
            }
        </div>
    )
}
export default Home;