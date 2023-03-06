import React from 'react'
import classes from './VideoTextComponent.module.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function VideoTextComponent(props) {
  const leftRight = props.left===true?'left':'right';
  return (
    <div className={classes['videoTextComponent__container__'+leftRight]}>
      <div className={classes['video__container']}>
        <video src={props.video} type="video/webm" muted loop autoPlay />
      </div>
      <div className={classes['text__container']}>
        <div className={classes.videoTextComponent__heading}>{props.heading}</div>
        <div className={classes.videoTextComponent__text}>{props.text}</div>
        <div className={classes.learnMore}>{props.learnMore} <ArrowForwardIcon/> </div>
      </div>
    </div>
  )
}

export default VideoTextComponent
