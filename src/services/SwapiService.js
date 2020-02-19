export default class swapiService {
  _nameUrl = "https://swapi.co/api"

  getAnswer = async url => {
    const res = await fetch(`${this._nameUrl}${url}`)
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `received ${res.status}`)
    }

    return await res.json()
  }

  getAllPeople = async () => {
    const res = await this.getAnswer(`/people/`)
    return res.results.map(this._transformPerson)
  }

  getPerson = async id => {
    const person = await this.getAnswer(`/people/${id}/`)
    return this._transformPerson(person)
  }

  getAllStarships = async () => {
    const res = await this.getAnswer(`/starships/`)
    return res.results.map(this._transformStarship)
  }

  getStarship = async id => {
    const starship = await this.getAnswer(`/starships/${id}/`)
    return this._transformStarship(starship)
  }

  getAllPlanets = async () => {
    const res = await this.getAnswer(`/planets/`)
    return res.results.map(this._transformPlanets)
  }

  getPlanet = async id => {
    const planet = await this.getAnswer(`/planets/${id}/`)
    return this._transformPlanets(planet)
  }

  getIdItem = item => {
    const idRegExp = /\/([0-9]*)\/$/
    return item.url.match(idRegExp)[1]
  }

  _transformPlanets = planet => {
    return {
      id: this.getIdItem(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  _transformPerson = person => {
    return {
      id: this.getIdItem(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
      hairColor: person.hair_color,
      height: person.height,
      mass: person.mass,
      skinColor: person.skin_color
    }
  }

  _transformStarship = starship => {
    return {
      id: this.getIdItem(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity
    }
  }
}
