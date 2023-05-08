import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch'])

  const onAddCategory = (value) => {
    if (categories.find(category => category.toUpperCase() === value.toUpperCase())) return true
    setCategories(prev => [value, ...prev])
  }
  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {
      categories.map(category => (
        <GifGrid key={category} category={category} />
      ))
      }
    </>
  )
}

export { GifExpertApp }
