import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faJava } from "@fortawesome/free-brands-svg-icons";
import myphoto from "../assets/images/Thiha.jpg";
import cv from "../assets/Web_Developer_Resume_ThihaZaw.pdf";
import html from "../assets/html5.png";
import css from "../assets/css.png";
import js from "../assets/javaScript.png";
import react from "../assets/react.png";
import spring from "../assets/spring.png";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
export default function Hero() {
  const hero = useRef(null);
  const heroImage = useRef(null);
  const button = useRef(null);
  useEffect(() => {
    const timeline = gsap.timeline();
    gsap.fromTo(
      hero.current,
      {
        opacity: 0,
        x: -100,
      },
      {
        duration: 2,
        opacity: 1,
        x: 0,
        ease: "power2.out",
      },
    );
    gsap.fromTo(
      heroImage.current,
      {
        opacity: 0,
        x: 100,
      },
      {
        duration: 2,
        opacity: 1,
        x: 0,
        ease: "power2",
      },
    );
    gsap.fromTo(
      button.current,
      {
        opacity: 0,
        y: 70,
      },
      {
        duration: 3,
        delay: 1,
        opacity: 1,
        y: 0,
        ease: "power2",
      },
    );
  }, []);
  return (
    <section className="container d-block">
      <div className="row">
        <div
          ref={hero}
          className="col-md-6 mb-0 d-flex justify-content-center flex-column align-items-md-center align-items-center"
          id="hero"
        >
          <h4>
            Hi, I'm
            <strong className="text-primary ms-2 fs-3">Thiha Zaw</strong>
          </h4>
          <h2>Web Developer</h2>
          <p>My professional are</p>
          <div className="d-flex justify-content-center">
            <span className="mx-1">
              <img
                src={html}
                alt="html"
                width={31}
                className="align-items-start"
              />
            </span>
            <span className="mx-1">
              <img
                src={css}
                alt="css"
                width={30}
                className="align-items-start"
              />
            </span>
            <span className="mx-1">
              <img
                src={js}
                alt="JavaScript"
                width={30}
                className="align-items-start"
              />
            </span>
            <span className="mx-1">
              <FontAwesomeIcon
                icon={faBootstrap}
                size="2xl"
                className="text-primary"
              />
            </span>
            <span className="mx-1">
              <img
                src={react}
                alt="React"
                width={30}
                className="align-items-start"
              />
            </span>
            <span className="mx-1">
              <FontAwesomeIcon
                icon={faJava}
                size="2xl"
                className="text-primary"
              />
            </span>
            <span className="mx-1">
              <img
                src={spring}
                alt="spring"
                width={30}
                className="align-items-start"
              />
            </span>
          </div>
          <div className="mt-3">
            <a
              className="mx-2"
              href="https://www.linkedin.com/in/thiha-zaw-9b9898281/"
            >
              <i class="bi bi-linkedin text-primary fs-5"></i>
            </a>
            <a className="mx-2" href="https://github.com/ThihaZaw55/">
              <i class="bi bi-github text-black fs-5"></i>
            </a>
          </div>
          <div ref={button} className="mt-3">
            <a href="#projects" className="btn btn-dark me-4">
              Projects
            </a>
            <a href={cv} download="cv" className="btn btn-dark">
              Download <strong>CV</strong>
            </a>
          </div>
        </div>

        <div
          ref={heroImage}
          className="col-md-6 mt-0 d-flex justify-content-md-center justify-content-start flex-column align-items-center"
        >
          <figure className="">
            <img
              src={myphoto}
              className="rounded-1"
              alt="Thiha Zaw"
              width={240}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
