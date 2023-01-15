import React from 'react';
import gitHub from '../images/github-mark-white.png'

export default function Project(props) {
    return(
        <div className="work-image-box">

            <img src={props.img} alt={props.alt}/>
        
            <a href={props.url}>
                <div className="overlay">
                    <h3>{props.title}</h3>
                    <p>{props.desc}</p>
                </div>
            </a>
            <a href={props.gitHub}>
                <img className='gitHub' src={gitHub}/>
            </a>
        
        </div>
    )

}
