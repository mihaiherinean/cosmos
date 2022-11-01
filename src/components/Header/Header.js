import React, { useState } from "react";
import classes from "./Header.module.scss";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import HomeIcon from '../../icons/homeicon.svg';
import DestinationsIcon from '../../icons/destinationsicon.svg';
import SpaceshipsIcon from '../../icons/spaceshipsicon.svg';
import CartIcon from '../../icons/carticon.svg';
function Header() {
  const [opened, setOpened] = useState(false);
  return (
    <header className={classes.header}>
      <div className={classes.mainContainer}>
        {!opened ? (
          <IoMdMenu
            size={40}
            className={classes.menu}
            onClick={() => setOpened(!opened)}
          />
        ) : (
          <IoMdClose
            size={40}
            className={classes.menu}
            onClick={() => setOpened(!opened)}
          />
        )}
        <a href="/" className={classes.logolink}>
        <h1 className={classes.logo}>
          C<span>O</span>SM<span>O</span>S
        </h1>
        </a>
        <div className={classes.secondContainer}>
          <nav className={classes.navbar}>
            <a href="/">
              <span>
                <img src={HomeIcon} alt="home" />
                Home
              </span>
            </a>
            <a href="/">
              <span>
              <img src={DestinationsIcon} alt="destinations" />
                Destinations
              </span>
            </a>
            <a href="/">
              <span>
              <img src={SpaceshipsIcon} alt="spaceships" />
                Spaceships
              </span>
            </a>
          </nav>
          <span className={classes.cart}>
            <img src={CartIcon} alt="cart"/>0
          </span>
        </div>
      </div>
      <div className={opened ? classes.mobileNav : classes.hiddenNav}>
        <a href="/"><img src={HomeIcon} alt="home"/>Home</a>
        <a href="/"><img src={DestinationsIcon} alt="home"/>Destinations</a>
        <a href="/"><img src={SpaceshipsIcon} alt="home"/>Spaceships</a>
      </div>
    </header>
  );
}

export default Header;
