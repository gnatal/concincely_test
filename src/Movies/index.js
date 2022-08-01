import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from '../components/Card';
import './index.scss'
import HomeHeader from '../components/HomeHeader';
// import _ from "lodash";

const url = 'https://the-one-api.dev/v2/movie';
const apiToken = '5sn22IKN7mtbKyc7N-xo';

const getMovies = async () => {
	try {
		return await axios.get(url, {
			headers: {
				Authorization: `Bearer ${apiToken}`
			}
		})
	} catch (e){ 
		return e;
	}
}

const Movies = () => {

	const [movies, setMovies] = useState([]);

	useEffect(() => {
		getMovies().then((response) => {
			console.log(response.data)
			// const { docs } = response.data;
			setMovies([...response.data.docs]);
		});
	}, [])	

	return (
		<>
		<HomeHeader />
		<div className="moviesBox">{movies.map((movie) => (
			<Card movie={movie} key={movie._id}/>
		))}
		</div>
	</>
	);
}

export default Movies