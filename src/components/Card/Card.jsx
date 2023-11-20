import s from './Card.module.css'

export default function Card({ch}) {
  return (
    <div className={s.container}>
      <h2 className={s.title}>{ch.name}</h2>
      <img src={ch.image} alt={ch.name}  className={s.image} />
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
