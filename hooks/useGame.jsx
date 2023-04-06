import { useState } from 'react'
export const useGame = totalQuestions => {
	const [questionNumber, setQuestionNumber] = useState(0)
	const [hits, setHits] = useState(0)
	return { questionNumber, hits }
}
