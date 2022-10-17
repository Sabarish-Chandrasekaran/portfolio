import React from "react";


// import navigation n social data
import { navigation, social} from "../data";

// import Link
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, idx) => {
          return (
            <li
              className="text-white hover:text-accent cursor-pointer"
              key={idx}
            >
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {social.map(({href,icon,name,download},index)=>{
              return(
            <li className="w-[110px] h-[40px] flex justify-between items-center ml-[-80px] hover:ml-[0px] px-[5px] duration-300 bg-tertiary" key={index}>
                <a
                className="flex justify-between items-center w-full text-accent"
                href={href}
                target="_blank"
                download={download}
              >
                {name} {icon}
              </a>
            </li>
              );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
