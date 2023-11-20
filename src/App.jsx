import { useEffect} from "react"
import Cards from "./components/Cards/Cards"
import { useDispatch, useSelector } from "react-redux"
import { getAllCharacters } from './redux/actions/actionCharacters.js'
import Nav from "./components/Nav/Nav.jsx"
import Find from "./components/Find/Find.jsx"

export default function App() {
  const characters = useSelector(s=>s.characters.characters)
  const result = useSelector(s=>s.characters.search)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllCharacters())
  },[])

  return (
    <div className="container">
      <Nav />
      {result.length && result[0].message?<h1>{result[0].message}</h1>:null}
      {result.length && !result[0].message?<Find />:
      <Cards characters={characters} />}
    </div>
  )
}
