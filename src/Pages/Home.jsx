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

      <p className={homcss.portfolioText}>
        A Personal <span>Portfolio</span> is a Collection of your work. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ea!
        from <span>2008</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dicta dolore tenetur ea, quaerat velit.
      </p>

      <div className={homcss.about_wrapper}>
            <div className={homcss.experience_cards}>
                <div className={homcss.card}>
                    <h2>3+</h2>
                    <h3>Years of Experience</h3>
                </div>

                <div className={homcss.card}>
                    <i className="ri-lock-line"></i>
                    <h3>UI/UX Designs</h3>
                    <p>260+ projects</p>
                </div>
            </div>

            <div className={homcss.about_content}>
                <small>About Us</small>
                <h2>Boost Business Strategic Solutions</h2>

                <div className={homcss.about_cards}>
                    <div className={homcss.about_card}>
                        <div>
                            <i className="ri-instance-line"></i>
                            <h3>Business Solutions</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maiores dolore eos repellat non impedit possimus tenetur distinctio necessitatibus amet.</p>
                        
                    </div>

                    <div className={homcss.about_card}>
                        <div>
                            <i className="ri-trophy-line"></i>
                            <h3>Profit Partners</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maiores dolore eos repellat non impedit possimus tenetur distinctio necessitatibus amet.</p>
                        
                    </div>
                </div>
                <button>
                        Read More
                        <i className="ri-arrow-right-line"></i>
                </button>
            </div>
      </div>
    </div>
  );
}
