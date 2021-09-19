import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

import styles from "../styles/RawEngg.module.css"

function raweng({RE}){
    return(
        <>
        <Navigation links={RE.navLinks} logo={RE.logoUrl} heading={RE.mainContent.mainHeading} />
        <div className={styles.container}>
          <div className={styles.about}>
            <p className={styles.subHeading}>{RE.mainContent.mainSubHeading}</p>
            <img className={styles.image} src={RE.mainContent.mainImage}></img>
            <p className={styles.heading}>{RE.mainContent.mainHeading}</p>
          </div>
          <p className={styles.content}>{RE.mainContent.mainBody}</p>
        </div>
      <Footer heading={RE.mainContent.mainHeading} logo={RE.logoUrl}/>

        </>
    )
 }

 export async function getStaticProps() {
    const res = await fetch('https://s3kamble.github.io/webpage-rendering-data/companyData.json');
    console.log("res",await res)
    const data = await res.json()
   
  
    return {
      props: {
        RE:data.RE,
      },
    }
  }

 export default raweng;