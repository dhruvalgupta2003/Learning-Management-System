import React from "react";
import Card from "../components/Card";
import Cards from "../components/Cards";
import CardCarousel from "../components/CardCarousel";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Courses() {
  return (
    <div>
      <Header />
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0" style={{ padding: "50px" }}>
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
          All courses
        </h1>
        <div class="h-1 w-20 bg-green-500 rounded"></div>
      </div>
      <CardCarousel />
      <Footer />
    </div>
  );
}

export default Courses;
