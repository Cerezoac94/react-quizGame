import { useContext, useEffect } from 'react'
import { menuContext } from '../../../context/MenuContext/'
import CardQuestion from './CardQuestion'
import useQuestions from '../../../hooks/useQuestions'
import { gameContext } from '../../../context/GameContext'

const CardQuestionContainer = () => {
	const { difficulty, totalQuestions } = useContext(menuContext)
	const dataQuestions = useQuestions(difficulty, totalQuestions)
	const { handleQuestions } = useContext(gameContext)

	useEffect(() => {
		if (dataQuestions) {
			handleQuestions(dataQuestions)
		}
	}, [dataQuestions])

	return <CardQuestion />
}

export default CardQuestionContainer
