import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";
import placeHolderAboutImg from "../assets/ian-dooley-d1UPkiFd04A-unsplash.jpg";

const About = () => {
  return (
    <section className="about ">
      <div className="about-wrapper flex">
        <div className="nav-about">
          <Link to="/player">
            <button>
              <FaArrowLeft style={{ marginRight: ".5em" }} />
              Back to Home
            </button>
          </Link>
        </div>
        <div className="about-card flex">
          <img src={placeHolderAboutImg} className="about-img" />
          <div className="about-desc flex">
            <h1>About This project</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              accusantium aperiam delectus saepe fugiat consequatur, distinctio
              obcaecati nisi culpa numquam illo iure neque quasi voluptatum
              dicta tenetur architecto vel amet corporis quaerat voluptatibus
              quas labore necessitatibus voluptas? Ipsam, in, quidem sapiente
              placeat consequatur, dolorum quos illo eos praesentium
              exercitationem repudiandae.
            </p>
            <div className="links flex">
              <a href="#">
                <FaGithub className="link-icon"/>
                github
              </a>
              <a href="#">
                <FaLinkedin className="link-icon"/>
                linkedin
              </a>
              <a href="#">
                <FaFacebook className="link-icon"/>
                facebook
              </a>
              <a href="#">
                <FaTwitter className="link-icon"/>
                twitter
              </a>
            </div>
            <button>Made by Abel Sisay</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
