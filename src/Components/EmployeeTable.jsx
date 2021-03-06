import React, { Component } from "react";
import API from "../Utils/API";


class EmployeeTable extends Component {
    state = {
        columns: [
            { title: 'ID', field: 'id' },
            { title: 'Employee', field: 'employee_name' },
            { title: 'Age', field: 'employee_age' },
            { title: 'Salary', field: 'employee_salary', type: 'numeric' }
        ],
        data: []
    };

    componentDidMount() {
        API.getEmployees()
            .then(res => this.setState({data: res.data.data}))
            .catch(err => console.log(err));
    }

    render () {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.data.employee_name}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default EmployeeTable;