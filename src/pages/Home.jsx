import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import Poster from '../assets/marathonPoster.webp';
import Section from '../components/Section';
import { cardData, cats } from '../assets/assets.js';

const Home = () => {
	return (
		<div className='homescreen bg-[#F8F8F8] flex justify-center'>
			<div className='box flex flex-col gap-4 w-[80%] my-10'>
				<div className='headings'>
					<h1 className='text-4xl font-bold text-nowrap'>Read English Stories</h1>
					<h2 className='text-2xl text-gray-500'>A world of stories</h2>
				</div>

				<Section title='Top Trending Series' link='/' items={cardData} />
				<Section title='Top Recently Updated Series' link='/' items={cardData} />
				<Section title='Drama Series' link='/' items={cardData} />

				<div className='categories'>
					<Link to={'/categories'}>
						<div className='flex justify-between categories'>
							<h1 className='mb-0 font-bold hover:cursor-pointer'>Explore Categories</h1>
							<button>
								<FaArrowRightLong />
							</button>
						</div>
					</Link>

					{/* ------------Category Cards -------------- */}

					<div>
						<div className='grid grid-cols-1 gap-4 mt-6 cards md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
							{cats.slice(0, 4).map((kat) => (
								<div className='relative h-40 mt-5 transition-all singleCard hover:cursor-pointer hover:scale-105' key={kat.id}>
									<img className='object-cover w-full h-full rounded-md' src='https://images.unsplash.com/photo-1680725779155-456faadefa26' alt={`${kat.title} category`} />
									<div className='absolute inset-0 bg-gray-700 rounded-md opacity-60'></div>
									<div className='absolute inset-0 flex items-center justify-center'>
										<h2 className='text-3xl font-bold text-white'>{kat.title}</h2>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				<Section title='Science Fiction' link='/' items={cardData} />
			</div>
		</div>
	);
};

export default Home;
