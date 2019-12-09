const baseURL = 'http://localhost:3000/api/continents/'

export default {
  getContinents(){
    return fetch(baseURL)
    .then(res => res.json())
  }
}
