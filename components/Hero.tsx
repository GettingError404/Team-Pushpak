
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative pt-16 pb-32 flex content-center items-center justify-center" style={{ minHeight: '85vh' }}>
      <div className="absolute top-0 w-full h-full bg-center bg-cover bg-fixed"
        style={{ backgroundImage: "url('https://picsum.photos/seed/dronebg/1920/1080')", filter: 'brightness(0.4)' }}>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              <h1 className="text-white font-black text-5xl md:text-7xl font-orbitron drop-shadow-lg">
                TEAM PUSHPAK
              </h1>
              <p className="mt-4 text-lg md:text-xl text-slate-200 drop-shadow-md">
                Engineering the Future of Autonomous Flight. Integrating Cutting-Edge AI with Advanced Drone Platforms.
              </p>
              <a
                href="#drones"
                className="mt-8 inline-block bg-cyan-500 text-slate-900 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Fleet
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
