import React from 'react';
import './SearchBox.css';

function SearchBox({searchChange}) {
	return(

		<div>
		  <input 
		  	  className=' tc pa3 ba b--green bg-lightest-blue'
			  type="text" 
			  placeholder='search your robo friends'
			// when the input is change it will trigger an event on the 
			//parent component called onSearchChange
			  onChange={searchChange}
			/>
		</div>
	)
}

export default SearchBox;