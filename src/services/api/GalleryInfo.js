import axios from '../config/axios';

export default {
  getGalleries () {
    return axios.get('/gallery', {params: {
      apikey: '91cd83a0-12bb-11e9-90d1-473127181d8c',
      size: 100
    }})
    .then(response => {
      return response.data.records.filter(record => {
        return record.theme && record.labeltext
      })
      .sort((a, b) => a.floor - b.floor)
    })
  }
}