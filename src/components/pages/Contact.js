import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';
import { validateEmail } from '../utils/validateEmail';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'Name') {
            setName(inputValue);
        } else if (inputType === 'Email') {
            setEmail(inputValue);
        } else if (inputType === 'Message') {
            setMessage(inputValue);
        }
    };

    const handleblur = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if ((inputType === 'Name' || inputType === 'Message') && inputValue.length < 1) {
            setErrorMessage(`${inputType} is required`);
            return;
        } else if (inputType === 'Email' && !validateEmail(inputValue)) {
            setErrorMessage('Please enter a valid email');
            return;
        } else {
            setErrorMessage('');
        }
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setErrorMessage('Please fill out all fields')
            return;
        }else if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email')
            return;
        } else {
            setErrorMessage('Thank you for your message!')
            setName('');
            setEmail('')
            setMessage('');
        }

        emailjs.sendForm('service_fmbeois', 'contact_form1990', form.current, 'pGOB5D2K56jXb8wWH')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        })
    }

    return (
        <div className='contact-page'>
            <h1>Contact</h1>
            <form className='form' ref={form}>
                <label htmlFor='Name'>Name:</label>
                <input
                    value={name}
                    name='Name'
                    onChange={handleInputChange}
                    onBlur={handleblur}
                    type='text'
                />
                <label htmlFor='Email'>Email address:</label>
                <input
                    value={email}
                    name='Email'
                    onChange={handleInputChange}
                    onBlur={handleblur}
                    type='email'
                />
                <label htmlFor='Message'>Message:</label>
                <textarea
                    value={message}
                    name='Message'
                    onChange={handleInputChange}
                    onBlur={handleblur}
                />

                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}

                <button type='button' onClick={sendEmail}>
                    Submit
                </button>
            </form>
        </div>
    );
}