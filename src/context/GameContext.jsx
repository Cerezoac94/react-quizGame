import { useState, createContext, useEffect } from 'react'

export const gameContext = createContext()
const { Provider } = gameContext

const GameContext = ({ children }) => {
	const [questions, setQuestions] = useState([])
	const [options, setOptions] = useState([])
	const [answer, setAnswer] = useState([])
	const [hits, setHits] = useState(0)

	const handleQuestions = (q, o, a) => {
		setQuestions(q)
		setOptions(o)
		setAnswer(a)
	}

	const handleHits = (value, qn) => {
		if (value == answer[qn]) setHits(hits + 1)
	}

	const resetHits = () => setHits(0)

	const dataGame = {
		handleQuestions,
		handleHits,
		resetHits,
		questions,
		options,
		hits,
	}

	return <Provider value={dataGame}>{children}</Provider>
}

export default GameContext
