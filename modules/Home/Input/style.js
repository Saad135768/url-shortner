import makeStyles from '@material-ui/core/styles/makeStyles'
import desktopImg from '../../../public/images/bg-shorten-desktop.svg'
import mobileImg from '../../../public/images/bg-shorten-mobile.svg'

const useStyles = makeStyles(() => ({
  section: {
    padding: '50px 25px 0',
    borderRadius: 10,
    '& .MuiContainer-maxWidthLg': {
      position: 'relative',
    },
    '@media (max-width:500px)': {
      padding: 0
    }
  },
  overlay: {
    width: '90%',
    position: 'absolute',
    background: 'hsl(257, 27%, 26%)',
    top: 0,
    height: '100%',
    zIndex: 1,
    borderRadius: 15
  },
  errorMsg: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontStyle: 'italic',
    color: 'hsl(0, 87%, 67%)',
    fontSize: 15,
    position: 'absolute',
    bottom: 8,
    left: '5%',
    '@media (max-width:800px)': {
      fontSize: 13,
      left: '8%',
      bottom: '31%',
    }
  },
  
  input: {
    width: '75%',
    padding: 12,
    borderRadius: 10,
    border: 0,
    textIndent: 8,
    outline: 0,
    fontWeight: 500,
    fontSize: 18,
    fontFamily: 'Poppins',
    color: 'hsl(257, 7%, 63%)',
    '&::placeholder': {
      fontSize: 16,
      color: 'hsl(257, 7%, 63%)',
    },
    '@media (max-width:800px)': {
      marginBottom: 30,
      borderRadius: 5,
      width: '87%',
      '&::placeholder': {
        fontWeight: 500,
        fontSize: 14
      },
    },
  },

  div: {
    backgroundImage: `url(${desktopImg})`,
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '50px 0',
    marginTop: -130,
    zIndex: 3,
    position: 'relative',
    backgroundRepeat: 'round',
    borderRadius: 20,
    '@media(max-width:800px)': {
      // backgroundImage: `url(${mobileImg})`,
      // backgroundRepeat: 'no-repeat',
      // backgroundSize: 'contain',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: 25,
    },
    '& button': {
      '@media (max-width: 500px) and (min-width: 300px)': {
        width: '87% !important'
      }
    },

    '& .error': {
      border: '2px solid hsl(0, 87%, 67%)',
      '&::placeholder': {
        fontWeight: 500,
        fontSize: 18,
        color: 'hsl(257, 7%, 63%)',
        opacity: '0.6',
        fontFamily: 'Poppins',
        wordSpacing: 2
      },
    }
},
container: {
  maxHeight: 421,
  overflowY: 'auto',
  marginTop: 20,
  '&::-webkit-scrollbar': {
    width: 5,
    backgroundColor: 'lightgray',
    borderRadius: 30,
    cursor: 'pointer',
},
},
  linksWrapper: {
    margin: '25px 0'
  }
}))

export default useStyles