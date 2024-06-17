import Banner from "../../components/Banner/Banner";
import Gallery from '../../components/Gallery/Gallery';

import HomeImage from '../../assets/banner_home.png'

export default function Home() {
  return (
    <div className='home'>
        <Banner image={HomeImage} />      
        <Gallery />                     
    </div>
  )
}
