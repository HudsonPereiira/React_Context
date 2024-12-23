
import "./Navbar.css"
import {NavLink} from "react-router-dom"


const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="./About">Sobre</NavLink>
      <NavLink to="./Products">Produtos</NavLink>
    </nav>
  )
}

export default Navbar
