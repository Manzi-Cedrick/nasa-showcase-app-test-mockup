import React,{useState} from 'react'
import { FaHamburger, FaSearch } from 'react-icons/fa'
import SearchComponent from '../components/SearchComponent'

const Header = () => {
    const [showSearch,setShowSearch] = useState<boolean>(false)
    return (
        <div className='header flex justify-between px-2 lg:px-[5em] py-4 bg-slate-800 place-items-center'>
            <div className='p-4 hidden md:flex hover:bg-red-500 duration-500 hover:cursor-pointer '>
                <FaHamburger />
            </div>
            <div>
                <h1 className='text-3xl hidden md:flex font-bold text-center '>NASA</h1>
            </div>
            {!showSearch ? (
                <div onClick={()=>setShowSearch(true)} className='p-4 hover:bg-blue-500 duration-500 hover:cursor-pointer '>
                <FaSearch />
            </div>
            ):(
                <SearchComponent/>
            )}
        </div>
    )
}

export default Header