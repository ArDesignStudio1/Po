import React, { useEffect } from "react";
import "./Home.css"; 

const HomeF1 = () => {
  useEffect(() => {
    const text = document.querySelector(".animated-text");
    const letters = text.textContent.split(""); // Split text into letters
    text.textContent = ""; // Clear original text

    letters.forEach((letter, i) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.animationDelay = `${i * 0.1}s`; // Add delay for each letter
      text.appendChild(span);
    });
  }, []);

  return (
    <div className="" >
      <section className="hero-section ">
        <div className="overlay">
          <h1 className="font-bold text-gray-300 text-3xl">AR DESIGN STUDIO</h1>
          <br></br>
          <p className="animated-text font-semibold text-2xl">
            AYOUB RAHIM | Interior Designer
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomeF1;

