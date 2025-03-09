import React, { useState, useEffect } from "react";

const Survivors = () => {
  const [stories, setStories] = useState([]);
  
  useEffect(() => {
    const fetchStories = async () => {
      const url = "https://www.reddit.com/r/cancer_survivors.json"; // Change subreddit to fit needs
      const response = await fetch(url);
      const data = await response.json();
      setStories(data.data.children);
    };

    fetchStories();
  }, []);

  return (
    <div className="survivors-container" style={{ padding: "20px" }}>
      <h1>Cancer Survivor Stories</h1>
      {stories.length > 0 ? (
        <div className="story-cards">
          {stories.map((story, index) => (
            <div key={index} style={{ border: "1px solid #ddd", margin: "20px", padding: "15px" }}>
              <h3>{story.data.title}</h3>
              <p>{story.data.selftext}</p>
              <a href={`https://www.reddit.com${story.data.permalink}`} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading survivor stories...</p>
      )}
    </div>
  );
};

export default Survivors;
