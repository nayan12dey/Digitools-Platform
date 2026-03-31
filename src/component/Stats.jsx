
import React from 'react';

const Stats = () => {
    return (
        // <div className='bg-linear-to-r from-[#4F39F6] to-purple-600 mt-20 py-15 grid grid-cols-3 justify-center'>
        //     <div className='flex flex-col justify-center items-center gap-4'>
        //         <h3 className='text-white text-5xl font-bold'>50K+</h3>
        //         <p className='text-gray-300'>Active Users</p>
        //     </div>

        //     <div className='flex flex-col justify-center items-center gap-4'>
        //         <h3 className='text-white text-5xl font-bold'>200+</h3>
        //         <p className='text-gray-300'>Premium Tools</p>
        //     </div>
        //     <div className='flex flex-col justify-center items-center gap-4'>
        //         <h3 className='text-white text-5xl font-bold'>4.9</h3>
        //         <p className='text-gray-300'>Rating</p>
        //     </div>

        // </div>

        <div className="flex w-full bg-linear-to-r from-[#4F39F6] to-purple-600 mt-10 px-6 py-10 lg:px-20 lg:py-16 justify-center items-center">
            <div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-20'>
                <div className='flex flex-col items-center gap-2 text-center lg:text-right lg:gap-4'>
                    <h3 className='text-white text-3xl sm:text-4xl lg:text-5xl font-bold'>50K+</h3>
                    <p className='text-gray-300 text-sm sm:text-base'>Active Users</p>
                </div>
                <div className="divider lg:divider-horizontal text-yellow-400"></div>

                <div className='flex flex-col items-center gap-2 text-center lg:text-right lg:gap-4'>
                    <h3 className='text-white text-3xl sm:text-4xl lg:text-5xl font-bold'>200+</h3>
                    <p className='text-gray-300 text-sm sm:text-base'>Premium Tools</p>
                </div>
                <div className="divider lg:divider-horizontal"></div>

                <div className='flex flex-col items-center gap-2 text-center lg:text-right lg:gap-4'>
                    <h3 className='text-white text-3xl sm:text-4xl lg:text-5xl font-bold'>4.9</h3>
                    <p className='text-gray-300 text-sm sm:text-base'>Rating</p>
                </div>
            </div>

        </div>


    );
};

export default Stats;