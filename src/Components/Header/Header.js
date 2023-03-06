import React from "react";
import classes from "./Header.module.css";
import headerVideo from '../../Assets/headerVideo.webm';
function Header() {
  return (
    <div className={classes.header__container}>
      <div className={classes.header__left}>
        <h1>
          <div>Great teamwork starts with a </div>
          <div className={classes.digital__left}>digital HQ</div>
        </h1>
        <p>
          With all your people, tools and communication in one place, you can work
          faster and more flexibly than ever before.
        </p>

        <button>
          SIGN UP WITH EMAIL
        </button>
        <p>
        Slack is free to try for as long as you’d like
        </p>
      </div>
      <div className={classes.header__right}>
        <video autoPlay loop muted src={headerVideo} type="video/webm" />
      </div>
    </div>
  );
}

export default Header;
