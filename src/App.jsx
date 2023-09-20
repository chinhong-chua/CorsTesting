import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [urlText, setUrlText] = useState("");
  const [response, setResponse] = useState("");

  useEffect(() => {
    const callAPI = () => {
      fetch("http://localhost:8011")
        .then((res) => console.log("response ", res))
        .catch((err) => console.log("error ", err));
    };
    // callAPI();
  });

  const testAPICall = async () => {
    try {
      const res = await fetch(urlText);
      const text = await res.text();  // Convert response body to text
      setResponse(text);
    } catch (err) {
      console.log("error ", err);
      setResponse(err.toString());  // Convert error object to string for rendering
    }
  };

  return (
    <>
      <h1>This is for CORS Testing</h1>
      <div className="card">
        <input
          type="text"
          className="text"
          style={{ width: "100%", marginBottom: "10px" }}
          value={urlText}
          onChange={(e) => setUrlText(e.target.value)}
        />
        <button
          style={{
            border: "1px solid black",
            color: "red",
            display: "block",
            marginLeft: "auto",
          }}
          onClick={testAPICall}
        >
          Test API Call
        </button>
        <div>{response}</div>
      </div>
    </>
  );
}

export default App;
