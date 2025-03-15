import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(() => ({
  section: {
      padding: '100px 0 60px 0',
      fontFamily: 'Poppins',
      '@media(max-width: 767px)': {
        padding: '50px 0 40px 0',
      },
      '& .div-1':{
        marginTop: 40
      },
      '& .div-2':{
        marginTop: 80
      },
  },
  div: {
      textAlign: 'center',
      marginBottom: 150,
      '@media(max-width: 767px)': {
        marginBottom: 50,
      },
      
  },
  h2: {
      fontSize: '4vh',
      margin: 0,
      '@media(max-width: 767px)': {
        fontSize: '3.5vh',
      },
   
  },
  p: {
    fontSize: 18,
    fontWeight: 500,
    color: 'hsl(257, 7%, 63%)',
    '@media(max-width: 767px)': {
      fontSize: 15,
    },
    '& span': { display: 'block' },
    '@media(max-width: 500px)': {
      '& span': { display: 'inline' },
    },
  },
  cardsWrapper:{
    display: 'flex',
    justifyContent: 'space-evenly',
    position: 'relative',
    '@media(max-width: 1100px)': {
      justifyContent: 'space-between',
      flexDirection: 'column',
      alignItems: 'center',
    },
   
    '&::after': {
      content: "''",
      position: 'absolute',
      height: 8,
      width: 750,
      top: 130,
      background: 'hsl(180, 66%, 49%)',
      borderRadius: 20,
      zIndex: 0,
      '@media(max-width: 1100px)':{
        transform: 'rotate(90deg)',
        top: '59%',
      },
      '@media(max-width: 375px)':{
        top: '55%',
      },
      '@media(max-width: 150px)':{
        top: '59%',
      }
    }
  }
}))

export default useStyles