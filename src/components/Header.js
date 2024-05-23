import React from "react";
import { Link } from "react-router-dom";
import logo from "../starter-code/assets/shared/logo.svg";
import { CgMenuLeft } from "react-icons/cg";

function Header() {
    const handleToggleMenu = () => {
        const navbar = document.querySelector(".navbar")
        const link = document.querySelectorAll(".link")

        navbar.classList.toggle("open")
        link.forEach((item) => {
          item.addEventListener("click", () => {
            navbar.classList.remove("open")
          })
        })
    }

  return (
    <>
      <header className="header flex items-center justify-between w-full">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" title="Space Tourism" />
          </Link>
        </div>

        <nav className="navbar"> 
          <ul>
            <li className="link">
              <Link to='/' className="lg:text-white lg:flex lg:items-center"><span className="lg:text-4xl lg:font-bold mr-2">00</span>Home</Link>
            </li>
            <li className="link">
              <Link to='/destination' className="lg:text-white lg:flex lg:items-center"><span className="lg:text-4xl lg:font-bold mr-2">01</span>Destination</Link>
            </li>
            <li className="link">
              <Link to='/crew' className="lg:text-white lg:flex lg:items-center"><span className="lg:text-4xl lg:font-bold mr-2">02</span>Crew</Link>
            </li>
            <li className="link">
              <Link to='technology' className="lg:text-white lg:flex lg:items-center"><span className="lg:text-4xl lg:font-bold mr-2">03</span>Technology</Link>
            </li>
          </ul>
        </nav>
        <div className="lg:hidden">
            <button className="text-white text-4xl" onClick={handleToggleMenu}>
                <CgMenuLeft />
            </button>
        </div>
      </header>
    </>
  );
}

export default Header;
