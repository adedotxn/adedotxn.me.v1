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
      "A web app for adding tags/labels to your twitter bookmarks and searching & filtering through them all. Currently working on the helper twitter bot",
    id: 2,
    livelink: new URL("https://tagbookmarks.vercel.app"),
    stack: ["TypeScript", "Next.js", "Mantine UI", "MongoDB", "Redux"],
  },
  {
    tag: "Active",
    category: "Blockgames Collaboration",
    name: "Metafiles 🗃",
    details:
      "A decentralized application for social file sharing and file storage on the blockchain. Worked on this project with a team at a blockchain training program for developers",
    id: 3,
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
    id: 4,
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
    name: "space-tourism website",
    details: "a multipage website for an hypothetical space tourism company",
    id: 3,
    gitlink: new URL("https://github.com/adedotxn/space-tourism"),
    livelink: new URL("http://space-tourism-phyf3.vercel.app/"),
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
