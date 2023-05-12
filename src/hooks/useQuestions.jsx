import { useState, useEffect } from 'react'
import { preg } from '../utils/constants'

const useQuestions = (difficulty, totalQuestions) => {
	const [questions, setQuestions] = useState([])
	const [options, setOptions] = useState([])
	const [answers, setAnswers] = useState([])
	// sort para sortear las opciones y no siempre aparezcan en la misma posición las respuestas
	const handleRandomData = () => {
		return Math.random() - 0.5
	}
	// buscar preguntas con la dificultad seleccionada y la cantidad
	const dataQuestions = preg
		.find(elem => Object.keys(elem)[0] == difficulty)
		[difficulty].sort(handleRandomData)
		.slice(0, totalQuestions)

	// se separa la data de preguntas, preguntas en un array, opciones en un array, y las respuestas correctas en un array
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
	// al inicio del componente se manda la data questions a la funcion que separara esa información en arrays
	useEffect(() => {
		handleSetDataQuestions(dataQuestions)
	}, [])
	return { questions, options, answers }
}
export default useQuestions
