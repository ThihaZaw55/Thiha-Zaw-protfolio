import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faBootstrap,
  faReact,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
export default function Skill() {
  return (
    <section className="container mt-5" id="skills">
      <h1 className="text-center text-dark" id="project-title">
        Skills
      </h1>
      <div className="row mb-3 align-items-center">
        <div className="col-md-2 d-flex align-items-center mb-2">
          <FontAwesomeIcon
            icon={faHtml5}
            size="4x"
            className="text-danger shadow me-2"
          />
          <span className="text-center text-danger">HTML5</span>
        </div>
        <div className="col-md-10">
          <div
            className="progress"
            role="progressbar"
            aria-label="Danger example"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar bg-danger" style={{ width: "100%" }}>
              100%
            </div>
          </div>
        </div>
      </div>

      {/* CSS */}
      <div className="row mb-3 align-items-center">
        <div className="col-md-2 d-flex align-items-center mb-2">
          <FontAwesomeIcon
            icon={faCss3}
            size="4x"
            className="text-primary shadow me-2"
          />
          <span className="text-center text-primary">CSS 3</span>
        </div>
        <div className="col-md-10">
          <div
            className="progress"
            role="progressbar"
            aria-label="Primary example"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar bg-primary" style={{ width: "90%" }}>
              90%
            </div>
          </div>
        </div>
      </div>

      {/* JavaScript */}
      <div className="row mb-3 align-items-center">
        <div className="col-md-2 d-flex align-items-center mb-2">
          <FontAwesomeIcon
            icon={faJs}
            size="4x"
            className="text-warning shadow me-2"
          />
          <span className="text-center text-warning ">JavaScript</span>
        </div>
        <div className="col-md-10">
          <div
            className="progress"
            role="progressbar"
            aria-label="Danger example"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar bg-warning" style={{ width: "90%" }}>
              90%
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap */}
      <div className="row mb-3 align-items-center">
        <div className="col-md-2 d-flex align-items-center mb-2">
          <FontAwesomeIcon
            icon={faBootstrap}
            size="4x"
            className="text-primary shadow me-2"
          />
          <span className="text-center text-primary ">Bootstrap</span>
        </div>
        <div className="col-md-10">
          <div
            className="progress"
            role="progressbar"
            aria-label="Primary example"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar bg-primary" style={{ width: "90%" }}>
              90%
            </div>
          </div>
        </div>
      </div>

      {/* React */}
      <div className="row mb-3 align-items-center">
        <div className="col-md-2 d-flex align-items-center mb-2">
          <FontAwesomeIcon
            icon={faReact}
            size="4x"
            className="text-info shadow me-2"
          />
          <span className="text-center text-info ">React</span>
        </div>
        <div className="col-md-10">
          <div
            className="progress"
            role="progressbar"
            aria-label="Info example"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar bg-info" style={{ width: "90%" }}>
              80%
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap */}
      <div className="row mb-3 align-items-center">
        <div className="col-md-2 d-flex align-items-center mb-2">
          <FontAwesomeIcon
            icon={faGithub}
            size="4x"
            className="text-dark shadow me-2"
          />
          <span className="text-center text-dark ">Git Hub</span>
        </div>
        <div className="col-md-10">
          <div
            className="progress"
            role="progressbar"
            aria-label="Primary example"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar bg-dark" style={{ width: "90%" }}>
              90%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
