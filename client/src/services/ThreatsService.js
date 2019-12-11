const baseURL = 'http://localhost:3000/api/threats/'

export default {
  getThreats(){
    return fetch(baseURL)
    .then(res => res.json())
  }
}
