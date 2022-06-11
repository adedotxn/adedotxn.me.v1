import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Featured } from "../data"
import styles from '../styles/Home.module.css'

const ProjectCard = () => {
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

const ProjectDiv = ({project}) => {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        threshold:0.3
    })

    useEffect(() => {
        if(inView) {
            controls.start('visible')
        }/* else {
            controls.start('hidden')
        }*/
    }, [controls, inView])

    return (
        <motion.div
            ref = {ref}
            className={styles.card}
            animate = {controls}
            initial = "hidden"
            transition={{duration : 1}}
            variants={{
                visible :{opacity :1, x:0},
                hidden : {opacity : 0, x:-200}
            }}
        >
            <span>{project.category}</span>
            <h2>{project.name}</h2>
            <p>{project.details}</p>
            <div>
              <Image src='/images/github.svg' alt="github" width={20} height={20} />
              <Image src='/images/share.svg' alt="github" layout="fill" className={styles.share} />
            </div>
    

        </motion.div> 
    )
}


export default ProjectCard