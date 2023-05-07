import { useState } from 'react'

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])
  return (
    <>
      {/* Title */}
      <h1>Gif Expert App</h1>
      {/* Input */}
      <ol>
        {categories.map(category => {
          return (<li key={category}>{category}</li>)
        })}
      </ol>
      {/* Item list > Gif Item */}
    </>
  )
}

export { GifExpertApp }
