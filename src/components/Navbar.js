import React,{useState} from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);
    return (
        <div>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo" >
                        TRVL <i className="fas fa-blog"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>

                    </div>
                    <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link
                             to="/" 
                             className="nav-links"
                              onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Services"
                             className="nav-links" 
                             onClick={closeMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products"
                             className="nav-links"
                              onClick={closeMenu}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-up" 
                            className="nav-links-mobile" 
                            onClick={closeMenu}>
                                Sign-up
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
