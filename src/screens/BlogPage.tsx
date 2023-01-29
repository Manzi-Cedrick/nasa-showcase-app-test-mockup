import React,{useState,useContext} from 'react'
import { createContext } from "react";
import SingleBlog from '../components/SingleBlog';
import BlogLayout from '../layouts/BlogLayout'
import { SearchContext } from '../SearchContext';

const BlogPage = () => {
    // const [images, setImages] = useState([]);
    const {searchText} = useContext(SearchContext)
    
    // useEffect(() => {
    //   fetch('https://images-api.nasa.gov')
    //     .then(response => response.json())
    //     .then(data => setImages(data));
    // }, []);
    // console.log("The images:",images)
  return (
    <BlogLayout>
        <div className='py-10 min-w-screen px-4 lg:px-20'>
            <SingleBlog/>
        </div>
    </BlogLayout>
  )
}

export default BlogPage