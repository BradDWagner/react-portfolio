import React from 'react';
import '../styles/About.css';
import headshot from '../images/headshot.png'

export default function About() {
  return (
    <div className='about-page'>
        <h1>About Page</h1>

        <p>
        <img id="headshot" src={headshot} alt="a portrait of Brad Wagner, standing in front of a cherry tree."></img>
            Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
            Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
            mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
            lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
            imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
            in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
            <br></br>
            Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
            Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
            mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
            lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
            imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
            in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
            
        </p>
    </div>
  );
}
