import "../styles/Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [toggle, setToggle] = useState(false);

  const addClass = () => {
    return setToggle(true);
  };

  const removeClass = () => {
    return setToggle(false);
  };

  return (
    <>
      <div className={toggle ? "nav active" : "nav"}>
        <Link to="/">
          <img className="nav-logo" src="/images/john-doe.png" alt="nav-logo" />
        </Link>
        <div className="nav-list">
          <button className="cross" onClick={removeClass}>
            <img src="/images/cross.svg" alt=""></img>
          </button>

          <ul>
            <Link to="/">
              <li className="list-item" onClick={removeClass}>
                home
              </li>
            </Link>
            <Link to="/work">
              <li className="list-item" onClick={removeClass}>
                work
              </li>
            </Link>
            <Link to="/blog">
              <li className="list-item" onClick={removeClass}>
                blog
              </li>
            </Link>
          </ul>

          <div className="nav-icons">
            <a
              className="nav-icon-link"
              href="https://github.com/"
              target="_blank"
            >
              <img
                className="icon"
                id="github-logo"
                src="/images/github.svg"
                alt="github-icon"
              />
            </a>
            <a
              className="nav-icon-link"
              href="https://www.linkedin.com/"
              target="_blank"
            >
              <img
                className="icon"
                id="linkedin-logo"
                src="/images/linkedin.svg"
                alt="linkedin-icon"
              />
            </a>
            <a
              className="nav-icon-link"
              href="https://hashnode.com/"
              target="_blank"
            >
              <img
                className="icon"
                id="hashnode-logo"
                src="/images/hashnode-red.svg"
                alt="linkedin-icon"
              />
            </a>
            <a
              className="nav-icon-link"
              href="https://twitter.com/"
              target="_blank"
            >
              <img
                className="icon"
                id="twitter-logo"
                src="/images/twitter.svg"
                alt="linkedin-icon"
              />
            </a>
          </div>
        </div>
        <button className="display" onClick={addClass}>
          <img src="/images/menu.svg" alt="" className="menu-icon"></img>
        </button>
      </div>
    </>
  );
}

export default Header;
