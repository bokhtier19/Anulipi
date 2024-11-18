import React from 'react';
import bgImage from '../assets/bg.webp';

const Write = () => {
	return (
		<div className='write bg-[#F8F8F8] flex justify-center'>
			<div className='box flex flex-col gap-4 ml-10 mt-10 p-10 w-full md:w-[80%]'>
				<div className='p-2 bg-white border writebox'>
					<div className='flex flex-col items-center gap-4 p-8 text-white bg-gray-400 graybox'>
						<h2 className='text-xl text-nowrap'> You can write on Pratilipi! </h2>
						<button className='w-40 p-4 bg-red-600 rounded-md'>Add New Content</button>
					</div>
				</div>

				<div className='overflow-hidden bg-white border eventbox'>
					<h2 className='text-xl ml-3 border-l-[3px] border-red-600 pl-2'>Events</h2>
					<img src={bgImage} alt='' className='w-full p-3' />
				</div>
				<div className='overflow-hidden bg-white border blogbox'>
					<h2 className='text-xl ml-3 border-l-[3px] border-red-600 pl-2'>Blog and Editorial</h2>
					<img src={bgImage} alt='' className='w-full p-3' />
				</div>
			</div>
		</div>
	);
};

export default Write;
