import React from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

// import img
import Image from '../assets/img/image.jpg';

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Sabarish Chandrasekaran
              </h2>
              <p className="mb-4 text-accent">MERN Stack Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                Aspiring full stack developer with a passion for working on a
                project that solves problems with thoughtful UI design, giving
                great user experiences by planning, developing, and debugging
                web applications. <br />
                <br />I primarily work with MERN stack technologies, comfortable
                with javascript,HTML/CSS and framework like Bootstrap and
                Material UI.
              </p>
            </div>  
            <a href="/resume.pdf" target="_blank" download>
              <button className="btn btn-md bg-accent hover:bg-secondary-hover transition-all">
                Resume&nbsp;&nbsp;
                <BsFillPersonLinesFill size={20} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
