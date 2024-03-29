import React, { useEffect, useState } from "react";

const Stats = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    fetch("https://api.countapi.xyz/update/lms/learningmanagmentsystem/?amount=1")
      .then((res) => res.json())
      .then((res) => {
        setCount(res.value);
        localStorage.setItem("site-visits", res.value);
      });
  };

  useEffect(() => {
    const storedCount = localStorage.getItem("site-visits");

    if (storedCount) {
      setCount(parseInt(storedCount));
    } else {
      setCount(0);
    }

    increaseCount();
  }, []);


  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-green-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M8 17l4 4 4-4m-4-5v9"></path>
                <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
              </svg>
              <p>This page was viewed</p>
              <h1 id="count">{count}</h1>
              <p>times</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-green-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                9
              </h2>
              <p className="leading-relaxed">Users</p>
           </div>
         </div>
         <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
           <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
           <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-green-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                 <path d="M4 4v16a2 2 0 002 2h12a2 2 0 002-2V4"></path>
                 <path d="M4 4l8 4 8-4"></path>
          </svg>

             <h2 className="title-font font-medium text-3xl text-gray-900">10</h2>
             <p className="leading-relaxed">Courses</p>
           </div>
         </div>
         <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
           <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
           <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-green-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
               <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
               <circle cx="9" cy="7" r="4"></circle>
               <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
             </svg>
             <h2 className="title-font font-medium text-3xl text-gray-900">46</h2>
             <p className="leading-relaxed">Teachers</p>
           </div>
         </div>
       </div>
     </div>
   </section>
   )
 }

export default Stats