export const fileUpload = async (file) => {
  if (!file) throw new Error('File is required')
  const cloudURL = 'https://api.cloudinary.com/v1_1/mastercr/image/upload'
  const formData = new FormData()
  formData.append('upload_preset', 'react-journal')
  formData.append('file', file)

  try {
    const response = await fetch(cloudURL, {
      method: 'POST',
      body: formData
    })
    console.log(response)
    if (!response.ok) throw new Error('Upload Failed')

    const res = await response.json()
    return res.secure_url
  } catch (error) {
    console.log(error)
    throw Error(error.message)
  }
}
