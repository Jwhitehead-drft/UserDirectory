import React, { Component } from "react";
import API from "../utils/API";
import MaterialTable from 'material-table';

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
            <MaterialTable style={{marginTop: 25}}
                title="Employee Directory"
                columns={this.state.columns}
                data={this.state.data}
            />
        )
    }
}

export default EmployeeTable;