export default class swapiServer {
  _nameUrl = "https://swapi.co/api"

  async getAnswer(url) {
    const res = await fetch(`${this._nameUrl}${url}`)
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `received ${res.status}`)
    }

    return await res.json()
  }

  async getAllPeople() {
    const res = await this.getAnswer(`/people/`)
    return res.results
  }

  getPerson(id) {
    return this.getAnswer(`/people/${id}/`)
  }

  async getAllStarships() {
    const res = await this.getAnswer(`/starships/`)
    return res.results
  }

  getStarship(id) {
    return this.getAnswer(`/starships/${id}/`)
  }

  async getAllPlanets() {
    const res = await this.getAnswer(`/planets/`)
    return res.results
  }

  getPlanet(id) {
    return this.getAnswer(`/planets/${id}/`)
  }
}

const swapi = new swapiServer()

swapi.getAllPlanets().then(planets => {
  planets.forEach(p => {
    console.log(p.name)
  })
})