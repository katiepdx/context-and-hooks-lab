// animal crossing api fetch

export const getAllCharacters = async () => {
  const res = await fetch('https://cors-anywhere.herokuapp.com/https://ac-vill.herokuapp.com/villagers', {
    header: {
      Origin: null
    }
  })

  const data = await res.json()

  if (!res.ok) throw ('Error, cannot fetch from API')

  return data
}
