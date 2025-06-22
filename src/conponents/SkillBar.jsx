import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faBootstrap,
  faReact,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
export default function SkillBar({ icon, text, percent, width, color }) {
  return (
    <section>
      <div className="row mb-3 align-items-center">
        <div className="col-md-2 d-flex align-items-center mb-2">
          <FontAwesomeIcon
            icon={icon}
            size="4x"
            className={`text-${color} shadow me-2`}
          />
          <span className={`text-center text-${color}`}>{text}</span>
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
            <div
              className={`progress-bar bg-${color}`}
              style={{ width: `${width}` }}
            >
              {percent}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
