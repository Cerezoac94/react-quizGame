import { createContext, useState } from 'react'

export const menuContext = createContext()
const { Provider } = menuContext

const MenuContext = ({ children }) => {
	const [difficulty, setDifficulty] = useState('Fácil')
	const [totalQuestions, setTotalQuestions] = useState(5)

	const handleDifficulty = value => {
		setDifficulty(value)
	}
	const handleTotalQuestions = value => {
		setTotalQuestions(value)
	}

	const resetGame = () => {
		setDifficulty('fácil')
		setTotalQuestions(5)
	}

	const menuData = {
		difficulty,
		handleDifficulty,
		totalQuestions,
		handleTotalQuestions,
		resetGame,
	}
	return <Provider value={menuData}>{children}</Provider>
}
export default MenuContext
