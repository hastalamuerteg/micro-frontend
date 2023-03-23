import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { CharacterFinder } from '../pages/CharacterFinder'
import { FavoriteCharacters } from '../pages/FavoriteCharacters'

export const AppRoutes = () => {
  return (
    <Router basename='platform-routes'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/character-finder' element={<CharacterFinder />} />
        <Route path='/favorite-characters' element={<FavoriteCharacters />} />
      </Routes>
    </Router>
  )
}
