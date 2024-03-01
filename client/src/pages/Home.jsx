import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import imgg from "../assets/landing-page-image-01.jpg";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="first-block">
      <div className="button-block">
        <h1>Welcome to BookSummaries!</h1>
        <h3>
          Begin your exploration now or contribute a summary of your own and be
          a beacon for fellow bibliophiles
        </h3>
        <p>
          At BookSummaries, we believe that the essence of a great book can be
          captured in a few heartfelt paragraphs. Our platform is a vibrant
          community of book lovers, authors, and thinkers sharing their insights
          into the world's most beloved and intriguing reads.
          <br /> <br />
          Ready to embark on this literary journey? Join us in celebrating the
          power of stories, one summary at a time. Your next great read—or
          insight—awaits.
        </p>
        <h3>
          Dive into a world where every book has a story beyond its cover,
          <button onClick={() => navigate("/signup")}>Join Now</button>
        </h3>
      </div>
      <img src={imgg} alt="Reading book" height={360} />
    </div>
  );
}
