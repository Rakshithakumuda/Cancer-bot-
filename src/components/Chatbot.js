import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai"; // ✅ Import Gemini API

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    { role: "system", content: "You are a nutrition expert for cancer patients." },
  ]);

  console.log("ENV:", process.env);

  // ✅ Use the correct Gemini API key
  const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
  console.log("API Key:", API_KEY);

  // ✅ Initialize Gemini AI API
  const genAI = new GoogleGenerativeAI(API_KEY);

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    if (!API_KEY) {
      setResponse("Error: Missing API key. Check your .env file.");
      return;
    }

    setLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const chat = model.startChat();
      const result = await chat.sendMessage(message);

      // ✅ Extract response correctly
      const botResponse = await result.response.text();

      // ✅ Format the response
      const formattedResponse = formatResponse(botResponse);

      setChatHistory([
        ...chatHistory,
        { role: "user", content: message },
        { role: "assistant", content: formattedResponse },
      ]);
      setResponse(formattedResponse);
    } catch (error) {
      console.error("API Error:", error);
      setResponse("Error: Unable to fetch response.");
    }

    setMessage("");
    setLoading(false);
  };

  // ✅ Function to format the response
  const formatResponse = (responseText) => {
    // Replace newlines with <br /> for line breaks
    let formattedText = responseText.replace(/\n/g, "<br />");

    // Add more complex formatting if needed
    formattedText = formattedText.replace(/(\*\*[^*]+\*\*)/g, "<strong>$1</strong>"); // Bold all text wrapped in **
    formattedText = formattedText.replace(/(\*[^*]+\*)/g, "<em>$1</em>"); // Italicize all text wrapped in *

    return formattedText;
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>AI Nutrition Chatbot 🥦🤖</h2>
      <textarea
        rows="4"
        style={{ width: "100%", padding: "10px", fontSize: "16px" }}
        placeholder="Ask about cancer nutrition (e.g., Best foods for lung cancer patients?)"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        style={{
          marginTop: "10px",
          padding: "10px 15px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#28a745",
          color: "#fff",
          border: "none",
        }}
        onClick={handleSendMessage}
        disabled={loading}
      >
        {loading ? "Loading..." : "Get Advice"}
      </button>
      <div style={{ marginTop: "20px", fontSize: "18px" }}>
        <strong>Response:</strong>
        {/* Render formatted HTML */}
        <div dangerouslySetInnerHTML={{ __html: response }} />
      </div>
    </div>
  );
};

export default Chatbot;
