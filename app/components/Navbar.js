import { BsCart,BsHouse,BsHeart,BsPerson } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='fixed bottom-0 z-30 grid w-full place-items-center lg:bottom-6'>
        <nav className='flex items-center justify-center w-full max-w-lg gap-6 p-4 bg-blue-100 rounded-md shadow-md'>
            <button className='flex flex-col items-center justify-center'><BsHouse/>Home</button>
            <button className='flex flex-col items-center justify-center'><BsHeart/>Saved</button>
            <button className='flex flex-col items-center justify-center'><BsCart/>Cart</button>
            <button className='flex flex-col items-center justify-center'><BsPerson/>Login</button>
        </nav>
    </div>
  )
}

export default Navbar