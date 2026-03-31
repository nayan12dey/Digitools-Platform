
import React from 'react';
import { TbBrandInstagramFilled } from "react-icons/tb";
import { IoLogoFacebook } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>

            <footer className="bg-[#101727] px-10 sm:px-20 py-10">
                <div className="footer footer-vertical lg:footer-horizontal">
                    <aside>
                        <div className='lg:py-20 text-gray-500 text-lg space-y-3'>
                            <h2 className='text-white text-4xl font-bold'>DigiTools</h2>
                            <p className='text-sm'>
                                Premium digital tools for creators, professionals, and businesses.
                                Work smarter with our suite of powerful tools.
                            </p>
                        </div>
                    </aside>

                    <nav className='text-gray-500 lg:p-20'>
                        <h6 className="footer-title text-white">Services</h6>
                        <a className="link link-hover">Features</a>
                        <a className="link link-hover">Pricing</a>
                        <a className="link link-hover">Templates</a>
                        <a className="link link-hover">Integrations</a>
                    </nav>

                    <nav className='text-gray-500 lg:p-20'>
                        <h6 className="footer-title text-white">Company</h6>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Blog</a>
                        <a className="link link-hover">Careers</a>
                        <a className="link link-hover">Press</a>
                    </nav>

                    <nav className='text-gray-500 lg:p-20'>
                        <h6 className="footer-title text-white">Resources</h6>
                        <a className="link link-hover">Documentation</a>
                        <a className="link link-hover">Help Center</a>
                        <a className="link link-hover">Community</a>
                        <a className="link link-hover">Contact</a>
                    </nav>

                    <nav className='text-gray-500 lg:p-20'>
                        <h6 className="footer-title text-white">Social Links</h6>
                        <div className='flex flex-row gap-3 text-[#101727]'>
                            <a className="bg-white p-2 text-xl rounded-full"><TbBrandInstagramFilled /></a>
                            <a className="bg-white p-2 text-xl rounded-full"><IoLogoFacebook /></a>
                            <a className="bg-white p-2 text-xl rounded-full"><FaXTwitter /></a>
                        </div>
                    </nav>
                </div>

               
                <div className="divider w-full border-t-2 border-gray-700"></div>

                <div className='flex flex-col gap-4 md:flex-row justify-between items-center'>
                    <p className='text-gray-500 text-xs sm:text-base'>© 2026 Digitools. All rights reserved.</p>
                    <div className='text-gray-500 flex gap-4 text-xs sm:text-base items-center'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>

            </footer>
        </div>
    );
};

export default Footer;



