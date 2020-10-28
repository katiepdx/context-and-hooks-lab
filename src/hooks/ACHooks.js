// animal crossing hooks
import React, { useState, useEffect } from 'react'
import { getAllCharacters } from '../services/AC-api'

export const useAllCharacters = () => {
  const [loading, setLoading] = useState(true)
  const [characters, setCharacters] = useState([])

  useEffect(async () => {
    const characters = await getAllCharacters()
    setCharacters(characters)
    setLoading(false)
  }, [])

  return {
    loading,
    characters
  }
}
