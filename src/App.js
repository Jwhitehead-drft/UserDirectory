import React from 'react';
import './App.css';
import Header from './Components/Header';
// import EmployeeTable from './components/Table';
import EmployeeTable from './Components/EmployeeTable';
import API from './Utils/API'
import Wrapper from "./Components/Wrapper";
import SearchBar from "./Components/SearchBar"

class App extends React.Component {
	state = {
		employees: [{}],
		filteredEmployees: [{}],
		order: "descend"
	}

	componentDidMount() {
		API.getUsers()
		.then(res => {
			this.setState({ 
				employees: res.data.results,
				filteredEmployees: res.data.results 
			})
			console.log(res)
		})
			.catch(err => console.error(err.message))
	}

	headings = [
		{ name: "Image", width: "10%" },
		{ name: "Name", width: "10%" },
		{ name: "Phone", width: "20%" },
		{ name: "Email", width: "20%" },
		{ name: "DOB", width: "10%" },
	  ]

	  handleSort = (heading) => {
		if (this.state.order === "descend") {
		  this.setState({
			order: "ascend",
		  });
		} else {
		  this.setState({
			order: "descend",
		  });
		}
		const compareFnc = (a, b) => {
		  if (this.state.order === "ascend") {
			if (a[heading] === undefined) {
			  return 1;
			} else if (b[heading] === undefined) {
			  return -1;
			} else if (heading === "name") {
			  return a[heading].first.localeCompare(b[heading].first);
			} else {
			  return b[heading] - a[heading];
			}
		  } else {
			if (a[heading] === undefined) {
			  return 1;
			} else if (b[heading] === undefined) {
			  return -1;
			} else if (heading === "name") {
			  return b[heading].first.localeCompare(a[heading].first);
			} else {
			  return b[heading] - a[heading];
			}
		  }
		};
		const sortedUsers = this.state.filteredEmployees.sort(compareFnc);
		this.setState({ filteredEmployees: sortedUsers });
	  };

	handleSearchChange = (event) => {
		const filter = event.target.value;
		const filteredList = this.state.employees.filter((item) => {
		  let values = Object.values(item).join("").toLowerCase();
		  return values.indexOf(filter.toLowerCase()) !== -1;
		});
	
		this.setState({ filteredEmployees: filteredList });
	  };
	

	render() {
		return (
			<Wrapper>
				<Header />
				<SearchBar handleSearchChange={this.handleSearchChange}  />
				<br/>
				<EmployeeTable filteredEmployees={this.state.filteredEmployees} handleSort={this.handleSort} headings={this.headings}  />
			</Wrapper>
		);
	}
}

export default App;