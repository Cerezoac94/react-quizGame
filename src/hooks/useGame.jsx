import { useContext, useEffect, useState } from 'react'
import { gameContext } from '../context/GameContext'

export const useGame = () => {
	const {
		questions,
		options: dataOptions,
		handleHits,
	} = useContext(gameContext)
	const [questionNumber, setQuestionNumber] = useState(1)
	const [question, setQuestion] = useState('')
	const [options, setOptions] = useState([])
	console.log(questions)
	console.log(dataOptions)
	const handleQuestion = () => {
		setQuestion(questions[questionNumber - 1])
		setOptions(dataOptions[questionNumber - 1])
	}
	useEffect(() => {
		if (!questions) return
		handleQuestion()
	}, [questions])

	const handleQuestionNumber = () => {
		// validar no excederse de total questions
		setQuestionNumber(questionNumber + 1)
		handleQuestion()
	}

	return { questionNumber, handleQuestionNumber, question, options }
}
