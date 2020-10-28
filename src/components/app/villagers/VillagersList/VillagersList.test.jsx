
import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import VillagersList from './VillagersList'
import { getAllCharacters } from '../../../../services/AC-api'
import { MemoryRouter } from 'react-router-dom'

// mock api call
jest.mock('../../../../services/AC-api')
const data = [
  {
    "_id": "5f5fb4bbbfd05c2aed82e460",
    "url": "https://animalcrossing.fandom.com/wiki/Admiral",
    "name": "Admiral",
    "japaneseName": "イッテツ Ittetsu",
    "image": "https://vignette.wikia.nocookie.net/animalcrossing/images/e/ed/Admiral_NH.png/revision/latest?cb=20200802081138",
    "quote": "Only quitters give up.",
    "gender": "male",
    "personality": "cranky",
    "species": "bird",
    "birthday": "January 27th (Aquarius)",
    "phrase": "aye aye",
    "skill": "Writing about pickles",
    "goal": "Fisherman",
    "coffee": {
      "roast": "Blue Mountain",
      "milk": "The regular amount of milk",
      "sugar": "2 spoonfuls of sugar"
    },
    "song": {
      "name": "Steep Hill",
      "link": "https://animalcrossing.fandom.com/wiki/Steep_Hill"
    },
    "style": "n/a",
    "__v": 0
  },
  {
    "_id": "5f5fb4bbbfd05c2aed82e461",
    "url": "https://animalcrossing.fandom.com/wiki/Agent_S",
    "name": "Agent S",
    "japaneseName": "2ごう Ni Gō",
    "image": "https://vignette.wikia.nocookie.net/animalcrossing/images/a/a7/Agent_S_NH.png/revision/latest?cb=20200719092526",
    "quote": "You gotta put the pedal to the metal!",
    "gender": "female",
    "personality": "peppy",
    "species": "squirrel",
    "birthday": "July 2nd (Cancer)",
    "phrase": "sidekick",
    "skill": "Limboing",
    "goal": "Dancer",
    "coffee": {
      "roast": "Mocha",
      "milk": "The regular amount of milk",
      "sugar": "Two spoonfuls of sugar"
    },
    "song": {
      "name": "Go K.K. Rider",
      "link": "https://animalcrossing.fandom.com/wiki/Go_K.K._Rider"
    },
    "style": "Sporty",
    "__v": 0
  },
  {
    "_id": "5f5fb4bbbfd05c2aed82e462",
    "url": "https://animalcrossing.fandom.com/wiki/Agnes",
    "name": "Agnes",
    "japaneseName": "アグネス Agunesu",
    "image": "https://vignette.wikia.nocookie.net/animalcrossing/images/4/42/Agnes_NH.png/revision/latest?cb=20200804230432",
    "quote": "You reap what you sow.",
    "gender": "female",
    "personality": "sisterly",
    "species": "pig",
    "birthday": "April 21st (Taurus)",
    "phrase": "snuffle",
    "skill": "Cramming for tests",
    "goal": "Pro Golfer",
    "coffee": {
      "roast": "Kilimanjaro",
      "milk": "Lots of milk",
      "sugar": "Three spoonfuls of sugar"
    },
    "song": {
      "name": "K.K. House",
      "link": "https://animalcrossing.fandom.com/wiki/K.K._House"
    },
    "style": "Rock 'n' roll",
    "__v": 0
  }
]

describe('Test VillagersList component', () => {
  it('tests that a list of villagers renders to the page after the loading state is false', async () => {
    getAllCharacters.mockResolvedValue(data)

    // render component 
    render(<MemoryRouter><VillagersList /></MemoryRouter>)

    screen.getByText('Still loading the AC Villagers List...')

    // find displayed ac characters
    const characters = await screen.findByTestId('ac-characters')

    // wait and expect it to not be empty dom el
    return waitFor(() => {
      expect(characters).not.toBeEmptyDOMElement()
    })
  })
})
