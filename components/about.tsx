
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const About = () => {
    return (
        <section id = "about" className={styles.about}>
          <h1><span>01.</span> <span> About me</span> </h1>

          <p>I enjoy listening to music a little too much lmao. Currently studying computer engineering at Obafemi Awolowo University. I enjoy building client-side apps and websites, currently exploring some light backend to maybe transition to full mernstack. I also build apps that leverage on the blockchain and web3 technologies with Solidity, Ipfs, ethers js and co. </p>

          <div>
            {/* eslint-disable-next-line react/no-unescaped-entities*/}
            <h3>Here are some technologies I'm familiar with</h3>
            <ul>
              <li>Html & CSS</li>
              <li>Javascript (ES6+)</li>
              <li>ReactJS</li>
              <li>Solidity</li>
              <li>Typescript(beginner)</li>
              <li>Next JS</li>
            </ul>
          </div>
          
        </section>
     ) 
}

export default About