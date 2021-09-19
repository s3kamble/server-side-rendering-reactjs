import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import styles from "../styles/Surfboard.module.css"
 
function surfboard({SB}){
    return(
        <>
       
        <Navigation links={SB.navLinks} logo={SB.logoUrl} heading={SB.mainContent.mainHeading} />
         <img className={styles.image} src={SB.mainContent.mainImage} alt="Surfboard description Image"></img>
        <div className={styles.container}>
          <p  className={styles.subHeading}>{SB.mainContent.mainSubHeading}</p>
          <p  className={styles.content}>{SB.mainContent.mainBody}</p>
        </div>   
        <Footer heading={SB.mainContent.mainHeading} logo={SB.logoUrl} />  

        </>
    )
 }

 export async function getStaticProps() {
    const res = await fetch('https://s3kamble.github.io/webpage-rendering-data/companyData.json');
    console.log("res",await res)
    const data = await res.json()
   
  
    return {
      props: {
        SB:data.SB,
      },
    }
  }
 export default surfboard;