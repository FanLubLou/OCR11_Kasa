import './Home.scss';
import Header from '../../components/Header/Header';
import Banner from "../../components/Banner/Banner";
import Galery from '../../components/Galery/Galery';
import Footer from '../../components/Footer/Footer';

import HomeImage from '../../assets/banner_home.png'

export default function Home() {
  return (
    <div className='home'>
        <Header />      
        <Banner image={HomeImage} />      
        {/* <Galery />      
        <Footer />        */}
    </div>
  )
}
