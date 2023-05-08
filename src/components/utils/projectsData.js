import apple from '../images/apple-blossoms.png';
import dead from '../images/dead-tree.png'
import field from '../images/field.png'
import pond from '../images/pond.png'
import sky from '../images/sky.png'
import cherry from '../images/cherry-blossoms.png'

export const projects = [
    {
        img: cherry,
        alt: "A cherry tree with pink blossoms",
        url: "https://peaceful-badlands-59717.herokuapp.com/",
        gitHub: "https://github.com/BradDWagner/uno-moss",
        title: "Uno Moss",
        tech: "Express/ MySQL/ Handlebars.js/ Node.js/ Group Project",
        desc: "A full stack application to record and share field notes and images"
    },
    {
        img: pond,
        alt: "A pond surrounded by cattails, reflecting a blue sky",
        url: "https://github.com/BradDWagner/grape-escape",
        gitHub: "https://whispering-coast-13412.herokuapp.com/",
        title: "House of Pinot",
        tech: "MongoDB/ React/ GraphQL/ Express/ Stripe/ JWT/ Group Project",
        desc: "E-commerce site for a winery allowing users to browse, filter, review, and purchase wines"
    }, 
    {
        img: apple,
        alt: "A tree with white apple blossoms",
        url: "https://young-coast-09075.herokuapp.com/",
        gitHub: "https://github.com/BradDWagner/text-editor",
        title: "Just Another Text Editor",
        tech: "PWA/ data persistance/ installable/ service workers",
        desc: "An in browser text editor able to operate, store, and retrive data even while offline"
    },
    {
        img: sky,
        alt: "A dusky sky with a few whispy clouds",
        url: "https://braddwagner.github.io/Drinking-around/",
        gitHub: "https://github.com/BradDWagner/Drinking-around",
        title: "Drinking Around",
        tech: "Web APIs/ JavaScript/ Group Project",
        desc: "An app to find local breweries, and start conversations"
    },
    {
        img: dead,
        alt: "a gnarly dead tree",
        url:"https://braddwagner.github.io/weather-dashboard/",
        gitHub: "https://github.com/BradDWagner/weather-dashboard",
        title: "Weather Dashboard",
        tech: "jQuery/ Bootstrap/ OpenWeather API",
        desc: "A weather dashboard that lets users search for and save cities and view one and five day forcasts"
    },    
    {
        img: field,
        alt: "A field that has been burnt black",
        url: "https://braddwagner.github.io/work-day-scheduler/",
        gitHub: "https://github.com/BradDWagner/work-day-scheduler",
        title: "Workday Scheduler",
        tech: "jQuery/ Bootstrap/ Moment",
        desc: "A scheduling app allowing users to plan and keep track of events in their day"
    },

]

export default {
    projects,
}
