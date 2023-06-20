import { Link, Outlet } from "react-router-dom"
import "./nav.css"
import Logo_lite from "./logo_lite"
import "./fontawesome-free-6.4.0-web/fontawesome-free-6.4.0-web/css/all.css"
import Bottom from "./Bottom"

const Nav = () => {
  return (
    <>
    <nav>
      <div className="nav_dark" >
      <div className="logo">
      <div className="p"><Link to="/"><Logo_lite className="logo"/></Link></div>
      </div>
      <div className="link" >
        <div className="p"><Link to="/"><p>Boshbulim</p></Link></div>
        <div className="p"><Link to="/Sinfxona"><p>Sinfxona</p></Link></div>      </div>
      <div className="plane">
      <i class="fa-solid fa-paper-plane"></i>
      </div>
      <div className="shop">
      <i class="fa-solid fa-bag-shopping"></i>
      </div>
      <div className="user">
      <i class="fa-solid fa-user"></i>
      </div>
      <div className="user-teg">
        <Link to="kirish"><p>Kirish<i class="fa-solid fa-door-open"></i></p></Link>        
      </div>  
    </div>
    </nav>
    <Outlet />
    <Bottom />
    </>
    
    
  )
}

export default Nav