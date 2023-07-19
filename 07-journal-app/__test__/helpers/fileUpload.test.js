import { v2 as cloudinary } from 'cloudinary'
import { fileUpload } from '../../src/helpers'

cloudinary.config({
  cloud_name: 'mastercr',
  api_key: '299494337528587',
  api_secret: '', // secret
  secure: true
})
describe('Tests in FileUpload', () => {
  test('should upload the file to cloudinary', async () => {
    const imgUrl = 'https://cdn.pixabay.com/photo/2023/07/06/07/40/antarctica-8109879_1280.jpg'
    const resp = await fetch(imgUrl)
    const blob = await resp.blob()
    const file = new File([blob], 'test-img.jpg')
    const url = await fileUpload(file)
    expect(typeof url).toBe('string')

    const segments = url.split('/')
    const imageId = segments[segments.length - 1].replace('.jpg', '')
    await cloudinary.api.delete_resources([`journal-app/${imageId}`], { resource_type: 'image' })
  })

  test('should return null', async () => {
    const file = new File([], 'test-img.jpg')
    const url = await fileUpload(file)
    expect(url).toBe(null)
  })
})
