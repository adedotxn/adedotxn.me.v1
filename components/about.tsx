import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FC, useEffect } from "react";

const About:FC = () => {
  const fadeVariant = {
    visible: { opacity: 1, y:0, transition : {duration: .9} },
    hidden: { opacity: 0,  y: -100 },
  }

  const control = useAnimation()
  const [ref, inView] = useInView({
    threshold:0.4
  })

  useEffect(() => {
    if (inView) {
      control.start("visible");
      console.log("In view")
    }/* else {
      control.start("hidden");
      console.log("Out of View")
    }*/
  }, [control, inView]);


    return (
        <motion.section ref={ref} variants={fadeVariant}
          initial="hidden"
          animate={control}
          id = "about" className={styles.about}>
          <h1><span>01.</span> <span> My Arsenal</span> </h1>

          {/* <p> I enjoy building client-side apps and websites,also currently exploring some light backend to maybe transition to full mernstack. I also build apps that leverage on the blockchain and web3 technologies with Solidity, Ipfs, ethers js and co. </p> */}

          <div className={styles.technologies}>
            <div>
              {/* eslint-disable-next-line react/no-unescaped-entities*/}
              <h3>Core Technologies</h3>
              <ul>
                <li>Html & CSS</li>
                <li>Javascript (ES6+)</li>
                <li>ReactJS</li>
                <li>Solidity</li>
                <li>Typescript(beginner)</li>
                <li>Next JS</li>
              </ul>
            </div>

            <div>
              <h3>Familiar With</h3>
              <ul>
                <li> Node JS</li>
                <li>Express</li>
                <li>Mongodb</li>
                <li> Unit Testing Solidity dapps</li>
              </ul>
            </div>
          </div>
        </motion.section>
     ) 
}

export default About