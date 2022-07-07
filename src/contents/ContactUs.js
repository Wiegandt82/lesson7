import { Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';

export default function ContactUs() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [subject, setSubject] = useState()
    const [message, setMessage] = useState()

    const handleForm = (e) => {

        e.preventDefault();

        console.log("Form submitted: ")
        console.log({name, email, subject, message})
    }

  return (
    <Container maxWidth='lg' sx={{mt:12}}>
        <form noValidate onSubmit={handleForm} >
            <TextField 
                required 
                label='Full Name' 
                name='name' 
                fullWidth 
                onChange={(e) => {setName(e.target.value); console.log(name)}}
            ></TextField>

            <TextField 
                required 
                label='Email Address' 
                type='email' 
                name='email'
                fullWidth
                onChange={(e) => {setEmail(e.target.value)}}
                sx={{mt:1}}
                >
            </TextField>

            <TextField 
                label='Subject' 
                name='subject' 
                fullWidth
                sx={{mt:1}}
                onChange={(e) => {setSubject(e.target.value)}}
                >
            </TextField>

            <TextField 
                label='Message' 
                name='message' 
                fullWidth 
                multiline 
                rows={10}
                sx={{mt:1}}
                onChange={(e) => {setMessage(e.target.value)}}
                >
            </TextField>

            <Button type='submit'>Submit</Button>
            <Button type='reset'> Clear Form</Button>
        </form>
    </Container>
  )
}
