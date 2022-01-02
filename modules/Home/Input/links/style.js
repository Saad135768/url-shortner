import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(() => ({
  div: {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 30px',
  borderRadius: 7,
  backgroundColor: '#fff',
  fontFamily: 'Poppins',
  margin: '20px 0',
  '@media(max-width: 1100px)': {
    marginLeft: 25,
    width: '93.5%',
    borderRadius: 10,
  },
  '@media(max-width: 800px)': {
    flexDirection: 'column',
    padding: '10px 20px'
  },

  '@media(max-width: 500px)': {
    marginLeft: 0,
    width: 'auto',
  },

  '& button': {
    '@media(max-width: 500px)': {
      width: '100% !important',
      padding: '20px 10px',
      marginBottom: 15
    },
  },
},

span: {
    display: 'flex',
    alignItems: 'center',
    '@media(max-width: 800px)': {
        flexDirection: 'column',
        alignItems: 'flex-start'
      },
},
oldLinks: {
    fontSize: '1rem',
    fontWeight: 600,
    wordBreak: 'break-word',
    '@media(max-width: 800px)': {
        fontSize: 15,
        marginBottom: 15,
        paddingBottom: 15,
        borderBottom: '1px solid lightgrey'
      },
    '@media(max-width: 400px)': {
        fontSize: '0.8rem',
      },
},
newLinks: {
    display: 'inline-block',
    color: 'hsl(180, 66%, 49%)',
    fontSize: 18,
    fontWeight: 500,
    resize: 'none',
    border: 0,
    outline: 0,
    textAlign: 'center',
    backgroundColor: 'transparent',
    '@media(min-width: 1350px)': {
      width: 500,
      marginRight: 20,
      textAlign: 'right',
    },
    '@media(max-width: 800px)': {
     textAlign: 'left',
     marginBottom: 20
    },
    '@media(max-width: 400px)': {
      fontSize: '.8rem',
    },

}
}))

export default useStyles