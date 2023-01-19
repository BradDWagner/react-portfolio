import React from 'react';
import '../styles/Portfolio.css'
import Project from './Project.js'
import {projects} from '../utils/projectsData.js'


export default function Portfolio() {
    return (
      <section className="project-page">
  
              <h1>
                  Work
              </h1>
              <div className='work-container'>
                {projects.map((project) => {
                    return (<Project {...project} />)
                })}
              </div>

              </section>
  );
}