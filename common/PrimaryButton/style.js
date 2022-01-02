import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => {
  return {
    BasicButton: {
      transition: 'all .5s ease',
      border: 0,
      fontFamily: 'Poppins',
      textAlign: 'center',
      lineHeight: '1.6rem',
      cursor: 'pointer',
      '&:hover': {
        opacity: 0.5
      },
      '&:disabled': {
        cursor: 'not-allowed',
      },

      '@media(max-width: 225px)': {
        width: '100px !important',
        padding:'5px 0 !important',
        fontSize: '13px !important',
      }
    },
  }
})

export default useStyles
