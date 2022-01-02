import React, { useState, useEffect } from 'react'
import Button from '../../../common/PrimaryButton'
import useStyles from './style'
import { Container } from '@material-ui/core'
import Links from './links'
import axios from 'axios'

const Input = () => {
    const [inputValue, setInputValue] = useState('')
    const [validateOnInput, setValidateOnInput] = useState()
    const [totalLinks, setTotalLinks] = useState([])
    
    useEffect(() => {
        const getLocalStorage = localStorage.getItem('savedlinks')
        try{
            if(!getLocalStorage) return null
            setTotalLinks(JSON.parse(getLocalStorage))
        }catch(error){
            console.log({ error })
        }
    }, [])

    const shortenTheLink = async () => {
        try{
            const { data: { result } } = await axios.post(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
            const oldLink = result?.original_link
            const newLink = result?.full_short_link
            const getLocalStorage = localStorage.getItem('savedlinks')

            if(getLocalStorage) {
                const data = [...JSON.parse(getLocalStorage), { oldLink, newLink  }]
                localStorage.setItem('savedlinks', JSON.stringify(data))
                const local = localStorage.getItem('savedlinks')
                setTotalLinks(JSON.parse(local))
            }else{
                localStorage.setItem('savedlinks', JSON.stringify([{ oldLink, newLink }]))
                setTotalLinks([{ oldLink, newLink }])
            }
            setInputValue('')

        }catch(error){
            if(error?.response?.data?.error_code.toString() === '2') return setValidateOnInput('Invalid URL!')
            if(error?.response?.data?.error_code.toString() === '4') return setValidateOnInput('This Ip address has violated our terms of service!')
            if(error?.response?.data?.error_code.toString() === '5') return setValidateOnInput('shortcode is already taken/in use!')
            setValidateOnInput(error?.response?.data?.error)
            console.log({ error })
        }
}

    const handleClick = (e) => {
        e.preventDefault()
        if(!inputValue.trim()) return setValidateOnInput('Please add a link')
        setValidateOnInput(false)
        shortenTheLink()
    }
    const classes = useStyles()
    return (
        <form>
        <section className={classes.section}>
            <Container maxWidth="lg">
                <div className={classes.overlay}></div>
                <div className={classes.div}>
                    <input 
                        className={`${classes.input} ${validateOnInput ? 'error' : undefined} `} 
                        placeholder='Shorten a link here...' 
                        value={inputValue} 
                        onChange={(e) => setInputValue(e.target.value)} 
                    />
                    {validateOnInput && <p className={classes.errorMsg}>{validateOnInput}</p>}
                    <Button 
                        borderradius={10} 
                        width={170}
                        onClick={handleClick}
                        type="submit"
                    >
                        Shorten it!
                    </Button>
                </div>

            </Container>
        </section>
        <Container maxWidth="lg" className={classes.container}>
                <div className={classes.linksWrapper}>
                    {totalLinks?.map(({ oldLink, newLink}) => <Links key={newLink} oldLink={oldLink} newLink={newLink} />) }
                </div>
        </Container>
    </form>
    )
}

export default Input
