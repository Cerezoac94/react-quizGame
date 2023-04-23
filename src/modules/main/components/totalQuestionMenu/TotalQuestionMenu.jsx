import Button from '../../../../components/button/Button'
import { useContext } from 'react'
import { menuContext } from '../../../../context/MenuContext'
const TotalQuestionMenu = () => {
	const { handleTotalQuestions } = useContext(menuContext)
	return (
		<section className='flex flex-col items-center gap-3 w-[320px]'>
			<h2 className='text-3xl font-semibold'>
				Selecciona la cantidad de preguntas
			</h2>
			<section className='flex flex-wrap justify-center gap-3'>
				<Button f={() => handleTotalQuestions(5)} text='5' />
				<Button f={() => handleTotalQuestions(10)} text='10' />
				<Button f={() => handleTotalQuestions(15)} text='15' />
				<Button f={() => handleTotalQuestions(20)} text='20' />
			</section>
		</section>
	)
}

export default TotalQuestionMenu
