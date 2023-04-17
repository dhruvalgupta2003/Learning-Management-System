import React from 'react'

const Features = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">FEATURES</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Master All Technical Skills</h1>
            </div>
            <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">Microlearning</h2>
                </div>
                <div className="flex-grow">
                    <p className="leading-relaxed text-base">Microlearning involves delivering small, bite-sized chunks of information to learners. An LMS that incorporates microlearning features can help students learn more efficiently and effectively by providing them with short, focused learning modules.</p>
                    <a className="mt-3 text-green-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </a>
                </div>
                </div>
            </div>
            <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">Course Recommendations</h2>
                </div>
                <div className="flex-grow">
                    <p className="leading-relaxed text-base">A Learning Management System that incorporates a personalized course recommendation feature can help students discover courses that align with their interests and previous learning experiences. This feature could use data analysis techniques to analyze the student's learning history and provide recommendations for courses that are most likely to be of interest to the student.</p>
                    <a className="mt-3 text-green-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </a>
                </div>
                </div>
            </div>
            <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <circle cx="6" cy="6" r="3"></circle>
                        <circle cx="6" cy="18" r="3"></circle>
                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">Personalized Performance Analysis</h2>
                </div>
                <div className="flex-grow">
                    <p className="leading-relaxed text-base">A Learning Management System that incorporates personalized performance analysis can help students identify their strengths and weaknesses in specific subject areas. This feature could use data analysis techniques to track the student's performance over time and provide recommendations for courses or learning activities that can help the student improve in areas where they may be struggling.</p>
                    <a className="mt-3 text-green-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Features