import { ProjectsInterface, ProjectsWithoutStack } from "./interface";

export const Featured: Array<ProjectsInterface> = [
  {
    tag: "Active",
    category: "Personal Project",
    name: "Savelink 📌",
    details:
      "A web app & PWA to safely store your favourite/important links from all across the web in one place, for ease of access and categorising. Saved links can be grouped, shared in-app, bookmarked and deleted.",
    id: 1,
    gitlink: new URL("https://github.com/adedotxn/savelink"),
    livelink: new URL("https://savelink.vercel.app/"),
    stack: ["TypeScript", "Next.js", "MongoDB"],
  },
  {
    tag: "Ongoing",
    category: "Personal Project",
    name: "tagBookmarks 🏷",
    details:
      "A web app for adding tags/labels to your twitter bookmarks and searching & filtering through them all. Currently not working because of the recent price put on the twitter api but the code is public ;)",
    id: 2,
    livelink: new URL("https://tagbookmarks.vercel.app"),
    stack: ["TypeScript", "Next.js", "Mantine UI", "MongoDB", "Redux"],
  },{

    tag: "Active",

    category: "Personal Project",

    name: "MovLibrary 🎬",

    details:

      "A web app for geeting information about movies — upcoming, popular, trending. Ill most likely add a movie recommendation feature using openAI much later",

    id: 3,

    livelink: new URL("https://movlibrary.vercel.app"),
    gitlink: new URL("https://github.com/adedotxn/movlibrary")

    stack: ["TypeScript", "Next.js"],

  },
  {
    tag: "Active",
    category: "Collaboration",
    name: "Realty",
    details:
      "Realty is a proof of concept solution for crypto-based real estate purchase/payments with stablecoins. It builds on the idea of having another option for asset listing, investment, saving and payments in the real-estate ecosystem aside fiat currency.",
    id: 4,
    gitlink: new URL("https://github.com/NestcoinHack/Realty"),
    livelink: new URL("https://realty-93t6v.spheron.app/#"),
    stack: ["Solidity", "React.js", "Chakra UI"],
  },
  {
    tag: "Active",
    category: "Blockgames Collaboration",
    name: "Metafiles 🗃",
    details:
      "A decentralized application for social file sharing and file storage on the blockchain. Worked on this project with a team at a blockchain training program for developers",
    id: 5,
    gitlink: new URL("https://github.com/adedotxn/Decentralized-Library"),
    livelink: new URL("https://metafiles.netlify.app"),
    stack: ["React.js", "Solidity", "Ipfs", "Chakra UI"],
  },

  {
    tag: "Active",
    category: "FrontendMentor Challenge",
    name: "rest-countries",
    details:
      "web app to get information about countries, data fetched from rest apis, built with react",
    id: 6,
    gitlink: new URL("https://github.com/adedotxn/REST-Countries-web-app"),
    livelink: new URL("https://rest-countries-web-appp.vercel.app/"),
    stack: ["React.js"],
  },
];

export const ArchiveProjects: Array<ProjectsWithoutStack> = [
  {
    tag: "Ongoing",
    name: "data-structures-and-algorithms",
    details:
      "my notes on data structures and algorithms from freecodecamp and other sources",
    id: 1,
    gitlink: new URL(
      "https://github.com/adedotxn/data-structures-and-algorithms"
    ),
  },
  {
    tag: "Active",
    name: "rest-countries",
    details:
      "web app to get information about countries, data fetched from rest apis, built with react",
    id: 2,
    gitlink: new URL("https://github.com/adedotxn/REST-Countries-web-app"),
    livelink: new URL("https://rest-countries-web-appp.vercel.app/"),
  },

  {
    tag: "Active",
    name: "rock-paper-scissors game",
    details: "",
    id: 4,
    gitlink: new URL(
      "https://github.com/adedotxn/rock-paper-scissors-game-using-vanilla-js"
    ),
    livelink: new URL(
      "https://rock-paper-scissors-game-using-vanilla-js.vercel.app/"
    ),
  },
];
