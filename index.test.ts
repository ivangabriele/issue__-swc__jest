import { getBreweries } from '.'

test(`getBreweries()`, async () => {
  const result = await getBreweries()

  expect(Array.isArray(result)).toBe(true)
})
