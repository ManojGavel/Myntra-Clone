import React from "react";
import classes from "./header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <header>
      <nav>
        <div className={classes.navCh}>
          <div className={classes.logo}>
            <div className={classes.mobileHamburger}>
              <MenuIcon />
            </div>
            <h1 className={classes.logoh1}>
              <span className={classes.logoMobile}>Myntra</span>
              <div className={classes.spriteLogo}></div>
            </h1>
          </div>
          <div className={classes.menu}>
            <ul className={classes.menuList}>
              <li>
                <a className={classes.link} href="/">
                  MEN
                </a>
              </li>
              <li>
                <a className={classes.link} href="/">
                  WOMEN
                </a>
              </li>
              <li>
                <a className={classes.link} href="/">
                  kids
                </a>
              </li>
              <li>
                <a className={classes.link} href="/">
                  Home & living
                </a>
              </li>
              <li>
                <a className={classes.link} href="/">
                  BEAUTY
                </a>
              </li>
              <li>
                <a className={classes.link} href="/">
                  STUDIO
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.inputSearch}>
            <div className={classes.search}>
              <span className={classes.spriteSearch}>
                <SearchIcon sx={{ padding: "0px 6px", marginTop: "5px" }} />
              </span>
              <input
                className={classes.searchInput}
                type="text"
                placeholder="Search for products, brands and more"
              />
            </div>
          </div>
          <div className={classes.userSec}>
            <ul className={classes.userUL}>
              <li>
                <a className={classes.userLink} href="/">
                  <PermIdentityIcon />
                  <span className={classes.profileText}>Profile</span>
                </a>
              </li>
              <li>
                <a className={classes.userLink} href="/">
                  <FavoriteBorderIcon />
                  <span className={classes.profileText}>WishList</span>
                </a>
              </li>
              <li>
                <a className={classes.userLink} href="/">
                  <ShoppingBagIcon />
                  <span className={classes.profileText}>Bag</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
