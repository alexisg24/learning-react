import { GifItem } from './'
import { useFetchGifs } from '../hooks/useFetchGifs'
import PropTypes from 'prop-types'

const GifGrid = ({ category }) => {
  const { images = [], isLoading } = useFetchGifs(category)
  return (
    <>
      {isLoading && <h2 style={{ textAlign: 'center' }}>Loading...</h2>}
      <h3>{category}</h3>
      <section className='card-grid'>
        {
          images.map((img) => (
            <GifItem
              key={img.id}
              {...img}
            />
          ))
        }
      </section>
    </>
  )
}
GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}

export { GifGrid }
