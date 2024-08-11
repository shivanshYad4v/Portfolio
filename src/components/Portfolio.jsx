import React from "react";
import arrayDestruct from "../assets/portfolio/country.png";
import navbar from "../assets/portfolio/Foodrecipe.png";
import reactParallax from "../assets/portfolio/Markdown.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      live: "https://country-4pp.vercel.app/",
      github: "https://github.com/shivanshYad4v/country-app",
    },
    {
      id: 2,
      src: reactParallax,
      live: "https://markdown-edit0r.vercel.app/",
      github: "https://github.com/shivanshYad4v/markdown-editor/",
    },
    {
      id: 3,
      src: navbar,
      live: "https://fo0d-recipes.vercel.app/",
      github: "https://github.com/shivanshYad4v/food-recipes",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, live, github }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex ml-4  items-center justify-center">
                <a
                  href={live}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 "
                >
                  Demo
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 "
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
