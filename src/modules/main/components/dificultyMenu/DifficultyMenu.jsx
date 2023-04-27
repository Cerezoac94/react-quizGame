import Button from '../../../../components/button/Button'
import { useContext } from 'react'
import { menuContext } from '../../../../context/MenuContext'

const DifficultyMenu = () => {
	const { handleDifficulty } = useContext(menuContext)
	return (
		<section className='flex flex-col items-center gap-3 w-[320px] h-[200px]'>
			<h1 className='text-3xl font-semibold'>Selecciona una Dificultad</h1>
			<section className='flex flex-wrap justify-center gap-3'>
				<Button f={() => handleDifficulty('Fácil')} text='Fácil' />
				<Button f={() => handleDifficulty('Medio')} text='Medio' />
				<Button f={() => handleDifficulty('Difícil')} text='Difícil' />
				<Button
					f={() => handleDifficulty('Extra difícil')}
					text='Extra difícil'
				/>
			</section>
		</section>
	)
}
export default DifficultyMenu
