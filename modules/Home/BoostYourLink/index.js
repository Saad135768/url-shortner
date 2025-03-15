import React from 'react'
import { Container } from '@material-ui/core'
import Button from '../../../common/PrimaryButton'
import useStyles from './style'

const BoostYourLink = () => {
    const classes = useStyles()
    return (
        <section className={classes.section}>
            <div className={classes.overlay}></div>
        <Container maxWidth="lg">
            <div className={classes.wrapper}>
                <p className={classes.p}>Boost your links today</p>
                <Button marginbottom={40} width={200}>Get Started</Button>
            </div>
        </Container>
        </section>
    )
}

export default BoostYourLink
