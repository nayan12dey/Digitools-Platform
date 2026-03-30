

import React, { use } from 'react';

const ToolsCard = ({productPromise}) => {
    // console.log(productPromise);

    const products = use(productPromise);
    console.log(products);
    
    return (
        <div>
            
        </div>
    );
};

export default ToolsCard;