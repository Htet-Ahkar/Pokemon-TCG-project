const Button = ({ setLimit }: any) => {
  const addCards = () => {
    setLimit((prev: number) => prev + 12)
  }
  return (
    <button
      className="my-10 flex items-center justify-center gap-3"
      onClick={addCards}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.37309 10.6692C2.41069 10.6692 0 8.27633 0 5.33458C0 2.39283 2.41069 0 5.37309 0C8.33549 0 10.7462 2.39342 10.7462 5.33458C10.7462 8.27575 8.33608 10.6692 5.37309 10.6692ZM5.37309 1.82175C3.42186 1.82175 1.8349 3.39792 1.8349 5.33458C1.8349 7.27125 3.42244 8.84742 5.37309 8.84742C7.32374 8.84742 8.91187 7.27125 8.91187 5.33458C8.91187 3.39792 7.32433 1.82175 5.37309 1.82175ZM10.8155 9.08017C10.3355 9.76617 9.72738 10.3565 9.02585 10.8191L12.2291 14L14 12.2424L10.8155 9.08017Z"
          fill="#6A6969"
        />
      </svg>
      <span className="text-placeholder">show more</span>
    </button>
  )
}

export default Button
