import axios from '../config/axios';

export default {
  getArt(galleryId) {
    return axios.get('/object', {params: {
      apikey: '91cd83a0-12bb-11e9-90d1-473127181d8c',
      size: 50,
      hasimage: 1,
      accesslevel: 1,
      imagepermissionlevel: '0|1',
      gallery: galleryId
    }})
    .then(response => {
      return response.data.records.filter(record => {
        return record.primaryimageurl !== null
      })
      .map(record => {
        const creators = record.people.map(person => person.displayname)
        const { id, title, technique } = record

        return {
          id,
          title,
          description: record.labeltext,
          date: record.dated,
          technique,
          image: record.primaryimageurl,
          creators,
          link: record.url,
        }
      })
    })
  }
}