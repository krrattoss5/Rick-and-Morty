import { useSelector } from "react-redux"
import Result from "../Result/Result"

export default function Find() {
  const characters = useSelector(s=>s.characters.search)
  return (
    <div>
      {characters[0].message
      ?<h2>{characters[0].message}</h2>
      :<div>
        <h3>{`${characters.length} Results match the search:`}</h3>
        {characters.map(ch => <Result ch={ch}/>)}
      </div>
      }
    </div>
  )
}
