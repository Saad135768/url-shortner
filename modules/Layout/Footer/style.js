import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
footer: {
  backgroundColor: 'hsl(260, 8%, 14%)',
  color: 'white',
  padding: '75px 0 40px 0',
  fontFamily: "'Poppins', sans-serif",
  '@media(max-width: 959px)': {
    textAlign: 'center',
  }
},
logo: {
  fontSize: 28,
  fontWeight: 700,
  cursor: 'pointer',
  '@media(max-width: 959px)': {
    fontSize: 35,
    display: 'inline-block',
    margin: '10px 0 5px 0',
  }
},

span: {
  fontWeight: 500,
  cursor: 'pointer',
  '@media(max-width: 959px)': {
    display: 'inline-block',
    margin: '10px 0 5px 0',
  }
},

ul: {
  padding: 0,
  '& li': {
    color: 'white',
    color: 'hsl(257, 7%, 63%)',
    margin: '5px 0',
    fontWeight: 500,
    cursor: 'pointer',
    '&:hover': {
      color: 'hsl(180, 66%, 49%)',
    },
  }
},

ulIcons: {
  display: 'flex',
  justifyContent: 'space-between',
  padding: 0,
  cursor: 'pointer',
  '@media(max-width: 959px)': {
   justifyContent: 'center',
   '& li': {
     margin: '0 10px',
    },
  },
'& li': {
  '&:hover': {
        '& svg path': {
      fill: 'hsl(180, 66%, 49%) !important'
    }
  }
},
},

twitter: {
  marginTop: '4px !important'
}
}))

export default useStyles
