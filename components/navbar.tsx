import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Navbar = () => {
    return (
      <>
        <header className={styles.mobile_header} >
          <h1>Phyf3</h1> 

          {/* <Image 
            src="/images/menu-fill.svg" 
            alt = "menu bar" 
            width ={20} height={20} 
            className={styles.menu}
          /> */}
        </header>
        <header className={styles.desktop_header} >
          <h1>Phyf3 </h1>

          <ul>
            <li className={[styles.link, styles.link_anim].join(" ")}>  <Link href='/#about'> About</Link> </li>
            <li className={[styles.link, styles.link_anim].join(" ")}> <Link href="/#projects" > Projects</Link></li> 
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