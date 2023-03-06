import React from 'react'
import classes from './MiddleComponent.module.css';
function MiddleComponent() {
  return (
    <div className={classes['middleComponent__outer__container']}>
        <div className={classes['middleComponent__container']}>
          <div className={classes['middleComponent__mainText']}>
            <div className={classes['middleComponent__heading']}>
            Teams large and small rely on Slack
            </div>
            <div className={classes['middleComponent__text']}>
            Slack securely scales up to support collaboration at the world’s biggest companies.
            </div>
          </div>
          <div className={classes['middleComponent__buttons']}>
            <div className={classes["PurpleBtn"]}>
              MEET SLACK FOR ENTERPRISE
            </div>
            <div className={classes['whiteBtn']}>
              TALK TO SALES
            </div>
          </div>
        </div>
        <div className={classes['middleComponent__figures']}>
          <div className={classes['figure1']}>
            <div className={classes['numberPercent']}>
              85%
            </div>
            <p>of users say Slack has improved communication*</p>
          </div>
          <div className={classes['figure1']}>
            <div className={classes['numberPercent']}>
              86%
            </div>
            <p>feel their ability to work remotely has improved*</p>
          </div>
          <div className={classes['figure1']}>
            <div className={classes['numberPercent']}>
              88%
            </div>
            <p>feel more connected to their teams*</p>
          </div>
        </div>
    </div>
    
  )
}

export default MiddleComponent
