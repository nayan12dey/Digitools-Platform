
import React from 'react';
import userImg from "../assets/user.png";
import packageImg from "../assets/package.png";
import rocketImg from "../assets/rocket.png"

const Steps = () => {
    return (
        <div className=''>
            <div className='text-center mt-20 space-y-4'>
                <h3 className='text-5xl font-bold'>Get Started in 3 Steps</h3>
                <p className='text-gray-500'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='grid mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full lg:w-[90%] mx-auto'>
                <div className="card bg-base-100 shadow-sm border border-base-300 m-10 p-10 relative">
                    <div className='absolute top-4 right-4 bg-linear-to-r from-[#4F39F6] to-purple-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold'>01</div>
                    <div className='mx-auto bg-purple-200 rounded-full p-4'><img
                        src={userImg}
                        alt="user"
                        className="rounded-xl" />

                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Create Account</h2>
                        <p className='text-gray-600'>Sign up for free in seconds. No credit card required to get started.</p>

                    </div>
                </div>

                <div className="card bg-base-100 shadow-sm border border-base-300 m-10 p-10 relative">
                    <div className='absolute top-4 right-4 bg-linear-to-r from-[#4F39F6] to-purple-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold'>02</div>
                    <div className='mx-auto bg-purple-200 rounded-full p-4'><img
                        src={packageImg}
                        alt="package"
                        className="rounded-xl" />

                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Choose Products</h2>
                        <p className='text-gray-600'>Browse our catalog and select the tools that fit your needs.</p>

                    </div>
                </div>

                <div className="card bg-base-100 shadow-sm border border-base-300 m-10 p-10 relative">
                    <div className='absolute top-4 right-4 bg-linear-to-r from-[#4F39F6] to-purple-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold'>03</div>
                    <div className='mx-auto bg-purple-200 rounded-full p-4'><img
                        src={rocketImg}
                        alt="user"
                        className="rounded-xl" />

                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Start Creating</h2>
                        <p className='text-gray-600'>Download and start using your premium tools immediately.</p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Steps;