import React from 'react'
import useStyles from './style'

const Card = ({ img, headline, content, index }) => {
    const classes = useStyles()
    return (
    <div className={`${classes.div} div-${index}`}>
        <span className={classes.span}>
            <img src={img} alt={headline}/>
        </span>
        <h3 className={classes.h3}>{headline}</h3>
        <p className={classes.p}>{content}</p>
    </div>
    )
}

export default Card
