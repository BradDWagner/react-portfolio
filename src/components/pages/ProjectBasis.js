import React from 'react';
import '../styles/Project.css'
import apple from '../images/apple-blossoms.png';
import dead from '../images/dead-tree.png'
import field from '../images/field.png'
import pond from '../images/pond.png'
import sky from '../images/sky.png'


export default function Project() {
  return (
    <section className="project-page">

            <h1>
                Work
            </h1>


            <div className= "work-container">
                <div className="work-image-box">
                    <a href="https://peaceful-badlands-59717.herokuapp.com/">
                        <img src={apple} alt="A tree with white apple blossoms"/>
                    </a>
                    <div className="overlay">
                        <h3>Uno Moss</h3>
                        <p>A full stack application to record and share field notes and images</p>
                    </div>
                </div>

                <div className="work-image-box">
                    <a href="https://github.com/ybazail3/Drinking-around">
                        <img src={sky} alt="A dusky sky with a few whispy clouds"/>
                    </a>
                    <div className="overlay">
                        <h3>Drinking Around</h3>
                        <p>Team project - JavaScript/Web APIs</p>
                    </div>   
                </div>

                <div className="work-image-box">
                    <a href="https://github.com/BradDWagner/weather-dashboard">

                        <img src={dead} alt="A gnarly dead tree"/>
                    </a>
                    <div className="overlay">
                        <h3>Weather Dashboard</h3>
                        <p>jQuery/Bootstrap/OpenWeather API</p>
                    </div>
                </div>

                <div className="work-image-box">
                    <a href="https://github.com/BradDWagner/work-day-scheduler">
                        <img src={pond} alt="A pond surrounded by cattails, reflecting a blue sky"/>
                    </a>
                    <div className="overlay">
                        <h3>Workday Scheduler</h3>
                        <p>jQuery/Bootstrap/Moment</p>
                    </div>
                </div>

                <div className="work-image-box">
                    <a href="https://github.com/BradDWagner/coding-quiz">
                        <img src={field} alt="A field that has been burnt black"/>
                    </a>
                    <div className="overlay">
                        <h3>Coding Quiz</h3>
                        <p>JavaScript/CSS/HTML</p>
                    </div>
                </div>
              
            </div>
        </section>
  );
}
