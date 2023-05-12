import Button from '../../../../components/button/Button'
import { useContext } from 'react'
import { menuContext } from '../../../../context/MenuContext'
import { useActive } from '../../../../hooks/useActive'

const DifficultyMenu = () => {
	const { handleDifficulty, difficulty } = useContext(menuContext)
	const { active, handleActive } = useActive(difficulty)
	return (
		<section className='flex flex-col items-center gap-3 w-[320px] h-[200px]'>
			<h1 className='text-3xl font-semibold'>Selecciona una Dificultad</h1>
			<section className='flex flex-wrap justify-center gap-3'>
				<Button
					f={() => {
						handleDifficulty('Fácil')
						handleActive('Fácil')
					}}
					text='Fácil'
					active={active === 'Fácil'}
				/>
				<Button
					f={() => {
						handleDifficulty('Medio')
						handleActive('Medio')
					}}
					text='Medio'
					active={active === 'Medio'}
				/>
				<Button
					f={() => {
						handleDifficulty('Difícil')
						handleActive('Difícil')
					}}
					text='Difícil'
					active={active === 'Difícil'}
				/>
				<Button
					f={() => {
						handleDifficulty('Extra difícil')
						handleActive('Extra difícil')
					}}
					text='Extra difícil'
					active={active === 'Extra difícil'}
				/>
			</section>
		</section>
	)
}
export default DifficultyMenu
