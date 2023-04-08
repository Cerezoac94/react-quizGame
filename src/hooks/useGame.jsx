import { useState } from 'react'
export const useGame = () => {
	const [questionNumber, setQuestionNumber] = useState(1)

	const handleQuestionNumber = totalQuestions => {
		// validar no excederse de total questions
		setQuestionNumber(questionNumber + 1)
	}

	return { questionNumber, handleQuestionNumber }
}
