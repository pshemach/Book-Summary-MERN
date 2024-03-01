import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetSummary() {
  const [summaryArray, setSummaryArray] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      setError("User not logged in");
      return;
    }
    axios.defaults.headers.common["Authentication"] = "Bearer " + token;
    axios
      .get("http://localhost:5000/user-summary")
      .then((res) => {
        if (res.data.data.summaries) {
          setSummaryArray(res.data.data.summaries);
          setError("");
        } else {
          setError("Books are not found");
          setSummaryArray([]);
        }
      })
      .catch(() => {
        console.error("Fetching summaries error");
        setError("Error fetching summaries from server");
        setSummaryArray([]);
      });
  }, []);
  return (
    <div>
      <h2 className="title">Your Book Summaries</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {summaryArray.length > 0 ? (
          summaryArray.map((summary, index) => (
            <li key={index}>
              <h3>{summary.book}</h3>
              <p>
                <strong>Author:</strong> {summary.author}
              </p>
              <p>{summary.summary}</p>
            </li>
          ))
        ) : (
          <p>No summaries found.</p>
        )}
      </ul>
    </div>
  );
}
