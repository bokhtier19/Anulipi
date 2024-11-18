import React from 'react';

const Copyright = () => {
	return (
		<div className='flex items-center justify-center text-sm bg-gray-900 copyright'>
			<div className='flex flex-wrap items-center justify-center gap-3 p-4 text-white box md:flex-row '>
				&#169; 2024 Bokhtier and Sons' Pvt. Ltd.
				<div>|</div>
				<a href='/' className=' hover:underline'>
					About Us
				</a>
				<div>|</div>
				<a href='/' className=' hover:underline'>
					Work With Us
				</a>
				<div>|</div>
				<a href='/' className=' hover:underline'>
					Privacy Policy
				</a>
				<div>|</div>
				<a href='/' className=' hover:underline'>
					Terms
				</a>
				<div>|</div>
				<a href='/' className=' hover:underline'>
					Vulnerability Discolsure Policy
				</a>
				<div>|</div>
				<a href='/' className=' hover:underline'>
					Hall of Fame
				</a>
			</div>
		</div>
	);
};

export default Copyright;
