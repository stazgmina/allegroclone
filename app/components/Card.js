import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs"
import Rating from "./Rating"

const Card = ({title, description, image, price, rating}) => {
  return (
    <div className="z-20 flex flex-col items-center justify-around w-full max-w-sm p-4 text-center transition bg-white shadow cursor-pointer h-96 hover:scale-125">
        <img src={image} alt={title} className="w-full h-1/2 contain"/>
        <h1 className="text-lg font-bold">{title}</h1>
        <div className="flex items-center justify-between w-full">
          <p>${price}</p>
          <Rating rating={rating}/>
        </div>
    </div>
  )
}

export default Card