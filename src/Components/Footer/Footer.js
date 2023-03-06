import React from 'react'
import classes from './Footer.module.css';
function Footer() {
  return (
    <div className={classes.footer__container}>
      <div className={classes.first}>
        <div>WHY SLACK?</div>
        <span>Slack Vs. Email </span>
        <span>Channels </span>
        <span>Engagement </span>
        <span>Scale </span>
        <span>watch the demo </span>
      </div>
      <div className={classes.second}>
        <div>PRODUCT</div>
        <span>Features</span>
        <span>Integrations</span>
        <span>Enterprise</span>
        <span>Solutions</span>
      </div>
      <div className={classes.third}>
        <div>PRICING</div>
        <span>Plans</span>
        <span>Paid vs. Free</span>
      </div>
      <div className={classes.fourth}>
        <div>RESOURCES</div>
        <span>Partners</span>
        <span>Developers</span>
        <span>Community</span>
        <span>Apps</span>
        <span>Blog</span>
        <span>Help Center</span>
        <span>Events</span>
      </div>
      <div className={classes.fifth}>
        <div>COMPANY</div>
        <span>About Us</span>
        <span>Leadership</span>
        <span>News</span>
        <span>Media Kit</span>
        <span>Careers</span>
      </div>
    </div>
  )
}

export default Footer
