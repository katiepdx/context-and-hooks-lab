import React from 'react'
import { render } from '@testing-library/react'
import VillagerItem from './VillagerItem'

describe('Test VillagerItem Component', () => {
  it('tests that the VillagerItem renders an image of a villager with the name underneath', () => {
    const { asFragment } = render(
      <VillagerItem
        name="Admiral"
        image="https://vignette.wikia.nocookie.net/animalcrossing/images/e/ed/Admiral_NH.png/revision/latest?cb=20200802081138"
      />
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
