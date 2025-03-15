import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(() => ({
  div: {
      backgroundColor: '#fff',
      height: 250,
      width: '35%',
      maxWidth: 350,
      minWidth: 275,
      position: 'relative',
      padding: '20px 30px',
      zIndex: 2,
      '@media(max-width: 1100px)': {
        margin: '50px 0',
       },
       '@media(max-width: 280px)': {
        minWidth: 200
      }
  },
  span: {
    background: 'hsl(257, 27%, 26%)',
    height: 80,
    width: 80,
    position: 'absolute',
    textAlign: 'center',
    paddingTop: 18,
    borderRadius: '50%',
    top: -40,
    '& img': {
      width: 35
    },

    '@media(max-width: 767px)': {
     right: '35%',
    },
    '@media(max-width: 280px)': {
     height: 60,
     width: 60,
     '& img': {
      width: 25
    },
    },
   
  },
  h3: {
    marginTop: 40,
    '@media(max-width: 767px)': {
      fontSize: 16,
      textAlign: 'center',
    },
    '@media(max-width: 280px)': {
      fontSize: 12,
      marginTop:15
    }
  },
  p: {
    fontSize: 14,
    fontWeight: 500,
    color: 'hsl(257, 7%, 63%)',
    '@media(max-width: 767px)': {
      fontSize: 13,
      textAlign: 'center',
    },
    '@media(max-width: 280px)': {
      fontSize: 11,
    }
    
  }
}))

export default useStyles