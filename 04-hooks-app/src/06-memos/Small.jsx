import React from 'react'

const Small = React.memo(({ value }) => {
  console.log('Generado!')
  return (<small>{value}</small>)
})

export { Small }
