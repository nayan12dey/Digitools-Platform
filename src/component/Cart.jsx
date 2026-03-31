
import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {
    // console.log(carts);

    const totalPrice = carts.reduce((sum, cart) => sum + cart.price, 0);
    // console.log(totalPrice)

    const cardCheckout = () => {
        setCarts([]);
        toast.success("Proceed to Checkout!")
    }

    const removeCard = (cartItem) => {
        console.log("cart deleted", cartItem);

        const filteredArray = carts.filter(cart => cart.id !== cartItem.id)
        console.log(filteredArray);

        setCarts(filteredArray);

        toast.success("Item Successfully Removed!")
    }


    return (


        <div className='mt-10 max-w-6xl mx-auto border-2 border-base-300 p-10 rounded-xl'>
            <div className='flex justify-start'>
                <h2 className='text-3xl font-bold'>Your Cart</h2>
            </div>

            {
                carts.length === 0 ? <div className="flex flex-col items-center justify-center h-[30vh] text-center">
  <h1 className="text-3xl font-semibold mb-2">Your Cart is Empty</h1>
  <p className="text-gray-500 mb-4">Add items to get started.</p>
  </div>
                    : (
                        <>
                            <div className="space-y-5 mt-10">
                                {carts.map((cart) => (
                                    <div className="flex items-center justify-between bg-[#F9FAFC] rounded-lg p-3" key={cart.id}>
                                        <div className="flex items-center gap-2 p-3">
                                            <div>
                                                <img
                                                    className="w-7 object-contain"
                                                    src={cart.icon}
                                                />
                                            </div>

                                            <div>
                                                <h2 className="sm:text-xl font-bold">{cart.name}</h2>
                                                <div className="text-gray-600">${cart.price}</div>
                                            </div>
                                        </div>

                                        <div className="flex justify-between gap-10">

                                            <button onClick={() => removeCard(cart)} className='btn rounded-full bg-base-100 text-red-500'>Remove</button>


                                        </div>

                                    </div>

                                ))}
                            </div>

                            <div className="flex justify-between p-5 mt-8 rounded-lg">
                                <div className='text-gray-600'>Total</div>
                                <div className='text-xl font-bold'>${totalPrice}</div>
                            </div>

                            <button onClick={cardCheckout} className='btn bg-linear-to-r from-[#4F39F6] to-purple-600 text-white rounded-full w-full p-6'>Proceed to Checkout</button>
                        </>
                    )
            }





        </div>


    );
};

export default Cart;




// {
//         "id": 1,
//         "name": "AI Writing Pro",
//         "description": "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
//         "price": 29,
//         "period": "Mo",
//         "tag": "Best Seller",
//         "tagType": "Best Seller",
//         "features": [
//             "Unlimited AI generations",
//             "50+ writing templates",
//             "Export to PDF",
//             "Grammar checker"
//         ],
//         "icon": "https://i.ibb.co/5XwpCDhL/writing-2327400-1.png"
//     },