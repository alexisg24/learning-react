export const fileUpload = async (file) => {
  if (!file) return null
  const cloudURL = 'https://api.cloudinary.com/v1_1/mastercr/image/upload'
  const formData = new FormData()
  formData.append('upload_preset', 'react-journal')
  formData.append('file', file)

  try {
    const response = await fetch(cloudURL, {
      method: 'POST',
      body: formData
    })
    if (!response.ok) throw new Error('Upload Failed')

    const res = await response.json()
    return res.secure_url
  } catch (error) {
    return null
  }
}
