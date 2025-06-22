import clinic from "./assets/images/clinic.png";
import paint from "./assets/images/SiThu House Paint.png";
import kmd from "./assets/images/kmd.png";
import pharmacy from "./assets/images/pharmacy.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";

import html from "./assets/html5.png";
import css from "./assets/css.png";
import js from "./assets/javaScript.png";
import react from "./assets/react.png";
import php from "./assets/php.png";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
export default function Projects() {
  const topBtn = document.getElementById("topBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  // window.onscroll = function () {
  //   scrollTop();
  // };

  function scrollTop() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      topBtn.Style.display = "block";
    } else {
      topBtn.Style.display = "none";
    }
  }
  function goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  const project = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(
      project,
      {
        x: 200,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: ".row",
          start: 400,
        },
      },
      {}
    );
  }, []);
  return (
    <section
      className="container-fluid d-block bg-dark py-5 text-white"
      id="projects"
    >
      {/* <button onClick={goTop()} classNameName="btn btn-circle" id="topBtn">
        Top
      </button> */}
      <div className="container-md-fluid container">
        <h1 className="text-center text-dark rounded-4" id="project-title">
          Projects
        </h1>

        {/* Clinic */}
        <div className="row mt-5">
          <div className="col-lg-6 col-12 mb-4 mb-lg-0">
            <div ref={project} className="card bg-transparent">
              <h2 className="card-title text-center text-light py-3">
                BeautyCare Aesthetics Clinic
              </h2>
              <div className="card-img-top">
                <a href="https://github.com/ThihaZaw55/" className="nav-link">
                  <img
                    src={clinic}
                    alt="BeautyCare Project"
                    className="img-fluid"
                  />
                </a>
              </div>

              <div className="card-body d-flex mt-2">
                <p className="btn me-3">
                  <img src={html} alt={html} width={28} />
                </p>
                <p className="btn me-3">
                  <img src={css} alt="" width={28} />
                </p>
                <p className="btn me-3">
                  <img src={js} alt="" width={28} />
                </p>
                <p className="btn me-3">
                  <FontAwesomeIcon
                    icon={faBootstrap}
                    size="2xl"
                    className="text-primary"
                  />
                </p>
                <p className="btn me-3">
                  <img src={php} alt="" width={28} />
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12 mb-4">
            <div className="card bg-transparent">
              <h2 className="card-text text-center text-light py-3">
                SiThu House Paint
              </h2>
              <div className="card-img-top">
                <a href="https://github.com/ThihaZaw55/" className="nav-link">
                  <img src={paint} alt="" className="img-fluid" />
                </a>
              </div>

              <div className="card-body d-flex mt-2">
                <p className="btn me-3">
                  <img src={html} alt="" width={28} />
                </p>
                <p className="btn me-3">
                  <img src={css} alt="" width={28} />
                </p>
                <p className="btn me-3">
                  <img src={js} alt="" width={28} />
                </p>
                <p className="btn me-3">
                  <FontAwesomeIcon
                    icon={faBootstrap}
                    size="2xl"
                    className="text-primary"
                  />
                </p>
                <p className="btn me-3">
                  <img src={react} alt="" width={28} />
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="card bg-transparent">
              <h2 className="card-text text-center text-light py-3">
                Mr. Healthy Pharmacy
              </h2>
              <div className="card-img-top">
                <a href="https://github.com/ThihaZaw55/" className="nav-link">
                  <img src={pharmacy} alt="" className="img-fluid" />
                </a>
              </div>

              <div className="card-body d-flex mt-2">
                <p className="btn me-3">
                  <img src={html} alt="" width={28} />
                </p>
                <p className="btn me-3">
                  <img src={css} alt="" width={28} />
                </p>
                <p className="btn me-3">
                  <img src={js} alt="" width={28} />
                </p>
                <p className="btn me-3">
                  <FontAwesomeIcon
                    icon={faBootstrap}
                    size="2xl"
                    className="text-primary"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
