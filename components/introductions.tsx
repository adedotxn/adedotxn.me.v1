
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Intro = () => {
    return (
        <section className={styles.introduction} >
            <h1>
              <span>Hey, my name is </span>
              <br/>Philip Adewole
            </h1>
           
            <p  className={styles.intro}>I`m a frontend developer interested in building solutions and tools using web technology.
              I`m also always open to learning and working with new technology.
            </p>
            <p className={styles.available}>Currently open to oppourtunities</p>
            
            {/*Button styling credit : Codrops --> https://tympanus.net/Development/ButtonHoverStyles/ */}
            <div className={styles.content__item}>
              <button className={ [styles.button, styles.button__bestia].join(' ')}>
					      <div className={styles.button__bg}></div><span>Check out my Resume</span>
				      </button>
            </div>
        </section>
     ) 
}

export default Intro