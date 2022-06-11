import Image from 'next/image';
import Link from 'next/link'
import { FC } from 'react';


const ContactIcons:FC = () => {
    return (
        <ul>
            <li> 
                <Link href="https://github.com/Phyf3"> 
                    <a target="blank">
                    <Image src='/images/github.svg' alt = "github" width={20} height={20}/>  
                    </a>
                </Link> 
            </li>

            <li> 
                <Link href="https://twitter.com/Phyf3Script"> 
                    <a target="blank">
                    <Image src='/images/twitter.svg' alt = "github" width={20} height={20}/>  
                    </a>
                </Link> 
            </li>

            <li> 
                <Link href="https://www.linkedin.com/in/philip-adewole-0980921b2/"> 
                    <a target="blank">
                    <Image src='/images/linkedin.svg' alt = "github" width={20} height={20}/>  
                    </a>
                </Link> 
            </li>

            <li> 
                <Link href="mailto:Phyf3Script@gmail.com"> 
                    <a href="blank">
                    <Image src='/images/mail.svg' alt = "github" width={20} height={20}/>  
                    </a>
                </Link> 
            </li>  
      </ul>
    )
}

export default ContactIcons