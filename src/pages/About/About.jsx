import './About.scss'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import AboutImage from '../../assets/banner_about.png'

export default function About() {
  return (
      <div className="about">
          <Header />
          <Banner image={AboutImage} />
    </div>
  )
}
