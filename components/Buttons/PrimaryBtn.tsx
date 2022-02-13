type btnProps = {
  children: string
}

const PrimaryBtn = ({ children }: btnProps) => {
  return (
    <button className="flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-primary transition-all duration-700 hover:bg-mainText hover:text-white">
      {children}
    </button>
  )
}

export default PrimaryBtn
