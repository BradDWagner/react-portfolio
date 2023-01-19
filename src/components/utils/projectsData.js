import apple from '../images/apple-blossoms.png';
import dead from '../images/dead-tree.png'
import field from '../images/field.png'
import pond from '../images/pond.png'
import sky from '../images/sky.png'
import cherry from '../images/cherry-blossoms.png'

export const projects = [
    {
        img: apple,
        alt: "A tree with white apple blossoms",
        url: "https://peaceful-badlands-59717.herokuapp.com/",
        gitHub: "https://github.com/BradDWagner/uno-moss",
        title: "Uno Moss",
        desc: "A full stack application to record and share field notes and images"
    },
    {
        img: cherry,
        alt: "A cherry tree with pink blossoms",
        url: "https://young-coast-09075.herokuapp.com/",
        gitHub: "https://github.com/BradDWagner/text-editor",
        title: "Just Another Text Editor",
        desc: "PWA/ data persistance/ installable"
    },
    {
        img: sky,
        alt: "A dusky sky with a few whispy clouds",
        url: "https://braddwagner.github.io/Drinking-around/",
        gitHub: "https://github.com/BradDWagner/Drinking-around",
        title: "Drinking Around",
        desc: "Team project - JavaScript/Web APIs"
    },
    {
        img: dead,
        alt: "a gnarly dead tree",
        url:"https://braddwagner.github.io/weather-dashboard/",
        gitHub: "https://github.com/BradDWagner/weather-dashboard",
        title: "Weather Dashboard",
        desc: "jQuery/ Bootstrap/ OpenWeather API",
    },
    {
        img: pond,
        alt: "A pond surrounded by cattails, reflecting a blue sky",
        url: "https://braddwagner.github.io/work-day-scheduler/",
        gitHub: "https://github.com/BradDWagner/work-day-scheduler",
        title: "Workday Scheduler",
        desc: "jQuery/ Bootstrap/ Moment",
    },    
    {
        img: field,
        alt: "A field that has been burnt black",
        url: "https://braddwagner.github.io/coding-quiz/",
        gitHub: "https://github.com/BradDWagner/coding-quiz",
        title: "Coding Quiz",
        desc: "JavaScript/ CSS/ HTML",
    },

]

export default {
    projects,
}
