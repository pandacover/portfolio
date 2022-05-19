import React from 'react'

const Loader: React.FC = () => (
    <div className='w-full h-full flex items-center justify-center'>
        <div className='custom-loader w-8 h-8 border-2 rounded-full animate-spin' />
    </div>
)

export default Loader
