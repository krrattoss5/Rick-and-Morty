import Search from '../Search/Search'
import s from './Nav.module.css'

const Nav = () => {
  return(
    <div className={s.container}>
      <div className={s.nav}>
        <a href="#">Home</a>
        <a href="#">About</a>
      </div>
      <div className={s.search}>
        <Search />
      </div>
    </div>
  )
}

export default Nav