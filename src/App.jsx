import { useEffect} from "react"
import Cards from "./components/Cards/Cards"
import { useDispatch, useSelector } from "react-redux"
import { getAllCharacters } from './redux/actions/actionCharacters.js'

export default function App() {
  const characters = useSelector(s=>s.characters.characters)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllCharacters())
  },[])

  return (
    <div>
      <h1>Rick and Morty App</h1>
      <Cards characters={characters} />
    </div>
  )
}
