import { FaBars } from "react-icons/fa";
import { useState,useEffect } from 'react'
import Link from "next/link";
import styles from "../Hamburger/Hamburger.module.css"

function Hamburger({links,heading}){
    const[isMenuOpen,setIsMenuOpen]=useState(false);

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
    else{
       style={color:"orange",backgroundColor:"grey"}

    }

    const openMenu = ()=>{
        setIsMenuOpen(!isMenuOpen)
    }
    
    useEffect(()=>{
        setTimeout(()=>{
        setIsMenuOpen(false)
        },10000)
    },[isMenuOpen])

    return(
       <>
       <li className={styles.menu} onClick={openMenu}>
           <FaBars className={styles.menu} />
       </li>
       {
       isMenuOpen?
       <ul className={styles.navlinks} style={style}>
       {
           links.map((link,index)=>(
               <li className={styles.links} key={index}><Link href={link.link}>{link.name}</Link></li>
           ))
       }
       </ul>:
        ""
        }
       
        </>

        
    )
}

export default Hamburger