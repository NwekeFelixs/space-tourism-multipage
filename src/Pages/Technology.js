import React, { useState } from "react";
import data from "../starter-code/data.json";

function Technology() {
  const [tech] = useState(data.technology);
  const [value, setValue] = useState(0);

  const { name, images, description } = tech[value];

  return (
    <section className="technology px-5">
      <h1 className="pt-20 text-white lg:pt-40 lg:max-w-7xl lg:mx-auto text-4xl mb-10 uppercase">
        03 space launch 101
      </h1>

      <div className=" pt-20 md:grid md:grid-cols-2 gap-5 md:items-center lg:max-w-7xl lg:mx-auto flex items-center justify-center flex-col-reverse">
        
        <article className="text-center md:text-left  lg:text-left lg:flex items-center gap-5">
          <div className="grid ">
            {tech.map((item, index) => (
              <button
                key={index} 
                onClick={() => setValue(index)}
                className={`uppercase text-white text-2xl pb-2 mx-2 border-2 border-white h-12 w-12 p-2 rounded-full m-2 ${
                  index === value && "bg-white text-black"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <div className="lg:w1/2">
          <h4 className="text-gray-400 text-2xl uppercase mb-5">The Terminology....</h4>
            <h2 className="text-5xl font-bold text-white mt-10 mb-5 tracking-widest uppercase">
              {name}
            </h2>
            <p className="text-gray-400 pb-10">{description}</p>
          </div>
        </article>

        <article>
          <picture>
            <source srcSet={images.portrait} media="(max-width: 768px)" />
            <img
              src={images.landscape}
              alt={name}
              title={name}
              className="block mx-auto mb-10"
            />
          </picture>
        </article>

      </div>
    </section>
  );
}

export default Technology;
