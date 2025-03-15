import React from 'react'
import Card from './cards'
import { Container, Grid } from '@material-ui/core'
import data from './staticData'
import useStyles from './style'

const Statistics = () => {
    const classes = useStyles()
    return (
        <section className={classes.section}>
          <Container maxWidth="lg">
            <div className={classes.div}>
              <h2 className={classes.h2}> Advanced Statistics </h2>
              <p className={classes.p}>Track how your links are performing across the web with <span > our advanced statistics dashboard.</span></p>
            </div>

            <div className={classes.cardsWrapper}>
                {data.map(({ img, headline, content }, index) => <Card key={headline} img={img} headline={headline} content={content} index={index}/> 
                 )}
            </div>
          </Container>  
        </section>
    )
}

export default Statistics
