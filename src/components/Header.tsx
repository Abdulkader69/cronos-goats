import React, {useState, useEffect} from 'react';
const Logo = require('../images/logo (1).png');

export default function Header() {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
      });
    }, []);
    return (
        <header id="main-header" className={`fixed top-0 left-0 w-full z-[999] ${scroll ? 'bg-white/70' : ''}`}>
            <div className="w-full max-w-[1360px] m-auto lg:px-10 px-4 flex justify-between items-center py-3">
                <div className="logo">
                    <img className='md:w-[150px] w-[100px]' src={Logo} alt="logo" />
                </div>
                <div className="menu md:block hidden">
                    <ul className='text-center'>
                        <li className='inline-block'><a href="/" className='lg:text-base text-sm transition ease-in text-[#464646] hover:text-[#1A00A0] mr-5'>Overview</a></li>
                        <li className='inline-block'><a href="/" className='lg:text-base text-sm transition ease-in text-[#464646] hover:text-[#1A00A0] mr-5'>About</a></li>
                        <li className='inline-block'><a href="/" className='lg:text-base text-sm transition ease-in text-[#464646] hover:text-[#1A00A0] mr-5'>Testimonials</a></li>
                        <li className='inline-block'><a href="/" className='lg:text-base text-sm transition ease-in text-[#464646] hover:text-[#1A00A0] mr-5'>Github</a></li>
                        <li className='inline-block'><a href="/" className='lg:text-base text-sm transition ease-in text-[#464646] hover:text-[#1A00A0] mr-5'>Resources</a></li>
                        <li className='inline-block'><a href="/" className='lg:text-base text-sm transition ease-in text-[#464646] hover:text-[#1A00A0] mr-5'>Buy Rave NFT</a></li>
                        <li className='inline-block'><a href="/" className='lg:text-base text-sm transition ease-in text-[#464646] hover:text-[#1A00A0] mr-5'>ISPO</a></li>
                        <li className='inline-block'><a href="/" className='lg:text-base text-sm transition ease-in text-[#464646] hover:text-[#1A00A0]'>Buy Rave</a></li>
                    </ul>
                </div>
                <div className="btn w-48 text-right">
                    <a href="/" className='inline-block rounded-md px-4 lg:py-3 py-2 lg:text-base md:text-sm text-xs text-white transition ease-in bg-[#1A00A0]'>Buy Yours Now</a>
                </div>
            </div>
        </header>
    );
}
