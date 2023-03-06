import React, { useState } from "react";
import slackLogo from "../../Assets/slackLogo.png";
import classes from "./Navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
function Navbar() {
  const [dropDown, setDropDown] = useState(true);

  const mouseEnterHandler = () => {
    setDropDown(false);
  };
  const mouseLeaveHandler = () => {
    setDropDown(true);
  };
  return (
    <div className={classes.navbar__container}>
      <div className={classes.navbar__left}>
        <img src={slackLogo} />
        <div
          className={classes.expand__more}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          {" "}
          <p className={classes.productDescription}>Product
           <div>
              {dropDown ? (
                <ExpandMoreIcon fontSize="small" />
              ) : (
                <ExpandLessIcon fontSize="small" />
              )}
            </div> 
          </p>
          <div className={classes.product_details__hidden}>
            <p>Features</p>
            <p>Channels</p>
            <p>Digital HQ</p>
            <p>Integrations</p>
            <p>Slack Connect</p>
            <hr/>
            <p>Download Slack</p>

          </div>
        </div>

        <p> Solutions</p>
        <p>Enterprise</p>
        <p>Resources</p>
        <p>Pricing</p>
      </div>
      <div className={classes.navbar__right}>
        <div className={classes.searchIcon} >
          <SearchIcon />
        </div>
        <p>Sign in</p>
        <div className={classes.button__container_Sales}>
          <p>TALK TO SALES</p>
        </div>
        <div className={classes.button__container}>
          <button className={classes.button}>TRY FOR FREE</button>
        </div>
        <div className={classes.menu__hidden}>
          <MenuIcon />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
