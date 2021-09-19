import { FaBars } from "react-icons/fa";
import Link from "next/link";
import styles from "../Navigation/Navigation.module.css";
import Hamburger from "../Hamburger/Hamburger";

function Navigation({links,heading,logo}){
     let style={}
     if( heading=="Contentstack"){
        style={color:"orangered",backgroundColor:"#6153b1"}
     }
     else if(heading=="Raw Engineering"){
        style={color:"black",backgroundColor:"white"}
     }
     else if(heading=="Surfboard Ventures"){
        style={color:"skyblue",backgroundColor:"rgb(0, 38, 77)"}
     }
    return(
        <header className={styles.navBar} style={style}>
            <Link href="/"><a className={styles.logo}> <img  src={logo} alt="company-logo" className={styles.logoImg} ></img> </a></Link>
            <p className={styles.title}>{heading}</p>
            <ul className={styles.navlinks}>
                {
                    links.map((link,index)=>(
                        <li className={styles.links} key={index}><Link href={link.link}>{link.name}</Link></li>
                    ))
                }
            </ul>
            <Hamburger links={links} heading={heading}/>
        </header>
    )
}

export default Navigation;