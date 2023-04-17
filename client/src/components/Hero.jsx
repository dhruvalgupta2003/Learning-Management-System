import React from "react";
import image from "../assets/hero_image.jpg";
const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-10 py-32 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-3/4  lg:pr-32 md:pr-24 flex flex-col md:items-start md:text-left mb-32 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-5xl mb-4 font-medium text-gray-900">
          Unlock your full potential and 
            <br className="hidden lg:inline-block" />
            become a master of your craft with our online learning platform
          </h1>
          <p className="mb-8 leading-relaxed">
            With our Open Source Online Learning Platform! With
            expert-led courses, interactive learning methods, and a supportive
            community, you'll master new skills and achieve your goals in no
            time. And the best part? Our platform is open source, meaning you'll
            have access to cutting-edge technology and a network of like-minded
            learners. Join us today and unlock your full potential!
          </p>
          <div className="flex justify-center">
            <a href="register">
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Signup
              </button>
            </a>
            <a href="login">
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Login
              </button>
            </a>
          </div>
        </div>
        <div className="lg:max-w-3xl lg:w-full md:w-1/2 w-5/6 h-90">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={image}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
