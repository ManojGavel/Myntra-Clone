import React, { Fragment } from "react";
import classes from "./navHamburger.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useContextReducer } from "../../../context/Context";
import { createPortal } from "react-dom";

export default function NavHamburger() {
  const [, dispatch] = useContextReducer();
  const Overlay = () => (
    <div className={classes.content}>
      <div className={classes.mainMenu}>
        <div>
          <img
            className={classes.offerBanner}
            src="https://assets.myntassets.com/dpr_1.5,q_auto,w_400,c_limit,fl_progressive/assets/images/2023/2/7/cc8351d0-b237-489d-a9c5-f6ea0222744d1675792734659-offer-banner-200-1080x496-code-_-MYNTRA200.jpg"
            alt="offer banner"
          />
        </div>
        <ul className={classes.menuUl}>
          <li>
            <span>Men</span>{" "}
            <span>
              <KeyboardArrowRightIcon
                sx={{
                  fontSize: { xs: 20, sm: 30, md: 40, lg: 50 },
                  color: "gray",
                }}
              />
            </span>
          </li>
          <li>
            <span>Women</span>{" "}
            <span>
              <KeyboardArrowRightIcon
                sx={{
                  fontSize: { xs: 20, sm: 30, md: 40, lg: 50 },
                  color: "gray",
                }}
              />
            </span>
          </li>
          <li>
            <span>Kids</span>{" "}
            <span>
              <KeyboardArrowRightIcon
                sx={{
                  fontSize: { xs: 20, sm: 30, md: 40, lg: 50 },
                  color: "gray",
                }}
              />
            </span>
          </li>
          <li>
            <span>Home & Living</span>{" "}
            <span>
              <KeyboardArrowRightIcon
                sx={{
                  fontSize: { xs: 20, sm: 30, md: 40, lg: 50 },
                  color: "gray",
                }}
              />
            </span>
          </li>
          <li>
            <span>Beauty</span>{" "}
            <span>
              <KeyboardArrowRightIcon
                sx={{
                  fontSize: { xs: 20, sm: 30, md: 40, lg: 50 },
                  color: "gray",
                }}
              />
            </span>
          </li>
        </ul>
        <hr className={classes.hr} />
        <ul className={classes.menuLink}>
          <li>Muntra Srudio</li>
          <li>Muntra Mall</li>
          <li>Muntra Insider</li>
          <li>Gift Cards</li>
          <li>Contact Us</li>
          <li>FAQs</li>
          <li>Legal</li>
        </ul>
      </div>
    </div>
  );

  const Backdrop = (props) => (
    <div className={classes.main} onClick={props.onConfirm}></div>
  );

  const clickHandler = () => {
    dispatch({ type: "isHamburgerOpen" });
  };
  return (
    <Fragment>
      {createPortal(
        <Backdrop onConfirm={clickHandler} />,
        document.getElementById("HamburgerMain")
      )}
      {createPortal(<Overlay />, document.getElementById("HamBurgurCh"))}
    </Fragment>
  );
}
