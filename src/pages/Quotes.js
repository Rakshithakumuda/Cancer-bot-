import React, { useState, useEffect } from "react";
import "./Quotes.css"; // External CSS file for styling

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    // Static list of motivational quotes
    const fetchQuotes = () => {
      const allQuotes = [
        "The best way to predict the future is to create it.",
        "You are braver than you believe, stronger than you seem, and smarter than you think.",
        "Cancer is a journey, but you don’t have to go it alone.",
        "Believe you can and you're halfway there.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "Your present circumstances don’t determine where you can go; they merely determine where you start.",
        "Don’t count the days. Make the days count.",
        "Everything you’ve ever wanted is on the other side of fear.",
        "Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying, ‘I will try again tomorrow.’",
        "The only way to do great work is to love what you do.",
        "Happiness is not something ready-made. It comes from your own actions.",
        "It always seems impossible until it’s done.",
        "You are never too old to set another goal or to dream a new dream.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Success is not how high you have climbed, but how you make a positive difference to the world."
      ];

      // Randomly shuffle quotes and pick 10-15
      const randomQuotes = allQuotes
        .sort(() => 0.5 - Math.random())
        .slice(0, 15);

      setQuotes(randomQuotes);
    };

    fetchQuotes();
  }, []);

  return (
    <div className="quotes-container">
      <h1 className="quotes-header">Motivational Quotes</h1>
      <div className="quotes-list">
        {quotes.map((quote, index) => (
          <div key={index} className="quote-card">
            <p className="quote-text">"{quote}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quotes;
