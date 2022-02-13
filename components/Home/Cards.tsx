// Components
import { Card } from '..'

const Cards = ({ cardsData }: any) => {
  return (
    <section className="flex h-full w-full flex-col items-center ">
      {cardsData === undefined ? (
        <div>Loading...</div>
      ) : cardsData.length == 0 ? (
        <div>There's no card!</div>
      ) : (
        <div className="grid w-full grid-cols-1 items-center justify-center gap-14">
          {cardsData.map((card: any) => {
            return (
              <div key={card.id}>
                <Card card={card} />
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default Cards
