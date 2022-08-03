import { ProjectsInterface, ProjectsWithoutStack } from "./interface" 

export const Featured: Array<ProjectsInterface> = [
    {
        category: "Personal Project", 
        name: "Savelink 📌", 
        details: "A web app & PWA to safely store your favourite/important links from all across the web in one place, for ease of access and categorising. Saved links can be shared in-app, bookmarked and deleted.",
        id:1,
        gitlink : new URL("https://github.com/Phyf3/savelink"),
        livelink : new URL("http://savelink.vercel.app/"),
        stack : ["Next.js", "MongoDB", "React Query"]
    },
    {
        category : "Blockgames Collaboration", 
        name : "Metafiles", 
        details : "A decentralized application for social file sharing and file storage on the blockchain. Worked on this project with a team at a blockchain training program for developers",
        id:1,
        gitlink : new URL("https://github.com/Phyf3/Decentralized-Library"),
        livelink : new URL("https://metafiles.netlify.app"),
        stack : ["React.js", "Solidity", "Ipfs", "Chakra UI"]

    },
    {
        category: "FrontendMentor Challenge",
        name : "rest-countries",
        details: "web app to get information about countries, data fetched from rest apis, built with react",
        id : 4,
        gitlink : new URL("https://github.com/Phyf3/REST-Countries-web-app"),
        livelink : new URL("https://rest-countries-web-appp.vercel.app/"),
        stack : ["Next.js"]
    },
]


export const ArchiveProjects : Array<ProjectsWithoutStack> = [
    {
        name : "data-structures-and-algorithms",
        details: "my notes on data structures and algorithms from freecodecamp and other sources",
        id : 1,
        gitlink : new URL("https://github.com/Phyf3/data-structures-and-algorithms"),
    },
    {
        name : "rest-countries",
        details: "web app to get information about countries, data fetched from rest apis, built with react",
        id : 2,
        gitlink : new URL("https://github.com/Phyf3/REST-Countries-web-app"),
        livelink : new URL("https://rest-countries-web-appp.vercel.app/")
    },
    {
        name : 'space-tourism website',
        details : "a multipage website for an hypothetical space tourism company",
        id: 3,
        gitlink : new URL('https://github.com/Phyf3/space-tourism'),
        livelink : new URL('http://space-tourism-phyf3.vercel.app/') 
    },
    {
        name : "rock-paper-scissors game",
        details: "",
        id : 4,
        gitlink : new URL("https://github.com/Phyf3/rock-paper-scissors-game-using-vanilla-js"),
        livelink : new URL("https://rock-paper-scissors-game-using-vanilla-js.vercel.app/")
    },
]
