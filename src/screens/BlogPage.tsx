import React, { useState, useContext, useEffect } from 'react'
import { createContext } from "react";
import BlogMaps from '../components/BlogMaps';
import SingleBlog from '../components/SingleBlog';
import BlogLayout from '../layouts/BlogLayout'
import { SearchContext } from '../SearchContext';

const BlogPage = () => {
  // const [images, setImages] = useState([]);
  const { dataSearch, searchText ,setDataSearch} = useContext(SearchContext)

  useEffect(()=>{
    const FetchData = async () =>{
      const response = await fetch(`https://images-api.nasa.gov/search?q=${dataSearch}`);
      const datas = await response.json();
      setDataSearch(datas?.collection?.items)
    }
    FetchData();
  },[])
  return (
    <BlogLayout>
      <div className='py-10 min-w-screen px-4 lg:px-20'>
        <SingleBlog />
        <div className=''>
          <h1 className='py-6 font-bold text-2xl border-b-2 border-white'>Recent Posts</h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 pt-10 bg-ble-500 '>
            {searchText ? <BlogMaps /> : (
              <p>No data</p>
            )}
          </div>
        </div>
      </div>
    </BlogLayout>
  )
}

export default BlogPage