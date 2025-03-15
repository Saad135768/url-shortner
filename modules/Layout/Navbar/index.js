import React from 'react'
import { Container, Grid } from '@material-ui/core'
import Button from '../../../common/PrimaryButton'
import useStyles from './style'

const Navbar = () => {

  const classes = useStyles()
  return (
    <nav className={classes.nav}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item md={9}> 
            <span className={classes.logo}>Shortly</span>
              <ul className={classes.ul}>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
              </ul>
            </Grid>

            <Grid item md={3}> 
            <ul className={`${classes.ul} login`}>
              <li>Login</li>
              <li> 
                <Button 
                  margintop={-9} 
                  paddingtop={5} 
                  paddingbottom={5} 
                  paddingleft={5} 
                  paddingright={5} 
                  width={100}
                  fontSize={15}
                >
                  Sign up
                </Button> 
              </li>
            </ul>
            </Grid>
          </Grid>
        </Container>
    </nav>
  )
}

export default Navbar
