import { useEffect, useState } from 'react'

export const useGame = () => {
	const [questionNumber, setQuestionNumber] = useState(1)
	const [question, setQuestion] = useState('')
	const [options, setOptions] = useState([])
	const handleQuestion = () => {
		// setQuestion(questions[questionNumber - 1])
		// setOptions(dataOptions[questionNumber - 1])
		// setear pregunta y opciones de respuesta
	}
	// useEffect(() => {
	// 	if (!questions) return
	// 	handleQuestion()
	// }, [questions])

	const handleQuestionNumber = () => {
		// validar no excederse de total questions
		setQuestionNumber(questionNumber + 1)
		handleQuestion()
	}

	return { questionNumber, handleQuestionNumber, question, options }
}
