import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(() => ({
    header: {
        fontFamily: 'Poppins',
        marginBottom: 150,
        '& .MuiGrid-container':{
            '@media(max-width: 959px)': {
                flexDirection: 'column-reverse'
            },
        },
        '@media(max-width: 959px)': {
            marginBottom: 40,
        },
    },
    wrapper: {
        marginBottom: 80,
        '@media(max-width: 959px)': {
         textAlign: 'center',
         marginBottom: 125,
        }
    },
    h1: {
        fontSize: '7.5vh',
        fontWeight: 700,
        fontFamily: 'Poppins',
        marginTop: 80,
        marginBottom: 0,
        lineHeight: 1.1,
        '@media(max-width: 959px)': {
           fontSize: '5vh',
           marginTop: 10,
        },
        '@media(max-width: 360px)': {
           fontSize: '3.5vh',
        }
    },
    p: {
        fontSize: 18,
        fontWeight: 500,
        fontFamily: 'Poppins',
        width: 450,
        color: 'hsl(257, 7%, 63%)',
        wordSpacing: .4,
        '@media(max-width: 959px)': {
            width: 'auto',
         }
    },

    img: {
        '@media(max-width: 959px)': {
            width: '100%',
            marginLeft: '10%',
            maxWidth: 700,
         },
        '@media(max-width: 375px)': {
            width: 440,
            height: 360,
            marginLeft: 10
        }
    }
}))

export default useStyles