import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FC, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Featured } from "../data"
import styles from '../styles/Home.module.css'

interface IProject  {
    category:string, 
    name:string, 
    details:string,
    id: number
    gitlink?:URL,
    livelink?:URL
}


const ProjectCard:FC = () => {
    return(
        <>
        <div className="container">
            {Featured.map((project) => {
                return(
                    <ProjectDiv key={project.id} project = {project}/>
                )
            })}
        </div>
        </>
    )
}

const ProjectDiv:FC<{project : IProject}> = ({project}) => {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        threshold:0.3
    })

    useEffect(() => {
        if(inView) {
            controls.start('visible')
        }
    }, [controls, inView])

    return (
        <motion.div
            ref = {ref}
            className={styles.card}
            animate = {controls}
            initial = "hidden"
            transition={{duration : .7}}
            variants={{
                visible :{opacity :1, x:0},
                hidden : {opacity : 0, x:-200}
            }}
        >
            <span>{project.category}</span>
            <h2>{project.name}</h2>
            <p>{project.details}</p>
            <div>
            {project?.gitlink?.href &&
                    <Link href={`${project?.gitlink?.href}`}> 
                        <a target="blank">
                            <Image src='/images/github.svg' alt="github" width={20} height={20} />
                        </a>
                    </Link>
                }

                {project?.livelink?.href &&
                    <Link href={`${project?.livelink?.href}`}>
                        <a target="blank">
                            <Image src='/images/share.svg' alt="github" layout="fill" className={styles.share} />
                        </a>
                    </Link>
                }
            </div>
    

        </motion.div> 
    )
}


export default ProjectCard