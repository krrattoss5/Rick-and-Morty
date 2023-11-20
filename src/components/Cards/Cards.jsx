import Card from "../Card/Card"
import s from './Cards.module.css'

const Cards = ({characters}) => {
  return (
    <div className={s.container}>
      {
        !characters.length?null:characters.map((ch)=>
        <Card ch={ch} key={ch.id + ch.name +ch.gender}/>
      )}
    </div>
  )
}

export default Cards
