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
        try {

            const { data } = await axios.post("api/shorten", { url: inputValue })

            const oldLink = data?.original_link;
            const newLink = data?.full_short_link;
            const getLocalStorage = localStorage.getItem('savedlinks')

            if(getLocalStorage) {
                const savedData = [...JSON.parse(getLocalStorage), { oldLink, newLink }]
                localStorage.setItem('savedlinks', JSON.stringify(savedData))
                const local = localStorage.getItem('savedlinks')
                setTotalLinks(JSON.parse(local))
            }else{
                localStorage.setItem('savedlinks', JSON.stringify([{ oldLink, newLink }]))
                setTotalLinks([{ oldLink, newLink }])
            }
            setInputValue('')

        }catch(error){
            if(error?.response?.data?.error_code === '1') return setValidateOnInput('Please enter a URL')
            if(error?.response?.data?.error_code === '2') return setValidateOnInput('Invalid URL!')
            setValidateOnInput(error?.response?.data?.error || 'An error occurred')
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
