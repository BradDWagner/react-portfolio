import React from 'react';
import '../styles/About.css';
import headshot from '../images/headshot.png'

export default function About() {
  return (
    <div className='about-page'>
        <h1>About Page</h1>

        <p>
        <img id="headshot" src={headshot} alt="a portrait of Brad Wagner, standing in front of a cherry tree."></img>
        I am a Back End focused Full Stack Web Developer with a passion for creating databases and the flow of data to and from the client. I am driven by a love of learning and taking on new challenges and after becoming entranced by coding while studying SQL, HTML, CSS, and JavaScript on my own, I decided to fully round out my knowledge and earned a certificate in full stack development from University of Washington where I expanded my knowledge into Express, Node.js, MongoDB, GraphQL, React, and more.
        <br></br> 
        <br></br>
        Combining these skills with skills in problem solving, organization, cross channel communication, and leadership developed through years working in merchandising I strive to create robust, easy to use web applications to facilitate the transfer of information. I am especially interested in bringing these skills to assist in education and ecological efforts, helping to understand and protect the world around us and developing the people who inhabit it. 
            
        </p>
    </div>
  );
}
