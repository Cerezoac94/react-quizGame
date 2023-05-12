const Title = ({ text }) => {
	return (
		<section className='w-full h-28 flex flex-col justify-center border-2 border-white rounded-xl'>
			<h1 className='text-3xl font-semibold md:text-5xl md:font-bold'>
				{text}
			</h1>
		</section>
	)
}
export default Title
