
const getImagen = async () => {
  try {
    const apiKey = 'V9ut0bCPqv7ut7ZOIVBp3VGQoG3zd19v'
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const { data } = await resp.json()
    const { url } = data.images.original
    return url
  } catch (error) {
    return 'Img not found'
  }
}

export default getImagen
