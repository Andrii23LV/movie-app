import { NavLink} from 'react-router-dom'
import { useState } from 'react';
import '../header/header.css'

export function Header() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  window.addEventListener('scroll', changeColor);
  return (
    <nav className={color ? 'nav-wrap navigation' : 'nav-wrap'}>
      <div className='nav-title'>
        <h2 className="nav-text">Movies</h2>
      </div>
      <span className='nav-elements'>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-element-active' : 'nav-element')}>HOME</NavLink>
        <NavLink to="/categories" className={({ isActive }) => (isActive ? 'nav-element-active' : 'nav-element')}>CATEGORIES</NavLink>
        <NavLink to="/upcoming" className={({ isActive }) => (isActive ? 'nav-element-active' : 'nav-element')}>UPCOMING</NavLink>
      </span>
    </nav>
  )
}