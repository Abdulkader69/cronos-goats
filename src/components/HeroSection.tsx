import React from 'react';
import StakingModule from './StakingModule';
import WalletModule from './WalletModule';
const HeroBG = require('../images/unknown1-min.png');

export default function HeroSection() {
  return (
      <div className="hero-section flex relative z-50 lg:pt-40 md:pt-32 pt-24 min-h-[1080px] overflow-hidden">
          <img className='absolute w-full h-full object-cover z-10 top-0 left-0' src={HeroBG} alt="bg" />
          <div className="section-wrapper relative z-20 w-full max-w-[1360px] mx-auto lg:px-10 px-4 pb-14">
              <div className="top-box md:mb-4 text-center">
                <div className="flex justify-center items-start flex-wrap">
                    <div className="btn flex items-center justify-center border-2 sm:w-40 w-32 lg:min-h-[90px] min-h-[70px] border-black border-solid py-1 px-2 bg-black/50 text-center md:mx-8 sm:mx-4 mx-2">
                        <div className="inner">
                          <p className="lg:text-xl text-lg uppercase text-[rgba(255,249,51)] text-shadow font-bold">rewards</p>
                          <h2 className="lg:text-xl text-base text-white">0.00101</h2>
                        </div>
                    </div>
                </div>
                <a href="/" className='inline-block rounded-md border-2 border-solid border-[rgb(195,30,230)] px-10 lg:py-3 py-2 lg:text-base text-sm text-white m-4 transition ease-in bg-black/80 hover:bg-[rgb(195,30,230)]'>Harvest</a>
              </div>
              <div className="main-area flex flex-wrap justify-center">
                <WalletModule />
                <StakingModule />
              </div>
          </div>
      </div>
  );
}
