

import React from 'react';

const Workflow = () => {
    return (
        <div>
            <div className="flex w-full bg-linear-to-r from-[#4F39F6] to-purple-600 text-white mt-30 p-20 justify-center items-center">
                <div className='space-y-4'>
                    <h2 className='text-4xl font-bold text-center'>Ready to Transform Your Workflow?</h2>
                    <p className='text-sm text-center text-gray-300'>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>
                    <div className='flex justify-center items-center gap-4'>
                        <button className="btn bg-white rounded-full py-6"><span className='bg-linear-to-r from-[#4F39F6] to-purple-600 bg-clip-text text-transparent'>Explore Products</span></button>
                        <button className="btn text-white bg-transparent rounded-full py-6 px-6">View Pricing</button>
                    </div>
                    <ul className='flex justify-center items-center gap-4 text-gray-300 text-sm'>
                        <li className='mr-2'>14-day free trial</li>
                        <li className='list-disc mr-2'>No credit card required</li>
                        <li className='list-disc'>Cancel anytime</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Workflow;