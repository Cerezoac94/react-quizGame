import { useState, useEffect } from 'react'
import { preg } from '../utils/constants'

const useQuestions = (difficulty, totalQuestions) => {
	const [questions, setQuestions] = useState([])
	const [options, setOptions] = useState([])
	const [answers, setAnswers] = useState([])
	// const [loading, setLoading] = useState(false)
	const handleRandomData = () => {
		return Math.random() - 0.5
	}
	const dataQuestions = preg
		.find(elem => Object.keys(elem)[0] == difficulty)
		[difficulty].sort(handleRandomData)
		.slice(0, totalQuestions)

	const handleSetDataQuestions = dq => {
		const newQuestions = []
		const newOptions = []
		const newAnswers = []
		for (const q of dq) {
			newQuestions.push([q?.pregunta])
			newOptions.push(
				[...q?.respuestas_incorrectas, q?.respuesta_correcta].sort(
					handleRandomData
				)
			)
			newAnswers.push(q.respuesta_correcta)
		}
		setQuestions(newQuestions)
		setOptions(newOptions)
		setAnswers(newAnswers)
	}

	useEffect(() => {
		handleSetDataQuestions(dataQuestions)
	}, [])
	return { questions, options, answers }
}
export default useQuestions
