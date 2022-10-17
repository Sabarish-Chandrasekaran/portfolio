import React from "react";

// import services data
import { services, skills } from "../data";

const Services = () => {
  return (
    <section id="skills" className="section bg-tertiary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block border-b-4 border-gray-600">
            My Technical Skills
          </h2>
          <p className="subtitle">
            These are the technologies I've worked with
          </p>
        </div>
        <section className="bg-tertiary py-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-8 md:grid-flow-col">
              {skills.map((skill, index) => {
                return (
                  <div className="flex items-center justify-center" key={index}>
                    <img className="lg:h-20" src={skill.image} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <div className="grid lg:grid-cols-2 mx-24 gap-8">
          {services.map((service, index) => {
            const { icon, name } = service;
            return (
              <div className="bg-secondary p-6 rounded-2xl" key={index}>
                <h4 className="lg:text-[24px] sm:text-[16px] font-medium mb-8">
                  {name}
                </h4>
                <div className="grid lg:grid-cols-2 gap-4">
                  {icon.map((icondetail,index) => {
                    return (
                      <div
                        className="text-accent rounded-sm flex items-start lg:text-[20px] sm:text-[16px]"
                        key={index}
                      >
                        {icondetail}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
