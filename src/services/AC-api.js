// animal crossing api fetch

export const getAllCharacters = async (pageCount = 1) => {
  const res = await fetch(`https://cors-anywhere.herokuapp.com/https://ac-vill.herokuapp.com/villagers/?page=${pageCount}`, {
    header: {
      Origin: null
    }
  })

  const data = await res.json()

  if (!res.ok) throw ('Error, cannot fetch from API')

  return data
}
