import React from 'react'
import classes from './Card.module.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function Card(props) {
  return (
    <div className={classes.card__container}>
        <div className={classes.image}> <img src={props.image}/> </div>
        <div className={classes.text}>
            <div className={classes.small__description}>{props.smallDescription}</div>
            <div className={classes.description}> {props.description} </div>
            <div className={classes.next}> <p>{props.next}</p> <ArrowForwardIcon/> </div>
        </div>

    </div>
  )
}

export default Card
