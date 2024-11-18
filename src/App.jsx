import React from 'react';
import Navbar from './components/Navbar';
import BottomNavbar from './components/BottomNavbar';
import ContactBar from './components/ContactBar';
import Copyright from './components/Copyright';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Write from './pages/Write';
import Login from './pages/Login';

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/category' element={<Category />} />
				<Route path='/write' element={<Write />} />
				<Route path='/login' element={<Login />} />
			</Routes>
			<BottomNavbar />
			<ContactBar />
			<Copyright />
		</>
	);
};

export default App;
