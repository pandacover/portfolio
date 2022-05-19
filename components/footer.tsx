import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
    const youtubeURL = 'https://www.youtube.com/devaslife'
    return (
        <footer className='h-16 mt-12 w-full'>
            <div className='absolute bottom-4 text-sm w-full h-16 flex items-center justify-center'>
                <span className='opacity-40'>© 2022 Luv Makin. All Rights Reserved.</span>
                <span className='opacity-30 dark:opacity-20'>&nbsp;Inspired by </span>
                <Link href={youtubeURL} passHref>
                    <a className='text-red-400 opacity-30 dark:opacity-20 hover:opacity-60 dark:hover:opacity-60 transition'>@devaslife</a>
                </Link>
            </div>
        </footer>
    )
}

export default Footer
