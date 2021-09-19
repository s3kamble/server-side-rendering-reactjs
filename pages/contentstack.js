import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import styles from "../styles/Contentstack.module.css";

function contentstack({cs}){
    console.log(cs)
    return(
        <>
        <Navigation links={cs.navLinks} logo={cs.logoUrl} heading={cs.mainContent.mainHeading} />
        <div className={styles.container}>
          <div className={styles.about}>
            <h3>{cs.mainContent.mainHeading}</h3>
            <h3 className={styles.subHeading}>{cs.mainContent.mainSubHeading}</h3>
            <p className={styles.content}>{cs.mainContent.mainBody}</p>
          </div>
          <img className={styles.image} src={cs.mainContent.mainImage}></img>
        </div>
        <Footer heading={cs.mainContent.mainHeading} logo={cs.logoUrl} />
        </>
    )
 }

 export async function getStaticProps() {
    const res = await fetch('https://s3kamble.github.io/webpage-rendering-data/companyData.json');
    console.log("res",await res)
    const data = await res.json()
   
  
    return {
      props: {
        cs:data.CS,
      },
    }
  }

 export default contentstack;