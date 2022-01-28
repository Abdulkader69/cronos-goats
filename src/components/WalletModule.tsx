import React from 'react';
// Wallet start Here
const Logo = require('../images/logo.png');

const Wallet1 = [
  {
      title: '#34 Sentinel',
      content: 'Because they have no desires of their own, a Sentinel can stay alert in guard position indefinitely',
      type: 'Light',
      height: '333',
      weight: '3333',
      icon: Logo,
  },
  {
      title: '#35 Elkar',
      content: 'The glowing golden antlers of the Elkar are so dense they can charge through diamond boulders',
      type: 'Light',
      height: '150',
      weight: '60',
      icon: Logo,
      big_image: Logo
  },
  {
      title: '#36 Lumenicia',
      content: 'Highly sensitive, Lumenicia are able to communicate with light',
      type: 'Light',
      height: '180',
      weight: '1',
      icon: Logo,
      big_image: Logo
  },
];

const Wallet2 = [
  {
      title: '#19 Lavekans',
      content: 'Lavekans can be very territorial, and will try to kill any unwelcome intruder by biting it, wrapping around and greatly increasing their body temperature',
      type: 'Fire',
      height: '520',
      weight: '640',
      icon: Logo,
      big_image: Logo
  },
  {
      title: '#20 Calidus',
      content: 'When Calidus sense a threat they can start to burn hot enough to emit waves capable of burning steel from several metres away',
      type: 'Fire',
      height: '250',
      weight: '4500',
      icon: Logo,
      big_image: Logo
  },
  {
      title: '#21 Magmus',
      content: 'Magmus ooze a trail of lava as they move that can continue burning for several hours',
      type: 'Fire',
      height: '220',
      weight: '550',
      icon: Logo,
      big_image: Logo
  },
];
const Wallet3 = [
  {
      title: '#10 Sharakus',
      content: 'Sharakus are able to generate enough power while swimming to cause waves several hundred metres overhead',
      type: 'Water',
      height: '220',
      weight: '200',
      icon: Logo,
      big_image: Logo
  },
  {
      title: '#11 Sujin',
      content: 'Sujin are mischevious tricksters that are able to shape their watery bodies at will to mimic anything they have already seen',
      type: 'Water',
      height: '180',
      weight: '1',
      icon: Logo,
      big_image: Logo
  },
  {
      title: '#12 Leviathan',
      content: 'Leviathan usually drift through the deep ocean',
      type: 'Water',
      height: '410',
      weight: '800',
      icon: Logo,
      big_image: Logo
  },
];

const Wallet4 = [
  {
      title: '#1 Solarion',
      content: 'Self sufficient and able to produce their own light, Solarion often live in solidarity',
      type: 'Plant',
      height: '180',
      weight: '450',
      icon: Logo,
      big_image: Logo
  },
  {
      title: '#2 Mangris',
      content: 'Mangris are able to confuse prey with their floral crest to approach near enough to grab them with their deadly pincirs',
      type: 'Plant',
      height: '60',
      weight: '20',
      icon: Logo,
      big_image: Logo
  },
  {
      title: '#3 Sporeleon',
      content: 'Able to traverse up tall trees, Sporeleon are often found perched high in the canopy',
      type: 'Plant',
      height: '100',
      weight: '35',
      icon: Logo,
      big_image: Logo
  }
];

