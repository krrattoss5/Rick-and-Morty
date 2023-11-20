import React, { useState } from 'react'
import s from './Search.module.css'
import { searchCharacter } from '../../redux/actions/actionCharacters'
import { useDispatch } from 'react-redux'

export default function Search() {
  const [name,setName] = useState(null)
  const dispatch = useDispatch()

  function handleSearch(e){
    return setName(e.target.value)
  }

  function handlerButton(){
    if(name === '') return
    return dispatch(searchCharacter(name))
  }

  return (
    <div className={s.container}>
      <input type="search" name="name" onChange={handleSearch}/>
      <button onClick={handlerButton}>Search</button>
    </div>
  )
}
