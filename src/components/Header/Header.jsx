import './Header.scss'
import Navbar from '../Navbar/Navbar'
import { Link } from "react-router-dom"
import Logo from '../../assets/LOGO.svg'

export default function Header() {
  return (
      <header className="header">
        <Link to="/">
            <img src={Logo} alt="logo de kasa" />
        </Link>
        <Navbar />
     </header>
  )
}
