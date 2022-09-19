import { NavLink} from 'react-router-dom'
import '../header/header.css'

export function Header() {
  return (
    <nav className='nav-wrap'>
      <div className='nav-title'>
        <h2 className="nav-text">Movies</h2>
      </div>
      <span className='nav-elements'>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-element-active' : 'nav-element')}>HOME</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-element-active' : 'nav-element')}>ABOUT US</NavLink>
        <NavLink to="/upcoming" className={({ isActive }) => (isActive ? 'nav-element-active' : 'nav-element')}>UPCOMING</NavLink>
        <NavLink to="/categories" className={({ isActive }) => (isActive ? 'nav-element-active' : 'nav-element')}>CATEGORIES</NavLink>
      </span>
    </nav>
  )
}