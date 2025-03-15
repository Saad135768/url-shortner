import React from 'react'
import { Container, Grid } from '@material-ui/core'
import Image from 'next/image'
import Button from '../../../common/PrimaryButton'
import headerImg from "../../../public/images/illustration-working.svg"
import useStyles from './style'

const Header = () => {
    const classes = useStyles()
    return (
        <header className={classes.header}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid 
                        item 
                        xs={12} 
                        md={6} 
                        lg={7}
                        xl={8}
                    >
                        <div className={classes.wrapper}>
                        <h1 className={classes.h1}>More than just <br />shorter links</h1>
                        <p className={classes.p}>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                        <Button 
                            width={175} 
                            borderradius={40} 
                            paddingtop={12} 
                            paddingbottom={12}
                            paddingleft={12}
                            paddingright={12}
                            margintop={15}
                        >
                            Get Started
                        </Button>
                        </div>
                    </Grid>
                    
                    <Grid item xs={12} md={6} lg={5} xl={4}>
                        <img src={headerImg} layout={'responsive'} height={500} width={700} alt='' className={classes.img}/>
                    </Grid>
                </Grid>
            </Container>
        </header>
    )
}

export default Header
