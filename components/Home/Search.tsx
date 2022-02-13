type searchProps = {
  setKeyWord: Dispatch<SetStateAction<string>>
  setTypes: Dispatch<SetStateAction<string>>
  setRarity: Dispatch<SetStateAction<string>>
  setIsNewestSets: Dispatch<SetStateAction<boolean>>
}

import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import axios from 'axios'

const Search = ({
  setKeyWord,
  setTypes,
  setRarity,
  setIsNewestSets,
}: searchProps) => {
  const [allTypes, setAllTypes] = useState<any>(null)
  const [allRarities, setAllRarities] = useState<any>([
    'common',
    'rare',
    'legend',
    'promo',
  ])
  const [sets, setSets] = useState(['Newest', 'Oldest'])

  // Fetch Types, Rarity
  const fetchOptions = async () => {
    await axios
      .get('https://api.pokemontcg.io/v2/types')
      .then((response) => {
        const {
          data: { data },
        } = response
        setAllTypes(data)
      })
      .catch((error) => {
        console.log(error)
      })

    // await axios
    //   .get('https://api.pokemontcg.io/v2/rarities')
    //   .then((response) => {
    //     const {
    //       data: { data },
    //     } = response
    //     setAllRarities(data)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  }

  useEffect(() => {
    fetchOptions()

    return () => {}
  }, [])

  if (allTypes !== null && allRarities !== null) {
    return (
      <section className="mt-5  flex w-full flex-col items-center justify-center">
        {/* Searchbar */}
        <input
          type="text"
          placeholder="Name.."
          className="h-9 w-full rounded-[35px] text-center shadow-allShadow"
          onChange={(e) => {
            setKeyWord(e.target.value)
          }}
        />
        {/* Dropdown selectors */}
        <div className="my-5 grid w-full grid-cols-3 gap-2">
          {/* Types */}
          <select
            className="h-9 appearance-none rounded-[2rem] bg-white text-center text-placeholder shadow-allShadow"
            name="types"
            id="types"
            onChange={(e) => {
              setTypes(e.target.value)
            }}
          >
            <optgroup>
              <option value="">Type</option>
              {allTypes.map((type: any) => (
                <option className="text-mainText" key={type} value={type}>
                  {type}
                </option>
              ))}
            </optgroup>
          </select>

          {/* Rarity */}
          <select
            className="h-9 appearance-none rounded-[2rem] bg-white text-center text-placeholder shadow-allShadow"
            name="types"
            id="types"
            onChange={(e) => {
              setRarity(e.target.value)
            }}
          >
            <optgroup>
              <option value="">Rarity</option>
              {allRarities.map((rarity: any) => (
                <option
                  className="uppercase text-mainText"
                  key={rarity}
                  value={rarity}
                >
                  {rarity}
                </option>
              ))}
            </optgroup>
          </select>

          {/* Sets */}
          <select
            className="h-9 appearance-none rounded-[2rem] bg-white text-center text-placeholder shadow-allShadow"
            name="types"
            id="types"
            onChange={(e) => {
              if (e.target.value === 'Oldest') {
                setIsNewestSets(false)
              } else {
                setIsNewestSets(true)
              }
            }}
          >
            <optgroup>
              <option value="">Sets</option>
              {sets.map((set: any) => (
                <option className="text-mainText" key={set} value={set}>
                  {set}
                </option>
              ))}
            </optgroup>
          </select>
        </div>
      </section>
    )
  } else {
    return <></>
  }
}

export default Search
