import { getAllCategory } from '@/Request/Request'
import React from 'react'

const Catagory = async() => {
    const categories: string[] = await getAllCategory()

    return (
        <div className="pt-16 pb-12">
            <h1 className='text-center font-serif font-bold text-3xl capitalize text-indigo-600'>Shop By Categories</h1>
            
            {/* Define grid */}
            <div className="mt-12 w-4/5 mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 cursor: pointer;">
                {categories.map((category, index) => (
                    <div 
                        key={index} 
                        className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg shadow-lg p-6 transform transition-transform duration-500 hover:scale-110 hover:shadow-2xl hover:from-purple-500 hover:to-pink-500
                        cursor: pointer;"
                    >
                        <h2 className="text-lg font-bold capitalize text-white text-center transition-colors duration-300 hover:text-yellow-300	cursor: pointer;">{category}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Catagory
