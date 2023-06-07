import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs"

const Rating = ({rating}) => {
    if(rating <= 0.5)(
        <div className="flex items-center w-full">
            <BsStarHalf/>
            <BsStar/>
            <BsStar/>
            <BsStar/>
            <BsStar/>
        </div>
    )
    if(rating <= 1 && rating > 0.5)(
        <div className="flex items-center w-full">
            <BsStarFill/>
            <BsStar/>
            <BsStar/>
            <BsStar/>
            <BsStar/>
        </div>
    )
    if(rating <= 1.5 && rating > 1)(
        <div className="flex items-center w-full">
            <BsStarFill/>
            <BsStarHalf/>
            <BsStar/>
            <BsStar/>
            <BsStar/>
        </div>
    )
    if(rating <= 2 && rating > 1.5)(
        <div className="flex items-center w-full">
            <BsStarFill/>
            <BsStarFill/>
            <BsStar/>
            <BsStar/>
            <BsStar/>
        </div>
    )
}

export default Rating