import axios from "axios";
import React, { useState } from "react";

export default function AddSummary() {
  const [values, setValues] = useState({
    book: "",
    author: "",
    summary: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((preVal) => ({
      ...preVal,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwtToken");

    axios.defaults.headers.common["Authentication"] = "Bearer " + token;

    await axios
      .post("http://localhost:5000/add-summary", values)
      .then(() => {
        console.log("Summary has added");
        setError("");
        setValues({
          book: "",
          author: "",
          summary: "",
        });
      })
      .catch((err) => {
        console.error("Adding failed", err.response.data);
        setError(err.response.data.message);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 className="title">New book</h2>
        <p className="title-message">
          Fill the details about the book and add your summary
        </p>
        <div>
          <label>Book Name</label>
          <br />
          <input
            type="text"
            name="book"
            value={values.book}
            placeholder="harry potter"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Author Name</label>
          <br />
          <input
            type="text"
            name="author"
            value={values.author}
            placeholder="J. K. Rowling"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Summary</label>
          <br />
          <textarea
            name="summary"
            value={values.summary}
            placeholder="Harry Potter is a film series based on the eponymous novels by British author J. K. Rowling. The series is produced and distributed by Warner Bros..."
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}
