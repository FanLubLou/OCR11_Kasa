import './About.scss'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'
import Footer from '../../components/Footer/Footer'
import AboutImage from '../../assets/banner_about.png'

export default function About() {

  const aboutDatas = [
    {
      id: 0,
      title: "Fiabilité",
      content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    },
    {
      id: 1,
      title: "Respect",
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
      id: 2,
      title: "Service",
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
      id: 3,
      title: "Sécurité",
      content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    },
  ]

  return (
      <div className="about">
          <Header />
          <Banner image={AboutImage} />        
          <main className="about_main">
                {aboutDatas.map(data => {
                return (
                  <section className='about_main_section' key={data.id}>                    
                    <Collapse title={data.title} content={data.content} />
                  </section>
              )}
            )}
          </main>
          <Footer />      
    </div>
  )
}
