import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(() => ({
    MobileMenuHolder: {
        position: 'absolute',
        zIndex: '99',
        top: 58,
        right: 70,
        
      ' & .bm-burger-button': {
        position: 'absolute',
        width: '28px',
        height: '26px',
        left:  '17px',
        right: '17px',
        top: 0,
        bottom: 0,
        margin: 'auto',
      },
      ' & span.bm-burger-bars': {
        height: '8% !important',
      },
      ' & .bm-burger-bars': {
        background: '#BBBABA',
      },
      ' & .bm-burger-bars-hover': {
        background: '#BBBABA',
      },

   
      ' & .bm-menu-wrap': {
        position: 'fixed',
        top: 100,
        right: '25% !important',
        width: '80% !important',
        maxWidth: 300,
        '@media (max-width:450px)': {
         right: '8% !important'
        },
      },
      


      ' & .bm-menu ': {
        background: 'hsl(257, 27%, 26%)',
        padding: '25px 0',
        fontSize: '1.15em',
        height: 'auto !important',
        borderRadius: 15,
        '& ul': {
          padding: '0 10px 15px 10px',
          margin: '20px 0',
          display: 'unset',
          '@media (max-width:300px)': {
           fontSize: 15,
          },
        },
      },
     
      ' & .bm-overlay': {
        display: 'none !important',

      },
      ' & li': {
        color: '#fff',
        textAlign: 'center',
        margin: '30px 0 0',
      },

      '& hr': {
        width: '80%',
        borderColor: 'dimgray',
        borderTopWidth: 'thin',
      },

      '@media (min-width:768px)': {
        display: 'none',
      },
      '@media (max-width:200px)': {
        display: 'none',
      },
    },
    
  })
)

export default useStyles
