import makeStyles from '@material-ui/core/styles/makeStyles'
import desktopImg from '../../../public/images/bg-boost-desktop.svg'
import mobileImg from '../../../public/images/bg-boost-mobile.svg'

const useStyles = makeStyles(() => ({

  section: {
      backgroundImage: `url(${desktopImg})`,
      backgroundRepeat: 'round',
      position: 'relative',
      '@media (max-width: 768px)': {
        backgroundImage: `url(${mobileImg})`,
        padding: '20px 0'
      }
  },
  overlay: {
    width: '100%',
    position: 'absolute',
    background: 'hsl(257, 27%, 26%)',
    top: 0,
    height: '100%',
    zIndex: 1,
    opacity: .9
  },  
wrapper: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    marginTop: 60,
    padding: '20px 0',
    position: 'relative',
    zIndex: 2
},

p: {
    fontSize: '4vh',
    fontWeight: 700,
    marginBottom: 15,
    color: 'white',
    '@media (max-width: 768px)': {
       fontSize: '3vh',
      }
}
}))

export default useStyles