import Image from 'next/image'

// Components
import { PrimaryBtn } from '..'

const Card = ({ card }: any) => {
  return (
    <div className="flex w-full flex-col items-center justify-center text-center">
      {/* Image */}
      <div className="relative h-64 w-full">
        <Image
          layout="fill"
          objectFit="contain"
          src={card.images.large}
          alt={card.name}
        />
      </div>
      {/* Card */}
      <div className="-mt-16 flex w-72 flex-col items-center gap-2 rounded-[1.25rem] bg-white pt-16 shadow-allShadow">
        {/* Name */}
        <h1 className="mt-3 text-2xl font-extrabold text-mainText">
          {card.name}
        </h1>
        {/* Rarity */}
        <p className="text-sm font-light text-secondary">{card.rarity}</p>
        {/* Price and Card left */}
        <div className="flex gap-5 text-placeholder">
          <p>${card.cardmarket.prices.averageSellPrice}</p>
          <p>{card.set.total} left</p>
        </div>
        {/* Button */}
        <div className="-mt-3 h-12 w-[70%] translate-y-[50%] text-lg">
          <PrimaryBtn>Slect card</PrimaryBtn>
        </div>
      </div>
    </div>
  )
}

export default Card
