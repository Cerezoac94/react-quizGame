import { useContext } from 'react'
import { menuContext } from '../../../context/MenuContext/'
import { useGame } from '../../../hooks/useGame'
const CardQuestion = () => {
	const { difficulty, totalQuestions } = useContext(menuContext) //acceder desde el custom hook
	const { questionNumber, handleQuestionNumber } = useGame()

	// console.log('Esto es la dificultad desde el contexto', difficulty)
	// console.log('Esto es el total de preguntas desde el contexto', totalQuestions)
	// console.log(
	// 	'Esto es el numero de pregunta desde el customHook',
	// 	questionNumber
	// )

	return <div>CardQuestion</div>
}
export default CardQuestion
