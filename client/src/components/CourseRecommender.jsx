import React, { useState } from 'react';

function CourseRecommendation() {
  const [interests, setInterests] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ interests })
      });
      const data = await response.json();
      if (response.ok) {
        setRecommendations(data);
        setError('');
      } else {
        setError(data.message);
        setRecommendations([]);
      }
    } catch (error) {
      console.log(error);
      setError('An error occurred while fetching recommendations');
      setRecommendations([]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="mb-8 text-4xl font-bold">Course Recommendation System</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full max-w-xl p-8 bg-white rounded-lg shadow-lg">
        <label className="mb-4 font-bold text-gray-800">
          Enter your interests:
          <input type="text" value={interests} onChange={(e) => setInterests(e.target.value)} className="w-full px-3 py-2 mt-2 text-gray-700 border rounded-lg shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300" />
        </label>
        <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Get Recommendations</button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      {recommendations.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-bold">Recommended Courses</h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {recommendations.map((course) => (
              <li key={course.course_id} className="p-4 bg-white rounded-lg shadow-lg">
                <h3 className="mb-2 font-bold text-gray-800">{course.course_title}</h3>
                <p className="text-gray-600">{course.course_description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CourseRecommendation;
