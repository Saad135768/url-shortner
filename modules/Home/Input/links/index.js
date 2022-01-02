import React, { useState, useEffect, useRef } from 'react'
import useStyles from './style'
import Button from '../../../../common/PrimaryButton'

const Links = ({ oldLink, newLink }) => {
    const [isCopied, setIsCopied] = useState()

    const textRef = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            setIsCopied(false)
        }, 10000)
    }, [isCopied])

    const copyToClipboard = () => {
        textRef.current.select()
        document.execCommand('copy')
        setIsCopied(true)
      }

    const classes = useStyles()
    return (
        <div className={classes.div}>
            <p className={classes.oldLinks}> {oldLink} </p>
            <span className={classes.span}>
                <input ref={textRef} className={classes.newLinks} value={newLink} onChange={() => null} />
                <Button
                    onClick={copyToClipboard}
                    borderradius={5}
                    width={110}
                    paddingbottom={8}
                    paddingtop={8}
                    paddingleft={0}
                    paddingright={0}
                    fontSize={15}
                    background={isCopied && 'hsl(257, 27%, 26%)'}
                >
                    { isCopied ? 'Copied!' : 'Copy' }
                </Button>
            </span>
        </div>
    )
}

export default Links
