import { ProjectsInterface, ProjectsWithoutStack } from "./interface" 

export const Featured: Array<ProjectsInterface> = [
    {
        status:true,
        category: "Personal Project", 
        name: "Savelink 📌", 
        details: "A web app & PWA to safely store your favourite/important links from all across the web in one place, for ease of access and categorising. Saved links can be grouped, shared in-app, bookmarked and deleted.",
        id:1,
        gitlink : new URL("https://github.com/adedotxn/savelink"),
        livelink : new URL("http://savelink.vercel.app/"),
        stack : ["TypeScript","Next.js", "MongoDB"]
    },
    {
        status:false,
        category: "Personal Project", 
        name: "Buildd 🛠", 
        details: "A web app for people with ideas to put out their ideas, investors to look through ideas they might like to invest in and people looking to collaborate on ideas to reach out and connect.",
        id:1.5,
        livelink : new URL("http://savelink.vercel.app/"),
        stack : ["TypeScript","Next.js","SCSS","MongoDB"]
    },
    {
        status:true,
        category : "Blockgames Collaboration", 
        name : "Metafiles", 
        details : "A decentralized application for social file sharing and file storage on the blockchain. Worked on this project with a team at a blockchain training program for developers",
        id:1,
        gitlink : new URL("https://github.com/adedotxn/Decentralized-Library"),
        livelink : new URL("https://metafiles.netlify.app"),
        stack : ["React.js", "Solidity", "Ipfs", "Chakra UI"]

    },
    {
        status:true,
        category: "FrontendMentor Challenge",
        name : "rest-countries",
        details: "web app to get information about countries, data fetched from rest apis, built with react",
        id : 4,
        gitlink : new URL("https://github.com/adedotxn/REST-Countries-web-app"),
        livelink : new URL("https://rest-countries-web-appp.vercel.app/"),
        stack : ["Next.js"]
    },
]


export const ArchiveProjects : Array<ProjectsWithoutStack> = [
    {
        status:true,
        name : "data-structures-and-algorithms",
        details: "my notes on data structures and algorithms from freecodecamp and other sources",
        id : 1,
        gitlink : new URL("https://github.com/adedotxn/data-structures-and-algorithms"),
    },
    {
        status:true,
        name : "rest-countries",
        details: "web app to get information about countries, data fetched from rest apis, built with react",
        id : 2,
        gitlink : new URL("https://github.com/adedotxn/REST-Countries-web-app"),
        livelink : new URL("https://rest-countries-web-appp.vercel.app/")
    },
    {
        status:true,
        name : 'space-tourism website',
        details : "a multipage website for an hypothetical space tourism company",
        id: 3,
        gitlink : new URL('https://github.com/adedotxn/space-tourism'),
        livelink : new URL('http://space-tourism-phyf3.vercel.app/') 
    },
    {
        status:true,
        name : "rock-paper-scissors game",
        details: "",
        id : 4,
        gitlink : new URL("https://github.com/adedotxn/rock-paper-scissors-game-using-vanilla-js"),
        livelink : new URL("https://rock-paper-scissors-game-using-vanilla-js.vercel.app/")
    },
]
