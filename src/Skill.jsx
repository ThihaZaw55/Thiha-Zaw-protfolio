import {
  faHtml5,
  faCss3,
  faJs,
  faBootstrap,
  faReact,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import SkillBar from "./conponents/SkillBar";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

export default function Skill() {
  return (
    <section className="container mt-5" id="skills">
      <h1 className="text-center text-dark rounded-4" id="project-title">
        Skills
      </h1>
      <SkillBar
        icon={faHtml5}
        text="HTML 5"
        percent="100%"
        width="100%"
        color="danger"
      />
      {/* CSS */}
      <SkillBar
        icon={faCss3}
        text="CSS 3"
        percent="90%"
        width="90%"
        color="primary"
      />
      {/* JavaScript */}
      <SkillBar
        icon={faJs}
        text="JavaScript"
        percent="90%"
        width="90%"
        color="warning"
      />
      {/* Bootstrap */}
      <SkillBar
        icon={faBootstrap}
        text="Bootstrap"
        percent="90%"
        width="90%"
        color="primary"
      />
      {/* React */}
      <SkillBar
        icon={faReact}
        text="React"
        percent="90%"
        width="90%"
        color="info"
      />
      <SkillBar
        icon={faJava}
        text="Java"
        percent="90%"
        width="90%"
        color="primary"
      />
      <SkillBar
        icon={faLeaf}
        text="Spring Boot"
        percent="80%"
        width="80%"
        color="success"
      />
    </section>
  );
}
