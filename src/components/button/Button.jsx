const Button = ({ text, f }) => {
	return (
		<section>
			<button
				className='bg-blue-500 hover:bg-blue-700 text-2xl text-white font-semibold py-4 px-4 rounded-lg w-[130px]'
				onClick={f}>
				{text}
			</button>
		</section>
	)
}
export default Button
