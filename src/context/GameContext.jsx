import { useState, createContext, useEffect } from 'react'

export const gameContext = createContext()
const { Provider } = gameContext

const GameContext = ({ children }) => {
	const [questions, setQuestions] = useState([])
	const [options, setOptions] = useState([])
	const [answers, setAnswers] = useState([])
	const [hits, setHits] = useState(0)

	const handleRandomOptions = () => {
		return Math.random() - 0.5
	}
	const handleQuestions = dq => {
		console.log(dq)
		console.log(questions)
		for (const q of dq) {
			setQuestions(questions.push([q?.pregunta]))
			setOptions(
				options.push(
					[...q?.respuestas_incorrectas, q?.respuesta_correcta].sort(
						handleRandomOptions
					)
				)
			)
			setAnswers(answers.push(q.respuesta_correcta))
		}
		console.log(options)
		console.log(questions)
	}
	console.log(options)
	useEffect(() => {
		if (!options.length) return
		console.log(options)
	}, [options])

	const handleHits = (value, qn) => {
		if (value == answers[qn]) setHits(hits + 1)
	}

	const dataGame = {
		handleQuestions,
		handleHits,
		questions,
		options,
		hits,
	}

	return <Provider value={dataGame}>{children}</Provider>
}

export default GameContext
