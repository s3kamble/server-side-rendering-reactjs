import { FaLinkedin,FaFacebookSquare,FaAddressCard} from "react-icons/fa";
import Link from "next/link";
import styles from "../Footer/Footer.module.css";

function Footer({heading,logo}){
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
        <footer className={styles.footerBar} style={style}>
            <Link href="/"><a className={styles.logo}> <img  src={logo} alt="company-logo" className={styles.logoImg} ></img> </a></Link>
            <p className={styles.title}>Terms and Conditions</p>
            <ul className={styles.footerlinks}>
                <li className={styles.links}><FaLinkedin/></li>
                <li className={styles.links}><FaFacebookSquare/></li>
                <li className={styles.links}><FaAddressCard/></li>

            </ul>

        </footer>
    )
}

export default Footer;