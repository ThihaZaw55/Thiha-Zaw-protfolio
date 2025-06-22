import {
  faLinkedin,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Contact() {
  return (
    <section className="container-fluid d-block py-4 text-white" id="contact">
      <div className="container-fluid container-md">
        <h1 className="text-center text-dark rounded-4" id="project-title">
          Contact me
        </h1>

        <div className="row px-md-5 px-0">
          <div className="col-lg-6 col-12 d-flex align-items-md-center">
            <ul className="navbar-nav d-flex flex-column bg-light p-5 rounded-5 justify-content-center list-style-none">
              <li className="mb-3">
                <a
                  className="text-primary bg-transparent"
                  href="tel:+959766404154"
                >
                  <FontAwesomeIcon icon={faPhone} size="2x" />
                  <span className="text-dark ms-4">+959 766404154</span>
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="text-primary bg-transparent"
                  href="https://www.linkedin.com/in/thiha-zaw-9b9898281/"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="2x"
                    className="text-primary"
                  />
                  <span className="text-dark ms-4">
                    linkedin.com/in/thiha-zaw-9b9898281
                  </span>
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="text-primary bg-transparent"
                  href="https://github.com/ThihaZaw55/"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="2x"
                    className="text-primary"
                  />
                  <span className="text-dark ms-4">github.com/ThihaZaw55</span>
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="text-primary bg-transparent"
                  href="mailto:thihazaw552000@gmail.com"
                >
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                  <span className="text-dark ms-4">
                    thihazaw552000@email.com
                  </span>
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="text-primary bg-transparent"
                  href="https://www.facebook.com/hein.thihazaw.3785?mibextid=ZbWKwL"
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                  <span className="text-dark ms-4">
                    facebook.com/HeinThihaZaw
                  </span>
                </a>
              </li>
              <li className="">
                <a
                  className="text-primary bg-transparent"
                  href="https://maps.app.goo.gl/BGgiJa9Wci5AWNQ77"
                >
                  <FontAwesomeIcon icon={faHome} size="2x" />
                  <span className="text-dark ms-4">
                    No.211, Myayatanar Street, Shwepyithar,Yangon
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-12 mt-lg-0 mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1893.661572905846!2d96.08620797480518!3d16.955617714860033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2smm!4v1734360150222!5m2!1sen!2smm"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
