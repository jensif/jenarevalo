import React from "react";
import Link from "next/link";
import clsx from "clsx";

export default function Nav() {
  const [open, setOpen] = React.useState(false);
  const toggleMenuOpen = (event) => {
    event.preventDefault();
    setOpen(!open);
  };

  return (
    <>
      <nav>
        <div className="wrapper">
          <ul>
            <li className="home">
              <Link href="/">
                <a className="home__icon">
                  <img src="/images/gem-icon.gif" alt="Gem" className="logo" />
                </a>
              </Link>
              <Link href="/">
                <a className="home__name">Jen Arevalo</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className="menu">
              {/* Technically, this should be a `button`. */}
              <a href="#" onClick={toggleMenuOpen}>
                <i className="zmdi zmdi-menu" />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div id="nav" className={clsx("overlay", { open })}>
        {/* Technically, this should be a `button`. */}
        <a href="#" className="closebtn" onClick={toggleMenuOpen}>
          <i className="zmdi zmdi-close" />
        </a>
        <div className="overlay-content">
          <div className="wrapper">
            <ul>
              <li>
                <a href="/work/boundlessvr">Boundless VR</a>
              </li>
              <li>
                <a href="/work/levelup">Level Up</a>
              </li>
              <li>
                <a href="/work/rfm">Ready For More?</a>
              </li>
              <li>
                <a href="/work/alwayssummer">Always Summer</a>
              </li>
              <li>
                <a href="/work/courageawards">Courage Awards</a>
              </li>
              <li>
                <a href="/work/cyanna">Cyanna</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/work/wwpimpact">WWP Impact</a>
              </li>
              <li>
                <a href="/work/ild">I Love Design</a>
              </li>
              <li>
                <a href="/work/theoffice">The Office</a>
              </li>
              <li>
                <a href="/work/doglogapp">DogLog</a>
              </li>
              <li>
                <a href="/work/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/work/thepost">The Post</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
