import './Error.scss'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div>
            <Header />
            <main className='main'>
                <h1 className='main_404'>404</h1>
                <p className='main_Content'>Oups! La page que vous demandez n'existe pas.</p>
                <Link className="main_Link" to='/'>Retourner sur la page d'accueil</Link>
            </main>    
            <Footer />
        </div>
    
  )
}
