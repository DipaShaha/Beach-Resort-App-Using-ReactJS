import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../Context';
import Title from '../components/Title';
import RoomsList from './RoomsList';


const getUnique=(items,value)=>{
	return[... new Set(items.map(item=>item[value]))
	]	
}

export default function RoomsFilter({rooms}){
	const context=useContext(RoomContext);
	const{
		handleChange,
		type,
		capacity,
		price,
		minPrice,
		maxprice,
		minSize,
		maxSize,
		breakfast,
		pets
	}=context;
	
	let types=getUnique(rooms,'type');
	types=['all',...types];
	types=types.map((item,index)=>{
		return <option value={item} key={index}>{item}</option>
	})

	let people=getUnique(rooms,'capacity');
	people=people.map((item,index)=>{
		return <option value={item} key={index}>{item}</option>
	})



	return(
		<section className="filter-container">
			<Title title="Search Rooms" />
			<form className="filter-form">
				<div className="form-group">
					<label htmlFor="type">Room Type</label>
					<select name="type" id="type" value={type}
					className="form-control"
					onChange={handleChange}
					>
					{types}						
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="capacity">capacity</label>
					<select name="capacity" id="capacity" value={capacity}
					className="form-control"
					onChange={handleChange}
					>
					{people}						
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="price">Room Price ${price}</label>
					<input name="price"type="range" id="price" className="form-control"
					 min={minPrice} max={maxprice} value={price}
					 onChange={handleChange}
					/>
				</div>
			</form>

		</section>
	);
}
