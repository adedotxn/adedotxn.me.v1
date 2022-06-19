import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Navbar = () => {
    return (
      <>
        <header className={styles.mobile_header} >
          <h1> <Link href="/"> Phyf3.</Link> </h1> 

        </header>
        <header className={styles.desktop_header} >
          <h1> <Link href="/"> Phyf3.</Link></h1>

          <ul>
            <li className={[styles.link, styles.link_anim].join(" ")}>  <Link href='/#about'> About</Link> </li>
            <li className={[styles.link, styles.link_anim].join(" ")}> <Link href="/#projects" > Projects</Link></li>
            <li className={[styles.link, styles.link_anim].join(" ")}> 
              <Link href="https://github.com/Phyf3"> 
                <a target="_blank">Github</a>
              </Link>
            </li> 
 
            <li>
              <button className={[styles.button, styles.button__mimas].join(' ')}>
                <Link href="https://drive.google.com/file/d/1SspjX3pFynhnzA1uL6TS9pNRYAyIwdCu/view?usp=sharing" passHref>
                  <a target="blank">
                    <span>Resume</span>
                  </a>
                </Link>
              </button>
		        </li>
          </ul>
        </header>
      </>
     ) 
}

export default Navbar