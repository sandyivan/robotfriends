import React from 'react';
import Card from './Card';

function CardList({robots}) {
	// we are looping thur each robot on filteredfriends
	// then we are returning a card for each robot in filteredfriends
	// assigning name,email,id to each card component it creates
	const cardArray = robots.map((robot, i) => {
		return <Card 
					key={robot.id} 
					name={robot.name} 
					email={robot.email} 
					id={robot.id}
				 />
	})

	return(
		<div>
			{cardArray}
		</div>
	)
}

export default CardList;