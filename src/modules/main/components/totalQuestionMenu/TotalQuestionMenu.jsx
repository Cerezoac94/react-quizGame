import Button from '../../../../components/button/Button'
import { useContext } from 'react'
import { menuContext } from '../../../../context/MenuContext'
import { useActive } from '../../../../hooks/useActive'
const TotalQuestionMenu = () => {
	const { handleTotalQuestions, totalQuestions } = useContext(menuContext)
	const { active, handleActive } = useActive(totalQuestions)
	return (
		<section className='flex flex-col items-center gap-3 w-[320px] h-[200px]'>
			<h2 className='text-3xl font-semibold'>
				Selecciona la cantidad de preguntas
			</h2>
			<section className='flex flex-wrap justify-center gap-3'>
				<Button
					f={() => {
						handleTotalQuestions(5)
						handleActive(5)
					}}
					text='5'
					active={active === 5}
				/>
				<Button
					f={() => {
						handleTotalQuestions(10)
						handleActive(10)
					}}
					text='10'
					active={active === 10}
				/>
				<Button
					f={() => {
						handleTotalQuestions(15)
						handleActive(15)
					}}
					text='15'
					active={active === 15}
				/>
				<Button
					f={() => {
						handleTotalQuestions(20)
						handleActive(20)
					}}
					text='20'
					active={active === 20}
				/>
			</section>
		</section>
	)
}

export default TotalQuestionMenu
