import { useEffect } from 'react'

const Message = () => {
  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      console.log(e)
    })

    return () => {
      console.log('Message unmounted')
    }
  }, [])
  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  )
}

export { Message }
