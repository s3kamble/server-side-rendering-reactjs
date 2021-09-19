import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';
import styles from '../styles/Home.module.css'

function Home( data) {

  return (
    <>
    <Navigation links={data.Home.navLinks} logo={data.navData.logoUrl} heading={data.Home.mainContent.mainHeading}/>
    <div className={styles.container}>
      <p className={styles.heading}>{data.Home.mainContent.mainHeading}</p>
      <p className={styles.subHeading}>{data.Home.mainContent.mainSubHeading}</p>
      <img className={styles.container} src={data.Home.mainContent.mainImage}></img>
      <p className={styles.content}>{data.Home.mainContent.mainBody}</p>

    </div>
    <Footer heading={data.Home.mainContent.mainHeading} logo={data.navData.logoUrl}/>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://s3kamble.github.io/webpage-rendering-data/companyData.json');
  const data = await res.json()
 

  return {
    props: {
      ...data
    },
  }
}

export default Home;