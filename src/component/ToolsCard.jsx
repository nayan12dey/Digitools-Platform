

import React, { use } from 'react';
import ProductCard from './ProductCard';

const ToolsCard = ({ productPromise, carts, setCarts }) => {
    // console.log(productPromise);

    const products = use(productPromise);
    console.log(products);



    return (
        <div className='grid grid-cols-3 max-w-7xl mx-auto mt-10 gap-10'>
            {
                products.map(product =>
                    <ProductCard key={product.id} product={product} carts={carts} setCarts={setCarts}></ProductCard>

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