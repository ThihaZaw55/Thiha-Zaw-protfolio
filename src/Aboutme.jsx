import myphoto from "./assets/images/Thiha.jpg";
import diploma from "./assets/images/diploma.jpg";
import java from "./assets/images/java.jpg";
import rwd from "./assets/images/responsive-web-design.png";
import jsad from "./assets/images/js.png";
import js from "./assets/images/JavaScript.jpg";
import wd from "./assets/images/Web Development.jpg";
import Card from "./conponents/CertificateCard";

export default function About() {
  return (
    <section
      className="container-fluid d-block bg-dark py-4 text-white"
      id="about"
    >
      <div className="container">
        <h1 className="text-center text-dark rounded-4" id="project-title">
          About me
        </h1>
        <div className="row mt-2">
          <div className="col-md-6 d-flex justify-content-center">
            <figure className="">
              <img
                src={myphoto}
                className="rounded-4"
                alt="thihazaw"
                width={300}
              />
            </figure>
          </div>
          <div className="col-md-6 d-flex align-items-center mt-5 mt-md-0">
            <p className="fs-5 text-light ms-md-0 ms-5">
              My name is Thiha Zaw.I am 26 years old.
              <br />I am a Software Developer with 2 years of experience in the
              banking sector at Myanmar Information Technology. I work mainly
              with Java and Microsoft SQL Server, focusing on backend
              development and building secure, efficient systems. I am
              passionate about learning new technologies and improving my skills
              in full-stack development.
            </p>
          </div>
        </div>
        <div className="container mt-5">
          <h1 className="text-center">Certification</h1>
          <div className="row g-5 mt-4">
            <div className="col-md-6">
              <Card img={diploma} title="Diploma in Web Developement" />
            </div>
            <div className="col-md-6">
              <Card img={java} title="Java (J2SE)" />
            </div>
            <div className="col-md-6">
              <Card img={rwd} title="Responsive Web Design" />
            </div>
            <div className="col-md-6">
              <Card
                img={jsad}
                title="JavaScript Algorithms and Data Structures"
              />
            </div>

            <div className="col-md-6">
              <Card img={js} title="JavaScript Intermediate" />
            </div>
            <div className="col-md-6">
              <Card img={wd} title="Web Development" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
