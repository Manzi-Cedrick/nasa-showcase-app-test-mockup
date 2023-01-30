import React, { useState , useEffect,useContext} from 'react'
import { SearchContext } from '../SearchContext';

const BlogMaps = () => {
    const [datas, setData] = useState([]);
    const {dataSearch,setDataSearch} = useContext(SearchContext);
    console.log(dataSearch)
    useEffect(() => {
      setData(dataSearch)
    }, [dataSearch])
    
    return (
        <>
            {datas ? datas.map((item: any) => (
                <div className='grid hover:duration-500 hover:cursor-pointer hover:bg-gray-900 px-10 py-4'>
                    <div className='px-0 max-w-[40vw] overflow-hiden rounded-sm'>
                        <img className='w-full hover:scale-100 h-full rounded-lg object-cover' src={item?.href} alt='hd-' />
                    </div>
                    <div>
                        <h1 className='py-4 border-b-2 border-white text-3xl font-serif '>
                           {item?.data.map((sm:any)=>(sm.title))}
                        </h1>
                        <p className='py-6'>
                            {item?.data.map((sm:any)=>(sm.description))}
                        </p>
                    </div>
                </div>
            )) : (
                <p>No Data</p>
            )}
        </>)
}

export default BlogMaps