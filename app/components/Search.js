import { BsSearch } from "react-icons/bs"

const Search = () => {
  return (
    <div className="flex items-center justify-center w-full my-4 rounded-md">
        <div className="flex items-center w-full max-w-lg gap-4 p-4 text-lg bg-white border-b shadow-md">
            <BsSearch size={25}/>
            <input type="text" placeholder="Serach for products..." className="w-full max-w-lg"/>
        </div>
    </div>
  )
}

export default Search