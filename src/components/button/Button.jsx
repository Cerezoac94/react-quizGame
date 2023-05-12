const Button = ({ text, f, active }) => {
	return (
		<section>
			<button
				className={` hover:bg-blue-700 text-2xl text-white font-semibold py-4 px-4 rounded-lg w-[130px] ${
					active ? 'bg-blue-700' : 'bg-blue-500'
				}`}
				onClick={f}>
				{text}
			</button>
		</section>
	)
}
export default Button
