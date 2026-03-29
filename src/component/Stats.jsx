
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

        <div className="flex w-full flex-col lg:flex-row bg-linear-to-r from-[#4F39F6] to-purple-600 mt-20 p-15 mx-auto justify-around items-center">
            <div className='flex gap-20'>
                <div className='flex flex-col justify-center items-center gap-4 text-right'>
                    <h3 className='text-white text-5xl font-bold'>50K+</h3>
                    <p className='text-gray-300'>Active Users</p>
                </div>
                <div className="divider lg:divider-horizontal text-yellow-400"></div>

                <div className='flex flex-col justify-center items-center gap-4'>
                    <h3 className='text-white text-5xl font-bold'>200+</h3>
                    <p className='text-gray-300'>Premium Tools</p>
                </div>
                <div className="divider lg:divider-horizontal"></div>

                <div className='flex flex-col justify-center items-center gap-4'>
                    <h3 className='text-white text-5xl font-bold'>4.9</h3>
                    <p className='text-gray-300'>Rating</p>
                </div>
            </div>

        </div>


    );
};

export default Stats;