import axios from 'axios'

const baseURL = 'https://api.pokemontcg.io/v2'

export const getCards = async (
  limit: number,
  keyWord: string,
  types: string,
  rarity: string,
  isNewestSets: boolean
) => {
  let url = `https://api.pokemontcg.io/v2/cards?page=1&pageSize=${limit}`

  // if (keyWord !== '' && types !== '' && rarity !== '') {
  //   url = `${baseURL}/cards?page=1&pageSize=${limit}&q=name:${keyWord}*&q=types:${types}&q=rarity:${rarity}`
  // }
  if (keyWord !== '' && types !== '' && rarity !== '') {
    url = `${baseURL}/cards?page=1&pageSize=${limit}&q=types:${types} rarity:${rarity} name:${keyWord}*`
  } else if (keyWord !== '' && types !== '') {
    url = `${baseURL}/cards?page=1&pageSize=${limit}&q=types:${types} name:${keyWord}*`
  } else if (rarity !== '' && types !== '') {
    url = `${baseURL}/cards?page=1&pageSize=${limit}&q=types:${types} rarity:${rarity}`
  } else if (keyWord !== '' && types !== '') {
    url = `${baseURL}/cards?page=1&pageSize=${limit}&q=rarity:${rarity} name:${keyWord}*`
  } else if (keyWord !== '') {
    url = `${baseURL}/cards?page=1&pageSize=${limit}&q=name:${keyWord}*`
  } else if (types !== '') {
    url = `${baseURL}/cards?page=1&pageSize=${limit}&q=types:${types}`
  } else if (rarity !== '') {
    url = `${baseURL}/cards?page=1&pageSize=${limit}&q=rarity:${rarity}`
  }

  try {
    if (isNewestSets) {
      const response = await axios.get(`${url}&orderBy=-set.releaseDate,name`)
      const { data } = response.data
      return data
    } else {
      const response = await axios.get(`${url}&orderBy=set.releaseDate,name`)
      const { data } = response.data
      return data
    }
  } catch (error) {
    console.error(error)
  }
}

// if(isNewestSets){
//   url = `${baseURL}/cards?page=1&pageSize=${limit}&orderBy=-set.releaseDate`
// }else{
//   url = `${baseURL}/cards?page=1&pageSize=${limit}&orderBy=-set.releaseDate`
// }
