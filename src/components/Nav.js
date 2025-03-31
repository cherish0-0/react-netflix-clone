import React, { useEffect, useState } from 'react';
import logo from '../assets/netflix-logo.png';
import "./Nav.css";

export default function Nav() {

  const [show, setShow] = useState(false);

  useEffect (() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    })

    return () => {
      window.removeEventListener("scroll", () => {})
    };
  }, []);
  return <nav className={`nav ${show && "nav__black"} `}>
    <img 
    alt="logo"
    src={logo}
    className='nav__logo'
    onClick={() => window.location.reload()} />
    <img
        alt="User logged"
        src="https://occ-0-8123-395.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
        className='nav__avatar'
    ></img>
  </nav>
}