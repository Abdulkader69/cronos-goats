import React from 'react';
const Logo = require('../images/Logo_Goat_Grazing.png');

export default function Header() {
  return (
    <header id="main-header" className='fixed top-0 left-0 w-full bg-[rgba(6,2,3,0.75)] z-[999]'>
        <div className="w-full max-w-[1360px] m-auto lg:px-10 px-4 flex justify-between items-center py-3">
            <div className="logo">
                <img className='w-full lg:max-w-[150px] max-w-[100px]' src={Logo} alt="logo" />
            </div>
            <div className="menu md:block hidden">
                <ul className='flex items-center'>
                    <li><a href="/" className='lg:text-base text-sm text-white uppercase mr-5'>Features</a></li>
                    <li><a href="/" className='lg:text-base text-sm text-white uppercase mr-5'>Roadmap</a></li>
                    <li><a href="/" className='lg:text-base text-sm text-white uppercase mr-5'>Testimonials</a></li>
                    <li><a href="/" className='lg:text-base text-sm text-white uppercase'>Faq's</a></li>
                </ul>
            </div>
            <div className="btn">
                <a href="/" className='inline-block rounded-md border-2 border-solid border-[rgb(195,30,230)] px-4 lg:py-3 py-2 lg:text-base md:text-sm text-xs text-white transition ease-in hover:bg-[rgb(195,30,230)]'>Buy Yours Now</a>
            </div>
        </div>
    </header>
    );
}
