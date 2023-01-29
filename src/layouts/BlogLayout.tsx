import React from 'react'
import Header from './Header'

const BlogLayout = ({children}:{children: JSX.Element}) => {
    return (
        <div className='bg-[#232532] text-white min-h-screen'>
            <Header/>
            {children}
        </div>
    )
}

export default BlogLayout