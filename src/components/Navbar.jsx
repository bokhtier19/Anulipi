import React, { useState } from 'react';
import { IoLogoAngular } from 'react-icons/io';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoMdSearch } from 'react-icons/io';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoHomeOutline } from 'react-icons/io5';
import { MdOutlineCategory } from 'react-icons/md';
import { GoPencil } from 'react-icons/go';
import { CgProfile } from 'react-icons/cg';
import { IoIosMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {
	const [isSmall, setIsSmall] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div className='relative flex items-center justify-around'>
				<div className={`${isSmall ? 'hidden' : 'block'} font-bold flex items-center`}>
					<IoLogoAngular size={40} />
					<h1>ANULIPI</h1>
				</div>

				{/* ----------Language Selection------------ */}

				<div className='items-center hidden gap-2 px-4 py-2 border-2 border-black rounded-md md:flex'>
					<p>English</p>
					<IoMdArrowDropdown />
				</div>

				{/* -------------Search Bar-------------- */}

				<div className='hidden px-6 py-3 bg-gray-200 border rounded-full md:block'>
					<form action='' className='flex items-center gap-2 px-20 text-white'>
						<IoMdSearch color='gray' />
						<input type='text' placeholder='Search for your desired stories' className='text-white' />
					</form>
				</div>

				<div className='hidden md:flex'>
					<IoMdNotificationsOutline size={25} />
				</div>

				{/* ---------Menu-------------- */}

				<div className='hidden gap-4 md:flex'>
					<Link to={'/'} className='flex flex-col items-center'>
						<IoHomeOutline size={20} />
						<p>Home</p>
					</Link>
					<Link to={'/category'} className='flex flex-col items-center'>
						<MdOutlineCategory size={20} />
						<p>Categories</p>
					</Link>
					<Link to={'/write'} className='flex flex-col items-center'>
						<GoPencil size={20} />
						<p>Write</p>
					</Link>
					<Link to={'/login'} className='flex flex-col items-center'>
						<CgProfile size={20} />
						<p>Sign In</p>
					</Link>
				</div>

				{/* -----------Menu for Mobile------------ */}

				<div className={`${isSmall ? 'hidden' : 'block'} flex md:hidden justify-end mr-4 hover:cursor-pointer`} onClick={() => setIsSmall(!isSmall)}>
					<IoIosMenu size={40} color='' />
				</div>

				<div className={`${isSmall ? 'block' : 'hidden'} absolute md:hidden bg-black w-full  p-4 rounded-md top-0 left-0 right-0 z-50 transition-all ease-in-out`}>
					<div onClick={() => setIsSmall(!isSmall)} className='flex items-end justify-end mr-4 hover:cursor-pointer'>
						<RxCross2 color='white' size={40} />
					</div>
					<ul className='flex flex-col items-center gap-8 py-8 text-white uppercase border rounded-lg'>
						<Link to={'/'} className='flex items-center gap-2' onClick={() => setIsSmall(!isSmall)}>
							<IoHomeOutline size={20} />
							<p>Home</p>
						</Link>
						<Link to={'/category'} className='flex items-center gap-2' onClick={() => setIsSmall(!isSmall)}>
							<MdOutlineCategory size={20} />
							<p>Categories</p>
						</Link>
						<Link to={'/write'} className='flex items-center gap-2' onClick={() => setIsSmall(!isSmall)}>
							<GoPencil size={20} />
							<p>Write</p>
						</Link>
						<Link to={'/login'} className='flex items-center gap-2' onClick={() => setIsSmall(!isSmall)}>
							<CgProfile size={20} />
							<p>Sign In</p>
						</Link>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Navbar;
