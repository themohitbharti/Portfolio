import React from "react";
import homcss from "./Home.module.css";
import heroImage from "../assets/new_profile.jpg";

export default function Home() {
  return (
    <div className={homcss.container}>
      <div className={homcss.home_wrapper}>
        <div className={homcss.home_content}>
          <small>Web Developer</small>
          <h2>
            Mohit <span>Bharti</span>
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            vitae inventore fugiat provident. Debitis optio
            atque voluptatibus asperiores.
          </p>

          <button>
            View Portfolio <i className="ri-arrow-right-line"></i>
          </button>
        </div>

        <div className={homcss.home_image}>
          <img src={heroImage} alt="hero-image" />

          <span></span>
        </div>
      </div>
    </div>
  );
}
