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

    useEffect(() => {
        if(inView) {
            controls.start('visible')
        }
    }, [controls, inView])

    return (
        <motion.section
            ref = {ref}
            className={styles.archive}
            animate = {controls}
            initial = "hidden"
            transition={{duration : .7}}
            variants={{
                visible :{opacity :1, x:0},
                hidden : {opacity : 0, x:-200}
            }}
        >
            <div>
                <span>{project.category}</span>
                <h3>{project.name}</h3>
                <p>{project.details}</p>
                <div className={styles.icon}>
                    
                    <Link href={project?.gitlink?.href}> 
                        <a target="blank">
                            <Image src='/images/github.svg' alt="github" width={20} height={20} />
                        </a>
                    </Link>
                  
                    <Link href={project?.livelink?.href}>
                        <a target="blank">
                            <Image src='/images/share.svg' alt="github" layout="fill" className={styles.share} />
                        </a>
                    </Link>
                </div>
            </div>
        </motion.section> 
    )
}


export default ArchiveCard