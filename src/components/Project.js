import React from "react";
import {skills} from "../data";

const Project = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className="mb-8 group relative ">
        <img
          className="group-hover:opacity-50 rounded-2xl"
          src={item.image}
          alt=""
        />
        {/* Hover Effects */}
        <div className="opacity-0 group-hover:opacity-100 absolute top-[50%] translate-y-[-50%]">
          <span className="text-2xl font-bold text-white tracking-wider">
            Tech Stack
          </span>
          <div className="container mx-auto">
            <div className="grid grid-flow-col">
              {item.stack.map((skill, index) => {
                return (
                  <div className="flex items-center justify-center" key={index}>
                    <img className="h-20" src={skill.image} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="text-center">
            <a href={item.demo} target="_blank">
              <button className="text-center rounded-md px-2 py-1 m-2 text-white font-bold text-md bg-accent hover:bg-tertiary">
                Demo URL
              </button>
            </a>
            <div>
              <a href={item.frontend} target="_blank">
                <button className="text-center rounded-md px-2 py-1 m-2 bg-white text-accent-hover font-bold text-md hover:bg-tertiary">
                  Fronend Repo
                </button>
              </a>
              {item.backend ? (
                <a href={item.backend} target="_blank">
                  <button className="text-center rounded-md   px-2 py-1 m-2 bg-white text-accent-hover font-bold text-lg hover:bg-tertiary">
                    Backend Repo
                  </button>
                </a>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
      <p className="capitalize text-accent text-sm mb-3">{item.category}</p>
      <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
      <p className="text-base max-w-md">{item.description}</p>
    </div>
  );
};

export default Project;
