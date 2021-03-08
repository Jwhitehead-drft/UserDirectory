import React from 'react';
import './App.css';
import Header from './Components/Header';
import EmployeeTable from './Components/EmployeeTable';
import Wrapper from "./Components/Wrapper";


function App () {
        return (
            <Wrapper>
                <Header />
                <br />
                <EmployeeTable />
            </Wrapper>
        );
    }


export default App;