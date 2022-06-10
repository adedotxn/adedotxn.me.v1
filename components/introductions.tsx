
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Intro = () => {
    return (
        <section className={styles.introduction} >
            <h1>
              <span>Hey, my name is </span>
              <br/>Philip Adewole
            </h1>
            <h2>
              _ Frontend Developer<br/> 
              _ Blockchain Developer<br/>
              _ Engineering Student
             </h2>

             <p>I build and am interested in building cool tools and solutions using technology. Avid learner and always trying to better my skills. I love music, basketball, gadgets and sometimes books</p>
             <p className={styles.available}>Currently open to oppourtunities</p>

             <button>Check out my Resume</button>
        </section>
     ) 
}

export default Intro