import { useState } from 'react';
import data from './data';
import { BsFillMoonStarsFill } from 'react-icons/bs';

function App() {
	const [count, setCount] = useState(0);
	const [text, setText] = useState([]);
	const [darkMode, setDarkMode] = useState(true);

	const handleSubmit = (e) => {
		e.preventDefault();
		let amount = parseInt(count);
		if (count <= 0) {
			amount = 1;
		}

		setText(data.slice(0, amount));

		if (amount > text.length) {
			amount = text.length;
			console.log(amount);
		}
	};

	return (
		<div className={darkMode ? 'dark' : ''}>
			<div className='bg-gray-100 dark:bg-slate-900 min-h-screen'>
			<div
				className='flex items-center justify-center text-lg md:text-2xl pt-8 -mb-[3rem] cursor-pointer dark:text-yellow-100'
				onClick={() => setDarkMode(!darkMode)}
			>
				<BsFillMoonStarsFill />
				{console.log(darkMode)}
			</div>
			<section className='w-[90vh] mx-auto max-w-[40rem] mt-[5rem] text-center '>
				<h3 className='tracking-[0.1rem] capitalize leading-[1.25] mb-[2rem] text-[1.25rem] md:text-[1.75rem] font-bold dark:text-white'>
					tired of boring lorem ipsum?
				</h3>
				<form
					className='capitalize tracking-[0.1rem] mt-[2rem]mb-[4rem] flex items-center justify-center'
					onSubmit={handleSubmit}
				>
					<label
						htmlFor='amount'
						className='text-[1.25rem] text-gray-800 dark:text-gray-100'
					>
						paragraphs:
					</label>
					<input
						type='number'
						name='amount'
						id='amount'
						value={count}
						onChange={(e) => setCount(e.target.value)}
						className='py-1 px-2 w-[4rem] rounded-md border-none mx-2 text-lg'
					/>
					<button className='bg-gradient-to-r from-sky-500 to-teal-500 px-4 py-2 rounded-md hover:to-sky-500 hover:from-teal-500 transition-all duration-200 font-semibold tracking-[0.1rem] dark:text-white'>
						GENERATE
					</button>
				</form>
				<article className='mt-10 max-w-[40rem] px-6 text-gray-800 font-semibold'>
					{text.map((paragraph, index) => {
						return (
							<p
								key={index}
								className='mt-4 pb-6 text-justify w-lg dark:text-gray-100'
							>
								{paragraph}
							</p>
						);
					})}
				</article>
			</section>
      </div>
		</div>
	);
}

export default App;

