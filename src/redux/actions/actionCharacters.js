import { getCharacters,onSearch,infiniteScroll } from "../features/charactersSlice";

export const getAllCharacters = () => (dispatch) => {
  try {
    fetch('https://rickandmortyapi.com/api/character')
     .then(res => res.json())
     .then(({results}) => dispatch(getCharacters(results)))
  } catch (error) {
    console.log({message:error.message})
  }
}

export const searchCharacter = (name) => (dispatch) => {
  try {
    fetch(`https://rickandmortyapi.com/api/character?name=${name}`)
     .then(res =>{
      if(!res.ok){
        dispatch(onSearch([{message:'Character Not Found'}]))
        return
      }else{
        return res.json()
      }
    })
    .then(({results}) => dispatch(onSearch(results)))
  } catch (error) {
    if (error.message.includes('404')) {
      console.log('Personaje no encontrado');
    }else{
      console.log('Error not found!!');
    }
  }
}

export const loadCharacters = (page) => (dispatch) => {
  try{
      fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
       .then(res => {
        if(!res.ok){
          throw new Error('Load Error!')
        }else{
          return res.json()
        }
       })
       .then(({results}) => dispatch(infiniteScroll(results)))
  }catch{

  }
}