const Button = ({ text, f, active }) => {
	return (
		<section>
			<button
				className={` hover:bg-blue-700 text-xl md:text-2xl text-white font-semibold p-2 md:p-4 rounded-lg w-[100px]  md:w-[130px] ${
					active ? 'bg-blue-700' : 'bg-blue-500'
				}`}
				onClick={f}>
				{text}
			</button>
		</section>
	)
}
export default Button
