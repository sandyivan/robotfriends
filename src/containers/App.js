import React, { Component } from 'react';
import './App.css';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}


	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(res => res.json())
			.then(result => this.setState({robots: result}))
	}

	// we will pass this function to the input on searchbox component
	// this will be triggered when onchange happen on the input on searchbox component
	searchChange = (event) => {
		// updating the searchfield state whenever this funtion execute
		this.setState({searchfield: event.target.value})
	}


	render() {
		// we are filtering out robots based on the value of our searchfield state
		// so we can assign this filteredFriends to CardList component
		const filteredFriends = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		
		return(
			<div className='tc'>
				<h1>Robofriends</h1>
				<SearchBox searchChange={this.searchChange}/>
				<CardList robots={filteredFriends}/>
			</div>
		)
	}

}

export default App;
