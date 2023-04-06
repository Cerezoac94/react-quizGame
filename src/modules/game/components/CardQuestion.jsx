import { useMenu } from '../../../../hooks/useMenu'
import { useGame } from '../../../../hooks/useGame'
const CardQuestion = () => {
	const { difficulty, totalQuestions } = useMenu()
	// const {} = useGame()
	console.log(difficulty)
	return <div>CardQuestion</div>
}
export default CardQuestion
