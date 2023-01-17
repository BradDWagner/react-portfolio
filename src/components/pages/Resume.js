import React from 'react';
import '../styles/Resume.css';

export default function Resume() {
    return (
        <div className='resume-page'>
            <h1>Resume</h1>
            <p>
                <a href='https://docs.google.com/document/d/1Fpl7_CsdjkJnQJwF9seU-q6aBrzgcNXssimE5t8oypU/edit?usp=sharing'>Download my resume</a>
            </p>
            <div className='resume-container'>
                <div>
                <h2>Front-end Proficiencies</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>responsive design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
                </div>
                <div>
                    <h2>Back-end Proficiencies</h2>
                    <ul>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDb, Mongoose</li>
                        <li>Rest</li>
                        <li>GraphQL</li>
                    </ul>
                </div>

            </div>

        </div>
    );
}
