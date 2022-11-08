import React from 'react';
import { Data } from './GoodsData';
import './GoodsStyle.css';

const GoodsCard = () => {
	return (
		<div className='container'>
		   {Data.map(data => <GoodCard info={data} key={data.name} />)}
		</div>
	);
};

const GoodCard = ({info}) => {

	const { img, name, price } = info;

	return (
		<div className='product'>
		   <img className='image' src={img} alt='Product' />
		   <p>Name: {name}</p>
		   <p>Price: {price} $</p>
		</div>
	);  
};

export default GoodsCard;