import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import { FC, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import styles from '../styles/Home.module.css'
import { ArchiveProjects } from "../data"
import Link from "next/link"

interface IArchive  {
    category?:string, 
    name:string, 
    details?:string,
    id: number
    gitlink?:URL,
    livelink?: URL
}

const ArchiveCard:FC = () => {
    return(
        <>
        <div className="container">
            {ArchiveProjects?.map((project) => {
                return(
                    <ProjectDiv key={project.id} project = {project}/>
                )
            })}
        </div>
        </>
    )
}

const ProjectDiv:FC<{project : IArchive}> = ({project}) => {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        threshold:0.3
    })
    const container = {
        hidden: { opacity:0, x:-50},
        show: {
          opacity:1,
          x : 0,
          transition: {
            duration: .7,
            staggerChildren: 0.3,
            delayChildren: 0.2
          }
        }
      };
      const items = {
        hidden: {opacity:0, x: 50 },
        show: {opacity:1, x: 0, transition: {duration:.5}}
      };

    useEffect(() => {
        if(inView) {
            controls.start('show')
        }
    }, [controls, inView])

    return (
        <motion.section
            ref = {ref}
            className={styles.archive}
            animate = {controls}
            initial = "hidden"
            variants={container}
        >
            <div>
                <span>{project.category}</span>
                <h3>{project.name}</h3>
                <p>{project.details}</p>
                <div className={styles.icon}>
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
            </div>
        </motion.section> 
    )
}


export default ArchiveCard