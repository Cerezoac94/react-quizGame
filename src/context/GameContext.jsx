import { useState, createContext } from 'react'

export const gameContext = createContext()
const { Provider } = gameContext

const GameContext = ({ children }) => {
	const [hits, setHits] = useState(0)

	const handleHits = () => {
		setHits(hits + 1)
	}

	const dataGame = {
		handleHits,
		hits,
	}

	return <Provider value={dataGame}>{children}</Provider>
}

export default GameContext
