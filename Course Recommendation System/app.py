# import pandas as pd
# from sklearn.feature_extraction.text import TfidfVectorizer
# from sklearn.metrics.pairwise import cosine_similarity

# # Load the Coursera courses dataset
# courses = pd.read_csv('D:/Learning Management System/Course Recommendation System/coursera_courses.csv')

# # Create a TF-IDF vectorizer
# tfidf_vectorizer = TfidfVectorizer(stop_words='english')

# # Compute the TF-IDF matrix
# tfidf_matrix = tfidf_vectorizer.fit_transform(courses['description'])

# # Compute the cosine similarity matrix
# cosine_sim_matrix = cosine_similarity(tfidf_matrix, tfidf_matrix)

# # Define the recommend_courses function
# def recommend_courses(interests, num_courses=10):
#     # Convert user interests to a TF-IDF vector
#     interests_vector = tfidf_vectorizer.transform([interests])

#     # Compute the cosine similarity between the interests vector and all courses
#     cosine_similarities = cosine_similarity(interests_vector, tfidf_matrix)

#     # Get the indices of the most similar courses
#     similar_indices = cosine_similarities.argsort()[0][::-1][:num_courses]

#     # Return the recommended courses
#     return courses.iloc[similar_indices]

# # Integrate the recommendation system into a Flask API
# from flask import Flask, request, jsonify

# app = Flask(__name__)

# @app.route('/recommend', methods=['POST'])
# def recommend():
#     data = request.json
#     interests = data['interests']
#     recommendations = recommend_courses(interests)

#     response = {'recommendations': recommendations.to_dict('records')}
#     return jsonify(response)

# if __name__ == '__main__':
#     app.run()

from flask import Flask, request, jsonify
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


# Load data
courses = pd.read_csv('D:/Learning Management System/Course Recommendation System/coursera_courses.csv')

# Preprocess data
courses['features'] = courses['course_title'] + ' ' + courses['course_organization'] + ' ' + courses['course_Certificate_type'] + ' ' + courses['course_difficulty']
tfidf = TfidfVectorizer(stop_words='english')
course_matrix = tfidf.fit_transform(courses['features'])

# Define function for generating recommendations
def recommend_courses(interests, num_recommendations=10):
    # Calculate TF-IDF for user interests
    interest_vector = tfidf.transform([interests])

    # Calculate cosine similarities between user interests and course features
    cosine_similarities = linear_kernel(interest_vector, course_matrix).flatten()

    # Sort courses by similarity to user interests and select top recommendations
    course_indices = cosine_similarities.argsort()[::-1]
    top_course_indices = course_indices[:num_recommendations]
    top_courses = courses.iloc[top_course_indices]

    return top_courses[['course_title', 'course_organization', 'course_Certificate_type', 'course_difficulty', 'course_rating']]

@app.route('/recommend', methods=['POST'])
def get_recommendations():
    # Get user interests from request
    user_interests = request.json['interests']

    # Generate course recommendations based on user interests
    recommendations = recommend_courses(user_interests)

    # Return recommendations as JSON response
    return jsonify(recommendations.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(debug=True)