export default function WalletModule() {
  return (
      <div className="wallet-section relative lg:w-[calc(50%-32px)] w-full bg-gray-100 p-4 mt-20 lg:mr-8">
        <h2 className="text-dark lg:text-2xl md:text-xl text-lg uppercase leading-[1] mb-4">Wallet</h2>
        <a href="/" className='inline-block absolute lg:-top-20 -top-16 right-0 rounded-md border-2 border-solid border-[rgb(195,30,230)] px-10 lg:py-3 py-2 lg:text-base text-sm text-white my-2 transition ease-in bg-black/80 hover:bg-[rgb(195,30,230)]'>Stake</a>
        <div className="hatchy-action-section flex flex-wrap justify-start items-start">
            <div className="hatchy-item hatchy-item5 flex flex-wrap sm:w-1/2 w-full">
                {Wallet1.map((album, index) => (
                    <div 
                        className="item-card w-4/12 relative flex group cursor-pointer border-4 border-solid border-[#FFE600]"
                        key={album.title}
                        // ref={(e) => (clickIconsRef.current[index] = e)}
                        // onClick={() => handleAlbumClick(clickIconsRef.current[index], album)}
                    >
                        <img className="object-cover object-center w-full" src={album.icon} alt={album.title} />
                        <div className="hover-data absolute opacity-0 group-hover:opacity-100 invisible group-hover:visible top-0 left-0 md:bg-[rgba(0,0,0,.85)] bg-[rgba(0,0,0,.76)] text-white p-4 shadow-box-s-sml2 w-0 group-hover:w-[200px] h-[200px] transition-height-transition z-10 pointer-events-none">
                            <h2 className="text-base mb-2">{album.title}</h2>
                            <p className="text-[11px] mb-4">{album.content}</p>
                            <p className="text-[11px] mb-4">Type: {album.type}</p>
                            <p className="text-[11px]">Height: {album.height} - Weight: {album.weight}</p>
                        </div>
                    </div>
                  
                ))}
            </div>
            <div className="hatchy-item hatchy-item5 flex flex-wrap sm:w-1/2 w-full">
                {Wallet2.map((album, index) => (
                    <div 
                        className="item-card w-4/12 relative flex group cursor-pointer border-4 border-solid border-[#FF3A3A]"
                        key={album.title}
                        // ref={(e) => (clickIconsRef.current[index] = e)}
                        // onClick={() => handleAlbumClick(clickIconsRef.current[index], album)}
                    >
                        <img className="object-cover object-center w-full" src={album.icon} alt={album.title} />
                        <div className="hover-data absolute opacity-0 group-hover:opacity-100 invisible group-hover:visible top-0 left-0 md:bg-[rgba(0,0,0,.85)] bg-[rgba(0,0,0,.76)] text-white p-4 shadow-box-s-sml2 w-0 group-hover:w-[200px] h-[200px] transition-height-transition z-10 pointer-events-none">
                            <h2 className="text-base mb-2">{album.title}</h2>
                            <p className="text-[11px] mb-4">{album.content}</p>
                            <p className="text-[11px] mb-4">Type: {album.type}</p>
                            <p className="text-[11px]">Height: {album.height} - Weight: {album.weight}</p>
                        </div>
                    </div>
                  
                ))}
            </div>
            <div className="hatchy-item hatchy-item5 flex flex-wrap  sm:w-1/2 w-full">
                {Wallet3.map((album, index) => (
                    <div 
                        className="item-card w-4/12 relative flex group cursor-pointer border-4 border-solid border-[#4BD4FF]"
                        key={album.title}
                        // ref={(e) => (clickIconsRef.current[index] = e)}
                        // onClick={() => handleAlbumClick(clickIconsRef.current[index], album)}
                    >
                        <img className="object-cover object-center w-full" src={album.icon} alt={album.title} />
                        <div className="hover-data absolute opacity-0 group-hover:opacity-100 invisible group-hover:visible top-0 left-0 md:bg-[rgba(0,0,0,.85)] bg-[rgba(0,0,0,.76)] text-white p-4 shadow-box-s-sml2 w-0 group-hover:w-[200px] h-[200px] transition-height-transition z-10 pointer-events-none">
                            <h2 className="text-base mb-2">{album.title}</h2>
                            <p className="text-[11px] mb-4">{album.content}</p>
                            <p className="text-[11px] mb-4">Type: {album.type}</p>
                            <p className="text-[11px]">Height: {album.height} - Weight: {album.weight}</p>
                        </div>
                    </div>
                  
                ))}
            </div>
            <div className="hatchy-item hatchy-item5 flex flex-wrap sm:w-1/2 w-full">
                {Wallet4.map((album, index) => (
                    <div 
                        className="item-card w-4/12 relative flex group cursor-pointer border-4 border-solid border-[#44FF4C]"
                        key={album.title}
                        // ref={(e) => (clickIconsRef.current[index] = e)}
                        // onClick={() => handleAlbumClick(clickIconsRef.current[index], album)}
                    >
                        <img className="object-cover object-center w-full" src={album.icon} alt={album.title} />
                        <div className="hover-data absolute opacity-0 group-hover:opacity-100 invisible group-hover:visible top-0 left-0 md:bg-[rgba(0,0,0,.85)] bg-[rgba(0,0,0,.76)] text-white p-4 shadow-box-s-sml2 w-0 group-hover:w-[200px] h-[200px] transition-height-transition z-10 pointer-events-none">
                            <h2 className="text-base mb-2">{album.title}</h2>
                            <p className="text-[11px] mb-4">{album.content}</p>
                            <p className="text-[11px] mb-4">Type: {album.type}</p>
                            <p className="text-[11px]">Height: {album.height} - Weight: {album.weight}</p>
                        </div>
                    </div>
                  
                ))}
            </div>
        </div>
      </div>
  );
}
