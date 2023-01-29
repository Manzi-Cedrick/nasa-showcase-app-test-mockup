import React from 'react'

const SingleBlog = () => {
    return (
        <div className='blog-showcase hover:cursor-pointer hover:bg-slate-800 px-5 gap-8 duration-500 flex lg:flex-row flex-col py-4 place-items-center'>
            <div className='px-0 min-w-[50%] overflow-hiden rounded-sm'>
                <img className='w-full hover:scale-100 h-full rounded-lg object-cover ' src='https://www.pixelstalk.net/wp-content/uploads/2016/05/Nasa-Wallpaper-Desktop-HD-Free-Download.jpeg' alt='hd-' />
            </div>
            <div className=' bg-lue-500'>
                <h1 className='py-4 border-b-2 border-white text-3xl font-serif '>
                    Steps Taken by Nasa to minimize the spread of Covid 19
                </h1>
                <p className='py-6'>
                    This month marks the 50th anniversary of NASA’s Apollo 8 mission, which was the first to bring humans to another world as they orbited the Moon on Christmas Eve, 1968.   To commemorate this historic event in human spaceflight and NASA’s history, Smithsonian’s National Air and Space Museum will present “Spirit of Apollo,” a program celebrating the milestone Apollo 8 mission, which brought humanity together and pushed the limits of exploration.   The event took place at 8 p.m. EST, Tuesday, Dec. 11, at Washington National Cathedral.
                </p>
                <div className='flex place-items-end flex-row flex-1 justify-end'>
                    <p className='font-semibold'>02.03.2022</p>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog