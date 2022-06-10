
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Projects = () => {
    return (
        <section className={styles.projects}>
          <h1><span>02.</span> <span> Some things I`ve built</span> </h1>

          <div className={styles.cards}>
            <div className={styles.card}>
              <span>Blockgames Collaboration</span>
              <h2>Metafiles</h2>
              <p>A dapp built to upload and share files in a publicly or privately on the platform. The dapp uses ipfs for file storage and addressing and the blockchain for keeping record of updates &/ uploads - as a way to make the data immutable.</p>
              <div>
                <Image src='/images/github.svg' alt="github"  layout="fill" className={styles.share}/>
                <Image src='/images/share.svg' alt="github" layout="fill" className={styles.share} />
              </div>
            </div>

            <div className={styles.card}>
              <span>FrontendMentor Challenge</span>
              <h2>room.</h2>
              <p>A really simple homepage for an hypothetical furniture company</p>
              <div>
                <Image src='/images/github.svg' alt="github" width={20} height={20} />
                <a href="https://room-iota.vercel.app/"><Image src='/images/share.svg' alt="github" layout="fill" className={styles.share} /> </a>
              </div>
            </div>

            <div className={styles.card}>
              <span>Personal Project</span>
              <h2>spread</h2>
              <p>A dapp i`m building for mass disbursing of tokens on testnets(for now). It currently only supports ERC20 tokens but i`m working on adding support for other token standards like ERC1155 and maybe ERC721. Working on making it compatible with other testnets too </p>
              <div>
                <Image src='/images/github.svg' alt="github" width={20} height={20} />
                <Image src='/images/share.svg' alt="github" layout="fill" className={styles.share} />
              </div>
            </div>
          </div>

          <div className={styles.more}>
            <h2>If you`d like to see more </h2>

            <div className={styles.more__links}>           
              <span><Link href='/projects'> View Project Archive.</Link> </span>
              {/* <span><Link href='/'>Explore Github Repositories.</Link></span> */}
            </div>
          </div>
        </section>
     ) 
}

export default Projects