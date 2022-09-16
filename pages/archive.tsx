import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ArchiveCard from '../components/cards/archive_cards'
// import styles from '../styles/Projects.module.css'

const Archive: NextPage = () => {
    return (
        <div >
            <main>
                <ArchiveCard/>
            </main>
        </div>
     ) 
}

export default Archive