import './Home.scss';
import Header from '../../components/Header/Header';
import Banner from "../../components/Banner/Banner";
import Galery from '../../components/Galery/Galery';
import Footer from '../../components/Footer/Footer';

export default function Home() {
  return (
    <div className='home'>
        <Header />      
        {/* <Banner />      
        <Galery />      
        <Footer />       */}
    </div>
  )
}
