import { motion, useAnimation } from "framer-motion"

import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Intro = () => {
    const container = {
      hidden: { opacity:0},
      show: {
        opacity:1,
        transition: {
          duration: 1,
          staggerChildren: 0.3,
          delayChildren: 0.2
        }
      }
    };
    const items = {
      hidden: {opacity:0, y: 50 },
      show: {opacity:1, y: 0, transition: {duration:.5}}
    };


    return (
        <motion.section 
          className={styles.introduction}
          variants={container}
          initial="hidden"
          animate="show">
            <motion.h1  variants={items}>
              <span>Hey, my name is </span>
              <br/>Philip Adewole
            </motion.h1>
           
            <motion.p variants={items}  className={styles.intro}>I`m a frontend developer interested in building solutions and tools using web technology.
              I`m also always open to learning and working with new technology. Currently exploring web3/the decentralised web and mernstack web development.
            </motion.p>
            <motion.p variants={items} className={styles.available}>
              Currently open to oppourtunities
            </motion.p>
            
            {/*Button styling credit : Codrops --> https://tympanus.net/Development/ButtonHoverStyles/ */}
            <Link  href="https://drive.google.com/file/d/1SspjX3pFynhnzA1uL6TS9pNRYAyIwdCu/view?usp=sharing"  passHref>
              <a target="blank">
                <div className={styles.content__item}>
                  <motion.button variants={items} className={ [styles.button, styles.button__bestia].join(' ')}>
                    <div className={styles.button__bg}></div><span>Check out my Resume</span>
                  </motion.button>
                </div>
              </a>
            
            </Link>
        </motion.section>
     ) 
}

export default Intro