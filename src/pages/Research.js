import React, { useState, useEffect } from "react";
import axios from "axios";

// Your News API key
const NEWS_API_KEY = "1cab7e2e37544252b6fdef4393c67dd9";  // Replace with your actual API key
const BASE_URL = "https://newsapi.org/v2/everything"; // Base URL for the News API

const Research = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCancerNews = async () => {
      try {
        // Construct the URL with query for cancer-related news
        const url = `${BASE_URL}?q=cancer treatment OR cancer research&apiKey=${NEWS_API_KEY}&sortBy=publishedAt&language=en&pageSize=10`;
        console.log("Fetching from: ", url);  // Log the URL for debugging

        const response = await axios.get(url);
        setArticles(response.data.articles);  // Set the fetched articles
        setLoading(false);  // Set loading to false once the data is fetched
      } catch (err) {
        console.error("Error fetching cancer news:", err);  // Log the error
        setError("There was an error fetching the news. Please try again later.");
        setLoading(false);  // Set loading to false even if there's an error
      }
    };

    fetchCancerNews();  // Call the function to fetch news articles
  }, []);  // Empty array means this effect will run only once when the component mounts

  if (loading) {
    return <div>Loading news articles...</div>;  // Display a loading message
  }

  if (error) {
    return <div>{error}</div>;  // Display error message if there's an issue
  }

  return (
    <div className="research-container" style={{ padding: "20px", textAlign: "center" }}>
      <h1>Real-Time Global Cancer Research Tracker</h1>
      <div className="articles-container">
        {articles.map((article, index) => (
          <div key={index} className="article" style={{ marginBottom: "20px", padding: "15px", border: "1px solid #ddd", borderRadius: "10px" }}>
            <h2 style={{ fontSize: "20px", color: "#333" }}>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ color: "#007BFF" }}>
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
