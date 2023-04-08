import Button from '../../../../components/button/Button'
import { useContext } from 'react'
import { menuContext } from '../../../../context/MenuContext'
const TotalQuestionMenu = () => {
	const { handleTotalQuestions } = useContext(menuContext)
	return (
		<section>
			<h2>Selecciona la cantidad de preguntas</h2>
			<section>
				<Button f={() => handleTotalQuestions(5)} text='5' />
				<Button f={() => handleTotalQuestions(10)} text='10' />
				<Button f={() => handleTotalQuestions(15)} text='15' />
				<Button f={() => handleTotalQuestions(20)} text='20' />
			</section>
		</section>
	)
}

export default TotalQuestionMenu

