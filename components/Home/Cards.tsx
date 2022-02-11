const Cards = ({ cardsData }: any) => {
  return (
    <section className="flex h-full w-full flex-col items-center ">
      {cardsData === undefined ? (
        <div>Loading...</div>
      ) : cardsData.length == 0 ? (
        <div>There's no card!</div>
      ) : (
        <div className="flex flex-col gap-5">
          {cardsData.map((card: any) => {
            return (
              <div key={card.id}>
                <h1>name: {card.name}</h1>
                <h1>types: {card.types}</h1>
                <h1>rarity: {card.rarity}</h1>
                <h1>Date: {card.set.releaseDate}</h1>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default Cards
