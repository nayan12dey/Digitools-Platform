

import React from 'react';

const Workflow = () => {
    return (
        <div>
            <div className="w-full bg-linear-to-r from-[#4F39F6] to-purple-600 text-white mt-10 md:mt-20 px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 flex justify-center items-center">
                <div className="space-y-4 max-w-3xl w-full"> 
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
                        Ready to Transform Your Workflow?
                    </h2> 
                    <p className="text-xs sm:text-sm md:text-base text-center text-gray-200">
                        Join thousands of professionals who are already using Digitools to work smarter.
                        <br className="hidden sm:block"/>
                        Start your free trial today.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-4">

                        <button className="w-44 btn bg-white rounded-full py-3">
                            <span className="bg-linear-to-r from-[#4F39F6] to-purple-600 bg-clip-text text-transparent">
                                Explore Products
                            </span>
                        </button>

                        <button className="w-44 btn text-white border border-white bg-transparent rounded-full py-3 px-6">
                            View Pricing
                        </button>
                    </div>
      
                    <ul className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-gray-200 text-xs sm:text-sm mt-4 text-center">
                        <li>14-day free trial</li>
                        <li className="list-disc sm:ml-2">No credit card required</li>
                        <li className="list-disc sm:ml-2">Cancel anytime</li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Workflow;