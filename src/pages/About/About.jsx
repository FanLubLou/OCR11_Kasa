import './About.scss'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import AboutImage from '../../assets/banner_about.png'

export default function About() {
  return (
      <div className="about">
          <Header />
          <Banner image={AboutImage} />
          <Footer />

      
    </div>
  )
}
