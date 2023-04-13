import { useState, useEffect } from 'react'
import { preg } from '../utils/constants'

const useQuestions = (difficulty, totalQuestions) => {
	const [questions, setQuestions] = useState()
	const dataQuestions = preg.find(elem => Object.keys(elem)[0] == difficulty)

	useEffect(
		() =>
			handleSetQuestions(dataQuestions[difficulty].slice(0, totalQuestions)),
		[]
	)

	const handleSetQuestions = dt => {
		setQuestions(dt)
	}

	return questions
}
export default useQuestions
