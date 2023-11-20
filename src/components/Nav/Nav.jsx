import { useDispatch } from 'react-redux'
import Search from '../Search/Search'
import s from './Nav.module.css'
import { clearSearch } from '../../redux/features/charactersSlice'

const Nav = () => {
  const dispatch = useDispatch()
  return(
    <div className={s.container}>
      <div className={s.nav}>
        <a href="/" onClick={()=>dispatch(clearSearch)}>Home</a>
        <a href="#">About</a>
      </div>
      <div className={s.search}>
        <Search />
      </div>
    </div>
  )
}

export default Nav