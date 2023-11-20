import { useDispatch } from 'react-redux'
import s from './Card.module.css'
import { onClose } from '../../redux/features/charactersSlice'

export default function Card({ch}) {
  const dispatch = useDispatch()

  function handlerClose(){
    dispatch(onClose(ch.id))
  }
  return (
    <div className={s.container}>
      <button className={s.button} onClick={handlerClose}>x</button>
      <img src={ch.image} alt={ch.name}  className={s.image} />
      <h2 className={s.title}>{ch.name}</h2>
      <span className={s.data}>
        <p className={s.info}>Status: {ch.status}</p>
        <p className={s.info}>Specie: {ch.species}</p>
        <p className={s.info}>Type: {ch.type}</p>
        <p className={s.info}>Gender: {ch.gender}</p>
        <p className={s.info}>Origin: {ch.origin?.name}</p>
      </span>
    </div>
  )
}
