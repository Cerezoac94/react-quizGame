import { useState } from 'react'

export const useMenu = () => {
	const [difficulty, setDifficulty] = useState('fácil')
	const [totalQuestions, setTotalQuestions] = useState(5)
	const [page, setPage] = useState(1)

	const handleDifficulty = value => {
		setDifficulty(value)
	}
	const handleTotalQuestions = value => {
		setTotalQuestions(value)
	}
	const resetGame = () => {
		setPage(1)
		setDifficulty('fácil')
		setTotalQuestions(5)
	}
	const handlePage = () => {
		setPage(page + 1)
	}
	return {
		difficulty,
		totalQuestions,
		page,
		handlePage,
		resetGame,
		handleDifficulty,
		handleTotalQuestions,
	}
}
