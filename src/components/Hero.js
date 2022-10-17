import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

// import woman image
import HeroImg from '../assets/img/hero.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[100vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-accent text-md mb-[22px]">
              Hey, I'm Sabarish! 👋
            </p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-6xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              I Build & Design <br /> Web Interfaces.
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              I’m a full-stack developer(MERN) specializing in building (and
              occasionally designing). Currently, I’m focused on building
              responsive full-stack web applications.
            </p>
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                className="transition-all duration-300"
              >
            <button className="btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all">
                View Work&nbsp;&nbsp;
                <BsFillArrowRightCircleFill size={20} />
            </button>
              </Link>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img src={HeroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
