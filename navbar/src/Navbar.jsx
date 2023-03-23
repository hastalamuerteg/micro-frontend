import { NavLink, BrowserRouter as Router } from 'react-router-dom'
export const Navbar = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to='/platform-routes'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/platform-routes/character-finder'>
              Character Finder
            </NavLink>
          </li>
          <li>
            <NavLink to='/platform-routes/favorite-characters'>
              Favorite Characters
            </NavLink>
          </li>
        </ul>
      </nav>
    </Router>
  )
}