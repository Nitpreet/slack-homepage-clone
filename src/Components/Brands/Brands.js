import React from 'react'
import classes from './Brands.module.css';
import airbnbLogo from '../../Assets/airbnbLogo.png';
import etsyLogo from '../../Assets/etsyLogo.png';
import nasaLogo from '../../Assets/nasaLogo.png';
import uberLogo from '../../Assets/uberLogo.png';
import targetLogo from '../../Assets/targetLogo.png';
import newYorkLogo from '../../Assets/newYorkLogo.png';
function Brands() {
  return (
    <div className={classes.brand__container}>
      <div className={classes.brand__main}>
        <h4>TRUSTED BY COMPANIES ALL OVER THE WORLD</h4>
        <div className={classes.logo}>
          <img src={airbnbLogo} />
          <img src={nasaLogo} />
          <img src={uberLogo} />
          <img src={targetLogo} />
          <img src={newYorkLogo} />
          <img src={etsyLogo} />
        </div>
      </div>
    </div>
  )
}

export default Brands
