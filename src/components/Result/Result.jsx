import s from './Result.module.css'

export default function Result({ch}) {
  return (
    <div className={s.container}>
      <img src={ch.image} alt={ch.name} className={s.image} />
      <div  className={s.span}>
        <h3>{ch.name}</h3>
        <span>Status: {ch.status} Origin: {ch.origin?.name}</span>
      </div>
      <button>Info</button>
    </div>
  )
}
