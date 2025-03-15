/* eslint-disable react/display-name */
import { forwardRef } from 'react'
import useStyles from './style'

const PrimaryButton = forwardRef(({ children, ...props }, ref) => {
  const classes = useStyles()
  return (
      <button className={classes.BasicButton} ref={ref} {...props}
      style={{ 
        color: props?.color || 'white', 
        backgroundColor: props?.background || 'hsl(180, 66%, 49%)',
        borderRadius: props?.borderradius || 30,
        width: props?.width || 120,
        paddingTop: props?.paddingtop || 15,
        paddingBottom: props?.paddingbottom || 15,
        paddingRight: props?.paddingright || 15,
        paddingLeft: props?.paddingleft || 15,
        marginTop: props?.margintop || 0,
        marginBottom: props?.marginbottom || 0,
        marginRight: props?.marginright || 0,
        marginLeft: props?.marginleft || 0,
        fontSize: props?.fontSize || 18,
      }}
      >
        {children}
      </button>
  )
})
export default PrimaryButton
