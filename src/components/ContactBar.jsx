import React from 'react';
import AppStore from '../assets/AppStore.png';
import GooglePlay from '../assets/GooglePlay.png';
import { FaFacebook } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { FaYoutube } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';

const ContactBar = () => {
	return (
		<div className='flex flex-col justify-center bg-gray-700 md:flex-row contactbar '>
			<div className='box w-[80%] flex flex-col md:flex-row gap-16 p-10 text-white justify-center'>
				<div className='flex flex-col items-start flex-1 gap-5 applink'>
					<div className='font-bold heading'>
						<h5>Mobile App </h5>
						<hr className=' w-10 h-0.5 bg-red-500 border-0' />
						<div className='flex flex-col items-center gap-0 p-4'>
							<img src={GooglePlay} alt='' className='flex-1 w-45' />
							<img src={AppStore} alt='' className='items-center flex-1 w-full ' />
						</div>
					</div>
				</div>
				<div className='flex flex-col flex-1 gap-2 help-centre'>
					<div className='font-bold heading'>
						<h5>Help Centre </h5>
						<hr className='w-10 h-0.5 bg-red-500 border-0' />
					</div>
					<div className='flex text-sm font-bold writing hover:cursor-pointer hover:underline'>
						<h5>Writing</h5>
					</div>
					<div className='flex text-sm font-bold writing hover:cursor-pointer hover:underline'>
						<h5>Reading</h5>
					</div>
					<div className='flex text-sm font-bold writing hover:cursor-pointer hover:underline'>
						<h5>Copyright</h5>
					</div>
					<div className='flex text-sm font-bold writing hover:cursor-pointer hover:underline'>
						<h5>Genereal</h5>
					</div>
				</div>
				<div className='flex flex-col flex-1 gap-2 leading-7 contact-us text-wrap'>
					<div className='font-bold heading'>
						<h5>Contact Us </h5>
						<hr className=' w-10 h-0.5 bg-red-500 border-0' />
					</div>
					<div className='flex text-sm font-bold writing hover:cursor-pointer hover:underline'>
						<h5>English@stories.com</h5>
					</div>
					<div className='flex text-sm font-bold writing'>
						<p className='text-pretty'>Bokhtier and Sons' Pvt. Ltd. Bokhtier Villa, 2nd Floor, Lakhipur College Nagar Area,Lakhipur , Goalpara , Assam ,783129</p>
					</div>
				</div>
				<div className='flex-1 socials '>
					<div className='font-bold heading'>
						<>Follow Us on Social Media </>
						<hr className=' w-10 h-0.5 bg-red-500 border-0' />
					</div>

					<div className='flex flex-1 gap-3 p-2 my-4 icons'>
						<FaFacebook color='' size={40} />
						<BsTwitterX size={40} />
						<FaYoutube size={44} />
						<GrInstagram size={40} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactBar;
