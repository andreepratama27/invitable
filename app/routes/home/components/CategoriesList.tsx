import React from 'react'

interface CategoriesListInterface {
    categories: string[]
}

const CategoriesList: React.FC<CategoriesListInterface> = ({ categories }) => {
    return (
        <div className="category-wrapper--item my-4">
            <ul>
                {
                    categories.map((item, key) => (
                        <li className="bg-gray-600 p-4 rounded-md flex flex-row items-center gap-3 mb-4 hover:border-purple-400 hover:border-2" key={key}>
                            <div className="indicator bg-green-500 w-3 h-3 rounded-full"></div>
                            <p className='text-white'>{item}</p>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default CategoriesList