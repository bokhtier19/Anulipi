import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div id='error-page' className='flex flex-col items-center justify-center h-screen text-center'>
			<h1 className='mb-4 text-4xl font-bold'>Oops!</h1>
			<p className='mb-2 text-lg'>Sorry, an unexpected error has occurred.</p>
			<p className='text-gray-500'>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
}
