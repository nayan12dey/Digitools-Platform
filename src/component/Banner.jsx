
import React from 'react';
import { FaDotCircle } from "react-icons/fa";
import { LuPlay } from "react-icons/lu";
import BannerImg from "../assets/banner.png"

const Banner = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row justify-center items-center mt-10 lg:mt-20 px-4 sm:px-6 lg:px-12  gap-10'>

            <div className='space-y-5 max-w-xl text-center lg:text-left'>
                <span className="badge badge-soft badge-primary rounded-full p-4 gap-2">
                    <FaDotCircle />New: AI-Powered Tools Available
                </span>
                <h2 className='text-3xl sm:text-4xl lg:text-6xl font-bold'>
                    Supercharge Your Digital Workflow
                </h2>
                <p className='text-gray-500 text-sm sm:text-base'>Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.

                    Explore Products
                </p>

                <div className='flex flex-col md:flex-row gap-3 justify-center lg:justify-start'>
                    <button className="btn bg-linear-to-r from-[#4F39F6] to-purple-600 text-white rounded-full py-6">Explore Products</button>
                    <button className="btn bg-linear-to-r from-[#4F39F6] to-purple-600 bg-clip-text text-transparent rounded-full py-6 border border-purple-500 font-bold"><LuPlay className='text-purple-500 text-xl' />
Watch Demo</button>

                    
                </div>
            </div>

            <div>
                <img className='w-100' src={BannerImg} alt="" />
            </div>

        </div>


    );
};

export default Banner;