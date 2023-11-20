import { useEffect,useState} from "react"
import Cards from "./components/Cards/Cards"
import { useDispatch, useSelector } from "react-redux"
import { getAllCharacters,loadCharacters } from './redux/actions/actionCharacters.js'
import Nav from "./components/Nav/Nav.jsx"
import Find from "./components/Find/Find.jsx"

export default function App() {
  const characters = useSelector(s=>s.characters.characters)
  const result = useSelector(s=>s.characters.search)
  const [page,setPage] = useState(1)
  const dispatch = useDispatch()

  useEffect(() => {
    // Cargar personajes iniciales
    dispatch(loadCharacters(page));

    // Agregar un event listener para el scroll
    window.addEventListener('scroll', handleScroll);

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch, page]);

  const handleScroll = () => {
    const windowHeight =
      'innerHeight' in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;

    const body = document.body;
    const html = document.documentElement;

    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight - 10) {
      // Si llegamos al final de la página, cargamos más personajes
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="container">
      <Nav />
      {result.length && result[0].message?<h1>{result[0].message}</h1>:null}
      {result.length && !result[0].message?<Find />:
      <Cards characters={characters} />}
    </div>
  )
}
