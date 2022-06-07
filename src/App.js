import React , { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import 404Page from './Components/404Page';
const App = () => {
	return (
		<div className='App'>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;