import { useMenu } from "../../../../../hooks/useMenu"
import Button from "../../../../components/button/Button"

const TotalQuestionMenu = () => {
	const {handleTotalQuestions} = useMenu()
	return (
		<section>
			<h2>Selecciona la cantidad de preguntas</h2>
			<section>
				<Button onlick={() => handleTotalQuestions(5)} text={5}/>
				<Button onlick={() => handleTotalQuestions(10)} text={10}/>
				<Button onlick={() => handleTotalQuestions(15)} text={15}/>
				<Button onlick={() => handleTotalQuestions(20)} text={20}/>
			</section>
		</section>
	)
}

export default TotalQuestionMenu
