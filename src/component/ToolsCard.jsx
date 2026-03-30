

import React, { use } from 'react';

const ToolsCard = ({ productPromise }) => {
    // console.log(productPromise);

    const products = use(productPromise);
    console.log(products);

    return (
        <div className='grid grid-cols-3 max-w-7xl mx-auto mt-10 gap-10'>
            {
                products.map(product =>
                    <div key={product.id}>
                        <div className="card w-96 bg-base-100 border border-base-300 shadow-sm">
                            <div className="card-body">
                                <div className='flex justify-end'>
                                    <span className="badge badge-xs badge-warning">Most Popular</span>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <img className='w-7' src={product.icon} alt="" />
                                    <h2 className="text-2xl font-bold">{product.name}</h2>
                                    <p>For teams and businesses</p>
                                    <span className="text-xl text-left text-gray-600"><span className='text-3xl text-black font-bold'>${product.price}</span>/Mo</span>
                                </div>
                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                        {
                                            product.features.map((feature, index) => (
                                                <li key={index}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span>{feature}</span>
                                                </li>
                                            ))
                                        }
                                </ul>
                                <div className="mt-6">
                                    <button className="btn bg-linear-to-r from-[#4F39F6] to-purple-600 text-white rounded-full btn-block">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }
        </div>
    );
};

export default ToolsCard;




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