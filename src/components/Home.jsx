import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-6xl	 mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full md:w-1/2">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Hey, I'm Shivansh Yadav
          </h2>
          <p className="text-gray-400 py-4 text-md max-w-md">
            Passionate Frontend Developer with a knack for transforming ideas
            into visually engaging and responsive web applications, using the
            latest technologies to create seamless user experiences.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl max-w-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
