import React from "react";
import FilmList from "../../Components/FilmList";
import "./Home.css";

function Home() {
 
  return (
    <main>
      <div className="section-title-wrapper">
        <h1 className="section-title">
          Phim bo moi
        </h1>
      </div>
      <FilmList />
    </main>
  );
}

export default Home;
