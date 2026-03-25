import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <header className="d-block container-fluid container-md mx-auto mt-3">
      {/* Side bar */}
      <ul
        id="sidebar"
        style={{
          display: open ? "block" : "none",
        }}
        className="navbar-nav vh-100 z-3 mb-2 mb-lg-0"
      >
        <li onClick={() => setOpen(false)} className="nav-item px-1" id="close">
          <span className="nav-link pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26px"
              viewBox="0 -960 960 960"
              width="26px"
              fill="#5f6368"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </span>
        </li>

        <li className="nav-item px-1">
          <a className="nav-link ps-2" href="#projects">
            Projects
          </a>
        </li>
        <li className="nav-item px-1">
          <a className="nav-link ps-2" href="#skills">
            Skills
          </a>
        </li>
        <li className="nav-item px-1">
          <a className="nav-link ps-2" href="#about">
            About
          </a>
        </li>
        <li className="nav-item px-1">
          <a className="nav-link ps-2" href="#contact">
            Contact
          </a>
        </li>
        <li className="d-flex justify-content-start px-1" id="content-icon">
          <a
            className="nav-link me-1 px-3 rounded-circle"
            href="https://www.linkedin.com/in/thiha-zaw-9b9898281"
          >
            <i class="bi bi-linkedin text-primary"></i>
          </a>
          <a
            className="nav-link me-1 px-3 rounded-circle"
            href="https://github.com/ThihaZaw55/"
          >
            <i class="bi bi-github text-primary"></i>
          </a>
          <a
            className="nav-link me-1 px-3 rounded-circle"
            href="https://www.facebook.com/hein.thihazaw.3785?mibextid=ZbWKwL"
          >
            <i class="bi bi-facebook text-primary"></i>
          </a>
          <a
            className="nav-link me-1 px-3 rounded-circle"
            href="mailto:thihazaw552000@gmail.com"
          >
            <i class="bi bi-envelope-at-fill text-primary"></i>
          </a>
        </li>
      </ul>

      {/* Side bar */}

      <nav className="navbar navbar-expand-lg rounded-5 align-items-center">
        <div className="container">
          <a className="navbar-brand mx-2 text-center" href="#">
            THIHA ZAW
          </a>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id="sidemap">
            <li className="nav-item px-1">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item px-1">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item px-1">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item px-1">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item px-1">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/thiha-zaw-9b9898281/"
              >
                <i class="bi bi-linkedin text-primary"></i>
              </a>
            </li>
            <li className="nav-item px-1">
              <a className="nav-link" href="https://github.com/ThihaZaw55/">
                <i class="bi bi-github text-primary"></i>
              </a>
            </li>
            <li className="nav-item px-1">
              <a
                className="nav-link"
                href="https://www.facebook.com/hein.thihazaw.3785?mibextid=ZbWKwL"
              >
                <i class="bi bi-facebook text-primary"></i>
              </a>
            </li>
            <li className="nav-item px-1">
              <a
                className="nav-link"
                href="mailto:thihazaw552000@gmail.com"
                target="_blank"
              >
                <i class="bi bi-envelope-at-fill text-primary"></i>
              </a>
            </li>
            <li
              onClick={() => setOpen(true)}
              className="nav-item d-lg-none d-md-inline"
              id="menu"
            >
              <span className="nav-link mx-2 pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="26px"
                  viewBox="0 -960 960 960"
                  width="26px"
                  fill="#5f6368"
                >
                  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
