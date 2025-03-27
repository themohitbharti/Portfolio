import React from "react";
import homcss from "./Home.module.css";
import heroImage from "../assets/new_profile.jpg";
import portfolioImg01 from "../assets/tab-image-1.png";
import portfolioImg02 from "../assets/tab-image-2.png";
import portfolioImg03 from "../assets/tab-image-3.png";
import portfolioImg04 from "../assets/tab-image-4.png";
import portfolioImg05 from "../assets/tab-image-5.png";
import portfolioImg06 from "../assets/tab-image-6.png";
import testimonialImg01 from "../assets/rev1.png"
import testimonialImg02 from "../assets/client-img-1.jpg"
import galleryImg01 from '../assets/gallery-image-01.jpg'
import galleryImg02 from '../assets/gallery-image-02.jpg'
import galleryImg03 from '../assets/gallery-image-03.jpg'
import galleryImg04 from '../assets/gallery-image-04.jpg'
import {Swiper ,SwiperSlide} from "swiper/react";
import 'swiper/css';
import {Autoplay} from 'swiper/modules'

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
            vitae inventore fugiat provident. Debitis optio atque voluptatibus
            asperiores.
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
        A Personal <span>Portfolio</span> is a Collection of your work. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Odio, ea! from{" "}
        <span>2008</span> Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quos dicta dolore tenetur ea, quaerat velit.
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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                maiores dolore eos repellat non impedit possimus tenetur
                distinctio necessitatibus amet.
              </p>
            </div>

            <div className={homcss.about_card}>
              <div>
                <i className="ri-trophy-line"></i>
                <h3>Profit Partners</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                maiores dolore eos repellat non impedit possimus tenetur
                distinctio necessitatibus amet.
              </p>
            </div>
          </div>
          <button>
            Read More
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>

      <div className={homcss.portfolio_wrapper}>
        <small>Latest Portfolio</small>
        <h2>Transforming Ideas into Exceptional</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nemo
          fugiat vero in repellat aspernatur earum ipsam placeat enim expedita.
        </p>
        <div className={homcss.portfolio_cards}>
          <div className={homcss.portfolio_card}>
            <img src={portfolioImg01} alt="portfolioImg1" />

            <div className={homcss.portfolio_content}>
              <p>Development</p>
              <h3>A Portfolio of Innovation</h3>
            </div>
          </div>

          <div className={homcss.portfolio_card}>
            <img src={portfolioImg02} alt="portfolioImg2" />

            <div className={homcss.portfolio_content}>
              <p>Development</p>
              <h3>A Portfolio of Creation</h3>
            </div>
          </div>

          <div className={homcss.portfolio_card}>
            <img src={portfolioImg03} alt="portfolioImg3" />

            <div className={homcss.portfolio_content}>
              <p>Development</p>
              <h3>A Story of Innovation</h3>
            </div>
          </div>

          <div className={homcss.portfolio_card}>
            <img src={portfolioImg04} alt="portfolioImg4" />

            <div className={homcss.portfolio_content}>
              <p>Development</p>
              <h3>A Story of Creation</h3>
            </div>
          </div>

          <div className={homcss.portfolio_card}>
            <img src={portfolioImg05} alt="portfolioImg5" />

            <div className={homcss.portfolio_content}>
              <p>Development</p>
              <h3>A Showcase of my Portfolio</h3>
            </div>
          </div>

          <div className={homcss.portfolio_card}>
            <img src={portfolioImg06} alt="portfolioImg6" />

            <div className={homcss.portfolio_content}>
              <p>Development</p>
              <h3>A work of Exceptional</h3>
            </div>
          </div>
        </div>
      </div>

      <div className={homcss.expertise_wrapper}>
        <small>My Expertise</small>
        <h2>Elevated Designs Personalised the Best Experiences</h2>

        <div className={homcss.expertise_card}>
            <div className={homcss.expertise_card_title}>
                <i className="ri-globe-line"></i>
                <h3>UI/Visual Designs</h3>
            </div>

            <span>50%</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut animi quos perspiciatis </p>
        </div>

        <div className={homcss.expertise_card}>
            <div className={homcss.expertise_card_title}>
                <i className="ri-pie-chart-box-line"></i>
                <h3>Branding Designs</h3>
            </div>

            <span>60%</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut animi quos exercitationem.</p>
        </div>

        <div className={homcss.expertise_card}>
            <div className={homcss.expertise_card_title}>
                <i className="ri-stack-line"></i>
                <h3>Motion Designs</h3>
            </div>

            <span>90%</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut animi quos perspiciatis aut?</p>
        </div>
      </div>

      <div className={homcss.testimonials_wrapper}>
            <small>What are my Experiences</small>
            <h2>Brigning dreams to life</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, impedit eos quaerat necessitatibus in rerum.</p>

            <div className={homcss.swiper_wrapper}>
            <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true} 
            autoplay={{
                delay:2500,
            }}
            modules={[Autoplay]}

            breakpoints={{
                0:{
                    slidesPerView:1,
                },
                768:{
                    slidesPerView:2,
                },
                1200:{
                    slidesPerView:3,
                },
                
            }}
            >
                <SwiperSlide>
                    <div className={homcss.testimonials_card}>
                        <div className={homcss.profile_testimonial}>
                            <img src={testimonialImg01} alt="testimonialImg01" />
                            <h3>GoComet <span>Backend Developer</span></h3>
                        </div>

                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ab quaerat sed expedita nemo numquam nam autem perspiciatis dicta deserunt cumque exercitationem delectus, sequi vero nesciunt eveniet illum! Dicta, rerum.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={homcss.testimonials_card}>
                        <div className={homcss.profile_testimonial}>
                            <img src={testimonialImg02} alt="testimonialImg02" />
                            <h3>Programming Club <span>Head</span></h3>
                        </div>

                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ab quaerat sed expedita nemo numquam nam autem perspiciatis dicta deserunt cumque exercitationem delectus, sequi vero nesciunt eveniet illum! Dicta, rerum.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={homcss.testimonials_card}>
                        <div className={homcss.profile_testimonial}>
                            <img src={testimonialImg01} alt="testimonialImg01" />
                            <h3>GoComet <span>Backend Developer</span></h3>
                        </div>

                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ab quaerat sed expedita nemo numquam nam autem perspiciatis dicta deserunt cumque exercitationem delectus, sequi vero nesciunt eveniet illum! Dicta, rerum.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={homcss.testimonials_card}>
                        <div className={homcss.profile_testimonial}>
                            <img src={testimonialImg02} alt="testimonialImg02" />
                            <h3>Programming Club <span>Head</span></h3>
                        </div>

                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ab quaerat sed expedita nemo numquam nam autem perspiciatis dicta deserunt cumque exercitationem delectus, sequi vero nesciunt eveniet illum! Dicta, rerum.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>


      </div>

      <div className={homcss.gallery_wrapper}>
        <small>My Projects</small>
        <h2>Transforming Ideas into Exceptionals</h2>

        <div className={homcss.gallery_cards}>
            <div className={homcss.gallery_card}>
                <img src={galleryImg01} alt="galleryImg01" />

                <div className={homcss.gallery_content}>
                    <h3>BidSpace</h3>
                    <div>
                        <span>Node.js</span>
                        <span>TypeScript</span>
                    </div>
                    <button>View Project <i className="ri-arrow-right-line"></i></button>
                </div>
            </div>

            <div className={homcss.gallery_card}>
                <img src={galleryImg02} alt="galleryImg02" />

                <div className={homcss.gallery_content}>
                    <h3>BlogVault</h3>
                    <div>
                        <span>React</span>
                        <span>Appwrite</span>
                    </div>
                    <button>View Project <i className="ri-arrow-right-line"></i></button>
                </div>
            </div>

            <div className={homcss.gallery_card}>
                <img src={galleryImg03} alt="galleryImg03" />

                <div className={homcss.gallery_content}>
                    <h3>Hive</h3>
                    <div>
                        <span>Node.js</span>
                        <span>Flutter</span>
                    </div>
                    <button>View Project <i className="ri-arrow-right-line"></i></button>
                </div>
            </div>

            <div className={homcss.gallery_card}>
                <img src={galleryImg04} alt="galleryImg04" />

                <div className={homcss.gallery_content}>
                    <h3>StockPilot</h3>
                    <div>
                        <span>Node.js</span>
                        <span>Postgres</span>
                    </div>
                    <button>View Project <i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
