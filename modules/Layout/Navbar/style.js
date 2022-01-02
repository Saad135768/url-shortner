import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  nav: {
    marginTop: 35,
    width: '100%',
    '& .login': {
      marginTop: '8px !important'
    }
  },
  logo: {
    fontSize: 28,
    fontWeight: 700,
    fontFamily: 'Poppins',
    verticalAlign: 'middle',
    cursor: 'pointer',
    '@media (max-width: 375px)': {
      marginLeft: 33,
    }
  },
  ul: {
    display: 'inline-flex',
    marginTop: 0,
    paddingTop: 0,
    '@media(max-width: 767px)': {
      display: 'none',
    },
    '& li': {
      margin: '0 15px',
      color: 'hsl(257, 7%, 63%)',
      fontWeight: 500,
      cursor: 'pointer',
      fontSize: 15,
      '&:hover': {
        color: 'hsl(260, 8%, 14%)',
      },
    }
  },
 
}))

export default useStyles
