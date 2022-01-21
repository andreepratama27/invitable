import React, { useState } from 'react'
import CategoriesList from './components/CategoriesList'
import styles from '~/styles/home.css'
import { MetaFunction } from 'remix'

export const links = () => {
  return [
    { rel: 'stylesheet', href: styles }
  ]
}

export const meta: MetaFunction = () => {
  return {
    title: 'Invitable',
    description: 'App for your invitation'
  }
}

const Home = () => {
  const [item, setItem] = useState('')
  const [categories, setCategories] = useState<string[]>([])

  const onAddTask = (event: React.KeyboardEvent) => {
    if (event.code === 'Enter') {
      setCategories(prevState => [...prevState, item])
      setItem('')
    }
  }

  return (
    <div className="app-wrapper bg-gray-800 h-screen">
      <div className="app-container w-1/2 mx-auto py-10">
        <div className="category-wrapper">
          <div className="category-wrapper--title">
            <p className='text-white text-2xl font-semibold mb-6'>Categories</p>

            <CategoriesList {...{categories}} />
          </div>
        </div>
      </div>

      <div className="w-full absolute bottom-10">
        <div className="input-wrapper w-1/2 mx-auto">
          <input type="text" placeholder='Insert Category' onKeyDown={onAddTask} onChange={({ target }) => setItem(target.value)} className="w-full p-4 rounded-md hover:outline-none" value={item} autoFocus />
        </div>
      </div>
      
    </div>
  )
}

export default Home
