import { useEffect, useState } from 'react'
// Components
import { Search, Cards } from '../components'

// API
import * as api from '../api/index'

export default function Home() {
  const [cardsData, setCardsData] = useState(null)
  const [limit, setLimit] = useState(12)
  const [keyWord, setKeyWord] = useState('')
  const [types, setTypes] = useState('')
  const [rarity, setRarity] = useState('')
  const [isNewestSets, setIsNewestSets] = useState(true)
  console.log(isNewestSets)

  const getCardsData = async () => {
    try {
      const cards = await api.getCards(
        limit,
        keyWord,
        types,
        rarity,
        isNewestSets
      )
      setCardsData(cards)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getCardsData()

    return () => {}
  }, [limit, keyWord, types, rarity, isNewestSets])

  console.log(cardsData)

  return (
    <main className="flex min-h-screen flex-col items-center bg-mainBg px-5 pb-2 pt-24">
      {/* Search */}
      <Search
        setKeyWord={setKeyWord}
        setTypes={setTypes}
        setRarity={setRarity}
        setIsNewestSets={setIsNewestSets}
      />

      {/* Cards */}
      {cardsData !== null && <Cards cardsData={cardsData} />}

      {/* Button */}
      <div>more</div>
    </main>
  )
}
