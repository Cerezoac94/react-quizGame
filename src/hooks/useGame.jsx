import { useEffect, useState } from 'react'

export const useGame = (handleHits, op, questions) => {
	const [questionNumber, setQuestionNumber] = useState(0)
	const [question, setQuestion] = useState('')
	const [options, setOptions] = useState([])

	const handleQuestion = qn => {
		setQuestion(questions[qn])
		setOptions(op[qn])
	}

	const handleDataQuestion = v => {
		setQuestionNumber(questionNumber + 1)
		handleHits(v, questionNumber)
		handleQuestion(questionNumber + 1)
	}
	useEffect(() => {
		if (questions.length) handleQuestion(questionNumber)
	}, [questions])

	return {
		questionNumber,
		question,
		options,
		handleDataQuestion,
	}
}
