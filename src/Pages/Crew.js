import React, { useState } from "react";
import data from "../starter-code/data.json";
import { BiCircle } from "react-icons/bi";

function Crew() {
  const [team] = useState(data.crew);
  const [value, setValue] = useState(0);

  const { name, images, bio, role  } = team[value];

  return (
    <section className="crew px-5">
      <h1 className="pt-20 text-white lg:pt-40 lg:max-w-7xl lg:mx-auto text-4xl mb-10 uppercase">02 meet your crew</h1>

      <div className="flex items-center justify-center flex-col-reverse md:grid grid-cols-2 gap-5 md:items-center lg:max-w-7xl lg:mx-auto">
        
        <article className="text-center md:text-left lg:text-left">

          <h4 className="text-gray-400 text-2xl uppercase mb-5">{role}</h4>

          <h2 className="text-5xl font-bold text-white mb-5 tracking-widest uppercase">
            {name}
          </h2>
          <p className="text-gray-400 mb-10">{bio}</p>

          {team.map((item, index) => (
            <button
              key={index}
              onClick={() => setValue(index)}
              className={`uppercase text-white text-2xl pb-2 mx-2 h-5 rounded-full ${
                index === value && "bg-white"
              }`}
            >
              <BiCircle className="h-5 w-5"/>
            </button>
          ))}

          
        </article>

        <article>
          <img
            src={images.png}
            alt={name}
            title={name}
            className="block mx-auto mb-10"
          />
        </article>
      </div>
    </section>
  );
}

export default Crew;
