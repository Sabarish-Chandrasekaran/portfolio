import React from 'react';

// import social data
import { social } from '../data';

// import logo
import Logo from '../assets/img/logo.svg';

const Footer = () => {
  return (
    <footer className='bg-primary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
          <div className='flex space-x-6 items-center justify-center'>
            {social.map((item, index) => {
              const { href, icon, name } = item;
              return (
                <a
                  className="text-accent text-base transition duration-150 ease-in-out"
                  href={href}
                  key={index}
                  target="_blank"
                  data-bs-toggle="tooltip"
                  title={name}
                >
                  {icon}
                </a>
              );
            })}
          </div>
          <div>
            <h3 className="text-5xl font-signature ml-2">Sabarish Chandrasekaran</h3>
          </div>
          <p className='text-paragraph opacity-80 text-[15px]'>
            &copy; 2022 Sabarish. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
