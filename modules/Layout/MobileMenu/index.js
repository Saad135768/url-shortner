import React, { useState, useEffect } from 'react'
import { Container } from '@material-ui/core'
import { push as Menu1 } from 'react-burger-menu'
import Button from '../../../common/PrimaryButton'
import CloseIcon from '@material-ui/icons/Close'
import { useRouter } from 'next/router'
import useStyles from './style'

const MobileMenu = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState()

  useEffect(() => {
    setIsOpen(false)
  }, [router.query])

  const classes = useStyles()
  return (
    <div>
    <Container maxWidth="lg">
      <div className={classes.MobileMenuHolder}>
      <Menu1
          // customCrossIcon={<CloseIcon />}
          isOpen={!!isOpen}
          right={true}
          burgerButtonClassName={'btn-class'}
          onStateChange={e => {
            setIsOpen(e.isOpen)
          }}
        >
            <ul className={classes.ul}>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
                <li><hr /></li>
                <li>Login</li>
              <li> 
                <Button 
                  width={'85%'} 
                  paddingtop={10} 
                  paddingbottom={10}
                >
                  Sign up
                </Button> 
              </li>
              </ul>


          </Menu1>
      </div>
    </Container>
    </div>
  )
}

export default MobileMenu
