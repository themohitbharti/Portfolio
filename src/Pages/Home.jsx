import React from "react";
import homcss from "./Home.module.css";
import heroImage from "../assets/new_profile.jpg";
import companyImgs01 from "../assets/go_comet_logo.jpeg";
import companyImgs02 from "../assets/pc.jpeg";
import companyImgs03 from "../assets/brl.jpeg";
import projectImg01 from "../assets/BidSpace.jpeg";
import projectImg02 from "../assets/BlogVault.jpeg";
import projectImg03 from "../assets/Hive.jpeg";
import projectImg04 from "../assets/StockPilot.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const emailBody = `
      Name: ${data.name}
      Phone: ${data.phone || "Not provided"}
      Message: 
      ${data.message}
        `.trim();

    window.location.href = `mailto:mohitbharti373@gmail.com?subject=Portfolio%20Contact&body=${encodeURIComponent(
      emailBody
    )}`;
  };
  return (
    <div className={homcss.container}>
      <div id="home" className={homcss.home_wrapper}>
        <div className={homcss.home_content}>
          <small>Web Developer</small>
          <h2>
            Mohit <span>Bharti</span>
          </h2>
          <p>
            A <span>full-stack developer</span> who speaks JavaScript, C++, and
            occasional dad jokes. I build robust backends, intuitive UIs, and
            sometimes—when the stars align—bug-free code.
          </p>

          <a
            href="https://drive.google.com/file/d/13CRx5uERq_xBWNwCtvQ1vZa4Qp-9fg4h/view?usp=sharing"
            download="Mohit_Bharti_Resume.pdf"
            className={homcss.resumeButton}
          >
            Download Resume <i className="ri-download-line"></i>
          </a>
        </div>

        <div className={homcss.home_image}>
          <img src={heroImage} alt="hero-image" />

          <span></span>
        </div>
      </div>

      <p className={homcss.portfolioText}>
        A <span>Full-Stack Developer</span> specializing in Node.js and
        React.js. I build scalable web applications with clean architecture and
        efficient algorithms. Passionate about{" "}
        <span>competitive programming</span> with 500+ problems solved across
        LeetCode and CodeForces. My work bridges robust backends with intuitive
        UIs.
      </p>

      <div id="domains" className={homcss.about_wrapper}>
        <div className={homcss.experience_cards}>
          <div className={homcss.card}>
            <h2>3+</h2>
            <h3>Years of Code</h3>
          </div>

          <div className={homcss.card}>
            <i className="ri-lock-line"></i>
            <h3>Projects Made</h3>
            <p>26+ projects</p>
          </div>
        </div>

        <div className={homcss.about_content}>
          <small>My Expertise</small>
          <h2>Full-Stack Development & Problem Solving</h2>

          <div className={homcss.about_cards}>
            {/* <div className={homcss.about_card}>
              <div>
                <i className="ri-instance-line"></i>
                <h3>Backend Development</h3>
              </div>
              <p>
                Scalable server-side solutions with Node.js, databases, and
                APIs. Focus on performance, security, and clean architecture.
              </p>
            </div> */}

            <div className={homcss.about_card}>
              <div>
                <i className="ri-trophy-line"></i>
                <h3>Full-Stack Development</h3>
              </div>
              <p>
                Full-stack systems with React.js frontends and Node.js backends.
                Unifying interfaces with robust APIs.
              </p>
            </div>

            <div className={homcss.about_card}>
              <div>
                <i className="ri-cpu-line"></i> {/* Represents algorithms */}
                <h3>Competitive Programming</h3>
              </div>
              <p>
                Efficient problem-solving in C++ with DSA expertise. Optimized
                algorithms for high-performance computing.
              </p>
            </div>
          </div>
          <a
            href="https://www.linkedin.com/in/themohitbharti/"
            target="_blank"
            rel="noopener noreferrer"
            className={homcss.githubButton}
          >
            Visit Linkedin
            <i className="ri-linkedin-fill"></i>
          </a>
        </div>
      </div>

      {/* <div className={homcss.portfolio_wrapper}>
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
      </div> */}

      <div className={homcss.expertise_wrapper}>
        <small>My Coding Profiles</small>
        <h2>Competitive Programming & Problem Solving</h2>

        <a
              href="https://leetcode.com/themohitbharti"
              target="_blank"
              rel="noopener noreferrer"
            >
        <div className={homcss.expertise_card}>
          <div className={homcss.expertise_card_title}>
            <i className="ri-code-s-slash-line"></i>
              <h3>LeetCode</h3>
          </div>

          <span>1506 Rating</span>
          <p>
            Solved 100+ problems with strong focus on Data Structures &
            Algorithms.
          </p>
        </div>
        </a>

        <a
              href="https://www.codechef.com/users/themohitbharti"
              target="_blank"
              rel="noopener noreferrer"
            >
        <div className={homcss.expertise_card}>
          <div className={homcss.expertise_card_title}>
            <i className="ri-medal-line"></i>
              <h3>CodeChef</h3>
          </div>

          <span>1634 Rating</span>
          <p>
            Achieved a 3-star rating with a total of more than 250+ problems
            solved.
          </p>
        </div>
        </a>

        <a
              href="https://codeforces.com/profile/themohitbharti"
              target="_blank"
              rel="noopener noreferrer"
            >
        <div className={homcss.expertise_card}>
          <div className={homcss.expertise_card_title}>
            <i className="ri-cpu-line"></i>
              <h3>CodeForces</h3>
          </div>

          <span>1158 Rating</span>
          <p>
            Solved 250+ problems with strong command on Competitive Programming.
          </p>
        </div>
        </a>
      </div>

      <div id="experience" className={homcss.testimonials_wrapper}>
        <small>My Professional Journey</small>
        <h2>Building Scalable Solutions</h2>
        <p>
          Hands-on experience developing robust systems and leading technical
          initiatives
        </p>

        <div className={homcss.swiper_wrapper}>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
            }}
            modules={[Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className={homcss.testimonials_card}>
                <div className={homcss.profile_testimonial}>
                  <img src={companyImgs01} alt="companyImg01" />
                  <h3>
                    GoComet <span>Backend Developer Intern</span>
                  </h3>
                </div>

                <p>
                  <ul>
                    <li>
                      * Built carrier integrations (FedEx/Maersk) using Ruby for
                      real-time shipment tracking
                    </li>
                    <li>
                      * Developed structured web scrapers and API orchestrators
                      for 99.8% data reliability
                    </li>
                    <li>
                      * Standardized ETL processes improving data accuracy by
                      30%
                    </li>
                    <li>
                      * Reduced manual tracking efforts by 60% through automated
                      workflows
                    </li>
                    <li>
                      * Implemented AWS Lambda/SNS for real-time supply chain
                      alerts
                    </li>
                  </ul>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={homcss.testimonials_card}>
                <div className={homcss.profile_testimonial}>
                  <img src={companyImgs02} alt="companyImg02" />
                  <h3>
                    Programming Club,AKGEC <span>Head</span>
                  </h3>
                </div>

                <p>
                  <ul className={homcss.experience_list}>
                    <li>
                      * Lead the programming club to promote competitive
                      programming in our college
                    </li>
                    <li>* Conducted multiple coding workshops in college</li>
                    <li>
                      * Organized coding contests "CodeCrunch" for 600+
                      participants
                    </li>
                    <li>* Solved 500+ problems on LeetCode/CodeForces</li>
                    <li>* Coordinated Code Crunch college coding event</li>
                  </ul>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={homcss.testimonials_card}>
                <div className={homcss.profile_testimonial}>
                  <img src={companyImgs03} alt="companyImg01" />
                  <h3>
                    Blockchain Research lab,AKGEC <span>Backend Developer</span>
                  </h3>
                </div>

                <p>
                  <ul>
                    <li>
                      * Created Node.js visitor management portal with 90%
                      efficiency gain
                    </li>
                    <li>
                      * Organized BlockVerse coding event for 150+ participants
                    </li>
                    <li>
                      * Optimized admission portal reducing processing time by
                      60%
                    </li>
                    <li>
                      * Implemented JWT authentication for 5000+ annual
                      applicants
                    </li>
                    <li>
                      * Enhanced MongoDB queries improving response times by 35%
                    </li>
                  </ul>
                </p>
              </div>
            </SwiperSlide>

            {/* <SwiperSlide>
                    <div className={homcss.testimonials_card}>
                        <div className={homcss.profile_testimonial}>
                            <img src={testimonialImg02} alt="testimonialImg02" />
                            <h3>Programming Club <span>Head</span></h3>
                        </div>

                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ab quaerat sed expedita nemo numquam nam autem perspiciatis dicta deserunt cumque exercitationem delectus, sequi vero nesciunt eveniet illum! Dicta, rerum.</p>
                    </div>
                </SwiperSlide> */}
          </Swiper>
        </div>
      </div>

      <div id="projects" className={homcss.gallery_wrapper}>
        <small>My Projects</small>
        <h2>Transforming Ideas into Exceptionals</h2>

        <div className={homcss.gallery_cards}>
          <div className={homcss.gallery_card}>
            <img src={projectImg01} alt="projectImg01" />

            <div className={homcss.gallery_content}>
              <h3>BidSpace</h3>
              <div>
                <span>Node.js</span>
                <span>TypeScript</span>
              </div>
              <a
                href="https://github.com/themohitbharti/bidspace"
                target="_blank"
                rel="noopener noreferrer"
                className={homcss.repo_button}
              >
                View Repository <i className="ri-github-fill"></i>
              </a>
            </div>
          </div>

          <div className={homcss.gallery_card}>
            <img src={projectImg02} alt="projectImg02" />

            <div className={homcss.gallery_content}>
              <h3>BlogVault</h3>
              <div>
                <span>React</span>
                <span>Appwrite</span>
              </div>
              <a
                href="https://github.com/themohitbharti/BlogVault"
                target="_blank"
                rel="noopener noreferrer"
                className={homcss.repo_button}
              >
                View Repository <i className="ri-github-fill"></i>
              </a>
            </div>
          </div>

          <div className={homcss.gallery_card}>
            <img src={projectImg03} alt="projectImg03" />

            <div className={homcss.gallery_content}>
              <h3>Hive</h3>
              <div>
                <span>Node.js</span>
                <span>Flutter</span>
              </div>
              <a
                href="https://github.com/themohitbharti/Hive_backend"
                target="_blank"
                rel="noopener noreferrer"
                className={homcss.repo_button}
              >
                View Repository <i className="ri-github-fill"></i>
              </a>
            </div>
          </div>

          <div className={homcss.gallery_card}>
            <img src={projectImg04} alt="projectImg04" />

            <div className={homcss.gallery_content}>
              <h3>StockPilot</h3>
              <div>
                <span>Node.js</span>
                <span>Postgres</span>
              </div>
              <a
                href="https://github.com/themohitbharti/stockPilot"
                target="_blank"
                rel="noopener noreferrer"
                className={homcss.repo_button}
              >
                View Repository <i className="ri-github-fill"></i>
              </a>
            </div>
          </div>
        </div>

        <div className={homcss.github_section}>
          <a
            href="https://github.com/themohitbharti"
            target="_blank"
            rel="noopener noreferrer"
            className={homcss.github_button}
          >
            Visit GitHub <i className="ri-github-fill"></i>
          </a>
        </div>
      </div>

      <div id="contact" className={homcss.contact_wrapper}>
        <div className={homcss.contact_content}>
          <h2>Get ready to Create Great</h2>

          <div className={homcss.details}>
            <div className={homcss.contact_info}>
              <i className="ri-mail-line"></i>
              <p>
                E-mail <span>mohitbharti373@gmail.com</span>
              </p>
            </div>
            <div className={homcss.contact_info}>
              <i className="ri-map-pin-line"></i>
              <p>
                City <span>Ghaziabad, UP, India</span>
              </p>
            </div>
            <div className={homcss.contact_info}>
              <i className="ri-phone-line"></i>
              <p>
                Contact <span>+91 9520608608</span>
              </p>
            </div>
          </div>
        </div>
        <form className={homcss.contact_form} onSubmit={handleSubmit}>
          <h2>Get in Touch</h2>

          <div className={homcss.input_wrapper}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="tel" name="phone" placeholder="Your Phone" />
          </div>

          <div className={homcss.input_wrapper}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <input type="text" name="subject" placeholder="Subject" />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            required
            minLength={10}
          ></textarea>

          <button type="submit">
            Send Message <i className="ri-send-plane-line"></i>
          </button>
        </form>
      </div>

      <div className={homcss.footer_wrapper}>
        <div className={homcss.footer_links}>
          <div className={homcss.logo}>
            <span>Mohit</span>
          </div>
          <p>Full-stack developer | Competitive programmer | Problem solver</p>
          <div className={homcss.socials}>
            <a
              href="https://www.linkedin.com/in/themohitbharti"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-linkedin-line"></i>
            </a>
            <a
              href="https://github.com/themohitbharti"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-github-line"></i>
            </a>
            <a
              href="https://twitter.com/themohitbharti"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-twitter-x-line"></i>
            </a>
          </div>
        </div>
        <div className={homcss.footer_links}>
          <h3>Navigate</h3>
          <p>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Home
            </a>
          </p>
          <p>
            <a
              href="#domains"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("domains")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Domains
            </a>
          </p>
          <p>
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("experience")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Experience
            </a>
          </p>
          <p>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Projects
            </a>
          </p>
          <p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </a>
          </p>
        </div>

        <div className={homcss.footer_links}>
          <h3>Contact</h3>

          <p>
            <i className="ri-phone-line"></i>+91 9520608608
          </p>
          <p>
            <i className="ri-map-pin-line"></i>Ghaziabad, UP, India
          </p>
          <p>
            <i className="ri-mail-line"></i>mohitbharti373@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
