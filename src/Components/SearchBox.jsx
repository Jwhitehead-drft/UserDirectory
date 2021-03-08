import API from "../Utils/API"


import { Component } from "react";

class SearchBox extends Component {
	state = {
		result: {},
		search: ""
	};

	componentDidMount() {
		this.searchUsers("");
	}

	searchUsers = query => {
		API.search(query)
			.then(res => this.setState({result: res.data}))
			.catch(err => console.log(err));
	};

	handleInputChange = event => {
		const value = event.tagrget.value;
		const name = event.target.name;
			this.setState({[name]: value})
	}

	handleFormSubmit = event => {
		event.preventDefault();
		this.searchUsers(this.state.search)
	};

	


}