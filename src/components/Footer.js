import React from 'react'
import gitHub from './images/github-mark-white.png';
import linkedIn from './images/linkedIn-white.png';
import stack from './images/stack-overflow-white.png';

export default function Footer() {
    return (
        <div className='footer'>
            <a href='https://github.com/BradDWagner'>
                <img src={gitHub} />
            </a>
            <a href='https://www.linkedin.com/in/braddwagner/'>
                <img src={linkedIn} />
            </a>
            <a href='https://stackoverflow.com/'>
                <img src={stack} />
            </a>
        </div>
    )
}