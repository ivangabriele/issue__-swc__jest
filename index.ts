import ky from 'ky-universal'

export async function getBreweries() {
  const { data } = await ky.get('https://api.openbrewerydb.org/breweries').json()

  return data
}
